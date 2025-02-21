

let var1;
let opr;
let var2;


function add(a,b) {
    //console.log(a + b);
    return a + b;
}

function sub(a,b) {
    //console.log(a - b);
    return a - b;
}

function pro(a,b) {
    //console.log(a * b);
    return a * b;
}

function div(a,b) {
    //console.log(a / b);

    if (b==0){
        return "Infinity............"
    }

    let divres = Math.round((a/b)*100)/100
    return divres;
}

/*function operate(var1,var2,opr){
    if (opr == "+"){
      add(var1,var2);
    }

    else if(opr == "-"){
        sub(var1,var2);
    }

    else if(opr == "*"){
        pro(var1,var2);
    }

    else if(opr == "/"){
        div(var1,var2);
    }
}*/

const ip1 = document.querySelector("#ip");
const ac1 = document.querySelector("#AC");

ac1.addEventListener("click",function(){ip1.value="";ip1.focus()});

document.querySelector("#zer").addEventListener("click",function(){ip1.value+="0";ip1.focus()})
document.querySelector("#one").addEventListener("click",function(){ip1.value+="1";ip1.focus()})
document.querySelector("#two").addEventListener("click",function(){ip1.value+="2";ip1.focus()})
document.querySelector("#thr").addEventListener("click",function(){ip1.value+="3";ip1.focus()})
document.querySelector("#fou").addEventListener("click",function(){ip1.value+="4";ip1.focus()})
document.querySelector("#fiv").addEventListener("click",function(){ip1.value+="5";ip1.focus()})
document.querySelector("#six").addEventListener("click",function(){ip1.value+="6";ip1.focus()})
document.querySelector("#sev").addEventListener("click",function(){ip1.value+="7";ip1.focus()})
document.querySelector("#eig").addEventListener("click",function(){ip1.value+="8";ip1.focus()})
document.querySelector("#nin").addEventListener("click",function(){ip1.value+="9";ip1.focus()})
document.querySelector("#dot").addEventListener("click",function(){ip1.value+=".";ip1.focus()})

document.querySelector("#a").addEventListener("click",function(){ip1.value+="+";ip1.focus()})
document.querySelector("#s").addEventListener("click",function(){ip1.value+="-";ip1.focus()})
document.querySelector("#p").addEventListener("click",function(){ip1.value+="x";ip1.focus()})
document.querySelector("#d").addEventListener("click",function(){ip1.value+="/";ip1.focus()})

document.querySelector("#equ").addEventListener("click",calc)



function calc(){
    let res = document.querySelector("#ip");

    let nos = res.value.split(/[\+\-\x\/]/).map(Number);
    console.log(nos);
    let ops = res.value.match(/[\+\-\x\/]/g);
    console.log(ops);

    let res1 = nos[0];

    if(ops.length<=0 || !ops){
        return
    }

    for(let i=0;i<ops.length;i++){
        let op = ops[i];
        if (op=="+"){
            res1 = add(res1,nos[i+1])
        }
        else if(op=="-"){
            res1 = sub(res1,nos[i+1])
        }
        else if(op=="x"){
            res1 = pro(res1,nos[i+1])
        }
        else if(op=="/"){
            res1 = div(res1,nos[i+1])
        }
    }

    res.value = res1;

}