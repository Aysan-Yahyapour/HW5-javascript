const a = 13;
const b = 2;
const c = 3;


if(a + b <= c || a + c <= b || b + c <= a){
    console.log('no');
}else{
    console.log('yes');
}
// برای مثبت بودن شرط بذار
if( a < 0 && b < 0 && c < 0){
    console.log('invalid');
}