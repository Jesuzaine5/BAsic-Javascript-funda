//nested means nest conditional statement inside a conditional statement'

let age = 18;
let experience = 3;

if(age >= 18){
  
    if(experience > 1){
        console.log("Youre Hired!");
    }else{
        console.log("You dont have experience"); // this is an example of nested operator {} then other {}
    }
}else{
    console.log("ZYou dont have experience");
}


