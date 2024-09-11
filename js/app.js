const figure = document.querySelectorAll(".btn");
const result = document.querySelector(".pdemo");

let lastInputType = ''; 

figure.forEach((node) => {
  node.addEventListener("mousedown", function () {
    const valueofnode = node.innerText.trim();
    const theresult = result.innerText.trim();
    
    
    if (result.innerText.includes("|")) {
      result.innerText = result.innerText.replace("|", "");
    }

    
    if (valueofnode === "AC") {
      result.innerText = " |"; 
      lastInputType = ''; 
      return;
    }

    
    if (valueofnode == "=") {
      try {
        let solution = eval(theresult);
        result.innerText = solution + " |";  
        lastInputType = 'number'; 
      } catch (error) {
        result.innerText = "Error |";
      }
      return;
    }

    
    const operators = ['+', '-', '*', '/'];
    if (operators.includes(valueofnode)) {
      
      if (lastInputType !== 'number') {
        return; 
      }
      lastInputType = 'operator'; 
    } else {
      
      lastInputType = 'number';
    }

    
    if (theresult == "0" || theresult == "Infinity" || theresult == "undefined") {
      result.innerText = "";
    }

    
    result.append(valueofnode);

    
    node.blur();
  });
});
