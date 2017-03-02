import reactDOM from 'react-dom'
import React from 'react';
import {createStore} from 'redux';
import {
    reducer,
    defaultState
} from './../game/reducers';

import {BoardDisplay} from './../game/components/BoardDisplay'

import {
    transformBoard,
    kingIsInCheck,
    calculateAllBoardMoves
} from './../game/utility'
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

const startTurn =({id, store,players,onConclude})=>{
    const timers = [];
    const state = store.getState();
    const player = players.find(player=>player.id===id);
    const moves = calculateAllBoardMoves(state.board,state.history)(player.color,true);

    if (state.board.length <= 2) {
        onConclude({winner:undefined});
        return;
    }

    if (moves.length === 0) {
        if (kingIsInCheck(state.board)) {
            onConclude({winner:nextID(id)});
        } else {
            onConclude({winner:undefined});
        }
        return;

    }

    const meta = {
        boardState:state.board,
        gameHistory:state.history,
        opponentData:undefined,
        timeAlotted:allottedTime,
        availableMoves:moves,
        color:player.color,
        opponentColor:player.color == "WHITE" ? "BLACK" : "WHITE",
        utilities:{
            transformBoard,
            kingIsInCheck,
            calculateAllBoardMoves
        }
    };

    let moveSelected = false;
    player.ai.onSelectMove((move)=>{

       if (!moveSelected) {
           setTimeout(()=>{
               player.ai.endTurn();
               timers.forEach(clearTimeout);
               movePiece(store)(move);
               startTurn({id:nextID(id),store,players,onConclude});
           },100);
       }
        moveSelected = true;


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

export const executeDuel = ({players,player1IsWhite})=>{
    const duelStore = createStore(reducer,defaultState);
    const onConclude = (meta)=>{cbFunction(meta)};
    let cbFunction;
    duelStore.subscribe(()=>render(duelStore));
    render(duelStore);
    startTurn({id:player1IsWhite ? "p1" : "p2", store:duelStore,players,onConclude});
    return (cb)=>{
        cbFunction = cb;
    };
};
