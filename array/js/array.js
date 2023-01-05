fetch("https://jsonplaceholder.typicode.com/comments")
.then(response => response.json())
.then(result => {
	dataBind(result);
});

function dataBind(resp){
	
	var box = resp.map((item, index ) =>{
		var name = item.name.slice(0, 16);
		var body = item.body.slice(0, 100);
		var boxEl = document.createElement("div");
		boxEl.setAttribute("class", "box");
		var nameEl = document.createElement("h1");
		nameEl.innerHTML = item.name;
		nameEl.innerHTML = item.name.length > 16 ? name + "..." : name;		
		boxEl.appendChild(nameEl);
		var emailEl = document.createElement("h2");
		emailEl.innerHTML = item.email;		
		boxEl.appendChild(emailEl);
		var bodyEl = document.createElement("p");
		bodyEl.innerHTML = item.body;
		bodyEl.innerHTML = item.body.length > 100 ? body + "..." : body;		
		boxEl.appendChild(bodyEl);
		document.getElementById("main-div").appendChild(boxEl);
		return boxEl;
		console.log(main-div);
		
		
		
		
		
		
		
		
	});
}