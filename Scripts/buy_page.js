if(localStorage.getItem('shopping_list_items') != null){
	let shopping = JSON.parse(localStorage.getItem('shopping_list_items'));

	shopping.sort();

	// check how many item types there are
	let typeNames = [];
	let typeAmounts = [];
	let curAmount = 0;
	shopping.forEach(item => {
		if(curAmount == 0){
			typeNames.push(item);
			curAmount++;
		}
		else if(item != typeNames[typeNames.length - 1]){
			typeAmounts.push(curAmount);
			typeNames.push(item);
			curAmount = 1;
		}
		else
			curAmount++;
	});
	typeAmounts.push(curAmount);

	// add to table

	let table = document.querySelector('table');
	let cur = 0;
	typeNames.forEach(item => {
		let row = document.createElement('tr');
		let item_name_cell = document.createElement('td');
		let item_amount_cell = document.createElement('td');
		item_name_cell.textContent = item;
		item_amount_cell.textContent = "x "+typeAmounts[cur++];
		row.appendChild(item_name_cell);
		row.appendChild(item_amount_cell);
		table.appendChild(row);
		});
}

function clearCart(){
	localStorage.removeItem('shopping_list_items');
}
