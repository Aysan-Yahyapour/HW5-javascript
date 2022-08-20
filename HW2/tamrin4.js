let x = 336;
let y = 360;
let gcd;

counter_x = 0
counter_y = 0;

for(i = 1; i <= x  &&  i <= y; i++){
    if(x % i == 0 && y % i == 0){
        gcd = i;
    }
    
}

 console.log(gcd)