import {
    Type
} from '../../constants';

import * as calculate from './'

export const calculateAllPieceMoves = (board,history)=>({type,rank,file,color},preventOwnCheck)=>{
    switch (type) {
        case Type.ROOK:
            return calculate.calculateMovesRook(board)({rank,file,color,type},preventOwnCheck);
        case Type.PAWN:
            return calculate.calculateMovesPawn(board,history)({rank,file,color,type},preventOwnCheck);
        case Type.BISHOP:
            return calculate.calculateMovesBishop(board)({rank,file,color,type},preventOwnCheck);
        case Type.QUEEN:
            return calculate.calculateMovesQueen(board)({rank,file,color,type},preventOwnCheck);
        case Type.KING:
            return calculate.calculateMovesKing(board)({rank,file,color,type},preventOwnCheck);
        case Type.KNIGHT:
            return calculate.calculateMovesKnight(board)({rank,file,color,type},preventOwnCheck);
        }


    return [];
};