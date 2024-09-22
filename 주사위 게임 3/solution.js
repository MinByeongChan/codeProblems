function solution(a, b, c, d) {
    let answer = 0;
    const dice = [a,b,c,d];
    const diceSet = new Set([...dice.filter((number, index) => dice.indexOf(number) !== index)]);
    const duplicated = [...diceSet]
    
    const p = dice.filter((data) =>  duplicated.includes(data));
    const q = dice.filter((data) =>  !duplicated.includes(data));

    if(p.length === 4) {
        const pp = p.sort();
        if(pp[0] !== pp[2]) {
            return (pp[0] + pp[2]) * Math.abs(pp[0] - pp[2])
        }
        return (1111 * p[0]);
    }
    if(p.length === 3) {
        return Math.pow((p[0]*10) + q[0], 2);
    }
    else if(p.length === 2) {
        return q[0] * q[1];
    }
    
    return Math.min(...[a,b,c,d])
}
