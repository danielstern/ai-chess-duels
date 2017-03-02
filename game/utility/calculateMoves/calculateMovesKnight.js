import {
    Direction,
} from '../../constants';

import {
    getPieceAtPosition,
    kingIsInCheck,
    transformBoard,
    transformPosition,
} from './../'

export const isValidPosition = ({rank,file})=>{
    return rank && file;
};

export const calculateMovesKnight = (board,history)=>(piece,preventOwnCheck)=>{
    let moves = [];
    const {rank,file,color} = piece;


    const patterns = [
        [Direction.UP,Direction.UP,Direction.LEFT],
        [Direction.UP,Direction.UP,Direction.RIGHT],
        [Direction.RIGHT,Direction.RIGHT,Direction.UP],
        [Direction.RIGHT,Direction.RIGHT,Direction.DOWN],
        [Direction.LEFT,Direction.LEFT,Direction.UP],
        [Direction.LEFT,Direction.LEFT,Direction.DOWN],
        [Direction.DOWN,Direction.DOWN,Direction.LEFT],
        [Direction.DOWN,Direction.DOWN,Direction.RIGHT],
    ];



    patterns.forEach(pattern=>{
        let newPosition = {rank,file};
        pattern.forEach((step)=>{
            if (isValidPosition(newPosition)) {
                newPosition = transformPosition(newPosition)(step);
            }
        });

        if (isValidPosition(newPosition)){
            let pieceAtDestination = getPieceAtPosition(board)(newPosition);
            if (pieceAtDestination){
                if (pieceAtDestination.color !== color) {
                    moves.push({piece,newPosition,takenPiece:pieceAtDestination});
                }
            } else {
                moves.push({piece,newPosition});
            }
        }
    });

    if (preventOwnCheck) {
        moves = moves
            .filter(move=>!kingIsInCheck(transformBoard(board)(move),history)(color));
    }
    return moves
};