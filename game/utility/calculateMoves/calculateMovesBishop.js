import {
    Direction
} from '../../constants';

import {
    calculateMovesDirectionalPiece
} from './calculateMovesDirectionalPiece'

export const calculateMovesBishop = (board)=>(piece,preventOwnCheck)=>{
    let directions = [Direction.DOWN_LEFT,Direction.DOWN_RIGHT,Direction.UP_LEFT,Direction.UP_RIGHT];
    return calculateMovesDirectionalPiece(board)(piece)({directions,preventOwnCheck,steps:8});
};