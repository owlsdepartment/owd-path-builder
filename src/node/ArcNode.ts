import { Mode } from '@/types';

import PathNode from './PathNode';

export default class ArcNode extends PathNode {
    readonly key: string = 'A';

    constructor(
        mode: Mode,
        readonly x1: number,
        readonly y1: number,
        readonly rotation: number,
        readonly arc: number,
        readonly sweep: number,
        readonly x2: number,
        readonly y2: number
    ) {
        super(mode);
    }

    toString(): string {
        // eslint-disable-next-line max-len
        return `${this.getKeyInProperCase()}${this.x1} ${this.y1} ${this.rotation} ${this.arc} ${this.sweep} ${this.x2} ${this.y2}`;
    }
}
