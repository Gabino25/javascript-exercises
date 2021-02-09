const removeFromArray = function() {
   console.log("Entra removeFromArray");
   let lArguments =  Array.from(arguments);
   let lArray = lArguments[0];
   let lItemForRemove = lArguments[1];
   let retval = [];
   lArray.forEach(e=>{if(!lArguments.includes(e)){retval.push(e)}});
   console.log(lArguments);
   console.log("Sale removeFromArray");
   return retval;
}

module.exports = removeFromArray
