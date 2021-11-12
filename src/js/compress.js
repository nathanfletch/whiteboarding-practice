export default function compress (str) {
  // iterate, test if equal to the previous (the first index won't have a previous, so we can start the loop at index 1)
  if(str.length < 2) return str;

  //do i want to modify the input str or create a new one to modify? try with a new one
  let compressedStr = '';
  
  //modifying previous elements seems tough, so I'll make a temp string (or int) and modify it
  let currentCounter = 1;

  for(let i = 1; i < str.length; i++) {
    if(str[i] === str[i - 1]) {
      //increment counter, don't touch compressedStr
      currentCounter++;
    } else {
      //append num if over 1
      if(currentCounter > 1) compressedStr += currentCounter.toString();
      //append letter in all cases
      compressedStr += str[i - 1];
      
      //reset counter
      currentCounter = 1;
    }
  }
  //handle last letter (if 1, counter is 1. if not, should )
  if(currentCounter > 1) compressedStr += currentCounter.toString();
  //append letter in all cases
  compressedStr += str[str.length - 1];
  
  return compressedStr;
}
//Doesn't handle last letter!!


// export default function compress (str) {
//   // don't modify if no repeats
//   if(str.length < 2) return str;
  
//   let compressedStr = '';

//   //split into sections - concat onto something, convert
//   let currentSubstring = '';

//   for(let i = 0; i < str.length; i++) {
//     if(!currentSubstring.includes(str[i])) currentSubstring += str[i];
//     else {
      
//       compressedStr += currentSubstring;

//     }

//   }


//   return compressedStr;
// }