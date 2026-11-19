import {readFileSync, writeFileSync} from 'node:fs';
import {resolve} from 'node:path';
import type {ThemeColors} from './theme-colors';
import {getTheme} from './theme-template';

interface ThemeRegistration {
  label: string;
  path: string;
}

/** Warns about missing theme registrations and writes generated theme JSON files. */
export function generateThemes(themes: readonly ThemeColors[]): void {
  const registeredThemes = readRegisteredThemes();
  for (const theme of themes) {
    warnIfThemeNotRegistered(theme, registeredThemes);
    const themeJson = getTheme(theme);
    const outputPath = resolve(__dirname, '..', 'themes', theme.fileName);
    const content = `${JSON.stringify(themeJson, null, 2)}\n`
    writeFileSync(outputPath, content, 'utf8');
  }
}

function readRegisteredThemes(): ThemeRegistration[] {
  const packageJsonPath = resolve(__dirname, '..', 'package.json');
  let manifest = JSON.parse(readFileSync(packageJsonPath, 'utf8')) as Record<string, unknown>;
  const contributes = manifest['contributes'] as Record<string, unknown>;
  const registrations: ThemeRegistration[] = [];
  const registeredThemes = contributes['themes'] as Array<unknown>
  for (const [_, entry] of registeredThemes.entries()) {
    const registeredTheme = entry as ThemeRegistration;
    registrations.push({label: registeredTheme['label'], path: registeredTheme['path']});
  }
  return registrations;
}

function warnIfThemeNotRegistered(
  theme: ThemeColors,
  registrations: readonly ThemeRegistration[],
): void {
  const expectedPath = `themes/${theme.fileName}`;
  const isRegistered = registrations.some(
    (registration) =>
      registration.label === theme.name &&
      normalizeThemePath(registration.path) === expectedPath,
  );

  if (!isRegistered) {
    console.warn(
      `Theme "${theme.name}" (${theme.fileName}) has no matching package.json theme registration.`,
    );
  }
}

function normalizeThemePath(themePath: string): string {
  return themePath.replace(/\\/g, '/').replace(/^\.\//, '');
}
