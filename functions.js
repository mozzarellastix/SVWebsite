function check(){
    if (document.getElementById("defective").checked ){
        document.getElementById("spallInput").style.display = "block";
    }
    else if (document.getElementById("healthy").checked){
        document.getElementById("spallInput").style.display = "none";
    }
}

function unhide(){
    if(document.getElementById("healthy").checked){
        // Display the healthy results while defective results stay hidden
        document.getElementById("healthyResults").style.display="block";
        document.getElementById("defectiveResults").style.display="none";
    }
    
    else if(document.getElementById("defective").checked){
        // Display the defective results while healthy results stay hidden
        document.getElementById("defectiveResults").style.display="block";
        document.getElementById("healthyResults").style.display="none";

        if (document.getElementById('cup').checked){
            document.getElementById("cupResults").style.display="block";
            document.getElementById("coneResults").style.display="none";
        }
        else if(document.getElementById('cone').checked){
            document.getElementById("cupResults").style.display="none";
            document.getElementById("coneResults").style.display="block";
        }
    }
}
