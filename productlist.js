const url = "https://epbwebmwtbqqnqduwafj.supabase.co/rest/v1/TSL?limit=10";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVwYndlYm13dGJxcW5xZHV3YWZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU5Njg2NDIsImV4cCI6MjA0MTU0NDY0Mn0.gqXIcmoXG6je8gxUzab9fsssLLOVFNJVekbH0Ki1YBc";

const options = {
  headers: {
    apikey: key,
  },
};
fetch(url, options)
  .then((res) => res.json())
  .then(vis);

function vis(data) {
  //   looper kalder vis
  data.forEach((data) => {
    console.log(data);

    //fanger template
    const template = document.querySelector("#smallProductTemplate").content;
    // laver en kopi
    const copy = template.cloneNode(true);
    //ændre indhold

    copy.querySelector("h3").textContent = data.Produktnavn;
    copy.querySelector("p").textContent = data.Type;
    copy.querySelector("a").setAttribute("href", `product.html?id=${data.id}`);
    //apende
    document.querySelector(".grid_sec").appendChild(copy);
  });
}
