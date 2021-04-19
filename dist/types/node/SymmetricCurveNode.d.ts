import { Mode } from "../types/index";
import PathNode from "./PathNode";
export default class SymmetricCurveNode extends PathNode {
    x1: number;
    y1: number;
    x3: number;
    y3: number;
    constructor(mode: Mode, x1: number, y1: number, x3: number, y3: number);
    toString(): string;
}
