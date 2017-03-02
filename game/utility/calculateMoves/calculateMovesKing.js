import {
    Direction,
    Type,
    File,
    Action
} from '../../constants';

import {
    kingIsInCheck,
    getPieceAtPosition,
    transformBoard
} from './../'
import {
    calculateMovesDirectionalPiece
} from './calculateMovesDirectionalPiece'

export const calculateMovesKing = (board,history)=>(piece,preventOwnCheck)=>{
    const moves = [];
    let directions = Object.values(Direction);
    moves.push(...calculateMovesDirectionalPiece(board)(piece)({directions,preventOwnCheck,steps:1}));
    if (history) {
        // if the king has never moved...
        if (!history.find(action=>action.piece.color === piece.color && action.piece.type === Type.KING)) {
            // and if the king is not in check...
            if (!kingIsInCheck(board)(piece.color)){
                // for each rook this player controls...
                [Direction.LEFT,Direction.RIGHT].forEach(direction=>{
                    // if that rook has not moved...
                    // const getPieceAtPosition = getPieceAtPosition;
                    const rookFile = Direction.LEFT ? File.a : File.h;
                    if (!history.find(action=>action.piece.color === piece.color && action.piece.type === "ROOK" && action.piece.file === (rookFile))){
                        // console.log("Castle maybe with",direction);
                        const needFreeFiles = direction === Direction.LEFT ? [File.b,File.c,File.d] : [File.f,File.g];
                        // and if each space between the king and  the rook is unoccupied
                        if (needFreeFiles.every(file=>!getPieceAtPosition(board)({rank:piece.rank,file}))) {
                            // debugger;
                            console.log("Files ARE free");
                            // and if moving one space or two spaces in the direction of that rook would not put the king in check
                            const needSafeFiles = needFreeFiles.slice(0,2);
                            const filesSafe = needSafeFiles.every(file=>{
                                const newPosition = {rank:piece.rank,file};
                                const move = {piece,newPosition};
                                const newTheoryBoard = transformBoard(board)(move);
                                if (!kingIsInCheck(newTheoryBoard)(piece.color)) {
                                    return true;
                                }
                            });
                            if (filesSafe) {
                                // console.log("And safe");
                                moves.push({
                                    piece,
                                    newPosition:{rank:piece.rank,file:needFreeFiles[1]},
                                    special: Action.CASTLE,
                                    targetRook:{rank:piece.rank,color:piece.color,type:Type.ROOK,file:rookFile},
                                    rookNewPosition:{rank:piece.rank,file:needFreeFiles[2]}
                                });
                            }
                            // moves.push({pi})
                        }
                    }


                });

            }
        }
    }
    return moves;








    // move the king two spaces in the direction of the rook
    // move the rook to the space adjacent to the king, opposite of where the rook was

};