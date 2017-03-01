import Chance from 'chance';
const chance = new Chance(1);

export default ({
    onTurnStart, // is called at the beginning of the AI's turn
    selectMove, //  immediately choose and execute a move. returns false if that move is not valid.
    provisionMove, // selects a move to be executed at the end of the time in case no other moves have been selected. returns false if that move is not valid
    getLastError, // returns information about why the last move selected or provisioned returned false
    onTimeElapsedWarning, // is called when a limited amount of time remains
    taunt, // having no effect on gameplay, this message will be logged, and may be seen by your oppoonent. you can call this any time. it is not necessary to use taunt.
    onTaunt, // notifies you that the enemy AI has taunted you,
    onPromote, // called when a pawn has reached the final step and can be upgraded. AI will have a limited amount of time to select a piece,
})=>{
    onTurnStart(({
        boardState, // a full readout of the current game state
        gameHistory, // a history of all the game's moves
        opponentData, // metadata about your current opponent clever AI's can use to gain an edge,
        timeAlotted, // time between when this function is called and when time will be expired
        availableMoves, // a convenient list of all the moves you can make. if desired, just select one and pass it to selectMove()
        color, // your color
        opponentColor, // your opponent's color
        utilities:{
            transformBoard,
            calculateAllBoardMoves
        }
    })=>{
        // debugger;
        // selectMove(chance.pick(availableMoves)); // the simplest, most basic strategy. this is guaranteed to lose.
        // selectMove(availableMoves.find(move=>move.takenPiece) || chance.pick(availableMoves)); // prioritizes taking enemy pieces. an effective, but crude strategem.
        selectMove(availableMoves
                .find(move=>calculateAllBoardMoves(transformBoard(boardState)(move))(opponentColor)
                    .filter(move=>move.takenPiece).length === 0) || chance.pick(availableMoves)) // a defensive stance... prioritizes moves where own pieces will not be taken
    });

    onTimeElapsedWarning(({availableMoves})=>{
        // it is a good idea to provision a move on the time elapsed warning
        provisionMove(availableMoves[0]);
    });

    onTaunt(({message,gesture,opponentData})=>{
        if (message.includes("Deep Blue")){
            taunt({message:"You leave him out of this!"});
        } else {
            taunt({message:`My TI-35 plays chess better than you, ${opponentData.name}!`,gesture:`LAUGH`});
        }
    });

    onPromote(({availablePieces,selectPiece})=>{
       selectPiece(availablePieces[0]);
    });
}