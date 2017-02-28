import {
    boardTraverseFunction
} from './boardTraverseFunction';

import {
    Rank
} from './../constants'

export const getLesserRank = boardTraverseFunction(Object.values(Rank),false);