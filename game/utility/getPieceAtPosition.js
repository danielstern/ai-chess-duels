export const getPieceAtPosition = (board)=>({rank,file})=>{
    return board.find(piece=>piece.rank === rank && piece.file === file);
};