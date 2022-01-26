function solution(str){
   let array=[];
  for(let i=0;i<str.length;i+=2){
    if(str[i+1]===undefined){
    array.push(`${str[i]}_`)
      break;
    }else{
    array.push(`${str[i]}${str[i+1]}`)
         }
  }
return array;}
