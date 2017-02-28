import {
    Color
} from '../game/constants';

import {
    initAI,
} from './initAI';

import AI1 from '../sampleAIScript';
import AI2 from '../sampleAIScript';
import Chance from 'chance';
const chance = new Chance(1);
const player1IsWhite = chance.bool();

import {
    initDuel
} from './executeDuel';


const ai1 = initAI(AI1);
const ai2 = initAI(AI2);

const players = [{
    id:"p1",
    color:player1IsWhite ? Color.WHITE : Color.BLACK,
    ai:ai1
},{
    id:"p2",
    color:player1IsWhite ? Color.BLACK : Color.WHITE,
    ai:ai2
}];

initDuel({players,player1IsWhite});