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
      const square = createSquare(file, rank)
      board.appendChild(square)
    })
  })
}

function createSquare(file, rank) {
  const square = document.createElement('div')
  square.classList.add(
    'square',
    (rankToIndex.get(rank) + fileToIndex.get(file)) % 2 === 0 ? 'square-black' : 'square-white'
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

renderBoard()
