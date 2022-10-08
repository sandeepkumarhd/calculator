
let str="";

function result(num){
    if(num=="ac"){
        str = "";
        document.getElementById("res").value = str;
    }else if(num=="del"){
        str = str.slice(0,str.length-1);
        document.getElementById("res").value = str;
    }else if(num=="="){
        try{
            str = eval(str);
            document.getElementById("res").value = str;
            str = str.toString();
        }catch (err){
            document.getElementById("res").value = "Santax error"
        }
    }else{
        str = str + num;
        document.getElementById("res").value = str;
    }
}