import type { Rank, File } from './tools.mjs'

function renderPiece(color: string, piece: string, file: File, rank: Rank) {
  const square = document.getElementById(`${file}${rank}`)
  console.assert(square != null, file, rank)
  square!.classList.add(color, piece)
}

export { renderPiece }
