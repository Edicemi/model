const data = [
    { principal: 2500, time: 1.8 },
    { principal: 1000, time: 5 },
    { principal: 3000, time: 1 },
    { principal: 2000, time: 3 },
]

const interest = (key) => {
    const interest = key.principal * key.time * key.rate / 100;
    key.interest = interest;
}

const interestCalculator = (arr) => {

    let rate;
    for (let key of arr) {
        if (key.principal >= 2500 && key.time > 1 && key.time < 3) {
            key.rate = 3;
            interest(key)
            console.log(key)

        } else if (key.principal >= 2000 && key.time >= 3) {
            key.rate = 4;
            interest(key)
            console.log(key)

        } else if (key.principal < 2500 || key.time <= 1) {
            key.rate = 2;
            interest(key)
            console.log(key)
        } else {
            return key.rate = 1;
        }
    }
}

interestCalculator(data)