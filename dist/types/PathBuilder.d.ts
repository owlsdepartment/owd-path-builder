import { PathNode } from "./node/index";
import { Mode } from "./types/index";
export default class PathBuilder {
    isClosed: boolean;
    mode: Mode;
    d: PathNode[];
    constructor();
    addPathNode(node: PathNode): this;
    close(): this;
    moveTo(x: number, y: number): this;
    line(x: number, y: number): this;
    horizontalLine(x: number): this;
    verticalLine(y: number): this;
    curve(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): this;
    quadraticCurve(x1: number, y1: number, x2: number, y2: number): this;
    symmetricCurve(x1: number, y1: number, x2: number, y2: number): this;
    arc(x1: number, y1: number, rotation: number, arc: number, sweep: number, x2: number, y2: number): this;
    absolute(): this;
    relative(): this;
    toString(): string;
}
