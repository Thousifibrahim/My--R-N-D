fetch("https://fakestoreapi.com/products")
  .then(result => result.json())
  .then(data => {
                document.getElementById('api').innerHTML = data.map(product => `
                <h3>${product.title.slice(0,5)}</h3>
                <img src="${product.image}" width="60" height="60">
                <h4>price: ${product.price}</h4>
                <p>description : ${product.description.slice(0,60)}</p>
                `).join('');  
                })
  .catch(error => {
                    console.log(error);
                })

