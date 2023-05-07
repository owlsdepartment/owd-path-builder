import PathNode from './PathNode';

import { Mode } from '@/types';

export default class QuadraticCurveNode extends PathNode {
    readonly key: string = 'Q';

    constructor(
        mode: Mode,
        readonly x1: number,
        readonly y1: number,
        readonly x3: number,
        readonly y3: number
    ) {
        super(mode);
    }

    toString(): string {
        return `${this.getKeyInProperCase()}${this.x1} ${this.y1} ${this.x3} ${this.y3}`;
    }
}
