import LineNode from './LineNode';

import { Mode } from '@/types';

export default class HorizontalNode extends LineNode {
    readonly key: string = 'H';

    constructor(mode: Mode, x: number) {
        super(mode, x, 0);
    }

    toString(): string {
        return `${this.getKeyInProperCase()}${this.x}`;
    }
}
