/**
 * Provides functionality for Forsyth–Edwards Notation (FEN).
 */

import { increaseFile } from './tools.mjs'
import { renderPiece } from './board.mjs'

const charToPiece = new Map([
  ['p', 'pawn'],
  ['n', 'knight'],
  ['b', 'bishop'],
  ['r', 'rook'],
  ['q', 'queen'],
  ['k', 'king'],
])

function renderPieceFEN(pieceChar, file, rank) {
  renderPiece(/[pnbrqk]/.test(pieceChar) ? 'black' : 'white', charToPiece.get(pieceChar.toLowerCase()), file, rank)
}

function applyFEN(fen) {
  let rank = 8
  let file = 'a'
  for (const c of fen) {
    switch (true) {
      case /\d/.test(c):
        for (let i = 0; i < Number(c); i++) {
          file = increaseFile(file)
        }
        break
      case c === '/':
        rank--
        file = 'a'
        break
      case c === ' ':
        // TODO: MK: no needed/implemented for now
        return
      default:
        renderPieceFEN(c, file, rank)
        file = increaseFile(file)
        break
    }
  }
}

export { applyFEN }
