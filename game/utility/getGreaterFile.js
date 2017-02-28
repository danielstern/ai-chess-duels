import {
    boardTraverseFunction
} from './boardTraverseFunction';

import {
    File
} from './../constants'

export const getGreaterFile = boardTraverseFunction(Object.values(File),true);