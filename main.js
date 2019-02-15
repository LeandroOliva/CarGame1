//VARIABLES
let car ={
    make:'Lamborghini',
    model:'Countach',
    color:'white',
    millage:0,
    isWorking:true,
    driveToWork(){
        alert(`Old Millage: ${this.millage}`);
        this.millage += 10;
        alert(`New Millage: ${this.millage}`);
    },
    driveAroundUSA(){
        alert(`Old Millage: ${this.millage}`);
        this.millage += 7000;
        alert(`New Millage: ${this.millage}`);
        alert(`your car needs a tuneup!`);
        this.isWorking=false;
    },
    getTuneUp(){
        alert(`your car is fixed now!`);
        this.isWorking=true;
    },
    honk(){
        alert(`honk, honk`);
    }
};

//FUNCTION
//log all of our car's current stats to the console
reWriteStats = ()=>{
    console.log(`make: ${car.make}`);
    console.log(`model: ${car.model}`);
    console.log(`color: ${car.color}`);
    console.log(`millage: ${car.millage}`);
    console.log(`is working: ${car.isWorking}`);
    console.log(`--------------------------------------------`)
}


//MAIN PROCESS
//Captures Keyboard input. Depending on the letter pressed it will "call" (execute) diferent functions.

document.onkeyup = (event) => {
    //Captures the key pressed and convertes in to lower case and saves it to a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter ==="t") {
        car.getTuneUp();
        reWriteStats();
    }
    if(car.isWorking===true){
    if (letter ==="d") {
        car.driveToWork();
        reWriteStats();
    }
    if (letter ==="r") {
        car.driveAroundUSA();
        reWriteStats();
    }
    if (letter ==="h") {
        car.honk();
        reWriteStats();
    }

}else{
    console.log(`your car is not working! get a tune up.`)
}
}
