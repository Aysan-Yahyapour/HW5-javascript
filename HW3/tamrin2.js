
// راه اول: با یک تابع
// function divisor(number) {
//     let sum = 0;
//     for (let i = 1; i < number; i++) {

//         if (number % i === 0) {
//             sum = sum + i;
//         }

//     }
//     if (sum === number) {
//         console.log('yes');
//     } else {
//         console.log('no');
//     }

// }



// divisor(27);
// divisor(6);






// راه دوم: ۲ تا تابع

let sum = 0;
function check_sum_of_divisor(number) {

    if (divisor(number)) {
        if (sum === number) {
            console.log('yes');
        } else {
            console.log('no');
        }
    }

}

function divisor(number) {

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum = sum + i;
            // return true;
            
        }

    }
    return true;
    console.log(sum);
    
}


check_sum_of_divisor(6);
