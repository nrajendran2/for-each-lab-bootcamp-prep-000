function iterativeLog(array){
array.forEach(function(element,index){
  console.log(`${index}: ${element}`)
})
}

function iterate(callback){
  var soccer = ["shinguards", "cleats","socks"]
 soccer.forEach(callback)
 return soccer
}

function doToArray(array,callback){
 array.forEach(callback)
}
