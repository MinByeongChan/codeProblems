function solution(l, r) {
    const answer = [];
    
    for(let i=l; i<=r; i++) {
        const isZeroOrFive = String(i).split('')
            .every((s) => (s === '5' || s === '0'))
        if(isZeroOrFive) {
            answer.push(i)
        }
        
    }
    return answer.length === 0 ? [-1] : answer;
}
