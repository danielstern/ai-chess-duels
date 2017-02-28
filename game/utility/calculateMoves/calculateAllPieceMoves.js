import {
    Type,
} from '../../constants';

import * as calculate from './'

export const calculateAllPieceMoves = (board)=>({type,rank,file,color})=>{
    switch (type) {
        case Type.ROOK:
            return calculate.calculateMovesRook(board)({rank,file,color,type});
        case Type.PAWN:
            return calculate.calculateMovesPawn(board)({rank,file,color,type});
        case Type.BISHOP:
            return calculate.calculateMovesBishop(board)({rank,file,color,type});
        case Type.QUEEN:
            return calculate.calculateMovesQueen(board)({rank,file,color,type});
        case Type.KING:
            return calculate.calculateMovesKing(board)({rank,file,color,type});
        }

    return [];
};