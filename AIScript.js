import Chance from 'chance';
const chance = new Chance(1111);

export default ({
    onTurnStart, // is called at the beginning of the AI's turn
    selectMove, //  immediately choose and execute a move. returns false if that move is not valid.
    provisionMove, // selects a move to be executed at the end of the time in case no other moves have been selected. returns false if that move is not valid
    onTimeElapsedWarning, // is called when a limited amount of time remains
    taunt, // having no effect on gameplay, this message will be logged, and may be seen by your oppoonent. you can call this any time. it is not necessary to use taunt.
    onTaunt, // notifies you that the enemy AI has taunted you,
    onPromote, // called when a pawn has reached the final step and can be upgraded. AI will have a limited amount of time to select a piece,
})=>{
    onTurnStart(({
        boardState, // a full readout of the current game state
        gameHistory, // a history of all the game's moves
        timeAlotted, // time between when this function is called and when time will be expired
        availableMoves, // a convenient list of all the moves you can make. just select one and pass it to selectMove()
        color, // your color
        opponentColor, // your opponent's color
        utilities:{
            transformBoard,
            calculateAllBoardMoves
        }
    })=>{
        // These are the simplest strategies possible! Using clever logic, you can create strategies that are much more complicated.
        // Remember, you have limited time! If you run advanced calculations, make sure you regularly provision the best move in case time runs out.

        // Simplest Strategy
        // selectMove(chance.pick(availableMoves)); // the simplest, most basic strategy. this is guaranteed to lose.

        // Aggressive Strategy
        // selectMove(availableMoves.find(move=>move.takenPiece) || chance.pick(availableMoves)); // prioritizes taking enemy pieces. an effective, but crude strategem.

        // Defensive Strategy (Don't Lose Pieces)
        const safestMove = availableMoves.find(move=> {
            const futureBoard = transformBoard(boardState)(move); // use the transformBoard utility to work with theoretical board states
            const theoreticalNextTurnOpponentMoves = calculateAllBoardMoves(futureBoard)(opponentColor);
            return theoreticalNextTurnOpponentMoves
                    .filter(move => move.takenPiece).length === 0;
        });

        selectMove(safestMove || chance.pick(availableMoves));
    });

    // This is called when time is almost up, and is passed the same arguments as onTurnStart
    onTimeElapsedWarning((meta)=>{
        // it is a good idea to provision a move on the time elapsed warning
        // provisionMove(meta.availableMoves[0]);
    });

    onTaunt(({message,gesture,opponentData})=>{
        if (message.includes("Deep Blue")){
            taunt({message:"You leave him out of this!"});
        } else {
            taunt({message:`My TI-34 plays chess better than you, ${opponentData.name}!`,gesture:`LAUGH`});
        }
    });

    onPromote(({availablePieces,selectPiece})=>{
       selectPiece(availablePieces[0]);
    });
}