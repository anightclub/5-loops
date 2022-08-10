
function checkSpeed() {
    let speed = document.getElementById('speed').value;
    let time = document.getElementById('hour').value;
    for (let  hour = 0; hour <= time; hour++) {
        let final = speed * hour + "<br>";
        document.getElementById('showResult').innerHTML += final;
    }
    // let result = speed * hour;
    // document.getElementById('showResult').innerText = result
}

    let length = 6;
    let fee = 2500;
    let per = 4/100;
    for (let fees = fee; fees <= ; fees++) {
        let final4 = fee + fee*per;
        document.getElementById('fee').innerText += final4;
        
    }

