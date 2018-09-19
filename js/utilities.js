const { Chart } = require("Chart.js");

class HttpReq {
  //get request
  static  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response =>response.text())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }
}

class UI {
  static displayContent(data) {
    //make an array from response and remove unnecessery elements
    const dataArr = Array.from(data).filter((elem, i) => {
      if (i % 2 === 0) {
        return elem;
      }})
    console.log(dataArr);

    //display numbers
    const output = document.querySelector(".output");
    output.classList.add("border", "border-danger", "mt-4", "p-2");

    //clear output
    if (output.hasChildNodes()) {
      output.removeChild(document.querySelector("p"));
    }

    //create p element
    const paragraph = document.createElement("p");
    const span = document.createElement("span");
    span.classList.add("span");
    span.textContent = "Generated numbers: ";
    output.prepend(span);

    //for each element add content to paragraph
    dataArr.forEach(data => {
      paragraph.textContent += `${data}, `;
    });

    //append ul to output div
    output.appendChild(paragraph);

    //callback to create chart
    this.displayChart(dataArr)
    return output;
  }

  static displayError(error) {
    const errorOutput = document.querySelector(".error");

    //create paragraph for error msg
    const paragraph = document.createElement("p");

    //add text content to paragraph
    paragraph.textContent = error;

    //add class to paragraph
    paragraph.className = "text-danger";

    //append paragraph to eror div
    errorOutput.appendChild(paragraph);

    //remove error msg after 3 seconds
    setTimeout(() => {
      document.querySelector("p").remove();
    }, 3000);
  }

  static displayChart(data) {
    //remove repeating elements from array
    const result = [];
    data.forEach(item => {
      if (result.indexOf(item) === -1) {
        result.push(item);
      }
    });
    console.log(result);

    //how mant times some elements are repeted
    const count = {};
    data.forEach(element => {
      count[element] = (count[element] || 0) + 1;
    });

    //display h3
    
    document.querySelector('h3').classList.remove("d-none")
   
   
   //creating chart
   var ctx = document.getElementById("myChart").getContext("2d");
    var myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: result.sort(),
        datasets: [
          {
            label: "# of repeats",
            data: Object.values(count) // array from object
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}

module.exports = { UI, HttpReq };
