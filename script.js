// Array Methods
const arrayMethodsSection = document.getElementById('array-list');
const numbers = [1, 2, 3, 4, 5];

// 1. forEach()
numbers.forEach((number) => {
    const li = document.createElement('li');
    li.textContent = `forEach: ${number}`;
    arrayMethodsSection.appendChild(li);
});

// 2. map()
const doubledNumbers = numbers.map((number) => number * 2);
doubledNumbers.forEach((number) => {
    const li = document.createElement('li');
    li.textContent = `map: ${number}`;
    arrayMethodsSection.appendChild(li);
});

// 3. filter()
const evenNumbers = numbers.filter((number) => number % 2 === 0);
evenNumbers.forEach((number) => {
    const li = document.createElement('li');
    li.textContent = `filter: ${number}`;
    arrayMethodsSection.appendChild(li);
});

// 4. reduce()
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const li = document.createElement('li');
li.textContent = `reduce: ${sum}`;
arrayMethodsSection.appendChild(li);

// 5. find()
const greaterThanThree = numbers.find((number) => number > 3);
const li2 = document.createElement('li');
li2.textContent = `find: ${greaterThanThree}`;
arrayMethodsSection.appendChild(li2);

// String Methods
const stringMethodsDiv = document.getElementById('string-content');
const text = 'Hello, World!';

// 1. toUpperCase()
const upperCaseText = text.toUpperCase();
const p1 = document.createElement('p');
p1.textContent = `toUpperCase: ${upperCaseText}`;
stringMethodsDiv.appendChild(p1);

// 2. toLowerCase()
const lowerCaseText = text.toLowerCase();
const p2 = document.createElement('p');
p2.textContent = `toLowerCase: ${lowerCaseText}`;
stringMethodsDiv.appendChild(p2);

// 3. substring()
const substringText = text.substring(0, 5);
const p3 = document.createElement('p');
p3.textContent = `substring: ${substringText}`;
stringMethodsDiv.appendChild(p3);

// 4. indexOf()
const indexOfWorld = text.indexOf('World');
const p4 = document.createElement('p');
p4.textContent = `indexOf('World'): ${indexOfWorld}`;
stringMethodsDiv.appendChild(p4);

// 5. split()
const words = text.split(' ');
const p5 = document.createElement('p');
p5.textContent = `split(' '): ${words}`;
stringMethodsDiv.appendChild(p5);
