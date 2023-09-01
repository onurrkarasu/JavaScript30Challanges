/*
    ! Comparison Operators
    * In programming we compare values, we use comparison operators to compare two values. We check if a value is greater or less or equal to other value.

*/

/*
    *   Operator                Name                                        Example
    *     ==               Equal in value only:Equivalent                     x==y
    *    ===            Equal in value and data type: Exactly equal           x===y
    *     !=                   Not equal                                       x!=y
    *     >                     Greater than                                   x>y
    *     <                     Less than                                      x<y
    *    >=                     Greater than or equal to                       x>=y
    *    <=                     Less than or equal to                          x<=y
*/  
    //! Example  : Comparison Operators

    console.log(3 > 2 );    // true, because 3 is greater than 2
    console.log(3 >= 2);    // true, because 3 is greater than 2
    console.log(3 < 2);     // false,  because 3 is greater than 2
    console.log(2 < 3);     // true, because 2 is less than 3
    console.log(2 <= 3);    // true, because 2 is less than 3
    console.log(3 == 2);    // false, because 3 is not equal to 2
    console.log(3 != 2);    // true, because 3 is not equal to 2
    console.log(3 == '3');  // true, compare only value
    console.log(3 === '3');     // false, compare both value and data type
    console.log(3 !== '3');      // true, compare both value and data type
    console.log(3 != 3);        // false, compare only value
    console.log(3 !== 3);       // false, compare both value and data type
    console.log(0 == false);        // true, equivalent
    console.log(0 === false);       // false, not exactly the same
    console.log(0 == '');            // true, equivalent
    console.log(0 == ' ');          // true, equivalent
    console.log(0 === '');           // false, not exactly the same
    console.log(1 == true);          // true, equivalent
    console.log(1 === true);           // false, not exactly the same
    console.log(undefined == null);     // true
    console.log(undefined === null);    // false
    console.log(NaN == NaN);        // false, not equal
    console.log(NaN === NaN);         // false
    console.log(typeof NaN);         // number

    console.log('mango'.length == 'avocodo'.length); // false
    console.log('mango'.length != 'avocodo'.length); // true
    console.log('mango'.length < 'avocodo'.length); // true
    console.log('milk'.length == 'meat'.length);  // true
    console.log('milk'.length != 'meat'.length); // false
    console.log('tomato'.length == 'potato'.length); // true
    console.log('python'.length > 'dragon'.length); // false

/*
    Try to understand the above comparisons with some logic. Remembering without any logic might be difficult. JavaScript is somehow a wired kind
    of programming language. JavaScript code run and give you a result but unless you are good at it may not be the desired result.

    As rule of thumb, if a value is not true with == it will not be equal with === Using === is safer than using ==. 
    The following link has an exhaustive list of comparison of data types.

*/