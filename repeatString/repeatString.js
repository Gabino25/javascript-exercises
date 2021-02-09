const repeatString = function(word,times) {
  let retval = "";
    if(times<0){
    return "ERROR";
  }
  for(let i=0;i<times;i++){
    retval = retval+word;   
  }
  return retval;
}

module.exports = repeatString
