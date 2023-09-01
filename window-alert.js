/*
    * Window alert() method
    As you have seen at very beginning alert() method displays an alert box with a specified message and an OK button. It is a builtin
    method and it takes on argument.

    * Syntax
    ! alert(Message)
    ! alert('Welcome to 30DaysOfJavaScript')
    
    Do not use too much alert because it is destructing and annoying, use it just to test.
*/

/*
  *  Windows Prompt() method
    The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable.
    The prompt() methods takes two arguments. The second argument is optional

    *syntax
    ! prompt('required text', 'optional text')
*/
    let number=prompt('Enter number','Number goes here');
    console.log(number);

/*
    * Window confirm() method

    The confirm() method displays a dialog box with a special message, along with an OK and a Cancel button. A confirm box is often used to
    as permission from a user to execute something.  Window confirm() takes a string as an argument. clicking the ok yields true, whereas
    clicking the cancel button yields false value
*/
    const agree=confirm('Are you sure you like to delete?');
    console.log(agree); // result will be true or false based on what you click on the dialog box

// These are not all the window methods we will have a separate section to go deep into window methods.

