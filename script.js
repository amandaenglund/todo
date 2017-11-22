$(document).ready(function(){        

    var user = "test"
    var password = "password"

    var stuffToDo = [
        "Klipp gräset", 
        "Betala räkningar",
        "Köp mjölk", 
        "Spika upp tavlor",
        "Mata katten"
        ];
    


    if (sessionStorage.ourUser != null) {
            
        // Är vi inloggade
        visaMember();
        

    } else {

        //om vi inte är inloggade
        visaMain();
        
    }

    //login-knappen
    $(".loginButton").click(function(){
      
        if ( $(".user").val() == user && $(".password").val() == password ) {
            // om rätt svar - visa member-sida
            visaMember();
            
            //printa arrayen - provat denna JQuery-kod som inte funkar
            //$("todo").HTML = stuffToDo;
            
            var myJSON = JSON.stringify(stuffToDo);
            document.getElementById("todo").innerHTML = myJSON;

        

        } else {
            // om fel svar - visa forgot-sida
            visaForgot();
        }

    });


    //logout-knappen
    $(".logoutButton").click(function(){
        visaMain();        
    });


    //visar dagens datum
    var date = new Date;
    $(".todaysDate").append(date.getFullYear(),
    "-", date.getMonth(), "-", date.getDate());



    //LITE FUNTIONER
    //sida som syns vid start
    function visaMain() {
        $("input").show();     
        $(".loginButton").show();     
        $(".logoutButton").hide(); 
    
        $("#main").show();     
        $("#forgot").hide();     
        $("#member").hide();
    };
            

    //visar member-sidan
    function visaMember() {
        $("#main").hide();    
        $("#forgot").hide();     
        $("#member").show(); 
        $(".logoutButton").show(); 
        $(".loginButton").hide();     
        $(".user").hide();     
        $(".password").hide();
        $(".namn").text($(".user").val());  
        sessionStorage.ourUser = $(".user").val();                   
    };


    //visar fel lösen-sidan
    function visaForgot() {
        $("#forgot").show(); 
        $("#main").hide();  
        $("#member").hide();    
    };

});


