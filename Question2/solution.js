/**
 * Function that:
 *  a) it prints "foo" if NUMBER is divisible by 2;
    b) it prints "bar" if NUMBER is divisible by 7;
    c) it prints "foobar" if NUMBER is divisible by 14;
    d) it prints NUMBER value for other cases;
 *Parameter:
    Number is positive
 */

function foobar(number) {

    //Case 1 - print foo if divisible by 2
    if (number % 2 === 0) {
        document.write("foo");
    }

    //Case 2 - print bar if number is divisible by 7
    else if (number % 7 === 0) {
        document.write("bar");
    }

    //Case 3 - print foobar if number is divisble by 14
    else if (number % 14 === 0) {
        document.write("foobar");
    }

    //Case 4 - none of the above then print number
    else {
        document.write(number);
    }

}

//case tests
foobar(2);
foobar(7);
foobar(14);
foobar(15);