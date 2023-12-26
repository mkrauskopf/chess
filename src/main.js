console.debug('Loading the chess board...')

const board = document.getElementById('board')

const arr0to7 = [...Array(8).keys()]
const ranks = arr0to7.map((rankIdx) => rankIdx + 1)
const files = arr0to7.map((fileIdx) => String.fromCharCode(fileIdx + 97))

const fileToIndex = new Map(arr0to7.map((fileIdx) => [String.fromCharCode(fileIdx + 97), fileIdx]))
const rankToIndex = new Map(arr0to7.map((rankIdx) => [rankIdx + 1, rankIdx]))

function renderBoard() {
  ranks.reverse().forEach((rank) => {
    files.forEach((file) => {
      board.appendChild(createSquare(file, rank))
    })
  })
}

function renderPiece(color, piece, file, rank) {
  const square = document.getElementById(`${file}${rank}`)
  square.classList.add(color, piece)
}

function renderInitialPosition() {
  // white pieces
  files.forEach((file) => renderPiece('white', 'pawn', file, 2))
  renderPiece('white', 'rook', 'a', 1)
  renderPiece('white', 'knight', 'b', 1)
  renderPiece('white', 'bishop', 'c', 1)
  renderPiece('white', 'queen', 'd', 1)
  renderPiece('white', 'king', 'e', 1)
  renderPiece('white', 'bishop', 'f', 1)
  renderPiece('white', 'knight', 'g', 1)
  renderPiece('white', 'rook', 'h', 1)

  // black pieces
  files.forEach((file) => renderPiece('black', 'pawn', file, 7))
  renderPiece('black', 'rook', 'a', 8)
  renderPiece('black', 'knight', 'b', 8)
  renderPiece('black', 'bishop', 'c', 8)
  renderPiece('black', 'queen', 'd', 8)
  renderPiece('black', 'king', 'e', 8)
  renderPiece('black', 'bishop', 'f', 8)
  renderPiece('black', 'knight', 'g', 8)
  renderPiece('black', 'rook', 'h', 8)
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
