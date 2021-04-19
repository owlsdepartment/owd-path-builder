import { Mode } from "../types/index";
import LineNode from "./LineNode";
export default class VerticalLineNode extends LineNode {
    constructor(mode: Mode, y: number);
    toString(): string;
}
