
//If statement cases to check for province and then decide rate

//First if statement checks if province is Ontario
if (province == 'ONTARIO') {

    //uses ontario rate for rate 
    rate = ONTARIO_RATE;

    //amt set appropariately
    amt = base * rate;

} else if (province == 'Alberta') {

    //uses alberta rate for rate
    rate = ALBERTA_RATE;

    //amt set appropariately
    amt = base * rate;

} else if (province == 'Quebec') {

    //uses quebec rate for rate
    rate = QUEBEC_RATE;

    //sets points to 2
    points = 2;

    //amt set appropariately
    amt = base * rate;


} else {

    //if none of the provinces match then set rate to 1
    rate = 1;

    //change amount to be just base in this case
    amt = base;
}

//same calc is done in all statements (can bring it out then)
calc = 2 * basis(amt) + extra(amt) * 1.05;


//decided to split alberta and quebec for ease of being able to follow code