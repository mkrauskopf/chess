/**
 * Provides functionality for Forsyth–Edwards Notation (FEN).
 */

import type { File, Rank } from './tools.mjs'
import { decreaseRank, increaseFile } from './tools.mjs'
import { renderPiece } from './board.mjs'

const charToPiece = new Map([
  ['p', 'pawn'],
  ['n', 'knight'],
  ['b', 'bishop'],
  ['r', 'rook'],
  ['q', 'queen'],
  ['k', 'king'],
])

function renderPieceFEN(pieceChar: string, file: File, rank: Rank) {
  renderPiece(/[pnbrqk]/.test(pieceChar) ? 'black' : 'white', charToPiece.get(pieceChar.toLowerCase())!, file, rank)
}

function applyFEN(fen: string) {
  let rank: Rank = '8'
  let file: File = 'a'
  for (const c of fen) {
    switch (true) {
      case /\d/.test(c):
        for (let i = 0; i < Number(c); i++) {
          file = increaseFile(file)
        }
        break
      case c === '/':
        rank = decreaseRank(rank)
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
