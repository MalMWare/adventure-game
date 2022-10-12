let firstAnswer = window.prompt("Do you head left or right?")
console.log(firstAnswer === "left")

//User selected left
if(firstAnswer === "left" || firstAnswer === "Left") {
 console.log("You selected left!")
 let secondAnswer = window.prompt("Do you go to the library or the kitchen?")
 //User selects kitchen
 if (secondAnswer === "kitchen") {
    console.log("You picked the wrong place! Work Slave!")
 }
 //User selects library
 else if (secondAnswer === "library") {
    console.log("You picked the right place! Burn it down!")
 }
}

//User selected right
else if(firstAnswer === "right" || firstAnswer === "Right") {
 window.alert("You selected right!")
 let secondAnswer = window.prompt("Do you go to the forest or the cave?")
 //User selects forest
 if (secondAnswer === "forest") {
    console.log("You picked the wrong place! Slenderman is there!")
 }
 //User selects cave
 else if (secondAnswer === "cave") {
    console.log("You picked the right place! Kill the Bear!")
 }

}

//User selects anything else
else {
    console.log("Game Over! Try Again!")
}