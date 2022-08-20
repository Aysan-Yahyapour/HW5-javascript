function  right_angle_triangle(a, b , c){
    if(a ** 2 === b ** 2 + c ** 2 || b ** 2 === c ** 2 + a ** 2 || c ** 2 === a ** 2 + b ** 2){
        console.log('yes');
    }else{
        console.log('no');
    }
} 

right_angle_triangle(5, 4, 3);
right_angle_triangle(6, 4, 3);