/* const URLParams = new URLSearchParams(window. location. search);
const id = URLParams.get("id");
const url = "https://epbwebmwtbqqnqduwafj.supabase.co/rest/v1/TSL";


const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwYndlYm13dGJxcW5xZHV3YWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5Njg2NDIsImV4cCI6MjA0MTU0NDY0Mn0.gqXIcmoXG6je8gxUzab9fsssLLOVFNJVekbH0Ki1YBc";

fetch("url" + id).then((response) => response.json()).then((data) => showProduct(data));



function showProduct(product) {
    console.log(product);
    document.querySelector("h1").textContent = product.produktnavn;

    
} */


const URLParams = new URLSearchParams(window. location. search);
const id = URLParams.get("id");
const url = "https://epbwebmwtbqqnqduwafj.supabase.co/rest/v1/TSL";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwYndlYm13dGJxcW5xZHV3YWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5Njg2NDIsImV4cCI6MjA0MTU0NDY0Mn0.gqXIcmoXG6je8gxUzab9fsssLLOVFNJVekbH0Ki1YBc";


const options = {
  headers: {
    apikey: key,
  },
};

fetch(url + id, options)
  .then((res) => res.json())
  .then(vis);

function vis(data) {
  console.log(data);
  document.querySelector("h1").textContent = data.produktnavn;
  document.querySelector("p").textContent = data.taksonomi3;
}