import {
    Color,
    Direction,
    Type,
    Action
} from '../../constants';

import {
    getGreaterFile,
    getLesserFile
} from './../'
import {
    calculateMovesInDirection
} from './calculateMovesInDirection';

export const calculateMovesPawn = (board,history)=>(piece,preventOwnCheck)=>{
    const {rank,file,color,type} = piece;
    const moves = [];
    // console.log("Calculate pawn move...",history);
    const calculator = calculateMovesInDirection(board,history)({rank,file,color,type},preventOwnCheck);
    const direction = color === Color.BLACK ? Direction.DOWN : Direction.UP;
    const frontSteps = ((color === Color.WHITE && rank === "2") || (color === Color.BLACK && rank === "7")) ? 2 : 1;
    moves.push(
        ...calculator({direction,steps:frontSteps,canDestroyEnemyPiece:false}),
        ...calculator({direction:direction+Direction.LEFT,steps:1,canDestroyEnemyPiece:true,mustDestroyEnemyPiece:true}),
        ...calculator({direction:direction+Direction.RIGHT,steps:1,canDestroyEnemyPiece:true,mustDestroyEnemyPiece:true})
    );

    // en passant
    if (history) {
        const lastMove = history[history.length - 1];
        if (lastMove) {
            if (lastMove.piece.type === Type.PAWN) {

                if (lastMove.piece.color !== color) {
                    // debugger;
                    if ((lastMove.piece.rank === "2" && lastMove.newPosition.rank === "4") || (lastMove.piece.rank === "7" && lastMove.newPosition.rank === "5")) {
                        // if the pawn is right next to the pawn described here...
                        if ((file === getGreaterFile(lastMove.newPosition.file)) || (file === getLesserFile(lastMove.newPosition.file))) {
                            if (rank === lastMove.newPosition.rank) {
                                console.log("En passant?");
                                // debugger;


                                const newRank = lastMove.piece.color === "BLACK" ? "7" : "3";
                                const move = {piece,takenPiece:{...lastMove.piece,...lastMove.newPosition},newPosition:{file:lastMove.piece.file,rank:newRank},special:Action.EN_PASSANT};
                                // debugger;
                                // big errors...
                                moves.push(move);
                            }
                            // add a new move with the destination right behind that pawn

                        }
                    }
                }

            }
        }


    }
    // deugger;

    return moves;
};