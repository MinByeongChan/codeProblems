function solution(number) {
    return number.split('').reduce((result, curr) => {
        return result += Number(curr)
    }, 0) % 9
}
