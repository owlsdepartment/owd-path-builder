import { MODE_ABSOLUTE, MODE_RELATIVE } from './constants';
import {
    CloseNode,
    MoveToNode,
    LineNode,
    HorizontalLineNode,
    VerticalLineNode,
    CurveNode,
    QuadraticCurveNode,
    SymmetricCurveNode,
    ArcNode,
    PathNode
} from './node';
import { Mode } from './types';

export default class PathBuilder {
    protected _isClosed: boolean;
    protected _mode: Mode;
    protected _path: PathNode[];

    constructor() {
        this._isClosed = false;
        this._mode = MODE_RELATIVE;
        this._path = [];
    }

    get isClosed(): boolean {
        return this._isClosed;
    }

    get mode(): Mode {
        return this._mode;
    }

    get path(): PathNode[] {
        return this._path;
    }

    addPathNode(node: PathNode): this {
        if (this.isClosed) {
            throw new Error('You cannot add node to path, that has been already closed');
        }

        this._path.push(node);

        return this;
    }

    close(): this {
        this.addPathNode(new CloseNode());
        this._isClosed = true;

        return this;
    }

    moveTo(x: number, y: number): this {
        this.addPathNode(new MoveToNode(this.mode, x, y));

        return this;
    }

    line(x: number, y: number): this {
        this.addPathNode(new LineNode(this.mode, x, y));

        return this;
    }

    horizontalLine(x: number): this {
        this.addPathNode(new HorizontalLineNode(this.mode, x));

        return this;
    }

    verticalLine(y: number): this {
        this.addPathNode(new VerticalLineNode(this.mode, y));

        return this;
    }

    curve(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): this {
        this.addPathNode(new CurveNode(this.mode, x1, y1, x2, y2, x3, y3));

        return this;
    }

    quadraticCurve(x1: number, y1: number, x2: number, y2: number): this {
        this.addPathNode(new QuadraticCurveNode(this.mode, x1, y1, x2, y2));

        return this;
    }

    symmetricCurve(x1: number, y1: number, x2: number, y2: number): this {
        this.addPathNode(new SymmetricCurveNode(this.mode, x1, y1, x2, y2));

        return this;
    }

    arc(x1: number, y1: number, rotation: number, arc: number, sweep: number, x2: number, y2: number): this {
        this.addPathNode(new ArcNode(this.mode, x1, y1, rotation, arc, sweep, x2, y2));

        return this;
    }

    absolute(): this {
        this._mode = MODE_ABSOLUTE;

        return this;
    }

    relative(): this {
        this._mode = MODE_RELATIVE;

        return this;
    }

    toString(): string {
        return this.path
            .map((node) => node.toString())
            .join(' ')
            .trim();
    }
}
