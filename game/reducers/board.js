import {
    defaultState
} from './defaultState'

export const board = (state = defaultState.board,{type,piece,destination,promotionType})=>{
    switch (type) {
        case `REMOVE_PIECE`:
        case `MOVE_PIECE`:
        case `PROMOTE_PIECE`:
    }
    return state;
}