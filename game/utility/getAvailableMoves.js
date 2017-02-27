export const getAvailableMoves = ({board,color})=>{
    const availableMoves = [];
    const pieces = board.filter(piece=>piece.color === color);
    pieces.forEach(piece=>{
        availableMoves.push(...calculateAllPieceMoves(piece));
    });
}

import {
    Type
} from './../constants';

const ranks = ["1","2","3","4","5","6","7","8"];
const getRanksGreaterThan = (rank)=>{
    const index = ranks.indexOf(rank);
    if (index==-1) {
        throw new Error(`Tried to find an invalid rank ${rank}`);
    }
    return ranks.slice(index);
}
//
// const getRanksLessThan = (rank)=>{
//     const index = ranks.indexOf(rank);
//     if (!index) {
//         throw new Error(`Tried to find an invalid rank ${rank}`);
//     }
//     return ranks.slice(0,index);
// }

const calculateMovesRook = ({rank,file,board})=>{
    // up
    const greaterRanks = getRanksGreaterThan(rank);
    greaterRanks.forEach((rank)=>{
        const newPosition = {rank,file};
        console.log("New rook position?",newPosition);
    })
}

const calculateAllPieceMoves = ({type,rank,file,board})=>{
    let moves = [];
    switch (type) {
        case Type.ROOK:
            moves = calculateMovesRook({rank,file,board});
            // in all four possible directions,
            // go in a line
            // encountered enemy units can be taken
            // encountered friendly units cannot be passed
            // all squares between the starting space and the destination must be empty
            // moving can't put the king in check

    }
    return [{

    }]
}

debugger;