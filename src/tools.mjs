const arr0to7 = [...Array(8).keys()]

const ranks = arr0to7.map((rankIdx) => rankIdx + 1)
const files = arr0to7.map((fileIdx) => String.fromCharCode(fileIdx + 97))

const fileToIndex = new Map(arr0to7.map((fileIdx) => [String.fromCharCode(fileIdx + 97), fileIdx]))
const rankToIndex = new Map(arr0to7.map((rankIdx) => [rankIdx + 1, rankIdx]))

const increaseFile = (file) => (file === 'h' ? 'a' : files[fileToIndex.get(file) + 1])

export { files, ranks, fileToIndex, rankToIndex, increaseFile }
