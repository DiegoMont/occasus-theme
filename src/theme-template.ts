import { ThemeColors } from "./theme-colors";

export function getTheme(colors: ThemeColors) {
  return {
    colors: {
      name: colors.name,
      foreground: colors.color0,
      focusBorder: colors.color0,
      descriptionForeground: colors.color0,
      disabledForeground: colors.color0,
      'widget.border': colors.color0,
      'widget.shadow': colors.color0,
      'selection.background': colors.color0,
      errorForeground: colors.color0,
      'icon.foreground': colors.color0,
      'sash.hoverBorder': colors.color0,
    },
    semanticHighlighting: true,
    semanticTokenColors: {
      namespace: { foreground: colors.color0, italic: false },
      class: { foreground: colors.color0, italic: false },
      enum: { foreground: colors.color0, italic: false },
      interface: { foreground: colors.color0, italic: false },
      struct: { foreground: colors.color0, italic: false },
      typeParameter: { foreground: colors.color0, italic: false },
      type: { foreground: colors.color0, italic: false },
      parameter: { foreground: colors.color0, italic: false },
      variable: { foreground: colors.color0, italic: false },
      'variable.readonly': { foreground: colors.color0, italic: false },
      property: { foreground: colors.color0, italic: false },
      'property.readonly': { foreground: colors.color0, italic: false },
      enumMember: { foreground: colors.color0, italic: false },
      decorator: { foreground: colors.color0, italic: false },
      event: { foreground: colors.color0, italic: false },
      function: { foreground: colors.color0, italic: false },
      method: { foreground: colors.color0, italic: false },
      macro: { foreground: colors.color0, italic: false },
      label: { foreground: colors.color0, italic: false },
      comment: { foreground: colors.color0, italic: false },
      string: { foreground: colors.color0, italic: false },
      keyword: { foreground: colors.color0, italic: false },
      number: { foreground: colors.color0, italic: false },
      regexp: { foreground: colors.color0, italic: false },
      operator: { foreground: colors.color0, italic: false },
      modifier: { foreground: colors.color0, italic: false },
    }
  }
}
