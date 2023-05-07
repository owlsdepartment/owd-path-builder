import LineNode from './LineNode';

import { Mode } from '@/types';

export default class VerticalLineNode extends LineNode {
    readonly key: string = 'V';

    constructor(mode: Mode, y: number) {
        super(mode, 0, y);
    }

    toString(): string {
        return `${this.getKeyInProperCase()}${this.y}`;
    }
}
