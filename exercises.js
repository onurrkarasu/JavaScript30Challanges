/*
  !   EXERCİSES LEVEL 1 :

*/

/*
    TODO 1: 
    * Declare firstName, lastName, country, city, age, isMarried, year
    *  variable and assign value to it and use the typeof operator to check different data types.
*/

    let firstName='Onur';
    let lastName='Karaus';
    let country='turkey';
    let city='igdir';
    let age=26;
    let isMarried=false;
    let year=2023;
    console.log(typeof firstName);
    console.log(typeof lastName);
    console.log(typeof country);
    console.log(typeof city);
    console.log(typeof firstName);
    console.log(typeof age);
    console.log(typeof isMarried);
    console.log(typeof year);

/*
    TODO 2 :
    * Check if type of '10' is equal to 10
*/
    console.log('10'==10); // ! true

/*
    TODO  3: 
    * Check if parseInt('9.8') is equal to 10
*/
    let num='9.81';
    let numFloat=parseFloat(num);
    console.log(numFloat==10); // !  false 


/*
    TODO 4: 
    * Boolean value is either true or false.
    * Write three JavaScript statement which provide truthy value.
    * Write three JavaScript statement which provide falsy value.
*/
  // * ANSWER : 
    // * TRUTHY VALUES
    /*
            * All numbers(positive and negative) are truthy except zero
            * All strings are truthy except an empty string(")
            * The boolean true
    */
    // *   Falsy values
    /*
            * 0
            * 0n
            * null
            * undefined
    */

/*
    TODO 5 :
       * Figure out the result of the following comparison expression first without using console.log(). 
       * After you decide the result confirm it using console.log()
*/
    console.log(4>3); // true
    console.log(4>=3); // true
    console.log(4<3); // false
    console.log(4<=3); // false
    console.log(4==4); // true
    console.log(4===4); // true
    console.log(4!=4); // false
    console.log(4!==4); // false
    console.log(4!='4'); // false
    console.log(4=='4'); // true
    console.log(4==='4'); // false
    console.log('python'.length=='jargon'.length); // true


/*
    TODO  6 : 
    * Figure out the result of the following expressions first without using console.log(). 
    * After you decide the result confirm it by using console.log()
*/
    console.log(4>3 && 10<12); // true
    console.log(4>3 && 10>12); // false
    console.log(4>3 || 10<12); // true
    console.log(4>3 || 10>12); // true
    console.log(!(4>3)); // false
    console.log(!(4<3)); // true
    console.log(!(4>3 && 10<12)); // false
    console.log(!(4>3 && 10>12)); // true
    console.log(!(4==='4')); // true

    let value='on';
    console.log('python'.includes(value) && 'dragon'.includes(value)); // true

/*
    TODO 7: 
    *    Use the Date object to do the following activities
    *    What is the year today?
    *    What is the month today as a number?
    *    What is the date today?
    *    What is the day today as a number?
    *    What is the hours now?
    *    What is the minutes now?
    *    Find out the numbers of seconds elapsed from January 1, 1970 to now.

*/

    let date=new Date();
    console.log(date.getFullYear()); // 0 
    console.log(date.getMonth()); // 7 
    console.log(date.getDay()); // 0
    console.log(date.getDate()); // 27
    console.log(date.getHours()); // 17
    console.log(date.getMinutes()); // 56

    // Find out the numbers of seconds elapsed from January 1, 1970 to now.
    function second_since_epoch(d){
        return Math.floor(d/1000);
    }

    let oldDate=new Date(1970,1,1);
    let sec=second_since_epoch(oldDate);
    console.log("Second :  ",sec);


/*
    !EXERCİSES LEVEL 2 :
*/

/*
    TODO 1:  Write a script that prompt the user to enter base and height of the triangle and calculate 
    todo : an area of a triangle (area = 0.5 x b x h).
*/
    let base=parseInt(prompt("Please enter your Base", "Harry Potter"));
    let height=parseInt(prompt("Please enter your name", "Harry Potter"));
    let staticly=0.5;
    let area=(staticly*base*height);
    console.log("Result:   ",area);

