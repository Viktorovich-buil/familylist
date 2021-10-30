export function declination(number) {
    const ending = number.toString()[number.length - 1] * 1;
    if (number > 4 && number < 21) {
        return " лет";
    }
    if (ending === 1) {
        return " год";
    }
    if (ending > 1 && ending < 5) {
        return " годa";
    }
    return " лет";
}
