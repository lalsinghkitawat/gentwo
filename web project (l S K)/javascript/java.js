console.log("hello how are you");

let product =[
    {
		id:1,
		images:'1.jpg',
		description:'this is chocolate product',
		title:'chocolate ',
		price:200,
	},
	{
		id:2,
		images:'2.jpg',
		description:'this is chocolate product',
		title:'chocolate ',
		price:330,
	},
	 {
		id:3,
		images:'3.jpeg',
		description:'this chocolate product',
		title:'chocolate ',
		price:100,
	},
	 {
		id:4,
		images:'4.jpeg',
		description:'this is chocolate product',
		title:'chocolate ',
		price:100,
	},
	 {
		id:5,
		images:'5.jpeg',
		description:'this is chocolate product',
		title:'chocolate ',
		price:150,
	},
	 {
		id:6,
		images:'6.jpeg',
		description:'this is chocolate product',
		title:'chocolate ',
		price:210,
	},
     {
		id:7,
		images:'7.jpeg',
		description:'this is chocolate product',
		title:'chocolate ',
		price:270,
	},
];   
     let list =document.getElementById("product")
      const page=()=>{
	   product.forEach((value,i)=>{
		  let newdiv = document.createElement("div");
		  newdiv.classList.add("item");
		  newdiv.innerHTML=`
		    <img src = "../prodct_img/${value.images}">
		    <div class="title">${value.title}</div>
		    <div class="discription">${value.description}</div>
		    <div class="price"> $ ${value.price}</div>
			<div class="star"><span>************</span></div>
			 <button onclick=" cart()" class="button">Add To Cart</button>`
		   list.appendChild(newdiv);
		   
		      console.log(value)
	  })
	 }
	 
	 page();
	   let cartdata = document.getElementById("cart")
	 function cart(){
	   product.forEach((value,i)=>{
		  let newdiv1 = document.createElement("div");
		  newdiv1.classList.add("item2");
		  newdiv1.innerHTML=`
		    <img src = "../prodct_img/${value.images}">
		    <div class="title">${value.title}</div>
		    <div class="discription">${value.description}</div>
		    <div class="price"> $ ${value.price}</div>
			<div class="star"><span>************</span></div>
			 <button class="button">Add To Cart</button>`
		   cartdata.appendChild(newdiv1)
	  })
	 
	 }
	