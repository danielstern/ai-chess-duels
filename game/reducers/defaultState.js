import {
    getBoard
} from './../utility'

export const defaultState = {
    history: [],
    // players:[], // not really needed?
    conceded:[],
    board:getBoard(),
    currentTurn:"p1",
};
