function power_2_maximum(number){
    let i = 1;
    while(i ** 2 < number){
        i++;
    }
    console.log(i)

}

power_2_maximum(101);