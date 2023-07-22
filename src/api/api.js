// function for get the Data using api 
// use fetch method to get a api 
// 1.create a arrow function getData pass the api using fetch method .then function to get a response

export const getData=()=>{
    return fetch("http://localhost:8000/products")
    .then((res)=>{
      return res.json()
})
}