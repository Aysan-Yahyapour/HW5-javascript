function user_info(first_name,last_name, age, gender, phone_no, email){
    return{
        first_name: first_name,
        last_name: last_name,
        age: age,
        gender: gender,
        phone_no: phone_no,
        email:email
    
    }
}

let person = user_info('soheil', 'saedi', 21,'male', '09197164064', 'sohel.saedi1379@gmail.com');
console.log(person)