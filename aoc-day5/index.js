import { moves } from './data'

const crates = [
    ['V', 'R', 'H', 'B', 'G', 'D', 'W'], 
    ['F', 'R', 'C', 'G', 'N', 'J'], 
    ['J', 'N', 'D', 'H', 'F', 'S', 'L'], 
    ['V', 'S', 'D', 'J'], 
    ['V', 'N', 'W', 'Q', 'R', 'D', 'H', 'S'], 
    ['M', 'C', 'H', 'G', 'P', 'S'], 
    ['C', 'H', 'Z', 'L', 'G', 'B', 'J', 'F'], 
    ['R', 'J', 'S'], 
    ['M', 'V', 'N', 'B', 'R', 'S', 'G', 'L']];

const newMoves = moves.split('\n')

newMoves.forEach(move => {
    const eachMove = move.split(' ')
        let tempArr = []

        for (let i = 0; i < Number(eachMove[1]); i++) {
           tempArr.push(crates[Number(eachMove[3])-1].shift())
        }

    crates[Number(eachMove[5]-1)] = tempArr.concat(crates[Number(eachMove[5]-1)])
})

let result = ''
crates.forEach(crate => {
    result = result + crate[0]
})

console.log(result)
