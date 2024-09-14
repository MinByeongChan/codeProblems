function solution(arr, queries) {
    return queries.reduce((prev, curr) => {
        const [i, j] = curr;
        const result = prev.slice();
        let tmp = result[j];
        result[j] = result[i];
        result[i] = tmp;
        return result;        
    }, arr.slice())
}
