import { Mode } from '@/types';

import LineNode from './LineNode';

export default class VerticalLineNode extends LineNode {
    constructor(mode: Mode, y: number) {
        super(mode, 0, y);

        this.key = 'V';
    }

    toString(): string {
        return `${this.getKeyInProperCase()}${this.y}`;
    }
}
