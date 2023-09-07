
//in document.getElementByID("Jenlisa"), the code in javascript should be read from TOP to BOTTOM, meaning you first input in the console log will read first


// the identifier should come first cause the system will seek the id of its variable
<h1 id= "Jenlisa" ></h1>

//now that identier has been read, the Chaelisa is real will pop up instead of Jenlisaa
document.getElementById("Jenlisa").innerHTML = "Chaelisa is real"; 


//the system will read from top to bottom
console.log("World");
console.log("Hello");
