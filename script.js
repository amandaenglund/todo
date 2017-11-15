$(document).ready(function(){        

    sessionStorage.user = "test"
    sessionStorage.password = "password"

    //syns vid start
    $("input").show();     
    $(".loginButton").show();     
    $(".logoutButton").hide(); 

    $("#main").show();     
    $("#forgot").hide();     
    $("#member").hide(); 

    
    //klicka på knapparna
    $(".loginButton").click(function(){
        if ( $(".user").val() == sessionStorage.user && $(".password").val() == sessionStorage.password ) {
            // om rätt svar gör såhär
            console.log("rättttttt! PANNKAKA!")
            $("#member").show(); 

        } else {
            // om fel svar gör detta
            console.log("Fel fel fel")
            $("#forgot").show();     
        }

    });

    $(".logoutButton").click(function(){
        $("#main").show();     
        
    });
});


// var stuffToDo = [
//     ”Klipp gräset", 
//     ”Betala räkningar",
//     ”Köp mjölk", 
//     ”Spika upp tavlor"
//     ];
