/* var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
*/

// comments
/* 
* multiline comments
*/

/**Variable mutation and type coercion 
 * 
*/
/*
var firstName = 'John';
var age = 28;

// Type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'teacher';
isMarried = false;

console.log(firstName + 'is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + 'is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName); */

/***************
 * Basic operators
 */
/*
var year, yearJohn, yearMark
now = 2018;
ageJohn =  28;
ageMark =  33;

yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/*****************
 * Operator precedence
 */

 /*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3+5) * 4 - 6; 
console.log(x, y);

// more operators


x *= 2;
console.log(x);

x += 10;
console.log(x)

x++;

console.log(x)

*/

/*
var markMass, johnMass, markHeight, johnHeight;
markMass = 80;
johnMass = 70;
markHeight = 1.78;
johnHeight = 1.82;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

var isMarkBMIHigher = markBMI > johnBMI;

console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBMIHigher + '.');
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = false;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var markMass, johnMass, markHeight, johnHeight;
markMass = 65;
johnMass = 70;
markHeight = 1.78;
johnHeight = 1.82;

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);

if (markBMI > johnBMI) {
    console.log('Mark\'s BMI is higher than John\'s.');
} else {
    console.log('John\'s BMI is higher than Mark\'s.');
}
*/
// var isMarkBMIHigher = markBMI > johnBMI;
// console.log('Is Mark\'s BMI higher than John\'s? ' + isMarkBMIHigher + '.');

/***************************
 * Boolean logic
 */
/*
var firstName = 'John';
var age = 21;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if ( age >= 13 && age < 20) { // Between 13 and 20
    console.log(firstName + ' is a teenager.')
} else if ( age >= 20 && age < 30 ) {
    console.log(firstName + ' is a young man.')
}else {
    console.log(firstName + ' is a man.');
} 
*/

/******************************
 * The Ternary Operator and Switch Statements
 */
/*
 var firstName = 'John';
 var age = 21;

// Ternary operator
 age >= 18 ? console.log(firstName + ' drinkds beer.')
 : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }

// Switch statement
var job = 'teacher';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.')
        break;
    default:
        console.log(firstName + ' deos something else');
}

age = 21;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
        break;
}
*/

/****************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefiend, null, 0, '', NaN
// truthy values: NOT falsy values

/*
var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators

if (height == '23') {
    console.log('The == operator does type coercion!')
}
*/
/*
var numOfGame, john1, john2, john3, mike1, mike2, mike3, mary1, mary2, mary3;
    numOfGame = 3;
    john1 = 121;
    john2 = 119;
    john3 = 120;
    mike1 = 118;
    mike2 = 120;
    mike3 = 122;
    mary1 = 125;
    mary2 = 114;
    mary3 = 121;

var avgJohn = Math.round((john1 + john2 + john3)/numOfGame);
    console.log(avgJohn);

var avgMike = Math.round((mike1 + mike2 + mike3)/numOfGame);
    console.log(avgMike);

var avgMary = Math.round((mary1 + mary2 + mary3)/numOfGame);
    console.log(avgMary);

if (avgJohn > avgMike && avgJohn > avgMary) {
    console.log('John is the Winner with a average score of ' + avgJohn + '.');
} else if (avgJohn < avgMike && avgMary < avgMike) {
    console.log('Mike is the Winner with a average score of ' + avgMike + '.');
} else if (avgJohn < avgMary && avgMike < avgMary) {
    console.log('Mary is the Winner with a average score of ' + avgMary + '.');
} else if (avgJohn === avgMary && avgJohn > avgMike) {
    console.log('John and Mary are both Winners with a average score of ' + avgJohn + ' and ' + avgMary);
} else if (avgJohn === avgMike && avgJohn > avgMary) {
    console.log('John and Mike are both Winners with a average score of ' + avgJohn + ' and ' + avgMike);
} else if (avgJohn < avgMary && avgMary === avgMike) {
    console.log('Mike and Mary are both Winners with a average score of ' + avgMike + ' and ' + avgMary);
} else {
    console.log('Three teams draw!');
}
*/

/**********************
 * Functions
 */
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageBorui = calculateAge(1995);
console.log(ageJohn, ageMike, ageBorui);

function yearUntilRetirement(year, firstName) {  
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement > 0){
    console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.')
    }
}

yearUntilRetirement(1937, 'John');
*/

/**************************
 * Function Statements and Expressions
 */

 // Function declaration
// function whatDoYouDo(job, firstName) {}

 // Function expression
 /*
var whatDoYouDo = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teachs how to code.';
        case 'driver' :
            return firstName + ' drives.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
        return firstName + ' does somthing else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('hey', 'Mark'));
console.log(whatDoYouDo('designer', 'Borui'));
/*

/*********************
 * Arrays
 */

 // Initialize new array
 /*
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names.length); 
console.log(years);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Diiferent data types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('MR.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(123));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/*******************
 * Coding challenge tips
 */

