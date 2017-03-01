import {
    Direction,
} from '../../constants';

import {
    getPieceAtPosition,
    kingIsInCheck,
    transformBoard,
    transformPosition,
} from './../'

import {
    calculateMovesInDirection
} from './calculateMovesInDirection'

export const isValidPosition = ({rank,file})=>{
    return rank && file;
};

export const calculateMovesKnight = (board)=>(piece,preventOwnCheck)=>{
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
        // debugger;
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

    // this doesn't work.. why??
    if (preventOwnCheck) {
        moves = moves
            // .filter(move=>!kingIsInCheck((transformBoard(board)(move))(color)));
            .filter(move=>!kingIsInCheck(transformBoard(board)(move))(color));
    }
    // console.log("Night moves?",moves);
    return moves
};