// Split the array into halves and merge them recursively
const unsorted = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];

function mergeSort(array) {
  if (array.length === 1) {
    // return once we hit an array with a single item
    return array;
  }

  const split = Math.floor(arr.length / 2); // split the middle item of the array rounded down
  const left = array.slice(0, split); // items on the left side
  const right = array.slice(split); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

// compare the arrays item by item and return the concatenated tempArr
function merge(left, right) {
  let tempArr = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      tempArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      tempArr.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return tempArr.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}
