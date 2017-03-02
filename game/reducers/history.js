import {
    defaultState
} from './defaultState'

import {
    Action
} from './../constants'

export const history = (state = defaultState.history, action)=>{
    switch (action.type) {
        case Action.MOVE_PIECE:
            return [...state,action];
    }
    return state;
}