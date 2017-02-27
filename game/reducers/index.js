export {defaultState} from './defaultState';
import {combineReducers} from 'redux';
import {board} from './board';
import {history} from './history';
import {currentTurn} from './currentTurn';
import {conceded} from './conceded';



export const reducer = combineReducers({
    board,
    history,
    currentTurn,
    conceded
});