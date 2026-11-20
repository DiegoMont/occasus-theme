import type {ThemeColors} from './theme-colors';

export function getTheme(colors: ThemeColors) {
  return {
    name: colors.name,
    colors: {

      // Base colors
      focusBorder: '#E6B450',
      // foreground: colors.lightWhite,
      // descriptionForeground: colors.lightWhite,
      foreground: '#C4D6FE6B',
      disabledForeground: '#c4d6fe36',
      'widget.border': '#1B1F29',
      'widget.shadow': '#00000080',
      'selection.background': '#3388ff40',
      'icon.foreground': '#C4D6FE6B',
      errorForeground: '#D95757',
      descriptionForeground: '#C4D6FE6B',

      // Text colors
      'textBlockQuote.background': '#141821',
      'textLink.foreground': '#E6B450',
      'textLink.activeForeground': '#E6B450',
      'textPreformat.foreground': '#FCF8EC',


      // ACTION COLORS
      'toolbar.hoverBackground': '#141821',

      // BUTTON CONTROL
      'button.background': '#E6B450',
      'button.foreground': '#765b24',
      'button.border': '#765b241a',
      'button.separator': '#765b244d',
      'button.hoverBackground': '#deae4d',// scheme.common.accent.tint.darken(0.2).hex(),
      'button.secondaryBackground': '#c4d6fe15',
      'button.secondaryForeground': '#FCF8EC',
      'button.secondaryHoverBackground': '#c4d6fe36',

      // DROPDOWN CONTROL
      'dropdown.background': '#141821',
      'dropdown.foreground': '#C4D6FE6B',
      'dropdown.border': '#1B1F29',

      // INPUT CONTROL
      'input.background': '#10141c',
      'input.border': '#c4d6fe15',
      'input.foreground': '#FCF8EC',
      'input.placeholderForeground': '#c4d6fe36',
      'inputOption.hoverBackground': '#c4d6fe15',
      'inputOption.activeBorder': '#e6b45033',
      'inputOption.activeBackground': '#e6b4501a',
      'inputOption.activeForeground': '#E6B450',
      'inputValidation.errorBackground': '#10141c',
      'inputValidation.errorBorder': '#D95757',
      'inputValidation.infoBackground': '#0d1017',
      'inputValidation.infoBorder': '#39bae6',
      'inputValidation.warningBackground': '#0d1017',
      'inputValidation.warningBorder': '#ffb454',

      // SCROLLBAR CONTROL
      'scrollbar.shadow': '#1b1f2900',
      'scrollbarSlider.background': '#c4d6fe2b',
      'scrollbarSlider.hoverBackground': '#c4d6fe40',
      'scrollbarSlider.activeBackground': '#c4d6fe4b',

      // BADGE
      'badge.background': '#e6b45033',
      'badge.foreground': '#E6B450',

      // PROGRESS BAR
      'progressBar.background': '#E6B450',

      // LISTS AND TREES
      'list.activeSelectionBackground': '#141821',
      'list.activeSelectionForeground': '#FCF8EC',
      'list.focusBackground': '#141821',
      'list.focusForeground': '#FCF8EC',
      'list.focusOutline': '#141821',
      'list.highlightForeground': '#E6B450',
      'list.deemphasizedForeground': '#c4d6fe36',
      'list.hoverBackground': '#141821',
      'list.inactiveSelectionBackground': '#47526633',
      'list.inactiveSelectionForeground': '#C4D6FE6B',
      'list.invalidItemForeground': '#c4d6fe20',
      'list.errorForeground': '#D95757',
      'tree.indentGuidesStroke': '#c4d6fe43',

      'listFilterWidget.background': '#141821',
      'listFilterWidget.outline': '#E6B450',
      'listFilterWidget.noMatchesOutline': '#D95757',
      'list.filterMatchBackground': '#43392180',
      'list.filterMatchBorder': '#4c412680',

      // ACTIVITY BAR
      'activityBar.background': '#0d1017',
      'activityBar.foreground': '#c4d6fe56',
      'activityBar.inactiveForeground': '#c4d6fe40',
      'activityBar.border': '#1B1F29',
      'activityBar.activeBorder': '#E6B450',
      'activityBarBadge.background': '#E6B450',
      'activityBarBadge.foreground': '#765b24',
      'activityBarTop.foreground': '#c4d6fe7b',
      'activityBarTop.activeBorder': '#E6B450',

      // SIDE BAR
      'sideBar.background': '#0d1017',
      'sideBar.border': '#1B1F29',
      'sideBarTitle.foreground': '#C4D6FE6B',
      'sideBarSectionHeader.background': '#0d1017',
      'sideBarSectionHeader.foreground': '#C4D6FE6B',
      'sideBarSectionHeader.border': '#1B1F29',
      'sideBarStickyScroll.border': '#1B1F29',
      'sideBarStickyScroll.shadow': '#00000080',

      // MINIMAP
      'minimap.background': '#10141c',
      'minimap.selectionHighlight': '#3388ff40',
      'minimap.errorHighlight': '#D95757',
      'minimap.findMatchHighlight': '#4c4126',
      'minimapGutter.addedBackground': '#70bf56',
      'minimapGutter.modifiedBackground': '#73b8ff',
      'minimapGutter.deletedBackground': '#f26d78',

      // EDITOR GROUPS & TABS
      'editorGroup.border': '#1B1F29',
      'editorGroupHeader.noTabsBackground': '#0d1017',
      'editorGroupHeader.tabsBackground': '#10141c',
      'editorGroupHeader.connectedTabsBackground': '#0b0e14',
      'editorGroupHeader.tabsBorder': '#1B1F29',
      'tab.activeBackground': '#10141c',
      'tab.activeForeground': '#FCF8EC',
      'tab.border': '#1B1F29',
      'tab.activeBorderTop': '#E6B450',
      'tab.unfocusedActiveBorderTop': '#C4D6FE6B',
      'tab.inactiveBackground': '#0d1017',
      'tab.inactiveForeground': '#C4D6FE6B',
      'tab.unfocusedActiveForeground': '#C4D6FE6B',
      'tab.unfocusedInactiveForeground': '#C4D6FE6B',

      // Editor colors
      // 'editor.background': colors.background,
      // 'editor.foreground': colors.lightWhite,
      'editor.background': '#10141c',
      'editor.foreground': '#FCF8EC',
      'editorLineNumber.foreground': '#c4d6fe46',
      'editorLineNumber.activeForeground': '#c4d6fe6b',
      'editorCursor.foreground': '#E6B450',

      // EDITOR SELECTIONS
      'editor.inactiveSelectionBackground': '#80b5ff26',
      'editor.selectionBackground': '#3388ff40',
      'editor.selectionHighlightBackground': '#70bf5626',
      'editor.selectionHighlightBorder': '#70bf5600',
      'editor.wordHighlightBackground': '#73b8ff14',
      'editor.wordHighlightStrongBackground': '#70bf5614',
      'editor.wordHighlightBorder': '#73b8ff80',
      'editor.wordHighlightStrongBorder': '#70bf5680',

      // EDITOR SEARCH
      'editor.findMatchBackground': '#4c4126',
      'editor.findMatchHighlightBackground': '#4c412680',
      'editor.rangeHighlightBackground': '#4c412633',
      'editor.lineHighlightBackground': '#161a24',
      'editorLink.activeForeground': '#E6B450',
      'editorWhitespace.foreground': '#c4d6fe46',
      'editorIndentGuide.background1': '#c4d6fe43',
      'editorIndentGuide.activeBackground1': '#c4d6fe43',

      // INSERTED CODE HINTS (like types by rust-analyzer)
      // 'editorInlayHint.background': ,
      'editorInlayHint.foreground': '#fcf8ec5f',
      // 'editorInlayHint.typeForeground': scheme.syntax.entity.alpha(0.7).deltaC(-0.5).hex(),
      // 'editorInlayHint.typeBackground': ,
      // 'editorInlayHint.parameterForeground':  ,
      // 'editorInlayHint.parameterBackground':  ,

      'editorRuler.foreground': '#c4d6fe43',
      'editorCodeLens.foreground': '#5a6673',

      'editorBracketMatch.background': '#c4d6fe20',
      'editorBracketMatch.border': '#c4d6fe20',

      // SNIPPETS
      'editor.snippetTabstopHighlightBackground': '#70bf5633',

      // OVERVIEW RULER
      'editorOverviewRuler.border': '#1B1F29',
      'editorOverviewRuler.modifiedForeground': '#73b8ff',
      'editorOverviewRuler.addedForeground': '#70bf56',
      'editorOverviewRuler.deletedForeground': '#f26d78',
      'editorOverviewRuler.errorForeground': '#D95757',
      'editorOverviewRuler.warningForeground': '#E6B450',
      'editorOverviewRuler.bracketMatchForeground': '#c4d6fe4b',
      'editorOverviewRuler.wordHighlightForeground': '#73b8ff66',
      'editorOverviewRuler.wordHighlightStrongForeground': '#70bf5666',
      'editorOverviewRuler.findMatchForeground': '#4c4126',

      // ERRORS AND WARNINGS
      'editorError.foreground': '#D95757',
      'editorWarning.foreground': '#E6B450',

      // GUTTER
      'editorGutter.modifiedBackground': '#73b8ff',
      'editorGutter.addedBackground': '#70bf56',
      'editorGutter.deletedBackground': '#f26d78',

      // DIFF EDITOR
      'diffEditor.insertedTextBackground': '#70bf561f',
      'diffEditor.removedTextBackground': '#f26d781f',
      'diffEditor.diagonalFill': '#1B1F29',

      // EDITOR WIDGET
      'editorWidget.background': '#141821',
      'editorWidget.border': '#1B1F29',
      'editorWidget.resizeBorder': '#141821', // hide ugly resize bars
      'editorHoverWidget.background': '#141821',
      'editorHoverWidget.border': '#1B1F29',
      'editorSuggestWidget.background': '#141821',
      'editorSuggestWidget.border': '#1B1F29',
      'editorSuggestWidget.highlightForeground': '#E6B450',
      'editorSuggestWidget.selectedBackground': '#141821',

      // Sticky scroll in editor
      // 'editorStickyScroll.background':
      'editorStickyScroll.border': '#1B1F29',
      'editorStickyScroll.shadow': '#00000080',
      // 'editorStickyScrollGutter.background':
      'editorStickyScrollHover.background': '#47526633',

      // DEBUG EXCEPTION
      'debugExceptionWidget.border': '#1B1F29',
      'debugExceptionWidget.background': '#141821',

      // EDITOR MARKER
      'editorMarkerNavigation.background': '#141821',

      // PEEK VIEW
      'peekView.border': '#141821',
      'peekViewTitle.background': '#141821',
      'peekViewTitleDescription.foreground': '#C4D6FE6B',
      'peekViewTitleLabel.foreground': '#FCF8EC',

      'peekViewEditor.background': '#141821',
      'peekViewEditor.matchHighlightBackground': '#4c412680', // ??
      'peekViewEditor.matchHighlightBorder': '#43392180', // ??

      'peekViewResult.background': '#141821',
      'peekViewResult.fileForeground': '#FCF8EC',
      'peekViewResult.lineForeground': '#C4D6FE6B',
      'peekViewResult.matchHighlightBackground': '#4c412680', // ???
      // 'peekViewResult.matchHighlightBorder': scheme.editor.findMatch.inactive.darken(.3).hex(), // doesn't exist
      'peekViewResult.selectionBackground': '#141821', // ???
      // 'peekViewResult.selectionForeground': '#FCF8EC', // ???

      // Merge Conflicts
      // 'merge.currentHeaderBackground': '?',
      // 'merge.currentContentBackground': '?',
      // 'merge.incomingHeaderBackground': '?',
      // 'merge.incomingContentBackground': '?',
      // 'merge.border': '?',
      // 'merge.commonContentBackground': '?',
      // 'merge.commonHeaderBackground': '?',
      // 'editorOverviewRuler.currentContentForeground': '?',
      // 'editorOverviewRuler.incomingContentForeground': '?',
      // 'editorOverviewRuler.commonContentForeground': '?',

      // Panel
      'panel.background': '#0d1017',
      'panel.border': '#1B1F29',
      'panelTitle.activeBorder': '#E6B450', // ???
      'panelTitle.activeForeground': '#FCF8EC',
      'panelTitle.inactiveForeground': '#C4D6FE6B',
      'panelStickyScroll.border': '#1B1F29',
      'panelStickyScroll.shadow': '#00000080',

      // STATUS BAR
      'statusBar.background': '#010102',
      'statusBar.foreground': '#C4D6FE6B',
      'statusBar.border': '#1B1F29',
      'statusBar.debuggingBackground': '#f29668',
      'statusBar.debuggingForeground': '#10141c',
      'statusBar.noFolderBackground': '#141821',
      'statusBarItem.activeBackground': '#c4d6fe15',
      'statusBarItem.hoverBackground': '#c4d6fe15',
      'statusBarItem.compactHoverBackground': '#47526633',
      'statusBarItem.prominentBackground': '#1B1F29',
      'statusBarItem.prominentHoverBackground': '#00000030',
      'statusBarItem.remoteBackground': '#E6B450',
      'statusBarItem.remoteForeground': '#765b24',

      // TITLE BAR
      'titleBar.activeBackground': '#010102',
      'titleBar.inactiveBackground': '#010102',
      'titleBar.activeForeground': '#C4D6FE6B',
      'titleBar.inactiveForeground': '#c4d6fe4b',
      'titleBar.border': '#1B1F29',

      'modernUI.shellBackground': '#010102',
      'modernUI.inactiveShellBackground': '#010102',
      'surface.background': '#0d1017',
      'surface.foreground': '#C4D6FE6B',
      'surface.border': '#171a23',
      'editor.border': '#171a23',
      'modernPanel.border': '#171a23',
      'modernSash.gripForeground': '#c4d6fe2b',
      'modernTab.activeBackground': '#141821',
      'modernTab.activeForeground': '#FCF8EC',
      'modernTab.hoverBackground': '#010102',
      'modernTab.hoverForeground': '#FCF8EC',
      'modernEditorTab.activeBackground': '#141821',
      'modernEditorTab.activeForeground': '#FCF8EC',
      'modernEditorTab.inactiveBackground': '#0d101700',
      'modernEditorTab.hoverBackground': '#47526620',
      'modernEditorTab.hoverForeground': '#FCF8EC',
      'modernActivityBar.background': '#0d1017',
      'modernActivityBar.inactiveBackground': '#0d1017',
      'modernActivityBar.border': '#171a23',
      'modernActivityBarItem.activeBackground': '#141821',
      'modernActivityBarItem.activeForeground': '#FCF8EC',
      'modernActivityBarItem.hoverBackground': '#47526620',
      'modernActivityBarItem.hoverForeground': '#FCF8EC',

      // MENU BAR
      // 'menubar.selectionForeground': '?',
      // 'menubar.selectionBackground': '?',
      // 'menubar.selectionBorder': '?',
      'menu.foreground': '#C4D6FE6B',
      // 'menu.background': '?',
      // 'menu.selectionForeground': '?',
      'menu.selectionBackground': '#47526633',
      'menu.selectionBorder': '#141821',
      'menu.background': '#0f131a',
      'menu.border': '#1B1F29',
      'menu.separatorBackground': '#1B1F29',

      // NOTIFICATION
      // 'notificationCenter.border': '?',
      // 'notificationCenterHeader.foreground': '?',
      // 'notificationCenterHeader.background': '?',
      // 'notificationToast.border': '?',
      // 'notifications.foreground': '?',
      // 'notifications.background': '?',
      // 'notifications.border': '?',
      // 'notificationLink.foreground': '?',

      // EXTENSIONS
      'extensionButton.prominentForeground': '#765b24',
      'extensionButton.prominentBackground': '#E6B450',
      'extensionButton.prominentHoverBackground': '#e2b14f',

      // QUICK PICKER
      'pickerGroup.border': '#1B1F29',
      'pickerGroup.foreground': '#c4d6fe36',

      // DEBUG
      'debugToolBar.background': '#141821',
      'debugIcon.breakpointForeground': '#f29668',
      'debugIcon.breakpointDisabledForeground': '#f2966880',
      'debugConsoleInputIcon.foreground': '#E6B450',
      // 'debugToolBar.border': '',

      // WELCOME PAGE
      'welcomePage.tileBackground': '#0d1017',
      'welcomePage.progress.background': '#161a24',
      'walkThrough.embeddedEditorBackground': '#141821',

      // GIT
      'gitDecoration.modifiedResourceForeground': '#73b8ff',
      'gitDecoration.deletedResourceForeground': '#f26d78',
      'gitDecoration.untrackedResourceForeground': '#70bf56',
      'gitDecoration.ignoredResourceForeground': '#c4d6fe36',
      'gitDecoration.conflictingResourceForeground': '#D95757',
      'gitDecoration.submoduleResourceForeground': '#d2a6ff',

      // Settings
      'settings.headerForeground': '#FCF8EC',
      'settings.modifiedItemIndicator': '#73b8ff',

      // KEYBINDING
      'keybindingLabel.background': '#c4d6fe0b',
      'keybindingLabel.foreground': '#FCF8EC',
      'keybindingLabel.border': '#fcf8ec13',
      'keybindingLabel.bottomBorder': '#fcf8ec13',

      // TERMINAL
      'terminal.background': '#0d1017',
      'terminal.foreground': '#FCF8EC',
      'terminalCommandGuide.foreground': '#c4d6fe20',
      // 'terminalStickyScroll.background':
      'terminalStickyScroll.border': '#1B1F29',
      'terminalStickyScrollHover.background': '#47526633',

      // COMMAND CENTER
      'commandCenter.foreground': '#C4D6FE6B',
      'commandCenter.activeForeground': '#C4D6FE6B',
      'commandCenter.background': '#10141c',
      'commandCenter.activeBackground': '#141821',
      'commandCenter.border': '#c4d6fe15',
      'commandCenter.inactiveBorder': '#c4d6fe15',
      'commandCenter.activeBorder': '#47526600',
      // 'commandCenter.debuggingBackground': scheme.syntax.operator.alpha(0.2).hex(),

      'actionBar.toggledBackground': '#141821',

      // PROFILE BADGE
      'profileBadge.background': '#E6B450',
      'profileBadge.foreground': '#765b24',

      // CHAT
      'chat.requestBorder': '#141821',
      'chat.requestBackground': '#0d1017',
      'chat.requestBubbleBackground': '#47526633',
      'chat.requestBubbleHoverBackground': '#141821',
      // 'chat.requestCodeBorder': '#D95757',
      'chat.slashCommandBackground': '#39bae633',
      'chat.slashCommandForeground': '#39bae6',
      'chat.editedFileForeground': '#73b8ff',
      'chat.checkpointSeparator': '#5a6673',

      // INLINE CHAT
      'inlineChat.background': '#141821',
      'inlineChat.foreground': '#FCF8EC',
      'inlineChat.border': '#1B1F29',
      'inlineChat.shadow': '#00000080',
      'inlineChatInput.border': '#1B1F29',
      'inlineChatInput.focusBorder': '#e6b450b3',
      'inlineChatInput.placeholderForeground': '#c4d6fe36',
      'inlineChatInput.background': '#10141c',
      'inlineChatDiff.inserted': '#70bf5633',
      'inlineChatDiff.removed': '#f26d7833',

      // INLINE EDIT
      'inlineEdit.gutterIndicator.background': '#1B1F29',
      'inlineEdit.gutterIndicator.primaryBorder': '#E6B450',
      'inlineEdit.gutterIndicator.primaryForeground': '#E6B450',
      'inlineEdit.gutterIndicator.primaryBackground': '#e6b4501a',
      'inlineEdit.gutterIndicator.secondaryBorder': '#c4d6fe36',
      'inlineEdit.gutterIndicator.secondaryForeground': '#C4D6FE6B',
      'inlineEdit.gutterIndicator.secondaryBackground': '#c4d6fe0b',
      'inlineEdit.gutterIndicator.successfulBorder': '#70bf56',
      'inlineEdit.gutterIndicator.successfulForeground': '#70bf56',
      'inlineEdit.gutterIndicator.successfulBackground': '#70bf561a',
      'inlineEdit.originalBackground': '#f26d781a',
      'inlineEdit.modifiedBackground': '#70bf561a',
      'inlineEdit.originalChangedLineBackground': '#f26d7826',
      'inlineEdit.originalChangedTextBackground': '#f26d7840',
      'inlineEdit.modifiedChangedLineBackground': '#70bf5626',
      'inlineEdit.modifiedChangedTextBackground': '#70bf5640',
      'inlineEdit.originalBorder': '#f26d7880',
      'inlineEdit.modifiedBorder': '#70bf5680',

      // MULTI DIFF EDITOR
      'multiDiffEditor.headerBackground': '#141821',
      'multiDiffEditor.background': '#0d1017',
      'multiDiffEditor.border': '#1B1F29',

      // SYMBOL ICONS
      'symbolIcon.arrayForeground': '#59c2ff',
      'symbolIcon.booleanForeground': '#d2a6ff',
      'symbolIcon.classForeground': '#59c2ff',
      'symbolIcon.colorForeground': '#e6c08a',
      'symbolIcon.constantForeground': '#d2a6ff',
      'symbolIcon.constructorForeground': '#ffb454',
      'symbolIcon.enumeratorForeground': '#59c2ff',
      'symbolIcon.enumeratorMemberForeground': '#d2a6ff',
      'symbolIcon.eventForeground': '#e6c08a',
      'symbolIcon.fieldForeground': '#f07178',
      'symbolIcon.fileForeground': '#C4D6FE6B',
      'symbolIcon.folderForeground': '#C4D6FE6B',
      'symbolIcon.functionForeground': '#ffb454',
      'symbolIcon.interfaceForeground': '#59c2ff',
      'symbolIcon.keyForeground': '#39bae6',
      'symbolIcon.keywordForeground': '#39bae6',
      'symbolIcon.methodForeground': '#ffb454',
      'symbolIcon.moduleForeground': '#aad94c',
      'symbolIcon.namespaceForeground': '#aad94c',
      'symbolIcon.nullForeground': '#d2a6ff',
      'symbolIcon.numberForeground': '#d2a6ff',
      'symbolIcon.objectForeground': '#59c2ff',
      'symbolIcon.operatorForeground': '#f29668',
      'symbolIcon.packageForeground': '#aad94c',
      'symbolIcon.propertyForeground': '#f07178',
      'symbolIcon.referenceForeground': '#59c2ff',
      'symbolIcon.snippetForeground': '#e6c08a',
      'symbolIcon.stringForeground': '#aad94c',
      'symbolIcon.structForeground': '#59c2ff',
      'symbolIcon.textForeground': '#FCF8EC',
      'symbolIcon.typeParameterForeground': '#59c2ff',
      'symbolIcon.unitForeground': '#d2a6ff',
      'symbolIcon.variableForeground': '#FCF8EC'
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
