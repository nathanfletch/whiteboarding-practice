// export default function quickSort(arr) {
//   //choose pivot
//   //move elements less than before, larger after - use 2 pointers

//   let incPointer = 0; //
//   let decPointer = arr.length - 1; // 4, 
//   let pivotIndex = Math.floor(arr.length / 2); // 2
//   let pivotValue = arr[pivotIndex]; // 7

//   //[9, 10, 7, 5, 12]
//   //[5, 10, 7, 9, 12] inc:0, dec:3
//   //[5, 10, 7, 9, 12] inc:1, dec:2
//   //[5, 7, 10, 9, 12] inc:1, dec:1

//   while(incPointer < decPointer) {
//     if(arr[incPointer] < pivotValue) {
//       incPointer++;
//     } else if(arr[decPointer] > pivotValue) {
//       decPointer--;
//     } else {
//       swap(incPointer, decPointer);
//     }
//   }

//   function swap(p1, p2) {
//     let temp = arr[p1];
//     arr[p1] = arr[p2];
//     arr[p2] = temp;
//   }

//   return arr;

// }

export default function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let lowerValues = [];
  let equalValues = [];
  let higherValues = [];

  let pivotIndex = Math.floor(arr.length/2);
  let pivotValue = arr[pivotIndex];

  for(let i = 0; i < arr.length; i++) {
    if (arr[i] < pivotValue) {
      lowerValues.push(arr[i]);
    } else if (arr[i] === pivotValue) {
      equalValues.push(arr[i]);
    } else if (arr[i] > pivotValue) {
      higherValues.push(arr[i]);
    }
  }

  lowerValues = quickSort(lowerValues);
  higherValues = quickSort(higherValues);

  return [ ...lowerValues, ...equalValues, ...higherValues ];
  
}