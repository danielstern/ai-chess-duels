import {
    defaultState
} from './defaultState'

export const conceded = (state = defaultState.conceded, {type})=>{
    switch (type) {
        case `CONCEDE`:
    }
    return state;
}