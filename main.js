//VARIABLES
let car ={
    make:'Lamborghini',
    model:'Countach',
    color:'white',
    Millage:0,
    isWorking:true,
    driveToWork(){
        alert(`Old Millage: ${this.Millage}`);
        this.Millage += 10;
        alert(`New Millage: ${this.Millage}`);
    },

}

//FUNCTION
//log all of our car's current stats to the console
/*
function reWriteStats(){

}
*/

//MAIN PROCESS
//Captures Keyboard input. Depending on the letter pressed it will "call" (execute) diferent functions.

document.onkeyup = (event)=>{
    //Captures the key pressed and convertes in to lower case and saves it to a variable
    let letter = String.fromCharCode(event.KeyCode).toLowerCase();

    if(letter==='d'){
        car.driveToWork();
        reWriteStats;
    }
}