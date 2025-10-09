function main (input) {
    
    const lines = input.split('\n');
    
  
    const arrStr = lines[1] ? lines[1].trim() : '';
    
   
    const M = arrStr.split(/\s+/).map(Number).filter(n => !isNaN(n));
    
    const len = M.length;
    
    if (len === 0) {
        console.log("true");
        return;
    }
    
    function isConsecutive(arr) {
        
        const uniqueElements = new Set(arr);
        if (uniqueElements.size !== len) {
            return false;
        }
       
        const minVal = Math.min(...arr);
        const maxVal = Math.max(...arr);
        
        if (maxVal - minVal === len - 1) {
            return true;
        } else {
            return false;
        }
    }
    
    console.log(isConsecutive(M).toString());
}

let input = "";
process.stdin.on('data', (chunk) => {
    input += chunk;
});

process.stdin.on('end', () => {
    main(input.trim());
});
