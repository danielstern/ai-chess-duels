import {
    Direction
} from '../../constants';

import {
    calculateMovesInDirection
} from './calculateMovesInDirection';

export const calculateMovesBishop = (board)=>({rank,file,color,type})=>{
    const moves = [];
    const calculator = calculateMovesInDirection(board)({rank,file,color,type});
    [Direction.DOWN_LEFT,Direction.DOWN_RIGHT,Direction.UP_LEFT,Direction.UP_RIGHT].forEach(direction=>{
        moves.push(
            ...calculator({direction})
        );
    });

    return moves;
};