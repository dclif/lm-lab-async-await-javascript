import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

const fetchData = async (apiEndPoint) => {

  try{
    const resp = await fetch(apiEndPoint)
    const data = await resp.json()
    console.log(data)
  }
  catch(error) {
    console.log("Oh boi, there is an error: " + error)
  }
  
};

fetchData(jsonTypicode);
