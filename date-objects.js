/*
    * Date Object

    Time is important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript
    Date Object. The object we create using Date object provides many methods to work with date and time. The methods we use to get date and time
    information from a date object values are started with a word get because it provide the information. getFullYear(), getMonth(), getDate(),
    getDay(), getHours(), getMinutes, getSeconds, getMilliSeconds(), getTime(), getDay()

*/

/*

    Method                          Description                                         Examples
*   getFullYear()               Get  the year as a for digit number(yyyy)                  2020
*   getMonth()                  Get  the month as a number(0-11)                            0
*   getDate()                   Get the day as a number(1-31)                               4
*   getHours()                  Get the hour(0-23)                                          0
*   getMinutes()                get the minute(0-59)                                        56
*   getSeconds()                get the second(0-59)                                        41
*   getMilliSeconds()           get the milliseconds(0-999)                                 341
*   getTime()                   get the time(milliseconds since January 1,1970)             1578092201341
*   getDay()                    get the week as a number(0-6)                               6
*/

/*
    ! Creating a time object
    Once we create time object. The time object will provide information about time. Let us create a time object.
*/
    const now = new Date(); // 2023-08-27 T 12:45:53 .786Z
    console.log(now);

/*
    We have created a time object and we can access any date information from the object using the get methods we have mentioned on the
    table.
*/

/*
    * Getting Full Year
    Let's extract or get the full year from time object

*/
    const year=new Date();
    console.log(year.getFullYear());

/*
    * Getting Month
    let's extractor or get the month from a time object
*/
    const month=new Date();
    console.log(month.getMonth());


/*
    * Getting Date
    Let's extract or get the date of the month from a time object.
*/
    const date=new Date();
    console.log(date.getDate());

/*
    * Getting Day
    Let's  extract or get the day of the weeek from a time object.
*/
    const day=new Date();
    console.log(day.getDay());
    //  Sunday is 0, Monday is 1 and Saturday is 6
    // Getting the weekday as a number (0-6)

/*
    * Getting Hours
    Let's extract or get hours from a time object
*/
    const hours=new Date();
    console.log(hours.getHours());

/*
    * Getting Minutes
    Let's extract or get Minutes from a time object.

*/  
    const minut=new Date();
    console.log(minut.getMinutes());


/*
    * Getting seconds
    Let's extract or get seconds from a time object.

*/  
    const secon=new Date();
    console.log(secon.getSeconds());


/*
    * Getting Time
    this method give time in milliseconds starting, as unix time. We can get the unix time in two ways:

     1. Using getTime()
*/
    const dt=new Date();
    console.log(dt.getTime()); //1693143510071 , this is the number of seconds 
/*
    2. Using Date.Now()
*/
    const allSeconds=Date.now();
    console.log(allSeconds);

    const timeInSeconds=new Date().getTime(); 
    console.log(allSeconds==timeInSeconds); // true

//! Let us format these values to a human readable time format. Example :

const ex=new Date();
const yearsEx=ex.getFullYear(); // return in year
const monthEx=ex.getMonth(); // +1 return (0 - 11)
const dateEx=ex.getDate(); // return date (1 - 31)
const hoursEx=ex.getHours(); // returns number(0 - 23 );
const minutes=ex.getMinutes(); // returns number (0 - 59 );

console.log(`${dateEx}/${month}/${year} ${hours}:${minutes}`);
