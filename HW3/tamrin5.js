function calculate_bmi(height, weight){
    let bmi = weight/(height ** 2);
    console.log(bmi);
    if(bmi < 18.5){
        console.log(` your bmi calculate is ${bmi} so you are underweight.`);
    }else if(18.5<=bmi && bmi<25){
        console.log(`your bmi calculate is ${bmi} so you are normal`);
    }else if(25<=bmi && bmi<30){
        (`your bmi calculate is ${bmi} so you are overweight`);
    }else if(bmi>=30){
        console.log(`your bmi calculate is ${bmi} so you are obese`);
    }
}

calculate_bmi(1.71, 93);