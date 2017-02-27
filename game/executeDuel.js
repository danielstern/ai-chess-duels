import AI1 from '../sampleAIScript';
import AI2 from '../sampleAIScript';
import Chance from 'chance';
const chance = new Chance(1);
import {createStore} from 'redux';
import {initAI} from './utility';

import {
    reducer,
    defaultState
} from './reducers';

const ai1 = initAI(AI1);
const ai2 = initAI(AI2);

import {
    Color
} from './constants'

const allottedTime = 20000;
const player1IsWhite = chance.bool();

export const players = [{
    id:"p1",
    Color:player1IsWhite ? Color.WHITE : Color.BLACK,
    ai:ai1
},{
    id:"p2",
    Color:player1IsWhite ? Color.BLACK : Color.WHITE,
    ai:ai2
}];

const initDuel = ()=>{
    const duelStore = createStore(reducer,defaultState);
    startTurn({id:player1IsWhite ? "p1" : "p2", store:duelStore});
}

const startTurn =({id, store})=>{
    const timers = [];
    const state = store.getState();
    const player = players.find(player=>player.id===id);
    const meta = {
        boardState:state.board,
        gameHistory:state.history,
        opponentData:undefined,
        timeAlotted:allottedTime,
        availableMoves:[{piece:{},destination:{}}]
    };

    player.ai.dispatchTurnStart(meta);

    player.ai.onSelectMove(({move})=>{
        console.log("Selected move...",move);
    });

    timers.push(setTimeout(()=>{
        console.log("Warning...");
        player.ai.dispatchTimeElapsedWarning(meta);
    },allottedTime-1000));
1
    timers.push(setTimeout(()=>{
        console.log("AI's time is up...");
    },allottedTime));
}

initDuel();