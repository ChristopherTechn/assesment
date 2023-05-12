let angle=(prompt("Enter an angle and we will tell you which type of angle it is"))
if ((angle<0)||(angle>360)){
    console.log(alert("Angles only run from 0 to 360 enter another angle!!!"))
}
else if(angle<90){
    console.log(alert("This is an Acute angle"))
}
else if(angle==90){
    console.log(alert("This is a Right angle"))
}
else if((angle>90)&&(angle<180)){
    console.log(alert("This is an Obtuse angle"))
}
else if(angle==180){
    console.log(alert("This is a Straight angle"))
}

    //so that hey can run from 0 to 360 we can add another else if statement 
    //for values greater than 180
    else if((angle>180)&&(angle<=360)){
        console.log(alert("This is a Reflex angle"))
    }
else{
    console.log(alert("invalid input"))
}