import {
    Direction,
    Type
} from '../../constants';

import {
    kingIsInCheck,
    transformBoard
} from './../'

import {
    getGreaterRank,
    getLesserRank,
    getGreaterFile,
    getLesserFile,
    getPieceAtPosition
} from './../'




export const calculateMovesInDirection = (board)=>(piece)=>({steps = 8, canDestroyEnemyPiece = true, mustDestroyEnemyPiece = false, direction})=>{
    let moves = [];
    const {rank,file,color} = piece;
    let encounteredPiece = false;
    let newRank = rank;
    let newFile = file;

    while (newRank && newFile && !encounteredPiece && steps--) {
        if (direction.includes(Direction.UP)){
            newRank = getGreaterRank(newRank);
        }

        if (direction.includes(Direction.DOWN)){
            newRank = getLesserRank(newRank);
        }

        if (direction.includes(Direction.LEFT)){
            newFile = getLesserFile(newFile);
        }

        if (direction.includes(Direction.RIGHT)){
            newFile = getGreaterFile(newFile);
        }

        if (newRank && newFile) {
            const newPosition = {rank:newRank,file:newFile};
            const pieceInNewPosition = getPieceAtPosition(board)({rank:newRank,file:newFile});

            if (pieceInNewPosition)
            {
                encounteredPiece = true;
                if (canDestroyEnemyPiece && pieceInNewPosition.color !== color && pieceInNewPosition.type !== Type.KING)
                {
                    moves.push({piece,newPosition,takenPiece:pieceInNewPosition});
                }
            } else {
                if (!mustDestroyEnemyPiece) {
                    moves.push({piece,newPosition});
                }
            }
        }
    }

    const filterMoves = moves
        .filter(move=>!kingIsInCheck(board)(transformBoard(board)(move)));
    return filterMoves;
};