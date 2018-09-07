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
    //get request
    HttpReq.get(
      `https://www.random.org/integers/?num=${howMany.value}&min=${min.value}&max=${max.value}&col=${howMany.value}&base=10&format=plain&rnd=new`
    )
      .then(data => UI.displayContent(data))
      .catch(error => UI.displayError(error.message));
  }

  //clear inputs
  min.value = "";
  max.value = "";
  howMany.value = "";
});