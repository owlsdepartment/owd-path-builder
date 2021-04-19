import { Mode } from '@/types';

import PathNode from './PathNode';

export default class ArcNode extends PathNode {
    x1: number;
    y1: number;
    rotation: number;
    arc: number;
    sweep: number;
    x2: number;
    y2: number;

    constructor(
        mode: Mode,
        x1: number,
        y1: number,
        rotation: number,
        arc: number,
        sweep: number,
        x2: number,
        y2: number
    ) {
        super(mode);

        this.key = 'A';
        this.x1 = x1;
        this.y1 = y1;
        this.rotation = rotation;
        this.arc = arc;
        this.sweep = sweep;
        this.x2 = x2;
        this.y2 = y2;
    }

    toString(): string {
        // eslint-disable-next-line max-len
        return `${this.getKeyInProperCase()}${this.x1} ${this.y1} ${this.rotation} ${this.arc} ${this.sweep} ${this.x2} ${this.y2}`;
    }
}
