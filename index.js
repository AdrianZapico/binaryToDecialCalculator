/*
   potencia = 0;
    decimal = 0;
    for ( i = bin.length; i >= 0 ; i--) {
        decimal+=Math.pow(2,potencia)*bin;
        potencia ++;
        
    }


    
 
*/
$("#Bin").keypress(function (e) {
    if (e.which != 1 && e.which != 0 && (e.which > 49 || e.which < 48)) {
        $("#error").html("Only 1 or 0").stop().show().fadeOut("slow");
      return false;
   }
  });
  $("#Dec").keypress(function (e) {
    if (e.which != 1 && e.which != 0 && (e.which > 49 || e.which < 48)){
        $("#error").html("Only 1 or 0").stop().show().fadeOut("slow");
     return false;
   }
  });

$("#calcBtn").on("click", ()=>{
   
    
 
    
    let bin = $("#Bin").val();   
  

    
    $("#Dec").val(binaryToDecimal(bin));

   
})

function binaryToDecimal(binary){

    let decimal = 0;
    const binCount = binary.length;

    for(i = 0; i<binCount; i++){

        let position = binCount- 1- i;
        let basepower = 2**i;
        decimal += binary[position] * basepower;

    }

    return decimal;
    
}

