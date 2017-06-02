export default function bubbleSort(arr) {
  if(!arr.every(val => typeof(val) === 'number')) return undefined
  let maxIndex = arr.length - 1

  while(maxIndex > 0) {
    for(let i = 0; i < maxIndex; i++) {
      if(arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
      }
    }
    maxIndex--
  }
  return arr
}
