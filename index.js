function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
       method: "POST",
       headers: {
           'content-type': 'application/json',
           'accept': 'application/json'
       },
       body: JSON.stringify({
           name: `${name}`,
           email: `${email}`
       }),
   })
   .then(response => response.json())
   .then(function(data) {
       const newDiv = document.createElement('div')
       document.querySelector('body').appendChild(newDiv)
       document.querySelector('div').innerHTML = data.id
   })
   .catch(function (error) {
       alert("Unauthorized Access");
       const newDiv2 = document.createElement("div")
       newDiv2.id = "Error"
       document.querySelector("body").appendChild(newDiv2)
       document.getElementById("Error").innerHTML = error.message
})
}
