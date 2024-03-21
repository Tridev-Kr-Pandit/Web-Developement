const btnSubmit = document.getElementById("btn-submit");
const btnRelode = document.getElementById("btn-relode");

btnSubmit.addEventListener('click', ()=>{
    let Weight = document.getElementById("bodyWeight").value;
    let Height = document.getElementById("bodyHeight").value;
    let bmiResult = document.getElementById("bmiResult");
    let bmiStatus = document.getElementById("bmiStatus");
    let WeightStatus = false;
    let HeightStatus = false;

    if(Weight === "" || Weight <= 0 || isNaN(Weight)){
        document.getElementById("weightError").innerHTML = "Plese Provied a valid Waight";
    }else{
        document.getElementById("weightError").innerHTML = "";
        WeightStatus=true;
    }

    if(Height === "" || Height <= 0 || isNaN(Height)){
        document.getElementById("heightError").innerHTML = "Plese Provied a valid Height";
    }else{
        document.getElementById("heightError").innerHTML = "";
        HeightStatus=true;
    }


    if(HeightStatus && WeightStatus)
    {
        let result = (Weight/((Height*Height)/10000)).toFixed(2);

        bmiResult.innerText = "Your BMI is:" + result;
        
        if(result< 18.6){
            bmiStatus.innerText = "Your are Under Weight";
        }
        else if(result >=18.6 && result <24.9)
        {
            bmiStatus.innerText = "Your are Normal";
        }
        else if(result >=25 && result <30)
        {
            bmiStatus.innerText = "Your are over the weight";
        }
        else if(result >=30 && result <35)
        {
            bmiStatus.innerText = "Your are Class I Obesity";
        }
        else if(result >=3530 && result <40)
        {
            bmiStatus.innerText = "Your are Class II Obesity";
        }
        else{
            bmiStatus.innerText = "Your are Class II Obesity";
        }
    }
}) 

btnRelode.addEventListener('click', ()=>{
    document.getElementById("bodyWeight").value = "";
    document.getElementById("bodyHeight").value = "";
    document.getElementById("bmiResult").innerText = "";
    document.getElementById("bmiStatus").innerText = "";
    document.getElementById("heightError").innerHTML = "";
    document.getElementById("weightError").innerHTML = "";
})

