let add = (num_1, num_2) => {
    return num_1 + num_2;
}
let substr = (num_1, num_2) => {
    return num_1 - num_2;
}
let multiply = (num_1, num_2) => {
    return num_1*num_2;
}
let division = (num_1, num_2) => {
    return num_1/num_2;
}
let operate = (operator, num_1, num_2) => {
    switch (operator) {
        case '+':
            return add(num_1, num_2);
            break;
        case '-':
            return substr(num_1,num_2);
            break;
        case '/':
            return division(num_1, num_2);
            break;
        case '*':
            return multiply(num_1, num_2);
            break;
        default:
            break;
    }
}