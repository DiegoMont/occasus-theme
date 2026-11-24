# Plan for theme-generator

## Problem Statement

The extension maintains its VS Code themes as JSON, which makes it cumbersome to create consistent variants from a shared palette. The desired outcome is a TypeScript-based generator that defines each theme from a standard set of colors and produces JSON files whose names can be checked against the extension's manual registrations.

## Functional Requirements

- **FR-1: Define each theme with a typed palette and generated filename.**
  - **Acceptance criteria:** The `ThemeColors` interface exposes `name`, the generated JSON filename, `foreground`, `background`, and `color0` through `color15`. Its `name` matches the corresponding `package.json` theme `label`; light/dark type remains in `package.json`.
- **FR-2: Convert a `ThemeColors` value into a VS Code theme object.**
  - **Acceptance criteria:** `getTheme()` returns the palette `name` at the JSON root, its mapped workbench colors, and semantic token colors. `tokenColors` are deferred for now, and the JSON does not include the light/dark type.
- **FR-3: Generate the extension's theme JSON files from TypeScript-defined theme instances.**
  - **Acceptance criteria:** A main TypeScript file declares the theme instances, and the existing npm script generates JSON at the paths registered in `package.json` using the filename from each instance.
- **FR-4: Detect inconsistencies between theme configs and VS Code theme registrations.**
  - **Acceptance criteria:** `generateThemes()` validates every palette against exactly one `package.json` entry by filename/path and `name`/`label`, and verifies every registration has a matching palette. It completes all validation before writing; a mismatch produces an actionable error and writes no files. Theme type remains defined only by `uiTheme` in `package.json`.

## Proposed Solution

Use `src/theme-colors.ts` for the shared palette interface, `src/theme-template.ts` for `getTheme()`, `src/theme-generator.ts` for `generateThemes()` and registration validation, and `src/main.ts` as the entry point already targeted by the `generate:theme` script. Each palette stores its colors, generated JSON filename, and a `name` that must match the package registration label; `package.json` remains the source of truth for each theme's light/dark type. `generateThemes()` validates every palette and registration before writing files under `themes/`.

## To-dos

- [x] **TODO-1:** Add the `ThemeColors` interface in `src/theme-colors.ts` with `name`, a generated JSON filename, `foreground`, `background`, and `color0` through `color15`. **Requirements:** `FR-1`
- [x] **TODO-2:** Add `src/main.ts` with a typed array of temporary example palette definitions. **Requirements:** `FR-3`
- [x] **TODO-3:** Implement `getTheme()` in `src/theme-template.ts` to map palette data to workbench colors and semantic token colors. **Requirements:** `FR-2`
- [x] **TODO-4:** Implement `generateThemes(themes)` in `src/theme-generator.ts`, call it from `src/main.ts`, validate all filename/path and name/label pairs before writing, then call `getTheme()` for every palette and write JSON to `themes/<fileName>`. **Requirements:** `FR-3`, `FR-4`
- [x] **TODO-5:** Ensure `getTheme()` puts `ThemeColors.name` at the generated JSON root and keeps it out of the `colors` object. **Requirements:** `FR-2`

## Open Questions

None.

## Implementation Phases

### 1. Add the palette interface and main entry point

Complete `TODO-1` and `TODO-2` by adding the `ThemeColors` interface in `src/theme-colors.ts` and creating `src/main.ts` with temporary example palette objects. These examples remain scaffolding and this phase does not generate or replace theme JSON files.

### 2. Map palettes to VS Code theme data

Complete `TODO-3` by implementing `getTheme()` in `src/theme-template.ts`, with `ThemeColors` as its input. The current output maps workbench and semantic token colors; TextMate `tokenColors` remain deferred.

### 3. Generate the registered theme JSON files

Complete `TODO-4` and `TODO-5` by importing `generateThemes()` into `src/main.ts` and calling it with `themes`. The generator checks all palette filenames and names against package paths and labels, and checks for unconfigured registrations before producing any output. After validation passes, it calls `getTheme()` for each palette, ensures the theme name is at the JSON root, and writes each object to `themes/<fileName>`; `uiTheme` remains in `package.json` only.
