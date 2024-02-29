function check(){
    if (document.getElementById("defective").checked ){
        document.getElementById("spallInput").style.display = "block";
    }
    else{
        document.getElementById("spallInput").style.display = "none";
    }
}

function unhide(){
    if(document.getElementById("healthy").checked){
        document.getElementById("healthyResults").style.display="block";
        document.getElementById("defectiveResults").style.display="none";

    }
    else if(document.getElementById("defective").checked){
        document.getElementById("defectiveResults").style.display="block";
        document.getElementById("healthyResults").style.display="none";

    }
    //check if the user chose healthy or defective
    //1st option: chose healthy...display temperature
    //2nd option: chose defective... display cup and cone 
}
