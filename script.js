

function submit() {
      const inputArea = document.getElementById("jsonInput");
      const outputArea = document.getElementById("jsonOutput");
      const jsonText = inputArea.value.trim();
      console.log("click");

      if (jsonText === "") {
          alert("Please enter a JSON to format!");
          return;
      }

      let jsonObj = JSON.parse(jsonText); 
      let formattedJson = JSON.stringify(jsonObj, null, 2);

      outputArea.value = formattedJson; 
    }