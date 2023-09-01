/*
    ! Arithmetic Operators
    Arithmetic operators are mathematical operators

    Addition (+) =  a + b
    Subtraction (-) =  a - b
    Multiplication (*) =  a * b
    Division (/) = a / b
    Modulus (%) =  a % b
    Exponential (**) = a ** b
*/

    let numOne=4;
    let numTwo=3;
    let sum=numOne+numTwo;
    let diff=numOne-numTwo;
    let mult=numOne*numTwo;
    let div=numOne/numTwo;
    let remainder=numOne%numTwo;
    let powerOf=numOne**numTwo;

    console.log(sum," ",diff," ",mult,"  ",div,"  ",remainder,"  ",powerOf); // 7,1,12,1.33,1, 64


    const PI=3.14;
    let radius=100;     // length in meter

    // let us calculate area of circle
    const areaOfCalculate=PI*radius*radius;
    console.log(areaOfCalculate);  //  314 m

    const gravity=9.81; // in m/s2
    let mass=72;    // in Kilogram

    // Let us calculate weight of an object
    const weight=mass*gravity;
    console.log(weight); // 706.32 N(Newton)

    const boilingPoint=100; // temperature in oC, boiling point of water
    const bodyTemp=37; // body temperature in oC
    

    // Concatenating string with numbers using string interpolation
    /*
        The boiling point water is 100 oC
        Human body temperature is 37 oC
        The gravity of earth is 9.81 m/s2.
    */
    console.log(`The boiling point of water is ${boilingPoint} oC\nHuman body temperature is ${bodyTemp} oC.\n\n
    The gravity of earth is ${gravity} m / s2.`);
