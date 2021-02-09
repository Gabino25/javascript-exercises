const sumAll = function() {
   let retval =0; 
   let begin = arguments[0];
   let end = arguments[1];
   if(!Number.isInteger(begin)||!Number.isInteger(end)){
    return "ERROR";
   }
   if(begin<0||end<0){
       return "ERROR";
   }
   let min = begin>end?end:begin; 
   let max = begin>end?begin:end;
   for(let i=min;i<=max;i++){
     retval = retval+i;
   }
   return retval; 
}

module.exports = sumAll
