var genCode = Math.floor(Math.random() * 6762321921);




function Generate(){

    

    

    document.getElementById('cdid').innerHTML = genCode;




}
function Check(){

    var valCode;



    valDoc = document.getElementById('codeinp').value;

    alert(valDoc);

    if(valDoc == genCode){
        alert("tak");
    }
    else{
        alert("nie");
    }

    

}