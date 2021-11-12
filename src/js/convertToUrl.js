// export default function convertToUrl (str) {
//   //iterate
//   //test if space, concat %20 else concat char
//   let urlStr = "";

//   for(let i = 0; i < str.length; i++) {
//     if(str[i] === ' ') {
//       urlStr += "%20";
//     } else {
//       urlStr += str[i];
//     }
//   }

//   return urlStr;
// }
export default function convertToUrl (str) {
  //recurse
  //return the base case - length is 0 - start at beginning or end? want to start concatting from beginning, so start backwards, return forwards
  
  if(str.length === 0) {
    return "";
  }
  
  //else convert the char if space
  let convertedChar = str[str.length - 1];

  if(convertedChar === ' ') {
    convertedChar = "%20";
  }

  return convertToUrl(str.slice(0,str.length - 1)) + convertedChar;
}