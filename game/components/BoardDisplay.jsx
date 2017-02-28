import {
    Rank,
    File,
    Color
} from "./../constants"

import {
    getPieceAtPosition
} from './../utility'
import './board-display.less';

import React from 'react';

export const BoardDisplay = ({board})=>(
    <section className="board-display">
        {Object.keys(Rank).map((rank,i)=>
            Object.keys(File).map((file,j)=>
                <div key={rank+file} color={((i+j)%2)===0?Color.WHITE:Color.BLACK} className="board-square">
                    {getPieceAtPosition(board)({rank,file})?<span className="piece-name-display">{getPieceAtPosition(board)({rank,file}).type[0]+getPieceAtPosition(board)({rank,file}).color[0]}</span> : null}
                </div>
            )
        )}
    </section>
)