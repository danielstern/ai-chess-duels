import {
    Color,
    Direction
} from '../../constants';

import {
    calculateMovesInDirection
} from './calculateMovesInDirection';

export const calculateMovesPawn = (board)=>({rank,file,color,type})=>{
    const moves = [];
    const calculator = calculateMovesInDirection(board)({rank,file,color,type});
    const direction = color === Color.BLACK ? Direction.DOWN : Direction.UP;
    const frontSteps = ((color === Color.WHITE && rank === "2") || (color === Color.BLACK && rank === "7")) ? 2 : 1;
    moves.push(
        ...calculator({direction,steps:frontSteps,canDestroyEnemyPiece:false}),
        ...calculator({direction:direction+Direction.LEFT,steps:1,canDestroyEnemyPiece:true,mustDestroyEnemyPiece:true}),
        ...calculator({direction:direction+Direction.RIGHT,steps:1,canDestroyEnemyPiece:true,mustDestroyEnemyPiece:true})
    );
    return moves;
};