import { colors } from './tokens/colors';
import { fontSizes, fontWeights, lineHeights } from './tokens/typography';
import { spacing } from './tokens/spacing';
import { radii } from './tokens/radii';
import { shadows } from './tokens/shadows';

export const theme = {
    colors,
    fontSizes,
    fontWeights,
    lineHeights,
    spacing,
    radii,
    shadows,
    transitions: {
        default: 'all 0.2s ease-in-out',
        fast: 'all 0.1s ease-in-out',
    },
} as const;

export type Theme = typeof theme;
