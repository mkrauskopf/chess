console.debug('Loading the chess board...')

const board = document.getElementById('board')

const arr0to7 = [...Array(8).keys()]
const arr1to8 = arr0to7.map((n) => n + 1)
const arrAtoH = arr0to7.map((n) => String.fromCharCode(n + 65))

arr1to8.reverse().forEach((row, i) => {
  arrAtoH.forEach((column, j) => {
    const field = document.createElement('div')
    field.classList.add((i + j) % 2 === 0 ? 'white' : 'black')
    field.appendChild(document.createTextNode(`${column}${row}`))
    board.appendChild(field)
  })
})
