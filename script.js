if(localStorage.getItem("setup")&&localStorage.getItem("punchline")){
    msg.innerHTML= `
   
              <h4>${localStorage.getItem("setup")}</h4>
         `
    pline.innerHTML = `<h4> ${localStorage.getItem("punchline")} </h4>`
  
  }else{
    alert("click the button for a new joke")
  }
  
  
  const joke = async() => {
  
    const response = await fetch("https://official-joke-api.appspot.com/random_joke")
    console.log(response);
    if(response.status==200){
      displayData = await response.json()
      console.log(displayData);
      msg.innerHTML= `
   
      <h4>${displayData.setup}</h4>
  `
  pline.innerHTML = `<h4> ${displayData.punchline} </h4>`
    
   
      localStorage.setItem("setup",displayData.setup)
      localStorage.setItem("punchline",displayData.punchline)
   
      
  
    }else{
      alert("Something went wrong")
    }
    
  
    
  }