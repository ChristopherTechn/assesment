
  let num=(prompt("Enter a number and we will convert it into hours and minute"))
const hours=Math.floor(num/60);
const minutes =(num  % 60 );

const hours_minutes=(`${hours} hour(s) and ${minutes} minute(s)`)
console.log(alert(hours_minutes));