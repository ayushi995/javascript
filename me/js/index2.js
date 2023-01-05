fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => response.json())
.then(result => {
	dataBind(result);
});


function dataBind(resp){
	document.getElementById("lists").innerHTML = "";
	var box = resp.map((item, index) => {
		var title = item.title.slice(0, 25);
		var id = item.id;
		var boxEl = document.createElement("div");
		boxEl.setAttribute("class", "box");
		boxEl.onclick = function(){
			details(id);
		}
		var titleEl = document.createElement("div");
		titleEl.setAttribute("class", "title");
		titleEl.innerHTML = item.title.length > 25 ? title + "..." : title;
		boxEl.appendChild(titleEl);
		var descEl = document.createElement("div");
		descEl.setAttribute("class", "desc");
		descEl.innerHTML = item.body;
		boxEl.appendChild(descEl);
		document.getElementById("lists").appendChild(boxEl);
		return boxEl;
	});
}


function details(id){
	console.log(id);
	var el = document.getElementById("lists");
	el.setAttribute("class", "hide");
	
	fetch("https://jsonplaceholder.typicode.com/posts/" + id)
	.then(response => response.json())
	.then(result => {
		var mainEl = document.getElementById("details");
		var headEl = document.createElement("h1");
		headEl.innerHTML = result.title;
		mainEl.appendChild(headEl);
		var bodyEl = document.createElement("p");
		bodyEl.innerHTML = result.body;
		mainEl.appendChild(bodyEl);
	});
}



function search(e){
	var searchname = e;
	fetch("https://jsonplaceholder.typicode.com/posts")
	.then(response => response.json())
	.then(result => {
		var filterdata = result.filter((item, index) => {
			return item.title.match(searchname)
		});
		dataBind(filterdata);
		console.log(filterdata);
	});
}
