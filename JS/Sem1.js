  
function grade1() {

    //arrays
    var gr = new Array();
    var pt = new Array();
    var ingr = new Array();
    var incr = new Array();

    // define valid grades and their values
    
    gr =["A+","A","A-","B+","B","B-","C+","C","D","F","NA"] 
    pt =[ 4,3.75,3.50,3.25,3,2.75,2.50,2.25 ,2,0,0]
   

    // retrieve user input
    ingr[0] = document.getElementById("111").value;
    ingr[1] = document.getElementById("112").value;
    ingr[2] = document.getElementById("113").value;
    ingr[3] = document.getElementById("114").value;
    ingr[4] = document.getElementById("115").value;
    ingr[5] = document.getElementById("116").value;
   
  

    //credits
    incr = [3,3,1.5,3,3,3]
    // incr2 = [3,1.5,3,1.5,3,3,3]
    
  

    // Calculate GPA

    var allgr = 0;
    var allcr = 0;
    var gpa = 0;
    //1ST SEMESTER
    for (var x = 0; x < ingr.length; x++) {
        if (ingr[x] == "") {
            alert("Error- Grade cannot be empty.");
            return 0;

        }

        else if (ingr[x] == gr[9] || ingr[x] == gr[10] ) {
            alert("Error- For Grade F / NA  GPA= Incomplete")
            var msg = "Incomplete"
            document.getElementById("demo1").innerHTML = msg;
            return 0;

        }
        var validgrcheck = 0;
        for (var xx = 0; xx < gr.length; xx++) {
            if (ingr[x] == gr[xx]) {
                allgr = allgr + (parseFloat(incr[x], 10) * pt[xx]);
                allcr = allcr + parseFloat(incr[x], 10);
                validgrcheck = 1;
                break;
            }

        }
        if (validgrcheck == 0) {
            alert("Error- Please enter correct input and  use standard  grades in the form of A A- B+ ...F.");
            return 0;
        }
    }
    //result
    var gpa = allgr / allcr;
    document.getElementById("demo1").innerHTML = gpa.toFixed(2);
   


    
}


  
function grade2() {

    //arrays
    var gr = new Array();
    var pt = new Array();
    var ingr = new Array();
    var incr = new Array();

    // define valid grades and their values
    
    gr =["A+","A","A-","B+","B","B-","C+","C","D","F","NA"] 
    pt =[ 4,3.75,3.50,3.25,3,2.75,2.50,2.25 ,2,0,0]
   

    // retrieve user input
    ingr[0] = document.getElementById("121").value;
    ingr[1] = document.getElementById("122").value;
    ingr[2] = document.getElementById("123").value;
    ingr[3] = document.getElementById("124").value;
    ingr[4] = document.getElementById("125").value;
    ingr[5] = document.getElementById("126").value;
    ingr[6] = document.getElementById("127").value;
  

    //credits
  incr = [3,1.5,3,1.5,3,3,3]
    
  

    // Calculate GPA

    var allgr = 0;
    var allcr = 0;
    var gpa = 0;
    //1ST SEMESTER
    for (var x = 0; x < ingr.length; x++) {
        if (ingr[x] == "") {
            alert("Error- Grade cannot be empty.");
            return 0;

        }

        else if (ingr[x] == gr[9] || ingr[x] == gr[10] ) {
            alert("Error- For Grade F / NA  GPA= Incomplete")
            var msg = "Incomplete"
            document.getElementById("demo1").innerHTML = msg;
            return 0;

        }
        var validgrcheck = 0;
        for (var xx = 0; xx < gr.length; xx++) {
            if (ingr[x] == gr[xx]) {
                allgr = allgr + (parseFloat(incr[x], 10) * pt[xx]);
                allcr = allcr + parseFloat(incr[x], 10);
                validgrcheck = 1;
                break;
            }

        }
        if (validgrcheck == 0) {
            alert("Error- Please enter correct input and  use standard  grades in the form of A A- B+ ...F.");
            return 0;
        }
    }
    //result
    var gpa = allgr / allcr;
    document.getElementById("demo1").innerHTML = gpa.toFixed(2);
   


    
}




