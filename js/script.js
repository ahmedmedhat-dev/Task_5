var product_titles = document.querySelectorAll(".product-item h2")

var product_btn = document.querySelectorAll(".product-item button")

var product_div = document.querySelector("#product-div")

var show_price_btn = document.querySelector("#show-price-btn")

var total_price_span = document.querySelector("#show-total-price")

var cartIcon = document.querySelector(".cart-icon")

var totalPrice = 0;

product_btn.forEach(button => {
    button.addEventListener("click", function() {
        const product_item = this.parentElement;  // the product-item of the clicked button
        const prod_title = product_item.querySelector("h2");
        totalPrice += +(product_item.getAttribute("price"))

        var p1 = document.createElement("p")
        p1.innerHTML = prod_title.textContent
        p1.style.textTransform = "capitalize" 
        p1.style.color = "#0b0bca" 
        p1.style.fontSize = "22px" 
        product_div.appendChild(p1);

        if (product_div.innerHTML != "") {
            show_price_btn.style.display = "block"
        }
    })
})



cartIcon.addEventListener("mousemove", function() {
    if(product_div.innerHTML!= "") {
        product_div.style.display = "block"
    }
})

cartIcon.addEventListener("mouseleave", function() {
    if(product_div.innerHTML!= "") {
        product_div.style.display = "none"
    }
})

show_price_btn.addEventListener("click", function() {
    total_price_span.innerHTML = ": " + totalPrice + "L.E"
})