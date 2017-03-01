import {
    calculateMovesInDirection
} from './calculateMovesInDirection';

export const calculateMovesDirectionalPiece = (board)=>({rank,file,color,type})=>({directions,preventOwnCheck,steps})=>{
    const moves = [];
    const calculator = calculateMovesInDirection(board)({rank,file,color,type},preventOwnCheck);
    directions.forEach(direction=>{
        moves.push(
            ...calculator({direction,steps,canDestroyEnemyPiece:true}),
        );
    });

    return moves;
};