import { Mode } from "../types/index";
import PathNode from "./PathNode";
export default class ArcNode extends PathNode {
    x1: number;
    y1: number;
    rotation: number;
    arc: number;
    sweep: number;
    x2: number;
    y2: number;
    constructor(mode: Mode, x1: number, y1: number, rotation: number, arc: number, sweep: number, x2: number, y2: number);
    toString(): string;
}
