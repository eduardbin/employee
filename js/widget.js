'use strict';

let url = 'data/employees.json';
let spaceForUL = document.querySelector('#employeeList');

fetch(url)
	.then(response => response.json())
	.then(createEmployersList);

function createEmployersList(data) {
	createULForEmployers();
	createLIForEmployers(data);
};

function createULForEmployers() {
	let newUL = '<ul class="bulleted"></ul>';
	spaceForUL.innerHTML = newUL;
};

function createLIForEmployers(data) {
	let UL = document.querySelector('.bulleted');

	for (let employer of data) {
		console.log(employer.inoffice);
		if (employer.inoffice == true) {
			let newLI = `<li class="in">${employer.name}</li>`;
			UL.innerHTML += newLI;
		} else {
			let newLI = `<li class="out">${employer.name}</li>`;
			UL.innerHTML += newLI;
		};
	};
};