// document.addEventListener('DOMContentLoaded', () => {
//     const menuDiv = document.querySelector('.menu');

//     healthyFoodItems.forEach(item => {
//         const foodDiv = document.createElement('div');
//         foodDiv.classList.add('food-item');

//         // Structure the content for the flip effect
//         const foodContent = `
//             <div class="flip-container">
//                 <div class="front">
//                     <img src="${item.image}" alt="${item.name}">
//                 </div>
//                 <div class="back">
//                     <div class="details-back">
//                         <i class="ri-heart-line icon"></i>
//                     </div>
//                 </div>
//             </div>
//             <div class="details">
//                 <h3>${item.name}</h3>
//                 <p>${item.description}</p>
//                 <div class="price">${item.price}</div>
//                 <div class="stars">⭐⭐⭐⭐⭐</div>
//                 <button class="add-to-cart">Add to Cart</button>
//             </div>
//         `;
//         foodDiv.innerHTML = foodContent;
//         menuDiv.appendChild(foodDiv);

//         // Add event listener for the Add to Cart button
//         foodDiv.querySelector('.add-to-cart').addEventListener('click', () => {
//             alert(`${item.name} added to cart!`);
//             addToCart(item);
//         });
//     });

//     // Function to add item to cart and store in localStorage
//     function addToCart(item) {
//         let cart = JSON.parse(localStorage.getItem('cart')) || [];
//         cart.push(item);
//         localStorage.setItem('cart', JSON.stringify(cart));
//     }
// });


document.addEventListener('DOMContentLoaded', () => {
    const menuDiv = document.querySelector('.menu');

    healthyFoodItems.forEach(item => {
        const foodDiv = document.createElement('div');
        foodDiv.classList.add('food-item');

        // Structure the content for the flip effect
        const foodContent = `
            <div class="flip-container">
                <div class="front">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="back">
                    <div class="details-back">
                        <i class="ri-heart-line icon"></i>
                    </div>
                </div>
            </div>
            <div class="details">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="price">${item.price}</div>
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        `;
        foodDiv.innerHTML = foodContent;
        menuDiv.appendChild(foodDiv);

        // Add event listener for the Add to Cart button
        foodDiv.querySelector('.add-to-cart').addEventListener('click', () => {
            alert(`${item.name} added to cart!`);
            addToCart(item);
        });

        // Add event listener for the heart icon
        foodDiv.querySelector('.icon').addEventListener('click', () => {
            alert(`${item.name} added to liked items!`);
            addTolike(item);
        });
    });

    // Function to add item to cart and store in localStorage
    function addToCart(item) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Function to add item to liked items and store in localStorage
    function addTolike(item) {
        let like = JSON.parse(localStorage.getItem('like')) || [];
        like.push(item);
        localStorage.setItem('like', JSON.stringify(like));
    }
});
