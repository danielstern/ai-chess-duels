import {
    calculateAllPieceMoves
} from './calculateAllPieceMoves';
export const getAvailableMoves = (board)=>(color)=>{
    const availableMoves = [];
    const pieces = board.filter(piece=>piece.color === color);
    pieces.forEach(piece=>{
        availableMoves.push(...calculateAllPieceMoves(board)(piece));
    });

    return availableMoves;
};