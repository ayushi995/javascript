var arr = [
	{
		id:1,
		name: "kapil chauhan",
		mobile: 9650138386,
		country: "indian",
		profile: "frontend developer"
	},
	{
		id:2,
		name: "Monu tyagi",
		mobile: 8884576245,
		country: "USA",
		profile: "Marketing"
	},
	{
		id:3,
		name: "Sonu tyagi",
		mobile: 8547569123,
		country: "Dubai",
		profile: "Sales"
	},
	{
		id:4,
		name: "Preeti tyagi",
		mobile: 9995478123,
		country: "China",
		profile: "Backend Developer"
	},
	{
		id:5,
		name: "Sonia tyagi",
		mobile: 9874568122,
		country: "indian",
		profile: "Manager"
	},
	{
		id:5,
		name: "shivangi tyagi",
		mobile: 9874568122,
		country: "indian",
		profile: "frontend developer"
	}
	
];

function showlist(arr){
	
	document.getElementById("lists").innerHTML = "";
	
	var map = arr.map((item, index) => {
		var boxEl = document.createElement("div");
		boxEl.setAttribute("class", "box");
		
		var nameEl = document.createElement("div");
		nameEl.setAttribute("class", "name");
		nameEl.innerHTML = item.name;
		boxEl.appendChild(nameEl);
		
		var mobileEl = document.createElement("div");
		mobileEl.setAttribute("class", "mobile");
		mobileEl.innerHTML = item.mobile;
		boxEl.appendChild(mobileEl);
		
		var profileEl = document.createElement("div");
		profileEl.setAttribute("class", "profile");
		profileEl.innerHTML = item.profile;
		boxEl.appendChild(profileEl);
		
		document.getElementById("lists").appendChild(boxEl);
	});
}
showlist(arr);


function showrofile(){
	var profile = arr.map((item, index) => {
		return item.profile;
	});
	profile = profile.filter((item, index) => profile.indexOf(item) == index);
	profile.map((item, index) => {
		var boxEl = document.createElement("div");
		boxEl.setAttribute("class", "p_filter");
		boxEl.innerHTML = item;
		boxEl.onclick = function(){
			filterByProfile(item);
		}
		document.getElementById("profile").appendChild(boxEl);
	})	
}
showrofile();

function filterByProfile(filtername){
	console.log(filtername);
	
	var filterData = arr.filter((item, index) => item.profile == filtername);
	showlist(filterData);
}




function showcountry(){
	var country = arr.map((item, index) => {
		return item.country;
	});
	country = country.filter((item, index) => country.indexOf(item) == index);
	country.map((item, index) => {
		var boxEl = document.createElement("option");
		boxEl.setAttribute("value", item);
		boxEl.innerHTML = item;
		document.getElementById("dropdown").appendChild(boxEl);
	})	
}
showcountry();


function filterBycountry(filtername){
	var filterData = arr.filter((item, index) => item.country == filtername);
	showlist(filterData);
}
