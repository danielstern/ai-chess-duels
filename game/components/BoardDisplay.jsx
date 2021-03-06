import {
    Rank,
    File,
    Color
} from "./../constants"

import {
    getPieceAtPosition
} from './../utility'

import {
    PieceDisplay
} from './PieceDisplay'
import './board-display.less';

import React from 'react';

export const BoardDisplay = ({board})=>(
    <section className="board-display">
        {Object.keys(Rank).reverse().map((rank,i)=>
            Object.keys(File).map((file,j)=>
                <div key={rank+file} color={((i+j)%2)===0?Color.WHITE:Color.BLACK} className="board-square">
                    <PieceDisplay piece={getPieceAtPosition(board)({rank,file})}/>
                </div>
            )
        )}
    </section>
)