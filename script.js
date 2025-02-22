let form = document.getElementById("form");
let submitBtn =  document.getElementById("submit");
let existBtn =  document.getElementById("existing");
let checkBox = document.getElementById("checkbox");
let username = document.getElementById("username");
let password = document.getElementById("password");



submitBtn.addEventListener("click" ,(e)=>{
	e.preventDefault();
	if(username.value!=="" && password.value!=="" && !checkBox.checked){
		localStorage.clear();
		alert("credentials are not stored");
	}
	else if(username.value!=="" && password.value!=="" && checkBox.checked){
		let formData = {
	'username':username.value,
	'password':password.value
}

		localStorage.setItem('formData',JSON.stringify(formData));
		// location.reload();
		existBtn.style.display = 'block';
	}
})

existBtn.addEventListener("click" ,()=>{
	let data = localStorage.getItem('formData');
	if(data){
	let parsedData = JSON.parse(data);
	alert(`Logged in as ${parsedData.username}`);
	}
})

