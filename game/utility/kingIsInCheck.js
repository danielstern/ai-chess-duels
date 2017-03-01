import {
    Type,
    Color
} from '../constants';

import {
    calculateAllBoardMoves
} from './calculateMoves/calculateAllBoardMoves'

export const getOppositeColor =  (color)=> color===Color.WHITE ? Color.BLACK : Color.WHITE;
export const oppositeColor = {
    [Color.BLACK]:Color.WHITE,
    [Color.WHITE]:Color.BLACK
}

export const kingIsInCheck=(board)=>(color)=>{
    const moves = calculateAllBoardMoves(board)(oppositeColor[color],false);
    return moves.find(move=>move.takenPiece && move.takenPiece.type === Type.KING && move.takenPiece.color === color);
}