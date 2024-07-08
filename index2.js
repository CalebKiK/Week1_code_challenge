function checkSpeed(speed) { 
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    const licenseSuspensionLimit = 12;
    
    let demeritPoints = 0;

    if (speed <= speedLimit){
        console.log("Your speed is Ok");
    } else {
        const excessSpeed = Math.ceil((speed - speedLimit) / kmPerDemeritPoint);
        demeritPoints = excessSpeed;

        if (demeritPoints > licenseSuspensionLimit){
            console.log("Licence suspended");
        } else {
            console.log(`Demerit points: ${demeritPoints}`);
        }
    }
   
};

checkSpeed(69);
checkSpeed(110);
checkSpeed(140);

