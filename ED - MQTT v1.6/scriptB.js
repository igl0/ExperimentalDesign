var lightControle = 50;
var darkSize = 50;
var lightSize = 50;


function darkSwitch() {

    lightControle += 20;
    lightSize += 16;
    darkSize -= 16;
    if (lightControle > 100) {
        lightControle = 100;
    }
    if (lightSize > 90) {
        lightSize = 90;
        darkSize = 10;

    }

   // document.getElementById("lighter").style.width = lightSize + '%';
   // document.getElementById("darker").style.width = darkSize + '%';

    document.getElementById("lighter").style.height = lightSize + '%';
    document.getElementById("darker").style.height = darkSize + '%';

    sendMQTT(lightControle);
}

function brightSwitch() {
    lightControle -= 20;
    lightSize -= 16;
    darkSize += 16;

    if (lightControle < 0) {
        lightControle = 0;
    }
    if (darkSize > 90) {
        darkSize = 90;
        lightSize = 10;

    }

    //document.getElementById("lighter").style.width = lightSize + '%';
    //document.getElementById("darker").style.width = darkSize + '%';

    document.getElementById("lighter").style.height = lightSize + '%';
    document.getElementById("darker").style.height = darkSize + '%';

    sendMQTT(lightControle);

    
}












