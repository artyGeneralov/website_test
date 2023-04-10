fetch('/products')
		.then(response => response.json())
		.then(products => {
				let productsHTML ='';
				products.forEach(product => {
						productsHTML += `<div class="product" id = "product_${product._id}">
											<div class = "product_row">
										<img class="product_main_image" src="images/p1.jpg">
										<span class="product_descriptor">
										<h1>${product.name}</h1><br><p>${product.description}</p>
										<p>${product.price}</p>
										</span>
										</div>
										<div class="product_options">
										<table>
										<td><a href="product_page.html">Product Details</a></td>
										<td><a class = "add_to_cart" href="#">Add to Cart <i class = "fa-solid fa-cart-shopping"></i>
										</a></td></table></div></div><hr>`;
				});
			document.querySelector('#productsWrapper').innerHTML = productsHTML;
		});
				 
