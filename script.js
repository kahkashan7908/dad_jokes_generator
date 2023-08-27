const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke")

const apikey="8sRgmInE56/m0HfLuSMz/g==JsnOfdPUSZMwc7qe";
const options = {
    method:"GET",
    headers: {"x-Api-key":apikey},
};

const apiurl="https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = 'Loading...';
        const response = await fetch(apiurl,options);//Wait for the response
        const data=await response.json(); // Wait for JSON data to be parsed
        
        btnEl.disabled = false;
        btnEl.innerText = 'Tell me a joke'

        jokeEl.innerText=data[0].joke
        
    } 
    catch (error) {
        jokeEl.innerText="An error happend,try again"
        btnEl.disabled = false;
        btnEl.innerText = 'Tell me a joke'
        
    }
   

}

btnEl.addEventListener("click", getJoke);
