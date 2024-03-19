type File = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h'
type Rank = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8'

const ranks: Readonly<Rank[]> = ['1', '2', '3', '4', '5', '6', '7', '8']
const files: Readonly<File[]> = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

const fileToIndexMap: Map<File, number> = new Map(files.map((file, idx) => [file, idx]))
const rankToIndexMap: Map<Rank, number> = new Map(ranks.map((rank, idx) => [rank, idx]))

const fileToIndex = (file: File): number => fileToIndexMap.get(file)!
const rankToIndex = (rank: Rank): number => rankToIndexMap.get(rank)!

const increaseFile = (file: File): File => (file === 'h' ? 'a' : files[fileToIndex(file) + 1])
const decreaseRank = (rank: Rank): Rank => (rank === '1' ? '8' : ranks[rankToIndex(rank) - 1])

export { files, ranks, fileToIndex, rankToIndex, increaseFile, decreaseRank }
export type { File, Rank }
