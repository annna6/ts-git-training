export const computeFibonacciNumber = (position: number, recursion: boolean = false): number => {
    if (recursion) {
        return recursiveFibonacci(1, 1, position - 2);
    }

    let notNullPosition : number = position;
    if (notNullPosition === null) {
        notNullPosition = 1;
    } else if (notNullPosition === 0) {
        return 0;
    } else if (notNullPosition < 0) {
        return computeNegativeFibonacci(notNullPosition);
    }

    let i: number = 1;
    let j : number = 1;

    if (notNullPosition <= 2) {
        return 1;
    }

    let currentPosition = 2;
    while (currentPosition < notNullPosition) {
        const temp = i;
        i = j;
        j += temp;
        currentPosition++;
    }
    return j;
};

const computeNegativeFibonacci = (position: number): number => {
    if (position >= 0) {
        throw new Error(`Position must be less than zero! Received: ${position}.`);
    }
    const resultIsNegative = position % 2 === 0;
    const absoluteResult = computeFibonacciNumber(-position);
    return resultIsNegative ? absoluteResult * -1 : absoluteResult;
}
export const computeFibonacciArray = (start: number, endInclusive: number): number[] => {
    const inputArray = [...Array(endInclusive - start + 1).keys()].map(i => i + start);
    return inputArray.map(x => computeFibonacciNumber(x));
};

const recursiveFibonacci = (previous: number, current: number, stepsLeft: number): number => {
    if (stepsLeft < 0) {
        return 1;
    }
    switch (stepsLeft) {
        case 0:
            return current;
        default:
            return recursiveFibonacci(current, previous + current, stepsLeft - 1);
    }
}