import React from 'react';
import {
    Color,Type
} from './../constants'

const symbols = {
    [Color.BLACK]:{
        [Type.BISHOP]:`♝`,
        [Type.KNIGHT]:`♞`,
        [Type.ROOK]:`♜`,
        [Type.KING]:`♚`,
        [Type.QUEEN]:`♛`,
        [Type.PAWN]:`♟`,
    },
    [Color.WHITE]:{
        [Type.BISHOP]:`♗`,
        [Type.KNIGHT]:`♘`,
        [Type.ROOK]:`♖`,
        [Type.KING]:`♔`,
        [Type.QUEEN]:`♕`,
        [Type.PAWN]:`♙`
    }
}

export const PieceDisplay = ({piece})=>(
    <article>
        {piece ? <span className="piece-name-display">{symbols[piece.color][piece.type]}</span> : null}
    </article>
)