const unsorted = [9, 3, 5, 6, 4, 2, 7, 10, 1, 8];

console.log('before', unsorted);

let selectionSort = function(array) {
  let temp;

  for (let i = 0; i < array.length; i++) {
    let mi = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[mi]) mi = j;
    }

    temp = array[i];
    array[i] = array[mi];
    array[mi] = temp;
  }
};

selectionSort(unsorted);
console.log('after', unsorted);


