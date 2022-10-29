/*
   potencia = 0;
    decimal = 0;
    for ( i = bin.length; i >= 0 ; i--) {
        decimal+=Math.pow(2,potencia)*bin;
        potencia ++;
        
    }


    
 
*/
  
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

