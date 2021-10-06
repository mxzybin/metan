let fuel = document.getElementById('fuel');
let run = document.getElementById('run');
let prBenz = document.getElementById('pr-benz');
let prProp = document.getElementById('pr-prop');
let prGbo = document.getElementById('pr-gbo');
let resMonth = document.getElementById('res-month');
let resYear = document.getElementById('res-year');
let resProf = document.getElementById('res-prof');
let inputs = document.getElementsByTagName('input');
let res1, res2, res3, runY, runM, fuelPos, runPos;
let fuelLive = document.getElementById('fuel-live');
let runLive = document.getElementById('run-live');

for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];

    window.onload = calc();

        input.addEventListener('input', calc);

    function calc(params) {

        // run.addEventListener('mousemove', dich2);
        // fuel.addEventListener('mousemove', dich);

    // function dich(params) {
        
        fuelLive.innerHTML = fuel.value;
        fuelPos = fuel.value-4;
        fuelLive.style.left = `${fuelPos*3.22}%`;
        fuelLive.style.transform = `translateY(-50%) translateX(-${fuelPos*3.22}%)`
        
    // }

    // function dich2(params) {
        runLive.innerHTML = run.value;
        runPos = (run.value-500)/100;
        runLive.style.left = `${runPos*0.34}%`;
        runLive.style.transform = `translateY(-50%) translateX(-${runPos*0.34}%)`
    // }

        runB = (run.value/100)*fuel.value*prBenz.value;
        runP = (run.value/100)*fuel.value*prProp.value;

        res1 = runB - runP;
        res2 = (runB - runP)*12;
        res3 = prGbo.value/res1;

        resMonth.innerHTML = Math.round(res1);
        resYear.innerHTML = Math.round(res2);
        resProf.innerHTML = Math.round(res3);
    }
}
