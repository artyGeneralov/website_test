let shopping_list = [];

shopping_list = JSON.parse(localStorage.getItem('shopping_list_items') || '[]');

let iframe = document.querySelector('.top_menu_frame');
iframe.addEventListener('load', function(){
	let iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
	let counter = iframeDoc.getElementById("cart_counter");
	counter.textContent = shopping_list.length;
	let addButtons = document.getElementsByClassName("add_to_cart");

	for(let i = 0; i < addButtons.length; i++){
		addButtons[i].onclick = () => {
			event.preventDefault();
			let item = addButtons[i].closest(".product").querySelector(".product_descriptor h1").textContent;
			shopping_list.push(item);
			counter.textContent = shopping_list.length;
			localStorage.setItem('shopping_list_items', JSON.stringify(shopping_list));
			iframe.contentWindow.postMessage({type:'updateCartCounter'}, '*');
		};
	}
});


