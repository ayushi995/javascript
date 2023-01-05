var shopData = [
{
	id:1,
	title:"Solid Men Round Neck White, Black T-Shirt",
	price: 1499,
	net_price:1276,
	discount: 14,
	image:"https://rukminim1.flixcart.com/image/325/390/kflftzk0-0/t-shirt/x/u/j/m-rh-roundnck-x-hlfslv-blk-org-skin-rockhard-original-imafwyfax4vbfug4.jpeg?q=50",
},
{
	id:2,
	title:"Solid Men Polo Neck Green Dark Black T-Shirt",
	price: 1499,
	net_price:749,
	discount: 50,
	image:"https://rukminim1.flixcart.com/image/452/542/kflftzk0-0/t-shirt/n/r/k/xl-fc4054-fastcolors-original-imafwyf6dy5fggqu.jpeg?q=50",
},
{
	id:3,	
	title:"Printed Men Hooded Neck Dark Green, Black T-Shirt",
	price: 1499,
	net_price:749,
	discount: 50,
	image:"https://rukminim1.flixcart.com/image/325/390/kfoapow0-0/t-shirt/1/h/d/l-fs-140-dreams-olive-lewel-original-imafw2gxmczgfaeu.jpeg?q=50",
},
{
	id:4,	
	title:"Men Slim Fit Color Block Casual Shirt",
	price: 999,
	net_price:390,
	discount: 60,
	image:"https://rukminim1.flixcart.com/image/325/390/kfoapow0-0/t-shirt/y/y/y/l-kd286287-kay-dee-original-imafw2jfesgdmns6.jpeg?q=50",
},
{
	id:5,	
	title:"Striped Men Round Neck Maroon, Grey T-Shirt",
	price: 1399,
	net_price:254,
	discount: 81,
	image:"https://rukminim1.flixcart.com/image/325/390/kfoapow0-0/t-shirt/h/g/z/xl-m-hoodcut-black-ronit-leading-clothing-original-imafw2gxcqgbxcyu.jpeg?q=50",
},
{
	id:6,	
	title:"Rounded Men Black Neck Maroon, Grey T-Shirt",
	price: 1000,
	net_price:750,
	discount: 20,
	image:"https://rukminim1.flixcart.com/image/325/390/kflftzk0-0/t-shirt/t/u/1/l-effortless-charm-triple-color-blocked-wrath-original-imafwyfapnff6wv5.jpeg?q=50",
},
{
	id:7,	
	title:"Stripped Men Black Neck Maroon, Grey T-Shirt",
	price: 1500,
	net_price:750,
	discount: 50,
	image:"https://rukminim1.flixcart.com/image/325/390/kfoapow0-0/t-shirt/n/d/l/m-m-hoodcut-dgrey-ronit-leading-clothing-original-imafw2gxam7xggzq.jpeg?q=50",
},
{
	id:8,	
	title:" Men Black Neck Maroon, Grey T-Shirt",
	price: 900,
	net_price:600,
	discount: 30,
	image:"https://rukminim1.flixcart.com/image/325/390/kfoapow0-0/t-shirt/j/i/b/xl-kd286287-kay-dee-original-imafw2jygq9f2bwz.jpeg?q=50",
}
];



for(var i=0; i<shopData.length; i++){
	console.log(shopData[i].image);
	
	var boxEl = document.createElement("div");
	boxEl.setAttribute("class", "box");

	var imgEl = document.createElement("div");
	imgEl.setAttribute("class", "img");

	var img = document.createElement("img");
	img.setAttribute("src", shopData[i].image);
	imgEl.appendChild(img);
	boxEl.appendChild(imgEl);
	
	
	
	var title = document.createElement("div");
	title.setAttribute("class", "title");
	title.innerHTML = shopData[i].title;
	boxEl.appendChild(title);
	var prodPrice = document.createElement("div");
	prodPrice.setAttribute("class", "price");
	
	var spanPrice = document.createElement("span");
	spanPrice.setAttribute("class", "netprice");
	spanPrice.innerHTML = shopData[i].net_price + "Rs";
	prodPrice.appendChild(spanPrice);
	
	var fixPrice = document.createElement("span");
	fixPrice.setAttribute("class", "fixprice");
	fixPrice.innerHTML = "Rs" + shopData[i].price;
	prodPrice.appendChild(fixPrice);
	
	var disPrice = document.createElement("span");
	disPrice.setAttribute("class", "disprice");
	disPrice.innerHTML = shopData[i].discount + "% off";
	prodPrice.appendChild(disPrice);
	
	boxEl.appendChild(prodPrice);	
	var mainEl = document.getElementById("listview");
	mainEl.appendChild(boxEl);
	
}


