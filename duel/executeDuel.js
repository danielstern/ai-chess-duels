import reactDOM from 'react-dom'
import React from 'react';
import {createStore} from 'redux';
import {getAvailableMoves} from './../game/utility';
import {
    reducer,
    defaultState
} from './../game/reducers';

import {BoardDisplay} from './../game/components/BoardDisplay'

import {
    movePiece
} from './../game/actions'

const allottedTime = 5000;

const render = (store)=>{
    reactDOM.render(<BoardDisplay board={store.getState().board}/>,document.getElementById('BoardContainer'));
};

const nextID = (id)=>{
    return id === "p1" ? "p2" : "p1";
};

const startTurn =({id, store,players})=>{
    const timers = [];
    const state = store.getState();
    const player = players.find(player=>player.id===id);
    const moves = getAvailableMoves(state.board)(player.color);

    const meta = {
        boardState:state.board,
        gameHistory:state.history,
        opponentData:undefined,
        timeAlotted:allottedTime,
        availableMoves:moves
    };

    player.ai.onSelectMove((move)=>{
        setTimeout(()=>{
            player.ai.endTurn();
            timers.forEach(clearTimeout);
            movePiece(store)(move);
            startTurn({id:nextID(id),store,players});
        },100);

    });

    player.ai.dispatchTurnStart(meta);

    timers.push(setTimeout(()=>{
        console.log("Warning...");
        player.ai.dispatchTimeElapsedWarning(meta);
    },allottedTime-1000));

    timers.push(setTimeout(()=>{
        console.log("AI's time is up...");
    },allottedTime));
};

export const initDuel = ({players,player1IsWhite})=>{
    const duelStore = createStore(reducer,defaultState);
    duelStore.subscribe(()=>render(duelStore));
    render(duelStore);
    startTurn({id:player1IsWhite ? "p1" : "p2", store:duelStore,players});
};
