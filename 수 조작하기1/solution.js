function solution(n, control) {
    let answer = n;
    for(let s of control) {
        if(s === 'w') answer += 1;
        else if(s === 's') answer -= 1;
        else if(s === 'd') answer += 10;
        else if(s === 'a') answer -= 10;
    }
    return answer;
}
