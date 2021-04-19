import { MODE_ABSOLUTE, MODE_RELATIVE } from '@/constants';
import { Mode } from '@/types';

export default class PathNode {
    key = '';
    mode: Mode;

    constructor(mode: Mode = MODE_ABSOLUTE) {
        this.mode = mode || MODE_ABSOLUTE;
    }

    getKeyInProperCase(): string {
        if (this.isAbsolute) {
            return this.key.toUpperCase();
        }

        return this.key.toLowerCase();
    }

    get isAbsolute(): boolean {
        return !this.isRelative;
    }

    get isRelative(): boolean {
        return this.mode === MODE_RELATIVE;
    }

    toString(): string {
        return `${this.getKeyInProperCase()}`;
    }
}
