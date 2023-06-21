

const form=document.querySelector("form");
console.log(form);

  const calculateBMI=(height, weight)=>{
   // convert cm to m
   const height_meters=height/100;
   // square of height;
   const square_of_height=height_meters*height_meters;
   const result=weight/square_of_height;
   return result;
  }

  const checkBmi=(result)=>{
   let myBMI= document.querySelector("#BMI-result")
   let BMIscore= document.getElementById("BMIscore")
   let BMItext=document.getElementById("BMItext")
    if(result<18.6){
    myBMI.innerHTML=`Your BMI is ${result} you are ${"Under Weight"}`
    myBMI.style.color="red"
    }
    else if(result>18.6 && result<24.9){
       
        myBMI.innerHTML=`Your BMI is ${result} you are ${'Normal'}`
        myBMI.style.color="green"
    }
    else{
        myBMI.firstElementChild.style.fontWeight="blod"
        myBMI.innerHTML=`Your BMI is ${result} you are ${'Overweight'}`
        myBMI.style.color="yellow"
    }
  }


form.addEventListener("submit", (e)=>{
 e.preventDefault();
 const height= document.querySelector('#height').value;
 
 const weight= document.querySelector('#weight').value;
 console.log(height);
 console.log(weight);
  // calculate BMI
   const BMIresult=calculateBMI(height, weight)
   console.log("Final Result", BMIresult.toFixed(2));
  
    const result=BMIresult.toFixed(2);
    checkBmi(result)
    document.querySelector("#result").value=result;
    

})
