let data;



// ------------fetching data---------------
async function fetching() {
  try {
    const response = await fetch(
      "https://cdn.shopify.com/s/files/1/0564/3685/0790/files/singleProduct.json?v=1701948448"
    );
    data = await response.json();
    console.log(data);

    // Call the function to display product details after data is fetched
    displayProductDetails();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


function displayProductDetails() {
  const productId = data.product.id; // Update this line

  //-----------title--------------
  const title = document.getElementById("title");
  const titleEl = document.createElement("span");
  titleEl.innerHTML = data.product.title;
  title.appendChild(titleEl);



  //------------price detail-----------------------
  const prices = document.getElementById("prices");
  const price1 = document.createElement("span");
  const priceIn1 = document.createElement("span");
  priceIn1.innerHTML = data.product.price;
  const price2 = document.createElement("span");
  const priceIn2 = document.createElement("span");
  priceIn2.innerHTML = data.product.compare_at_price;
  price1.classList.add("default-design-text04");
  price2.classList.add("default-design-text06");

  prices.appendChild(price1);
  prices.appendChild(price2);
  price1.appendChild(priceIn1);
  price2.appendChild(priceIn2);



  //------------product Description---------------
  const prodDes = document.getElementById("productDes");
  prodDes.innerHTML = data.product.description;

  const productImages = data.product.images;

  // Displaying the id and images
  let productDetailsDiv = document.getElementById("imgdiv");

  let imgElement = document.createElement("img");
  imgElement.src = productImages[0].src;
  imgElement.alt = "Description of the image";
  imgElement.classList.add("default-design-rectangle4");

  productDetailsDiv.appendChild(imgElement);
  var sideimgs = document.getElementById("sideimg");
  productImages.forEach((image) => {
    let imgEl = document.createElement("img");
    imgEl.src = image.src;
    imgEl.alt = "Description of the image";
    imgEl.classList.add("default-design-rectangle6");
    sideimgs.appendChild(imgEl);
  });



  //------------colors---------------
  let selectedColor = "yellow"; // Default selected color

  function selectColor(color) {
    selectedColor = color;
    console.log(`Selected Color: ${selectedColor}`);
  }

  const color = document.getElementById("color");
  let col1 = document.createElement("div");
  col1.classList.add("default-design-group5");
  col1.setAttribute('id',"Yellow");
  col1.style.backgroundColor = "#ECDECC";
  col1.addEventListener("click", () =>{
     selectColor("yellow")
     alert(`yellow is selected`)
    } );

  color.appendChild(col1);


  let col2 = document.createElement("div");
  col2.classList.add("default-design-group5");
  col2.style.backgroundColor = "#BBD278";
  col2.setAttribute('id',"Green");
  col2.addEventListener("click", () =>{ 
    selectColor("Green")
    alert(`green is selected`)
  });

  color.appendChild(col2);

  
  let col3 = document.createElement("div");
  col3.classList.add("default-design-group5");
  col3.style.backgroundColor = "#BBC1F8";
  col3.setAttribute('id',"Blue");
  col3.addEventListener("click", () =>{
     selectColor("Blue")
     alert(`blue is selected`)
    });
  color.appendChild(col3);


  let col4 = document.createElement("div");
  col4.classList.add("default-design-group5");
  col4.style.backgroundColor = "#FFD3F8";
  col4.setAttribute('id',"pink");
  col4.addEventListener("click", () =>{ 
    selectColor("Pink")
    alert(`pink is selected`)
  });

  color.appendChild(col4);




  //---------------- Size variants-----------------
  const sizeSelector = document.getElementById("sizeSelector");
  const sizes = ["Small", "Medium", "Large", "Extra Large", "XXL"];

  sizes.forEach((size) => {
    const sizeButton = document.createElement("div");
    sizeButton.classList.add("default-design-frame21");
    sizeButton.innerHTML = `<span class="default-design-text12"><span>${size}</span></span>`;
    sizeButton.addEventListener("click", () => {
      selectSize(size)
      alert(`${size} is selected`)
    });
    sizeSelector.appendChild(sizeButton);
  });

  let selectedSize = "Medium"; // Default selected size

  function selectSize(size) {
    selectedSize = size;
    console.log(`Selected Size: ${selectedSize}`);
  }

  let quantity = 1; // Default quantity

  function incrementQuantity() {
    quantity += 1;
    updateQuantityUI();
  }

  function decrementQuantity() {
    if (quantity > 1) {
      quantity -= 1;
      updateQuantityUI();
    }
  }

  function updateQuantityUI() {
    const quantityElement = document.getElementById("quantity");
    quantityElement.textContent = quantity;
  }

  function addToCart() {
    console.log(`Added to Cart: ${selectedSize}, Quantity: ${quantity}`);
    const addedToCartPara=document.getElementById("addedToCartPara");
    let para=document.createElement('p');
    para.innerHTML=`${data.product.title} with Color ${selectedColor} and Size ${selectedSize} added to cart`;
    addedToCartPara.appendChild(para);
  }

  const incre=document.getElementById("increment")
  const decre=document.getElementById("decrement");
  incre.addEventListener("click",incrementQuantity);
  decre.addEventListener("click",decrementQuantity);
  const addToCartEve=document.getElementById("addToCart");
  addToCartEve.addEventListener("click",addToCart)
}

fetching();
