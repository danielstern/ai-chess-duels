import {
    calculateAllPieceMoves
} from './calculateAllPieceMoves';

export const calculateAllBoardMoves = (board,history)=>(color, preventOwnCheck = true)=>{
    const availableMoves = [];
    const pieces = board.filter(piece=>piece.color === color);
    pieces.forEach(piece=>{
        availableMoves.push(...calculateAllPieceMoves(board,history)(piece,preventOwnCheck));
    });

    return availableMoves;
};