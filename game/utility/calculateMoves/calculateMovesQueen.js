import {
    Direction
} from '../../constants';

import {
    calculateMovesDirectionalPiece
} from './calculateMovesDirectionalPiece'

export const calculateMovesQueen = (board)=>(piece,preventOwnCheck)=> {
    let directions = Object.values(Direction);
    return calculateMovesDirectionalPiece(board)(piece)({directions,preventOwnCheck,steps:8});
};