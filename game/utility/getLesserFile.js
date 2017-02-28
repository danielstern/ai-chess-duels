import {
    boardTraverseFunction
} from './boardTraverseFunction';

import {
    File
} from './../constants'

export const getLesserFile = boardTraverseFunction(Object.values(File),false);