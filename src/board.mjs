function renderPiece(color, piece, file, rank) {
  const square = document.getElementById(`${file}${rank}`)
  console.assert(square != null, file, rank)
  square.classList.add(color, piece)
}

export { renderPiece }
