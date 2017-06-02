export default function closestPair(points) {
  let result = { pair: null, distance: Infinity}

  const dist = (x1,y1,x2,y2) => {
    let a = x1 - x2
    let b = y1 - y2
    return Math.sqrt( a*a + b*b )
  }

  points.forEach(([x1,y1],idx,arr) => {
    arr.forEach(([x2,y2],idx,arr) => {
      let distance = dist(x1,y1,x2,y2)
      if((x1 !== x2 || y1 !== y2) && distance < result.distance) {
        result.pair = [[x1,y1],[x2,y2]]
        result.distance = distance
      }
    })
  })

  return result
}
