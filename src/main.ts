import type {ThemeColors} from './theme-colors';
import {generateThemes} from './theme-generator';

export const themes: ThemeColors[] = [
  {
    name: 'Occasus Theme',
    fileName: 'occasus-color-theme.json',
    lightWhite: '#F3E7DB',
    lightDark: '#B5A39A',
    background: '#1C1816',
    backgroundSubtle: '#211D1B',
    backgroundMuted: '#2B2522',
    orange: '#FFAA66',
    pink: '#FF70B5',
    purple: '#C792FF',
    yellow: '#FFD66D',
    beige: '#E7BDA3',
    burgundy: '#8F3655',
  },
];

generateThemes(themes);
