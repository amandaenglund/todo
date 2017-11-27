$(document).ready(function(){        

    var user = "test"
    var password = "password"

    var stuffToDo = [
        "Klipp gräset", 
        "Betala räkningar",
        "Köp mjölk", 
        "Spika upp tavlor",
        "Mata guldfisken"
        ];
    

        printArray();
        
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
            // och skriv ut ToDo-list

            //printa arrayen - provat denna JQuery-kod som inte funkar
            //$("todo").HTML = stuffToDo;
            
            // var myJSON = JSON.stringify(stuffToDo);
            // document.getElementById("todo").innerHTML = myJSON;

            //Jeppe kod
            // localStorage.setItem("stuffToDo", JSON.stringify(stuffToDo));
            // stuffToDo = JSON.parse(localStorage.getItem("stuffToDo"));
            
            // $.each(stuffToDo, function(index, value) {
            // $(".stuffList").append("<li>" + value + </li>");

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
        $("#namn").text($(".user").val());  
        sessionStorage.ourUser = $(".user").val();                   
    };


    //visar fel lösen-sidan
    function visaForgot() {
        $("#forgot").show(); 
        $("#main").hide();  
        $("#member").hide();    
    };

    //
    //Print Array funktioner
    //

    function printArray() {
        var printToDoList = "";
        //for är en loop
        for(var i = 0; i < stuffToDo.length; i++) {
            printToDoList += "<div>" + stuffToDo[i] + " | <a href='#' onclick='deleteToDo(" + i + ")' >Ta Bort</a> </div>";
        }
        document.getElementById("list").innerHTML = printToDoList;
        document.getElementById("number").innerHTML = stuffToDo.length;
    }
    

        $(".addToDoButton").click(function(){
        stuffToDo.push($(".toDoInput").val());
        printArray();
    });

    
    deleteToDo = function(i) {
        stuffToDo.splice(i,1);
        printArray();
    }

    console.log(deleteToDo);

    // function deleteToDo(i) {
    //     stuffToDo.splice(i,1);
    //     printArray();
    // };
    
    

});


