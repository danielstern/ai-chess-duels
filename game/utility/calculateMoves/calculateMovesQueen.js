import {
    Direction
} from '../../constants';

import {
    calculateMovesInDirection
} from './calculateMovesInDirection';

export const calculateMovesQueen = (board)=>({rank,file,color,type})=>{
    const moves = [];
    const calculator = calculateMovesInDirection(board)({rank,file,color,type});
    [Direction.DOWN,Direction.LEFT,Direction.RIGHT,Direction.UP,Direction.DOWN_LEFT,Direction.DOWN_RIGHT,Direction.UP_LEFT,Direction.UP_RIGHT].forEach(direction=>{
        moves.push(
            ...calculator({direction,steps:8,canDestroyEnemyPiece:true}),
        );
    });

    return moves;
};