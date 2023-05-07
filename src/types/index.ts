import { MODE_ABSOLUTE, MODE_RELATIVE } from '@/constants';

export type ModeAbsolute = typeof MODE_ABSOLUTE;
export type ModeRelative = typeof MODE_RELATIVE;

export type Mode = ModeAbsolute | ModeRelative;
