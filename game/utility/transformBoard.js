export const transformBoard=(board)=>({piece,newPosition,takenPiece})=>{
    let newBoard = board.filter(_piece => !piece || !(_piece.rank === piece.rank && _piece.file === piece.file));
    if (takenPiece) {
        newBoard = newBoard
            .filter(_piece => !(_piece.rank === takenPiece.rank && _piece.file === takenPiece.file))
    }

    if (piece) {
        newBoard = newBoard
            .concat([{...piece,...newPosition}])
    }
    return newBoard;
}