import {
    kingIsInCheck,
    transformBoard
} from './../'

import {
    getPieceAtPosition
} from './../'

import {
    transformPosition
} from '../transformPosition';

export const calculateMovesInDirection = (board,history)=>(piece,preventOwnCheck = false)=>({steps = 8, canDestroyEnemyPiece = true, mustDestroyEnemyPiece = false, direction})=>{
    let moves = [];
    const {rank,file,color} = piece;
    let encounteredPiece = false;
    let newRank = rank;
    let newFile = file;

    while (newRank && newFile && !encounteredPiece && steps--) {
        const newPosition = transformPosition({rank:newRank,file:newFile})(direction);
        newFile = newPosition.file;
        newRank = newPosition.rank;

        if (newRank && newFile) {
            const newPosition = {rank:newRank,file:newFile};
            const pieceInNewPosition = getPieceAtPosition(board)({rank:newRank,file:newFile});

            if (pieceInNewPosition)
            {
                encounteredPiece = true;

                if (canDestroyEnemyPiece && pieceInNewPosition.color !== color)
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

    if (preventOwnCheck){
        moves = moves
            .filter(move=>!kingIsInCheck(transformBoard(board,history)(move))(color));
    }

    return moves;
};