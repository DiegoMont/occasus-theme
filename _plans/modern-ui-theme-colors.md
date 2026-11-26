# Plan for modern-ui-theme-colors

## Problem Statement

The Occasus theme template currently defines only four Modern UI color IDs, leaving the new VS Code layout to infer the remaining colors from defaults that may not match the theme's palette. The desired outcome is complete, intentional Modern UI color coverage in the theme object produced by the template, retaining classic workbench color IDs only where the Modern UI still uses them.

## Functional Requirements

- **FR-1: Provide explicit theme values for every Modern UI Color ID documented by VS Code.**
  - **Acceptance criteria:** Every ID in the linked Modern UI Colors table is present with a literal color value in the `colors` object returned by `getTheme()`, including shell, surface, editor and panel borders, sash grip, tab states, activity bar states, connected tabs, and inactive status bar colors.
- **FR-2: Retain classic workbench color IDs only where the Modern UI continues to consume those roles.**
  - **Acceptance criteria:** Color IDs required for shared Modern UI surfaces and controls remain explicitly mapped; classic-layout-only overrides are not retained solely for unverified classic appearance.

## Proposed Solution

Update only `getTheme()` in `src/theme-template.ts` to provide explicit values for every documented Modern UI color ID, using existing `ThemeColors` palette values where they fit. Keep classic IDs only when they still control a Modern UI role, such as the editor, sidebar, or panel surface, and omit classic-layout-only overrides that are outside the tested target. This fits the repository's shared palette and generated JSON design, and avoids treating a color ID name as a value, which VS Code's documentation says is invalid in theme JSON. The implementation scope is limited to `src/theme-template.ts`; palette definitions, generator behavior, registered variants, and checked-in JSON files are reserved for a later PR.

## To-dos

- [ ] **TODO-1:** Inventory every ID in VS Code's Modern UI Colors table, identify which existing classic IDs Modern UI still consumes, and map the required values to the current `ThemeColors` palette. **Requirements:** `FR-1`, `FR-2`
- [ ] **TODO-2:** Update only `getTheme()` in `src/theme-template.ts` to emit a literal value for every Modern UI ID and retain only classic IDs required by Modern UI roles. **Requirements:** `FR-1`, `FR-2`

## Open Questions

None.

## Implementation Phases

### 1. Map and add Modern UI colors in the theme template

Complete `TODO-1` and `TODO-2` in order: inventory every documented Modern UI color ID and the classic IDs still used by Modern UI, map those roles to the existing palette, then update only `getTheme()` in `src/theme-template.ts`. Leave palette definitions, generator behavior, registered variants, and checked-in theme JSON files to a later PR.
