    function msg()
    {
        let name = Number(document.getElementById("submit").value);
        if(name>=0){
        let con= (name-32)*5/9
        let result= document.getElementById("result")
        let r= name + " Fahrenheit convert to celsius " + con.toFixed(2)
        result.innerHTML = r
        }
        else{
             const f_result = "Please Enter the Fahrenheit"
             let result=document.getElementById("result")
             result.innerHTML =  f_result
        }
       
    }
