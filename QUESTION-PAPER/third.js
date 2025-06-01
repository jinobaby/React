const arr = [1, 2, 3, 4, 5, 6, 7, 8, 3, 4];
const seen = {};
const uniqueArr = [];

for (let i = 0; i < arr.length; i++) {
    const num = arr[i]

    if (!seen[num]) {
        uniqueArr.push(num);
        seen[num] = true;
    }
    
}

console.log(uniqueArr); 