/*
    TODO 2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate 
    TODO : the perimeter of triangle (perimeter = a + b + c)
*/
    let a=parseInt(prompt('enter a side',44));
    let b=parseInt(prompt('enter a side',44));
    let c=parseInt(prompt('enter a side',44));

    let perimeter=(a+b+c);
    console.log(`The perimeter of the triangle is : ${perimeter}`);

/*
    TODO 3 : Get length and width using prompt and calculate an area of rectangle
    todo  :  (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
*/
    let length=parseInt(prompt('enter a value'));
    let width=parseInt(prompt('enter b value'));
    let areas=(length*width);
    let areas2=(perimeter=2*(length+width));
    console.log(`area : ${areas}`);
    console.log(`Areas ${areas2}`);

/*
    TODO 4: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
*/
    let pi=3.14;
    let r=parseInt(prompt('enter r value'));
    let aHesapla=(pi*r*r);
    let circumference=(2*pi*r);
    console.log(`Alan Hesapla ${aHesapla}`);
    console.log(`Circumference ${circumference}`);

/*
    TODO 5 : Calculate the slope, x-intercept and y-intercept of y = 2x -2
*/
/*
    TODO 6 : Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
*/
/*
    TODO 7 :Compare the slope of above two questions.
*/
/*
    TODO 8 : Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
*/  

/*
    TODO 9 : Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
*/
    let saat=parseInt(prompt('Saat Giriniz...'));
    let ratePerHour=parseInt(prompt('Saatlik Ücret...'));
    let calculatingWeek=(saat*ratePerHour);
    console.log(calculatingWeek);

/*
    TODO 10 : If the length of your name is greater than 7 say, your name is long else say your name is short.
*/
    let adim=parseInt(prompt('Adinizi giriniz...'));
    adim>7
        ? console.log('If the length of your name is greater than 7 say')
        : console.log(' your name is long else say your name is short.');

/*
    TODO 11 : Compare your first name length and your family name length and you should get this output
*/
    let first_name=parseInt(prompt('Adiniz'));
    let last_name=parseInt(prompt('Soyadiniz'));
    first_name>lastName
        ? console.log("Your First Name is greater than family name")
        :  console.log("Your Family Name is greater than First name")

/*
    TODO 12 :Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
*/
    let myAge=parseInt(prompt('My age enter'));
    let yourAge=parseInt(prompt('your Age enter'));
    myAge>yourAge
        ?   console.log(`I am older than you.`)
        :   console.log(`I am younger than you.`);

/*
    TODO 13 : Using prompt get the year the user was
    TODO :  born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

*/
    let yourBirthYear=parseInt(prompt('Please enter your Birth Year'));
    let nowDate=new Date().getFullYear();
    let result=nowDate-yourBirthYear;
    result>18
        ? console.log(`Your age ${result}. Enough to drive licence`)
        : console.log(`Your age ${result} Not enough to drive licence }`);

/*
    TODO 14: Write a script that prompt the user to enter number of years. 
    TODO : Calculate the number of seconds a person can live. Assume some one lives just hundred years
*/  
    let years=parseInt(prompt('Enter number of years you live : '));
    let convertToSeconds=years*31566952;
    console.log(convertToSeconds);

/*
    TODO 15: Create a human readable time format using the Date time object
*/
    let seeDate=new Date();
    let yearsDate=seeDate.getFullYear();
    let monthDate=seeDate.getMonth();
    let dayDate=seeDate.getDate();
    let hoursDate=seeDate.getHours();
    let minutDate=seeDate.getMinutes();

    console.log(`${yearsDate}-${monthDate}-${dayDate} ${hoursDate}:${minutDate}`);
    console.log(`${dayDate}-${monthDate}-${yearsDate} ${hoursDate}:${minutDate}`);
    console.log(`${dayDate}/${monthDate}/${yearsDate} ${hoursDate}:${minutDate}`);


/*
    ! Exercises Level 3 
*/

/*
    *Create a human readable time format using the Date time object.
    * The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
    * YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/


const ex=new Date();
const yearsEx=ex.getFullYear(); // return in year
const monthEx=ex.getMonth(); // +1 return (0 - 11)
const dateEx=ex.getDate(); // return date (1 - 31)
const hoursEx=ex.getHours(); // returns number(0 - 23 );
const minutes=ex.getMinutes(); // returns number (0 - 59 );

console.log(`${dateEx}/${monthEx}/${yearsEx} ${hoursEx}:${minutes}`);


 