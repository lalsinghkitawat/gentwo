console.log("hello how are you general wine");
let product =[
    {
		id:1,
		images:'1.jpg',
		description:'this is wine product',
		title:'wine ',
		price:200,
	},
	{
		id:2,
		images:'2.jpg',
		description:'this is wine product',
		title:'wine ',
		price:330,
	},
	 {
		id:3,
		images:'3.jpg',
		description:'this wine product',
		title:'wine ',
		price:100,
	},
	 {
		id:4,
		images:'4.jpg',
		description:'this is wine product',
		title:'wine ',
		price:100,
	},
	 {
		id:5,
		images:'5.jpg',
		description:'this is wine product',
		title:'wine ',
		price:150,
	},
	 {
		id:6,
		images:'6.jpg',
		description:'this is wine product',
		title:'wine ',
		price:210,
	},
     {
		id:7,
		images:'7.jpg',
		description:'this is wine product',
		title:'wine ',
		price:270,
	},
		{
		id:8,
		images:'8.jpg',
		description:'this is wine product',
		title:'wine ',
		price:170,
	},
	{
		id:9,
		images:'9.jpg',
		description:'this is wine product',
		title:'wine ',
		price:370,
	},
	{
		id:10,
		images:'10.jpg',
		description:'this is wine product',
		title:'wine ',
		price:210,
	},
	{
		id:11,
		images:'11.jpg',
		description:'this is wine product',
		title:'wine ',
		price:220,
	},
	{
		id:12,
		images:'12.jpg',
		description:'this is wine product',
		title:'wine ',
		price:70,
	},
		{
		id:13,
		images:'13.jpg',
		description:'this is wine product',
		title:'wine ',
		price:770,
	},
	{
		id:14,
		images:'14.jpg',
		description:'this is wine product',
		title:'wine ',
		price:990,
	},
	{
		id:15,
		images:'15.jpg',
		description:'this is wine product',
		title:'wine ',
		price:1000,
	},
	{
		id:16,
		images:'16.jpg',
		description:'this is wine product',
		title:'wine ',
		price:2000,
	},
	{
		id:17,
		images:'17.jpg',
		description:'this is wine product',
		title:'wine ',
		price:2100,
	},
		{
		id:18,
		images:'18.jpg',
		description:'this is wine product',
		title:'wine ',
		price:2300,
	},
	{
		id:19,
		images:'19.jpg',
		description:'this is wine product',
		title:'wine ',
		price:2333,
	},
	{
		id:20,
		images:'20.jpg',
		description:'this is wine product',
		title:'wine ',
		price:3000,
	},
	{
		id:21,
		images:'21.jpg',
		description:'this is wine product',
		title:'wine ',
		price:2200,
	},
	
];   
    
     let list =document.getElementById("product")
      const page=()=>{
	   product.forEach((value,i)=>{
		  let newdiv = document.createElement("div");
		  newdiv.classList.add("item");
		  newdiv.innerHTML=`
		    <img src =" ./wine/${value.images}">
		    <div class="title">${value.title}</div>
		    <div class="discription">${value.description}</div>
		    <div class="price"> $ ${value.price}</div>
			<div class="star"><span>************</span></div>
			 <button class="button">Add To Cart</button>`
		   list.appendChild(newdiv);
	  })
	 }
	 
	 page();
	