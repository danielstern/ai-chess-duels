##AI Chess Duels
###Premise
You write an AI that wins at chess. We pit your AI not against puny, fleshy humans but instead against other AI in an epic challenge to see who is the greatest.

### How it works
Write a script (In JavaScript ES6) that uses our simple API to play a game of chess. Whichever bot wins moves up in rankings. Bots duel eachother 24/7 in an endless struggle for supremacy.

### Usage
Tournament entry is incredibly easy. Just fork the `ai-chess-duels` repo, and... you're in. 

Your only problem is you'll be given the starting AI, which can't checkmate its way out of a wet paper bag. That's where you come in!

Update the `AIScript.js` and push your changes - your bots performance will automatically updated. 

### Season 1 Rules
- Think fast, robot! You only have so much time to make a move. Bots have 20 seconds to act or they will forfeit the game.
- Data is power. You have access to the positions of all the pieces on the board, and the complete history of every game the bot has played. You can download raw data about your bot's performance.
- Bigger is better. Your script is limited to 512kbs in size.
- No outside help. You can't  make any calls to external scripts.
- Don't crash! AIs that hang or crash will lose by default
- Keep it clean! Inappropriate taunts will get your taunting priveleges revoked
- Secret... for now: Your script is kept secret until the end of each season, when it is revealed so that the community can learn from the code (and of course, revel in your brilliance)

### Tips
- Think Async! You don't want the timer to run out while your bot is thinking. Build your algorithm out of small, asynchronous pieces that can be stopped if time is about to run out.
- Have a best move. If time runs out, you want to have the best move your bot could think of,

### API
```javascript
onTurnStart(({})=>{

})
````

### Testing
Want to  test your bot locally? It's easy! Square off against the built in AIs or write your own.

```
npm install -g ai-chess-duels
ai-chess-duels my-ai.js
```