/*
var bill1, bill2, bill3;
    bill1 = 124;
    bill2 = 48;
    bill3 = 268;

var tipCalculator = function(bill, tip) { 
    switch (true) {
        case bill < 50: 
        return tip = bill * 0.2;

        case bill >= 50 && bill <= 200:
        return tip = bill * 0.15;

        default:
        return tip = bill * 0.1;
    }
}

var tip1 = tipCalculator(bill1);
console.log(tip1);
var tip2 = tipCalculator(bill2);
console.log(tip2);
var tip3 = tipCalculator(bill3);
console.log(tip3);

var tipArray = new Array(tip1, tip2, tip3);
console.log(tipArray);

var totalArray = new Array(tip1 + bill1, tip2 + bill2, tip3 + bill3);
console.log(totalArray);
*/

/************************
 * Objects and properties
 */

// Object literal
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};
console.log(john.family);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);

// new Object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1999;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/************************************
 * Object and methods
 */

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/*****************************
 * Coding challenge 4
 */
/*
var john = new Object();
    john.name = 'John';
    john.mass = 70;
    john.height = 1.78;
    john.calcBMI = function () {
        this.BMI = this.mass / Math.pow(this.height, 2);
        return this.BMI;
    };

var mark = new Object();
    mark.name = 'Mark';
    mark.mass = 70;
    mark.height = 1.78;
    mark.calcBMI = function () {
        this.BMI = this.mass / Math.pow(this.height, 2);
        return this.BMI;
    };

if (john.calcBMI() > mark.calcBMI()) {
    console.log (john.name + ' has the highest BMI of ' + john.BMI + '.');
} else if (john.BMI === mark.BMI) {
    console.log ('John and Mark have the same BMI.');
} else {
    console.log (mark.name + ' has the highest BMI of ' + mark.BMI + '.');
}
*/

/***************************************
 * Loops and iteration
 */
/*
for (var i = 1; i <= 20; i += 2) {
    console.log(i);
}
*/
/*
// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

var i = 0
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/

// continue and break statements

/*
var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// Looping backwards

for (var i = john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/

/*
var john = new Object();
    john.billArray = new Array(124, 48, 268, 180, 42);
    john.tipArray = new Array();
    john.finalAmountArray = new Array();
    john.calcTip = function () {
        for (var i = 0; i < this.billArray.length; i++) {
            if (this.billArray[i] < 50) {
                this.tipArray[i] = this.billArray[i] * 0.2;
                this.finalAmountArray[i] = this.billArray[i] + this.tipArray[i];
            } else if (this.billArray[i] >= 50 && this.billArray[i] <= 200){
                this.tipArray[i] = this.billArray[i] * 0.15;
                this.finalAmountArray[i] = this.billArray[i] + this.tipArray[i];
            } else {
                this.tipArray[i] = this.billArray[i] * 0.1;
                this.finalAmountArray[i] = this.billArray[i] + this.tipArray[i];
            }
        }
        return [this.tipArray, this.finalAmountArray];
    };
*/
/*
var john = {
    billArray: [124, 48, 268, 180, 42],
    calcTip: function () {
        this.tipArray = [];
        this.finalAmountArray = [];
        for (var i = 0; i < this.billArray.length; i++) {
            var percentage;
            var billAmount = this.billArray[i]
            if (billAmount < 50) {
                percentage = 0.2;
            } else if (billAmount >= 50 && billAmount <= 200) {
                percentage = 0.15;
            } else {
                percentage = 0.1;
            }
            this.tipArray[i] = billAmount * percentage;
            this.finalAmountArray[i] = billAmount + this.tipArray[i];
        }
    }
};

john.calcTip();
console.log(john, john.billArray, john.tipArray, john.finalAmountArray);

var mark = new Object();
    mark.billArray = new Array(77, 100, 110, 45);
    mark.tipArray = new Array();
    mark.finalAmountArray = new Array();
    mark.calcTip = function () {
        for (var i = 0; i < this.billArray.length; i++) {
            if (this.billArray[i] < 100) {
                this.tipArray[i] = this.billArray[i] * 0.2;
                this.finalAmountArray[i] = this.billArray[i] + this.tipArray[i];
            } else if (this.billArray[i] >= 100 && this.billArray[i] <= 300){
                this.tipArray[i] = this.billArray[i] * 0.10;
                this.finalAmountArray[i] = this.billArray[i] + this.tipArray[i];
            } else {
                this.tipArray[i] = this.billArray[i] * 0.25;
                this.finalAmountArray[i] = this.billArray[i] + this.tipArray[i];
            }
        }
        return [this.tipArray, this.finalAmountArray];
    };

mark.calcTip();
console.log(mark, mark.billArray, mark.tipArray, mark.finalAmountArray);

var avgTips = function (tipsArray) {
    var sum = 0;
    for(var i = 0; i < tipsArray.length; i++){
        sum = sum + tipsArray[i];
    }

    var averageTip = sum / tipsArray.length;
    return averageTip;
};

var avgTipJohn = avgTips(john.tipArray);
var avgTipMark = avgTips(mark.tipArray);

if (avgTipJohn > avgTipMark) {
    console.log('Famaliy of john paid the highest tips on average of $' + avgTipJohn);
} else if (avgTipJohn < avgTipMark) {
    console.log('Famaliy of mark paid the highest tips on average of $' + avgTipMark);
} else {
    console.log('Both famalies paid the same amount of average tips.');
};
*/

/* Section 2 completed*/