import {
    Direction
} from '../../constants';

import {
    calculateMovesInDirection
} from './calculateMovesInDirection';

export const calculateMovesRook = (board)=>({rank,file,color,type})=>{
    const moves = [];
    const calculator = calculateMovesInDirection(board)({rank,file,color,type});
    [Direction.DOWN,Direction.LEFT,Direction.RIGHT,Direction.UP].forEach(direction=>{
        moves.push(
            ...calculator({direction,steps:8,canDestroyEnemyPiece:true}),
        );
    });

    return moves;
};