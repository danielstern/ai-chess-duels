export const initAI = (ai)=>{
    const listeners = {
        turnStart:[],
        timeElapsedWarning:[],
        promoteListeners:[],
        tauntListeners:[],
        selectMoveListeners:[],
        provisionMoveListeners:[]
    };

    ai({
        onTurnStart:cb=>listeners.turnStart.push(cb),
        onTimeElapsedWarning:cb=>listeners.timeElapsedWarning.push(cb),
        onTaunt:cb=>listeners.tauntListeners.push(cb),
        onPromote:cb=>listeners.promoteListeners.push(cb),
        selectMove:move=>listeners.selectMoveListeners.forEach(listener=>listener(move)),
        provisionMove:move=>listeners.provisionMoveListeners.forEach(listener=>listener(move))
    });

    return {
        onSelectMove(cb){listeners.selectMoveListeners.push(cb);  },
        onProvisionMove(cb){listeners.provisionMoveListeners.push(cb);  },
        dispatchTurnStart:(args)=>listeners.turnStart.forEach(listener=>listener(args)),
        dispatchTimeElapsedWarning:(args)=>listeners.timeElapsedWarning.forEach(listener=>listener(args)),

    };
}
