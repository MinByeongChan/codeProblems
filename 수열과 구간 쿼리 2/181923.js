function solution(arr, queries) {
    return queries.reduce((prev, curr) => {
        const [s, e, k] = curr;
        const range = arr.slice(s, e+1)
        const filtered = range.filter((num) => num > k)
        if(!filtered.length) return [...prev, -1]
        const min = filtered.reduce((min, data) => Math.min(min, data), filtered[0]);
        return [...prev, min]
    }, [])
}
