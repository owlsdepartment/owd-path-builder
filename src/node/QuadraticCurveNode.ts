import { Mode } from '@/types';

import PathNode from './PathNode';

export default class QuadraticCurveNode extends PathNode {
    x1: number;
    y1: number;
    x3: number;
    y3: number;

    constructor(mode: Mode, x1: number, y1: number, x3: number, y3: number) {
        super(mode);

        this.key = 'Q';
        this.x1 = x1;
        this.y1 = y1;
        this.x3 = x3;
        this.y3 = y3;
    }

    toString(): string {
        return `${this.getKeyInProperCase()}${this.x1} ${this.y1} ${this.x3} ${this.y3}`;
    }
}
