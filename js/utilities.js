class HttpReq {
    //get request
    static get(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(response => response.text())
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
        }
      });

      //display numbers
      const output = document.querySelector(".output");
      output.classList.add("result");
  
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
      
      return output;
    }
  
    static displayError(error) {
      const errorOutput = document.querySelector(".error");
  
      //create paragraph for error msg
      const paragraph = document.createElement("p");
  
      //add text content to paragraph
      paragraph.textContent = error;
  
      //add class to paragraph
      paragraph.className = "red";
  
      //append paragraph to eror div
      errorOutput.appendChild(paragraph);
  
      //remove error msg after 3 seconds
      setTimeout(() => {
        document.querySelector("p").remove();
      }, 3000);
    }
    
  }