console.log("hello how are you general ");
let product =[
    {
		id:1,
		images:'1.jpg',
		description:'this is grocery product',
		title:'grocery ',
		price:200,
	},
	{
		id:2,
		images:'2.jpg',
		description:'this is grocery product',
		title:'grocery ',
		price:330,
	},
	 {
		id:3,
		images:'3.jpg',
		description:'this grocery product',
		title:'grocery ',
		price:100,
	},
	 {
		id:4,
		images:'4.jpg',
		description:'this is grocery product',
		title:'grocery ',
		price:100,
	},
	 {
		id:5,
		images:'5.jpg',
		description:'this is grocery product',
		title:'grocery ',
		price:150,
	},
	 {
		id:6,
		images:'6.jpg',
		description:'this is grocery product',
		title:'grocery ',
		price:210,
	},
     {
		id:7,
		images:'7.jpg',
		description:'this is grocery product',
		title:'grocery ',
		price:270,
	},
	{
		id:8,
		images:'8.jpg',
		description:'this is grocery product',
		title:'grocery ',
		price:170,
	},
	{
		id:9,
		images:'9.jpg',
		description:'this is grocery product',
		title:'grocery ',
		price:370,
	},
	{
		id:10,
		images:'10.jpg',
		description:'this is grocery product',
		title:'grocery ',
		price:210,
	},
	{
		id:11,
		images:'11.jpeg',
		description:'this is grocery product',
		title:'grocery ',
		price:220,
	},
	{
		id:12,
		images:'12.jpeg',
		description:'this is grocery product',
		title:'grocery ',
		price:70,
	},
];   
    
     let list =document.getElementById("product")
      const page=()=>{
	   product.forEach((value,i)=>{
		  let newdiv = document.createElement("div");
		  newdiv.classList.add("item");
		  newdiv.innerHTML=`
		    <img src =" ./general/${value.images}">
		    <div class="title">${value.title}</div>
		    <div class="discription">${value.description}</div>
		    <div class="price"> $ ${value.price}</div>
			<div class="star"><span>************</span></div>
			 <button class="button">Add To Cart</button>`
		   list.appendChild(newdiv);
	  })
	 }
	 
	 page();
	 
	