import {
    Direction
} from '../../constants';

import {
    calculateMovesDirectionalPiece
} from './calculateMovesDirectionalPiece'

export const calculateMovesRook = (board)=>(piece,preventOwnCheck)=>{
    let directions = [Direction.DOWN,Direction.LEFT,Direction.RIGHT,Direction.UP];
    return calculateMovesDirectionalPiece(board)(piece)({directions,preventOwnCheck,steps:8});
};