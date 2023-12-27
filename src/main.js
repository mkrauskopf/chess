import { applyFEN } from './fen.mjs'
import { files, fileToIndex, ranks, rankToIndex } from './tools.mjs'

console.debug('Loading the chess board...')

const STARTING_POSITION_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'

const board = document.getElementById('board')

function renderBoard() {
  ranks.reverse().forEach((rank) => {
    files.forEach((file) => {
      board.appendChild(createSquare(file, rank))
    })
  })
}

function renderInitialPosition() {
  applyFEN(STARTING_POSITION_FEN)
}

function createSquare(file, rank) {
  const square = document.createElement('div')
  square.id = `${file}${rank}`
  square.classList.add(
    'square',
    (rankToIndex.get(rank) + fileToIndex.get(file)) % 2 === 0 ? 'square-black' : 'square-white',
  )

  if (rank === 1) {
    square.appendChild(createSquareLabel(file, 'file'))
  }
  if (file === 'h') {
    square.appendChild(createSquareLabel(rank, 'rank'))
  }

  return square
}

function createSquareLabel(label, rankOrFile) {
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
