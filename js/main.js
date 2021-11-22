var genCode = Math.floor(Math.random() * 6762321921);




function Generate(){

    

    

    document.getElementById('cdid').innerHTML = genCode;
   




}
function Check(){

    
    var CodeJL;


    valDoc = document.getElementById('codeinp').value;

    DocSty = document.getElementById('codeinp').style;

     CodeJL = document.getElementById('butgen').style;

  
    
        if(valDoc == ""){

            alert("Please firs generate verification code and put it in number input");
            CodeJL.borderColor = "red";
            DocSty.borderColor = "red";
            

        }
        else{
            if(valDoc == genCode){
                alert("tak");
                CodeJL.borderColor = "white";
                DocSty.borderColor = "white";
            }
            else{
                alert("Bad Code!");
                CodeJL.borderColor = "red";
                 DocSty.borderColor = "red";
               
            }
        }

        
    }
    function GoProject(){

        location.href = "https://github.com/Natrexq/AntybotSecure--by-Natrexq";

    }

    

    
