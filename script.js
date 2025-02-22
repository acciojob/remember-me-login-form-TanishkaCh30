let submitBtn =  document.querySelector("input#submit");
let existBtn =  document.getElementById("existing");
let checkBox = document.getElementById("checkbox");
let username = document.getElementById("username");
let password = document.getElementById("password");


submitBtn.addEventListener("click" ,(e)=>{
	e.preventDefault();
	if(username.value!=="" && password.value!=="" && !checkBox.checked){
		 localStorage.removeItem('credentials');
		alert("credentials are not stored");
		return;
	}
	else if(username.value!=="" && password.value!=="" && checkBox.checked){
		let credentials = {
	username:username.value,
	password:password.value
}

		localStorage.setItem('credentials', JSON.stringify(credentials));
		// location.reload();
		existBtn.style.display = 'block';
	}
})

existBtn.addEventListener("click" ,()=>{
	let data = localStorage.getItem('credentials');
  if (data) {
    let parsedData = JSON.parse(data);
    alert(`Logged in as ${parsedData.username}`);

	}
})

