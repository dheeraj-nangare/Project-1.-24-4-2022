let str = "       "
let count = 0;
let CountOne = 0;
for(var i = 0; i < str.length; i++){
    if(str[i] == " "){
       CountOne++
    }else{
       count++
    }
}
if(count <= 0){
  console.log("Error")
}else{
   console.log(count)
}