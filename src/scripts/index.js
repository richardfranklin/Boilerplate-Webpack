
function component() {
	const element = document.createElement('div');
	element.innerHTML = 'Testing';

	return element;
}

document.body.appendChild(component());
