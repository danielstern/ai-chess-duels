import {
    Direction
} from '../../constants';

import {
    calculateMovesInDirection
} from './calculateMovesInDirection';

export const calculateMovesKing = (board)=>({rank,file,color,type})=>{
    const moves = [];
    const calculator = calculateMovesInDirection(board)({rank,file,color,type});
    Object.values(Direction).forEach(direction=>{
        moves.push(
            ...calculator({direction,steps:1}),
        );
    });

    return moves;
};