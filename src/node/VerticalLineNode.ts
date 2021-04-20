import { Mode } from '@/types';

import LineNode from './LineNode';

export default class VerticalLineNode extends LineNode {
    readonly key: string = 'V';

    constructor(mode: Mode, y: number) {
        super(mode, 0, y);
    }

    toString(): string {
        return `${this.getKeyInProperCase()}${this.y}`;
    }
}
