console.debug('Loading the chess board...')

const board = document.getElementById('board')

const arr0to7 = [...Array(8).keys()]
const rows = arr0to7.map((rowIdx) => rowIdx + 1)
const columns = arr0to7.map((coldIdx) => String.fromCharCode(coldIdx + 97))

const columnToIndex = new Map(arr0to7.map((coldIdx) => [String.fromCharCode(coldIdx + 97), coldIdx]))
const rowToIndex = new Map(arr0to7.map((rowIdx) => [rowIdx + 1, rowIdx]))

function renderBoard() {
  rows.reverse().forEach((row) => {
    columns.forEach((column) => {
      const square = createSquare(column, row)
      board.appendChild(square)
    })
  })
}

function createSquare(column, row) {
  const square = document.createElement('div')
  square.classList.add(
    'square',
    (rowToIndex.get(row) + columnToIndex.get(column)) % 2 === 0 ? 'square-black' : 'square-white'
  )

  if (row === 1) {
    square.appendChild(createSquareLabel(column, 'row'))
  }
  if (column === 'h') {
    square.appendChild(createSquareLabel(row, 'column'))
  }

  return square
}

function createSquareLabel(label, rowOrCol) {
  const squareLabel = document.createElement('span')
  squareLabel.classList.add('square-label', `square-label-${rowOrCol}`)
  squareLabel.appendChild(document.createTextNode(label))
  return squareLabel
}

renderBoard()
