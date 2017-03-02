import {
    defaultState
} from './defaultState'

import {
    Action
} from './../constants'

import {
    transformBoard
} from './../utility'

export const board = (state = defaultState.board,{type,piece,newPosition,promotionType})=>{
    switch (type) {
        case Action.REMOVE_PIECE:
            return transformBoard(state)({takenPiece:piece})
            // return state.filter(_piece => !(_piece.rank === piece.rank && _piece.file === piece.file));
        case Action.MOVE_PIECE:
            return transformBoard(state)({piece,newPosition});
        case Action.CREATE_PIECE:
            return transformBoard(state)({createdPiece:piece});
        case `PROMOTE_PIECE`:
    }
    return state;
}