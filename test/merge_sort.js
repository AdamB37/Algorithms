import { expect } from 'chai'
import mergeSort from '../src/merge_sort'
describe('mergeSort()', () => {
  it('return a sorted array', () =>{
    expect(mergeSort([10, 2, 7, 5, 8, 3, 6, 1, 4, 9]))
    .to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
  it('return a sorted array', () =>{
    expect(mergeSort([10, 2, -7, 5, 8, 3, -6, 1, 4, 9]))
    .to.deep.equal([-7,-6 ,1, 2, 3, 4, 5, 8, 9, 10])
  })
  it('return empty array for input of empty array', () =>{
    expect(mergeSort([]))
    .to.deep.equal([])
  })
  it('return unsorted object if object is input', () =>{
    expect(mergeSort({a:1}))
    .to.deep.equal({a:1})
  })
})
