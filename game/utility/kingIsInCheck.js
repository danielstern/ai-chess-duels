import {
    Type
} from '../constants';

import {
    getAvailableMoves
} from './calculateMoves/getAvailableMoves'

export const kingIsInCheck=(board)=>(color)=>{
    const moves = getAvailableMoves(board)(color);
    return moves.find(move=>move.takenPiece && move.takenPiece.type === Type.KING && move.takenPiece.color === color);
}