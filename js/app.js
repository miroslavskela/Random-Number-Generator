const { UI, HttpReq } = require("./utilities.js");

//get input elements
let min = document.querySelector("#min");
let max = document.querySelector("#max");
let howMany = document.querySelector("#howMany");


const button = document.querySelector(".btn-primary");
button.addEventListener("click", e => {
  e.preventDefault();
  //check if elements are with inputs
  if (!min.value || !max.value || !howMany.value) {
    UI.displayError("All input fields are required");
  } else {
    const data = {
      n:howMany.value,
      min:min.value,
      max:max.value
    }
    console.log(data);
    //get request
    HttpReq.get(`https://api.random.org/json-rpc/1/invoke`)
      .then(data => console.log(data))
      .catch(error => UI.displayError(error.message));
  }

  //clear inputs
  min.value = "";
  max.value = "";
  howMany.value = "";
});