const unsorted = [3, 6, 7, 4, 1, 5, 2, 9, 8];

// console.log('unsorted:', unsorted);

function bubblesort(array) {
  let swapped = true;

  while (swapped) {
    // console.log('new while iteration:', array);
    // reset swapped here
    swapped = false;

    // look through array for swaps
    for (let i = 0; i < array.length - 1; i++) {
      // console.log(array);

      // this is where we swap
      if (array[i] > array[i + 1]) {
        swapped = true;
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }

  return array;
}

bubblesort(unsorted);

// console.log('sorted:', unsorted);
