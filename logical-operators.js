/*
    !Logical Operators 

    * Two following symbols are the common logical operators : && (ampersand) , || (pipe) , ! (negation). The && operator gets true only
    * if the two operands are true. The || operator gets true either of the operand is true. the ! operator negates true to false and false to true.

*/

    //* && ampersand operator example : 

    const check =4>3 && 10>5;     // true && true -> true
    const check1=4>3 && 10<5;     // true && false -> false
    const check2=4<3 && 10<5;     // false && false -> false
    //console.log(check2);

    //* || pipe or operator , example

    const c=4>3 || 10>5;         // true  || true -> true
    const c1=4>3 || 10<5;       // true  || false -> true
    const c2=4<3 || 10<5;        // false || false -> false
    //console.log(c2);

    //* ! Negation Examples : 

    const ce=4>3;       // true
    let cheks=!(4>3);      //  false
    let isLightOn=true;
    let isLightOff=!isLightOn;      // false
    let isMarried=!false;  // false
    console.log(isMarried);

/*
    ! Incerement Operators : 
    In JavaScript  we use the increment operators to increase a value stored in a valiable. The increment could be pre or post increment.
    Let us see each of them.
*/  
    //! 1. Pre-increment
    let count=0;
    console.log(++count); // 1
    console.log(count); // 1

    //! 2. Post-increment
    let ct=0;
    console.log(ct++); // 0
    console.log(ct); // 1 

//! We use most of the time post-increment. At least you should remember how to use post-increment operator.

/*
    ! Decrement Operator
    In JavaScript we use the decrement operator to decrease a value stored in valiable. the decrement could be pre or post decrement.
    Let us see each of them.
*/
    //! 1.Pre-decrement
        let ct2=0;
        console.log(--ct2); // -1
        console.log(ct2); // -1 

        let ct3=0;
        console.log(ct3--); // 0 
        console.log(ct3);  // -1 


/*
    ! Ternary Operators  : 
    Ternary operatos allows to write a condition. Another way to write conditionals is using ternary operators. Look at the following
    examples :
*/
    let isRaining=true;
    isRaining
        ? console.log('You need a rain coat')
        : console.log('No need for a rain coat')
    isRaining=false;

    isRaining
        ? console.log('You need a rain coat')
        : console.log('No need for a rain coat');

    let numbers=5;
    numbers>0
        ? console.log(`${numbers} is a positivve number`)
        : console.log(`${numbers} is a negative number`);
    number=-5
    
    number>0
        ? console.log(`${numbers} is a positive number`)
        : console.log(`${numbers} is a negative number`);
