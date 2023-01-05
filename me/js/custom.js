function viewlist(){
	var d = [{
	image: "https://dii.dubaichamber.com/sites/default/files/city_thumb_image/manufacturing.jpg",
	title: "hello india",
	desc: "The manufacturing sector consists of firms engaged in chemical, mechanical, or physical transformation of materials, sub...	",
},
{
	image: "https://dii.dubaichamber.com/sites/default/files/city_thumb_image/wholesale-retail.jpg",
	title: "hello india",
	desc: "The wholesale sector comprises establishments engaged in wholesaling merchandise, generally without transformation, and ...",
},
{
	image: "https://dii.dubaichamber.com/sites/default/files/city_thumb_image/healthcare.jpg",
	title: "hello india",
	desc: "The healthcare industry comprises of providers of diagnostic, preventive, remedial, and therapeutic services, including ...",
},
{
	image: "https://dii.dubaichamber.com/sites/default/files/city_thumb_image/education.jpg",
	title: "hello india",
	desc: "This sector is a broad category of fields within the service industry that includes lodging, theme parks and additional ...",
},
{
	image: "https://dii.dubaichamber.com/sites/default/files/city_thumb_image/construction.jpg",
	title: "hello india",
	desc: "Companies in this industry include business and secretarial schools, technical and trade schools, and providers of tutor...",
},
{
	image: "https://dii.dubaichamber.com/sites/default/files/city_thumb_image/professionalservices.jpg",
	title: "hello india",
	desc: "The construction and real estate sector consists of companies engaged in preparation of land and construction, alteratio...",
},
{
	image: "https://dii.dubaichamber.com/sites/default/files/city_thumb_image/media.jpg",
	title: "hello india",
	desc: "Accounting, legal and other such services provided by a formally certified member of a professional body constitute prof...",
},
{
	image: "https://dii.dubaichamber.com/sites/default/files/city_thumb_image/energy.jpg",
	title: "hello india",
	desc: "Media includes every broadcasting and narrowcasting medium such as newspapers, magazines, TV, radio, billboards, direct ...",
},
{
	image: "https://dii.dubaichamber.com/sites/default/files/city_thumb_image/transport.jpg",
	title: "hello india",
	desc: "The energy and utilities industry is the totality of industries involved in the production and sale of energy, including...",
}
];

	for(var i = 0; i<d.length; i++){
		var el = document.createElement("div");
		el.setAttribute("class", "box");
		
		var img = document.createElement("img");
		img.setAttribute("src", d[i].image);
		el.appendChild(img);
		
		var innerEl = document.createElement("div");
		innerEl.setAttribute("class", "cont");
		
		var h2 = document.createElement("h2");
		h2.innerHTML = d[i].title;
		innerEl.appendChild(h2);
		
		var p = document.createElement("p");
		p.innerHTML = d[i].desc;
		innerEl.appendChild(p);
		el.appendChild(innerEl);
		
		var mainEl = document.getElementById("listview");
		mainEl.appendChild(el);
	}
}