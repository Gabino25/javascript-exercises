const leapYears = function() {
   let retval = false; 
   let year = arguments[0];
   if(year%4===0){
     if(year%400===0){
      retval = true;   
     }else if(year%100===0){
        retval = false;  
     }else{
        retval = true;
     }  
   }else{
    retval  = false;
   }
   return retval; 
}

module.exports = leapYears
