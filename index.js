// Define function dogYears and passed in the parameters name and n for number
function dogYears (n, name) {
    // created variables for my age, first two years,  and later years
    let myAge = n;
    let earlyYears = 2 * 10.5;
    let laterYears = 4;
    // creatd a variable that will start at 0 and hold the computed age in dog years
    let myAgeInDogYears = 0;
    // subtracted age from 2 and reassigned the myAgeInDogYears variable
    myAgeInDogYears = myAge - 2;
    // multiplied myAgeInDogYears by laterYears
    myAgeInDogYears *= laterYears;
    // added myAgeInDogeYears to earlyYears
    myAgeInDogYears += earlyYears;
    // returned the name, age and computed age in dog years
    return `My name is ${name}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`
}

console.log(dogYears(23, 'Breezy'))