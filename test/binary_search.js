import { expect } from 'chai'
import binarySearch from '../src/binary_search.js'

describe('binarySearch()', () => {
  it('returns index of target value', () => {
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 7)).to.deep.equal(6)
  })
  it('returns index of target value', () => {
    expect(binarySearch([-1,-2,-3,4,5,6,7,8,9,10], 4)).to.deep.equal(3)
  })
  it('returns index of target value', () => {
    expect(binarySearch([1,2,3,4,5,6,7,8,9,10], 11)).to.deep.equal(null)
  })
  it('returns index of target value', () => {
    expect(binarySearch([1,12,3,4,5,6,17,8,9,10], 17)).to.deep.equal(null)
  })
})
