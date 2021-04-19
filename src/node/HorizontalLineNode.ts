import { Mode } from '@/types';

import LineNode from './LineNode';

export default class HorizontalNode extends LineNode {
    constructor(mode: Mode, x: number) {
        super(mode, x, 0);

        this.key = 'H';
    }

    toString(): string {
        return `${this.getKeyInProperCase()}${this.x}`;
    }
}
