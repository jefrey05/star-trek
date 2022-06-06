
document.querySelector('button').addEventListener('click',apiRequest);
async function apiRequest(){
    const inputValue = document.querySelector('input').value;
    try{
   const response = await fetch(`https://star-trek-simple-api.herokuapp.com/api/${inputValue}`)
      const data = await response.json();
      console.log(data)
    }catch(error){
     console.log(error)
    }
}