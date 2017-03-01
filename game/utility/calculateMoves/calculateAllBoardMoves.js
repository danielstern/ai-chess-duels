import {
    calculateAllPieceMoves
} from './calculateAllPieceMoves';

export const calculateAllBoardMoves = (board)=>(color, preventOwnCheck = true)=>{
    const availableMoves = [];
    const pieces = board.filter(piece=>piece.color === color);
    pieces.forEach(piece=>{
        availableMoves.push(...calculateAllPieceMoves(board)(piece,preventOwnCheck));
    });

    // debugger;
    return availableMoves;
};