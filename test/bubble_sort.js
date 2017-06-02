import { expect } from 'chai'
import bubbleSort from '../src/bubble_sort'
describe('bubbleSort()', () => {
  it('return a sorted array', () =>{
    expect(bubbleSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9]))
    .to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('return a sorted array', () =>{
    expect(bubbleSort([10, 2, -7, 5, 8, 3, -6, 1, 4, 9]))
    .to.deep.equal([-7,-6 ,1, 2, 3, 4, 5, 8, 9, 10])
  })
  it('return undefined for array with strings', () =>{
    expect(bubbleSort(['a', 2, 'b', 5, 8, 3, -6, 1, 4, 9]))
    .to.deep.equal(undefined)
  })
})
