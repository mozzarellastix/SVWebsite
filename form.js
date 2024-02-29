let dataForm = document.getElementById("dataForm");

dataForm.addEventListener("submit", (e) => {
    //Keeps the page from refreshing on submit.
    e.preventDefault();
    
    let rpm;
    let temperature; 
    let cup;
    let cone; 

    let loaded = document.getElementById('loaded').checked;
    let unloaded = document.getElementById('unloaded').checked;

    console.log("loaded:" + loaded);
    console.log("unloaded: " + unloaded);
    
    //Grab our values for speed from the html file
    //This will either be in mph or kmph depending on what the user selects
    let speedInput = document.getElementById("speedInput");

    var units = document.getElementById("unitSelected");
    var selectedUnit = units.options[units.selectedIndex].text;

    let convertEquation = 60 * 2 *(Math.PI) * 18 * 0.0254;

    if (selectedUnit == "mph"){
        rpm = (speedInput.value)/(convertEquation * (1/1609));
    }

    else if (selectedUnit == "kmph"){
        rpm = (speedInput.value * 1000)/(convertEquation)
    }

    //if they chose unloaded and then healthy, calculate the control temp 
    
    //Display control temperatures if they select healthy
    console.log("rpm: " + rpm);

    if (document.getElementById("healthy").checked){
        //if loaded was selected, calculate temperature 100
        if (loaded){
            temperature = (0.0704 * rpm) + 5.355;
            console.log("temperature 100: " + temperature);
        }
        else{
            temperature = (0.0622 * rpm) - 3.618;
            console.log("temperature 17: " + temperature);
        }
    }

    else if (document.getElementById("defective").checked){
        if (loaded){
            cup = (0.0659 * rpm) + 8.1054;
            cone = (0.0859 * rpm) + 2.1146;
        }
        else if (unloaded){
            cup = (0.0615 * rpm) - 3.8473;
            cone = (0.072 * rpm) - 2.994;
        }
    }

    let speedElement = document.getElementById("speed");
    let temperatureElement = document.getElementById("tempResult");
    let coneElement = document.getElementById("coneResult");
    let cupElement = document.getElementById("cupResult");

    speedElement.innerText = rpm;
    temperatureElement.innerText = temperature;
    coneElement.innerText = cone;
    cupElement.innerText = cup;
    //check which dropdown was selected. 
    //if mph, convert the mph to rpm
    //if kmph, convert the kmph to rpm

    // //Grab our other values from the html page.
    // let unloadedTemp = document.getElementById("unloadedResult");
    // let loadedTemp = document.getElementById("loaded");

    // let maxThresholdResult = document.getElementById("maxThresholdResult");
    // let prelimThresholdResult = document.getElementById("preThresholdResult");

    // let preliminaryThreshold = (5.779 * (0.001 * rpm.value) - 0.1202); //5.779 * 10^-3(rpm) - 1.202 * 10^-1
    // let maxThreshold = (1.13 * (0.01 * rpm.value) - 0.839); //1.13*10^-2(rpm)-0.839


    // // if (rpm.value == "" || vibration.value == ""){
    // //     console.error("One of the values is empty.");
    // // }
    // // else{
    // //     console.log("Value in vibration:" + vibration.value);
    // //     console.log("Value in rpm:" + rpm.value);
    // //     console.log("temperature100: " + temperature100);
    // // }
    
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
