import { applyFEN } from './fen.mjs'
import { files, fileToIndex, ranks, rankToIndex } from './tools.mjs'
import type { File, Rank } from './tools.mjs'

console.debug('Loading the chess board...')

const STARTING_POSITION_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

const board: HTMLElement = document.getElementById('board')!

function renderBoard() {
  ranks.toReversed().forEach((rank: Rank) => {
    files.forEach((file) => {
      board.appendChild(createSquare(file, rank))
    })
  })
}

function renderInitialPosition() {
  applyFEN(STARTING_POSITION_FEN)
}

function createSquare(file: File, rank: Rank) {
  const square = document.createElement('div')
  square.id = `${file}${rank}`
  square.classList.add('square', (rankToIndex(rank) + fileToIndex(file)) % 2 === 0 ? 'square-black' : 'square-white')

  if (rank === '1') {
    square.appendChild(createSquareLabel(file, 'file'))
  }
  if (file === 'h') {
    square.appendChild(createSquareLabel(rank, 'rank'))
  }

  return square
}

function createSquareLabel(label: File | Rank, rankOrFile: 'rank' | 'file') {
  const squareLabel = document.createElement('span')
  squareLabel.classList.add('square-label', `square-label-${rankOrFile}`)
  squareLabel.appendChild(document.createTextNode(label))
  return squareLabel
}

function main() {
  renderBoard()
  renderInitialPosition()
}

main()
