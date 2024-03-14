let dataForm = document.getElementById("dataForm");

dataForm.addEventListener("submit", (e) => {
    //Keeps the page from refreshing on submit.
    e.preventDefault();
    
    let rpm, temperatureC, temperatureF, cup, cone;

    let loaded = document.getElementById('loaded').checked;
    let unloaded = document.getElementById('unloaded').checked;

    let cupChecked = document.getElementById('cup').checked;
    let coneChecked = document.getElementById('cone').checked;

    let speedElement = document.getElementById("speed");
    let temperatureElementC = document.getElementById("tempResult");
    let temperatureElementF = document.getElementById("tempResultF");

    let temperatureElementC2 = document.getElementById("tempResult2");
    let temperatureElementF2 = document.getElementById("tempResultF2");

    let coneElement = document.getElementById("coneResult");
    let cupElement = document.getElementById("cupResult");

    //reset strings for next submit call

    speedElement.innerText = temperatureElementC.innerText = temperatureElementF.innerText = coneElement.innerText = cupElement.innerText = "";

    console.log("cone checked: " + coneChecked);
    console.log("cup checked: " + cupChecked);
    
    //Grab our values for speed from the html file
    //This will either be in mph or kmph depending on what the user selects
    let speedInput = document.getElementById("speedInput");

    var units = document.getElementById("unitSelected");
    var selectedUnit = units.options[units.selectedIndex].text;

    let convertEquation = 60 * 2 *(Math.PI) * 18 * 0.0254;

    if (selectedUnit == "mph")
        rpm = (speedInput.value)/(convertEquation * (1/1609));
    

    else if (selectedUnit == "kmph")
        rpm = (speedInput.value * 1000)/(convertEquation)

    //if they chose unloaded and then healthy, calculate the control temp 

    if (document.getElementById("healthy").checked){
        //if loaded was selected, calculate temperature 100
        if (loaded)
            temperatureC = (0.0704 * rpm) + 5.355;
        else
            temperatureC = (0.0622 * rpm) - 3.618;

        temperatureF = (temperatureC * (9/5)) + 32;
        
        console.log("unrounded value for celcius: " + temperatureC);
        console.log("unrounded value for fahrenheit: " + temperatureF);
        
        temperatureC = Number(temperatureC.toFixed(2))
        temperatureF = Number(temperatureF.toFixed(2))

        temperatureElementC.innerText = temperatureC;
        temperatureElementF.innerText = temperatureF;
    }

    else if (document.getElementById("defective").checked){
        if (loaded){
            if (cupChecked){
                cup = (0.0659 * rpm) + 8.1054;
                cup = Number(cup.toFixed(2));
                cupElement.innerText = cup;
            }

            else if (coneChecked){
                cone = (0.0859 * rpm) + 2.1146;
                cone = Number(cone.toFixed(2));
                coneElement.innerText = cone;
            }
           temperatureC = (0.0704 * rpm) + 5.355;
        }

        else if (unloaded){
            if (cupChecked){
                cup = (0.0615 * rpm) - 3.8473;
                cup = Number(cup.toFixed(2));
                cupElement.innerText = cup;
            }
            else if (coneChecked){
                cone = (0.072 * rpm) - 2.994;
                cone = Number(cone.toFixed(2));
                coneElement.innerText = cone;
            }
            temperatureC = (0.0622 * rpm) - 3.618;
        }
        temperatureF = (temperatureC * (9/5)) + 32;

        temperatureC = Number(temperatureC.toFixed(2));
        temperatureF = Number(temperatureF.toFixed(2));

        temperatureElementC2.innerText = temperatureC;
        temperatureElementF2.innerText = temperatureF;

        // coneElement.innerText = cone;
        // cupElement.innerText = cup;
    }

    //Reset the values for the next submit

    rpm = temperatureC = temperatureF = cone = cup = 390;

    speedElement.innerText = rpm;

    // let maxThresholdResult = document.getElementById("maxThresholdResult");
    // let prelimThresholdResult = document.getElementById("preThresholdResult");

    // let preliminaryThreshold = (5.779 * (0.001 * rpm.value) - 0.1202); //5.779 * 10^-3(rpm) - 1.202 * 10^-1
    // let maxThreshold = (1.13 * (0.01 * rpm.value) - 0.839); //1.13*10^-2(rpm)-0.839
    
    // rmsInput.innerText = rpm.value;
    // rpm.value = ""; //reset the rpm for the next input
    
    // mph.innerText = mphConversion;
    // kmph.innerText = kmphConversion;

    // temp17Result.innerText = temperature;
    // temp100Result.innerText = temperature100;
    // maxThresholdResult.innerText = maxThreshold;
    // prelimThresholdResult.innerText = preliminaryThreshold;

    // temperature = temperature100 = maxThreshold = preliminaryThreshold = 0;
});
