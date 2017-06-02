import { expect } from 'chai'
import closestPair from '../src/closest_pair'

describe('closestPair()', () => {
  it('returns an object with closest pair and its distance of graph', () => {
    const points = [
        [2,1],
        [4,0],
        [-1,0],
        [5,3],
        [-2,5],
        [3,-3],
        [-2,0],
        [3,4],
        [5,-4],
        [0,-2]
    ]
    expect(closestPair(points))
    .to.deep.equal({ pair: [[-1, 0], [-2, 0]], distance: 1 })
  })
})
