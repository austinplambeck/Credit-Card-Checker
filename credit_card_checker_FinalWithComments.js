// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];



// validateCred() function to validate the credit card numbers
const validateCred = (cardNum) => {
    let sum = 0; // initializing the variable for sum
    for (let i = cardNum.length - 1; i >= 0; i--) {
        let currValue = cardNum[i]; // setting a variable for the current value during iteration
        if ((cardNum.length - 1 - i) % 2 === 1) { // if statement to check if the current [i] position is even, or alternating
            currValue *= 2; // double these alternating values
            if (currValue > 9) {
                currValue -= 9; // subtract 9 from values greater than 9
            }
        }
        sum += currValue; // add up the [i]'s to get the total sum of the card's numbers
    }
    return sum % 10 === 0; // return statement when the sum % 10 is equal to 0 (valid card)
}

// Test the function:
console.log(validateCred(valid1)); // Should print true
console.log(validateCred(invalid1)); // Should print false


// function to check if the cards are invalid
const findInvalidCards = (cards) => {
    const invalid = []; // intializing an empty array, which will contain the invalid credit cards after this function runs

    for (let i = 0; i < cards.length; i++) { // for loop, iterating through the cards
        let currCard = cards[i]; // setting a variable for the current card during iteration

        if (!validateCred(currCard)) { // if they cards were not validated in the validateCred() function
            invalid.push(currCard); // they will be pushed to the invalid array
        }
    }
    return invalid; // return the invalid array, containing all of the invalid cards
}

// Testing the function:
console.log(findInvalidCards([valid1, valid2, valid3, valid4, valid5])); // Shouldn't print anything
console.log(findInvalidCards([invalid1, invalid2, invalid3, invalid4, invalid5])); // Should print all of the numbers
console.log(findInvalidCards(batch)); // Test if the mystery numbers are invalid


// function to determine which credit card companies have invalid cards
const idInvalidCardCompanies = (invalidBatch) => {
    const companies = []; // initialzing an empty array, which will contain all companies with invalid cards

    for (let i = 0; i < invalidBatch.length; i++) { // for loop, iterating through the batch of invalid cards
        switch (invalidBatch[i][0]) {
            case 3: // checking 3 as the first number (the unique number for Amex)
                if (companies.indexOf('Amex') === -1) { // if the companies array does not include 'Amex' yet,
                    companies.push('Amex'); // push 'Amex' to that array
                }
                break; // breaks the loop here for the current card [i], and begins again with the next card
            case 4: // checking 4 as the first number (the unique number for Visa)
                if (companies.indexOf('Visa') === -1) { // if the companies array does not include 'Visa' yet,
                    companies.push('Visa'); // push 'Visa' to that array
                }
                break; // having failed the other cases, the current card [i] breaks the loop here, and the loop begins again with the next card 
            case 5: // checking 5 as the first number (the unique number for Mastercard)
                if (companies.indexOf('Mastercard') === -1) { // if the companies array does not include 'Mastercard' yet,
                    companies.push('Mastercard'); // push 'Mastercard' to that array
                }
                break; // having failed the other cases, the current card [i] breaks the loop here, and the loop begins again with the next card
            case 6: // checking 6 as the first number (the unique number for Discover)
                if (companies.indexOf('Discover') === -1) { // if the companies array does not include 'Discover' yet,
                    companies.push('Discover'); // push 'Discover' to that array
                }
                break; // having failed the other cases, the current card [i] breaks the loop here, and the loop begins again with the next card
            default: // the default case, if all other cases fail
                console.log('Company not found'); // prints this statement if no other cases are fulfilled
        }
    }
    return companies; // returns the companies array, which should be filled with the companies with invalid cards
}

// Testing the function:
console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards




