function solution(arr) {
    let stk = [];
    let i = 0;
    
    while(i<arr.length) {
        if(stk.length === 0) {
            stk.push(arr[i])
            i+=1;
        } else if(stk.length !== 0) {
            const last = stk[stk.length-1];
            
            if(last < arr[i]) {
                stk.push(arr[i])
                i+=1;
            } else {
                stk.pop();
            }
        }
    }

    return stk;
}
