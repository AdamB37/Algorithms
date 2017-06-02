export default function mergeSort(arr) {
  if(arr.length < 2 || !Array.isArray(arr)) return arr

  let middleIdx = Math.floor(arr.length/2)

  let left = arr.slice(0,middleIdx)
  let right = arr.slice(middleIdx)

  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right) {
  let result = []

  let leftIdx = 0
  let rightIdx = 0
  while(leftIdx < left.length && rightIdx < right.length) {
    if(left[leftIdx] <= right[rightIdx]) {
      result.push(left[leftIdx])
      leftIdx++
    }
    else {
      result.push(right[rightIdx])
      rightIdx++
    }
  }
  return [...result,...left.slice(leftIdx),...right.slice(rightIdx)]
}
