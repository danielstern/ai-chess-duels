import {
    boardTraverseFunction
} from './boardTraverseFunction';

import {
    Rank
} from './../constants'

export const getGreaterRank = boardTraverseFunction(Object.values(Rank),true);