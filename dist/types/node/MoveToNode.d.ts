import { Mode } from "../types/index";
import PathNode from "./PathNode";
export default class MoveToNode extends PathNode {
    x: number;
    y: number;
    constructor(mode: Mode, x: number, y: number);
    toString(): string;
}
