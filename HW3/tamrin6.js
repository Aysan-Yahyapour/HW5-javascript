function calculate_mark(mark, day){
    if(day != 0 && day != 7){
        mark = mark - day;
        console.log(mark)
    }
    else if(day === 0){
        console.log(mark = 20);
    }else if(day === 7){
        console.log(mark = 'x');
    }else if(day >= 1 && day <= 6){

            mark = mark - day;
            console.log(mark)

    }else if(mark<0){
        mark = 0;
    }

}        
        


calculate_mark(14,0);
calculate_mark(13,9);
