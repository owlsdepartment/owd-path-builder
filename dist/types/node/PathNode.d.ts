import { Mode } from "../types/index";
export default class PathNode {
    key: string;
    mode: Mode;
    constructor(mode?: Mode);
    getKeyInProperCase(): string;
    get isAbsolute(): boolean;
    get isRelative(): boolean;
    toString(): string;
}
