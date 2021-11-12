// export default function removeDuplicates (arr) {
//   let noDupesArr = [];

//   //test if noDupesArr includes el, push it if so
//   for(let i = 0; i < arr.length; i++) {
//     if(!noDupesArr.includes(arr[i])) {
//       noDupesArr.push(arr[i]);
//     }
//   }
//   return noDupesArr;
// }


export default function removeDuplicates (arr) {
  //base: empty arr

  if(arr.length === 0) return [];

  //build an array up from this empty one - concat or not. 

  //get array minus the last element
  let arrMinusOne = arr.slice(0,arr.length - 1);
  let currentElement = arr[arr.length - 1];

  //test if arrMinusOne includes el, return it if so, else concat current el
  if(arrMinusOne.includes(currentElement)) {
    return removeDuplicates(arrMinusOne);
  } else {
    return removeDuplicates(arrMinusOne).concat(currentElement);
  }
  //concat current element if it is not included.
  //if i don't concat it, will the "first part" be connected to the "last part"?
  //we don't need to connect a "last part" - we just need to return an array, which we do, whether we concat or not.
}



