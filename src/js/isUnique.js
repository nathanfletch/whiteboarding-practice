// export default function isUnique (str) {
//   //iterate, return false if a duplicate is found

//   for(let i = 0; i< str.length; i++) {
//     if(str.slice(0,i).includes(str[i])) return false;
//   }
//   return true;
// }
export default function isUnique (str) {
  //iterate, return false if a duplicate is found

  for(let i = 0; i< str.length; i++) {
    for(let j = 0; j < i; j++) {
      if (str[i] === str[j]) return false;
    }
  }
  return true;
}