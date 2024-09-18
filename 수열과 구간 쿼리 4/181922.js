function solution(arr, queries) {
    return queries.reduce((prev, curr) => {
        const [s, e, k] = curr;
        for(let i in prev) {
            if(s <= i && i <= e && i%k === 0) {
                prev[i] += 1
            }
        }
        return prev
    }, arr)
}
