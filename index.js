function dogYears (n, name) {
    let myAge = n;
    let earlyYears = 2 * 10.5;
    let laterYears = 4;
    let myAgeInDogYears = 0;
    myAgeInDogYears = myAge - 2;
    myAgeInDogYears *= laterYears;
    myAgeInDogYears += earlyYears;
    return `My name is ${name}. I am ${myAge} years old in human years which is ${myAgeInDogYears} in dog years.`
}

console.log(dogYears(23, 'Breezy'))