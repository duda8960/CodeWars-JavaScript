var makeFancyString = function(s) {
    let array = s.split("");
    let count=0;
    let str ="";
    for(let i=0; i<array.length; i++){
        if(array[i+1] == array[i] ){
            count++
        } else{
            count = 0
        }
        if(count<2){
            str+=array[i]
        }


        
        
    } return str
};

console.log(makeFancyString("abbcccddddeeeee"))