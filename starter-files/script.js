// API
const API_ENDPOINT = "https://yesno.wtf/api";

//1.Create a fetchAnswer function and call the API
//2. Output the API's response
function fetchAnswer() {
    fetch("API_ENDPOINT")
        .then(response => response.json())
        .then(data => {
            const answerDiv = document.getElementById("answer");
            answerDiv.textContent = data.answer;
    })
//5. Optional: add loading/error states    
    .catch(error => console.error("Error fetchin the API:", error));
}

//3. Attach fetchAnswer to an event listener
document.getElementById("fetchButton").addEventListener("click", function(){
            fetchAnswer();
           
//4. Clear output after 3 seconds       
            setTimeout(function() {
                document.getElementById("answer").textContent = "";
            }, 3000);
        });
    
