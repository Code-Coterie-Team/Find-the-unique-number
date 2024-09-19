function findUniq(arr) {
    const unique=new Set(arr);
    if (unique.size===2){
        for (let num of unique){
        if(arr.indexOf(num)===arr.lastIndexOf(num)){
            return num;
        }
    }
    }
    return null;
 }