export const piecesMatch = (...pieces)=>{
    return pieces[0].rank === pieces[1].rank  && pieces[0].file === pieces[1].file && pieces[0].type === pieces[1].type;
}