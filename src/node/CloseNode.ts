import { MODE_ABSOLUTE } from '@/constants';
import { Mode } from '@/types';

import PathNode from './PathNode';

export default class CloseNode extends PathNode {
    constructor(mode: Mode = MODE_ABSOLUTE) {
        super(mode);

        this.key = 'Z';
    }
}
