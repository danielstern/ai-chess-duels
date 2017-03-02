import {
    Action
} from './../constants'

import {
    getPieceAtPosition,
    piecesMatch
} from './../utility';

export const movePiece = (store)=>({piece,newPosition,takenPiece,special,promoteTo})=>{
    const pieceAtPosition = getPieceAtPosition(store.getState().board)(newPosition);

    if (special === Action.EN_PASSANT) {
        store.dispatch({type:Action.REMOVE_PIECE,piece:takenPiece});
    } else {
        if (pieceAtPosition) {
            if (!takenPiece) {
                console.warn("Found piece in position",pieceAtPosition);
                throw new Error("In order to move a piece to a new position you must explicitly take the piece in that position, if any.");
            }
            if (!piecesMatch(pieceAtPosition,takenPiece)){
                throw new Error("Attempted to move piece. However, piece in new position does not match anticipated taken piece.")
            }

            store.dispatch({type:Action.REMOVE_PIECE,piece:pieceAtPosition});
        }
    }

    if (special === Action.PROMOTE) {
        const promotionType = promoteTo;
        store.dispatch({type:Action.REMOVE_PIECE,piece:piece});
        store.dispatch({type:Action.CREATE_PIECE,piece:{...newPosition,type:promotionType,color:piece.color}});
    }

    store.dispatch({type:Action.MOVE_PIECE,piece,newPosition});
};