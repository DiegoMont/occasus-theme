import type {ThemeColors} from './theme-colors';

export function getTheme(colors: ThemeColors) {
  return {
    name: colors.name,
    colors: {

      // Base colors
      foreground: colors.lightWhite,

      // Editor colors
      'editor.background': colors.background,
      'editor.foreground': colors.lightWhite,
    },
    semanticHighlighting: true,
    semanticTokenColors: {
      // namespace: { foreground: colors.color0, italic: false },
      class: { foreground: colors.orange, italic: false },
      // enum: { foreground: colors.color6, italic: false },
      interface: { foreground: colors.orange, italic: false },
      // struct: { foreground: colors.color0, italic: false },
      // typeParameter: { foreground: colors.color0, italic: false },
      // type: { foreground: colors.color0, italic: false },
      parameter: { foreground: colors.beige, italic: false },
      variable: { foreground: colors.orange, italic: false },
      'variable.readonly': { foreground: colors.orange, italic: false },
      property: { foreground: colors.beige, italic: false },
      // 'property.readonly': { foreground: colors.color4, italic: false },
      // enumMember: { foreground: colors.color7, italic: false },
      // decorator: { foreground: colors.color0, italic: false },
      // event: { foreground: colors.color0, italic: false },
      function: { foreground: colors.pink, italic: false },
      method: { foreground: colors.pink, italic: false },
      // macro: { foreground: colors.color0, italic: false },
      // label: { foreground: colors.color0, italic: false },
      comment: { foreground: colors.lightDark, italic: false },
      string: { foreground: colors.yellow, italic: false },
      keyword: { foreground: colors.purple, italic: false },
      number: { foreground: colors.orange, italic: false },
      // operator: { foreground: colors.color0, italic: false },
      // modifier: { foreground: colors.color0, italic: false },
    },
  };
}
