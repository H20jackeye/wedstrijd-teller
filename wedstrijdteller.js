console.log("hallo ")
let teller1 = 0;
let teller2 = 0;

function handelstartbutton(event) {
    console.log("you pressed the button!");
    console.dir(inputTeam1);

    let naam1 = inputTeam1.value;
    let naam2 = inputTeam2.value;

    // controleeer of naam 1 en 2 zijn ingevuld
    if (naam1 == '') {
        alert("voer naam 1 in!");
        return;
    }
    if (naam2 == ''){
        alert("voer naam 2 in!");
        return;
    }

    //de eigenschappen of propp]erties krijg je met de .
    nameTeam1.innerText = naam1
    nameTeam2.innerText = naam2

    if (servingTeam1.checked == true) {
        alert("Team 1 begint")
    }
    if (servingTeam2.checked == true) {
        alert("Team 2 begint")
    }

    // check nu de startbuttons!

    //if (start_team == 0){
    //    alert('welk Team moet er beginnen!!');
    //    return;
    //}
    
};
startButton.addEventListener('click', handelstartbutton);