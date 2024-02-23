//creating an XML HTTP Request Object 
const req = new XMLHttpRequest();
//what should i do and from where i have to connect 
req.open("GET", "https://restcountries.com/v3.1/all");
req.send(); // sending a request to the server
// what to do when the Request is completed successfully 
req.onload = function () {
  const obj = JSON.parse(this.response);
  for (let i = 0; i < obj.length; i++){
    console.log(obj[i].name.common);
    console.log(obj[i].region);
    console.log(obj[i].subregion);
    console.log(obj[i].population);;
  }
    
  }


  
