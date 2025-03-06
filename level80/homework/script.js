let password = 'Group 41 is best';

function guessPassword() {
    for (let attempts = 3; attempts > 0; attempts--) {
        let userInput = prompt('შეიყვანეთ პაროლი:');
        if (userInput === password) {
            alert('თქვენი შეყვანილი პაროლი სწორია');
            return;
        }
        if (attempts === 1) {
            alert('თქვენ ამოგეწურათ ცდების რაოდენობა');
        }
    }
}



function calculateFactorial(N) {
    let factorial = 1;
    for (let i = 1; i <= N; i++) {
        factorial *= i;
    }
    return factorial;
}




function countdown() {
    for (let i = 100; i >= 0; i--) {
        console.log(`დარჩენილია ${i} წამი`);
    }
}
