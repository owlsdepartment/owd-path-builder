import { Mode } from "../types/index";
import LineNode from "./LineNode";
export default class HorizontalNode extends LineNode {
    constructor(mode: Mode, x: number);
    toString(): string;
}
