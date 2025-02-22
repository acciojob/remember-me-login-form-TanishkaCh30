let submitBtn =  document.querySelector("input#submit");
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
// 		let formData = {
// 	'username':username.value,
// 	'password':password.value
// }

		localStorage.setItem('username',username.value);
		localStorage.setItem('password',password.value);
		// location.reload();
		existBtn.style.display = 'block';
	}
})

existBtn.addEventListener("click" ,()=>{
	let data = localStorage.getItem('username');
	if(data){
	alert(`Logged in as ${data}`);
	}
})

