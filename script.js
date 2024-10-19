const mainImages = document.querySelectorAll('.main-img img');
const thumbnails = document.querySelectorAll('.picture-thumbnail img');
const lightboxMainImg = document.querySelectorAll('.lightbox-main-img img');
const lightboxThumbnails = document.querySelectorAll('.lightbox-picture-thumbnail img');

thumbnails.forEach((thumbnail,index) => {
    thumbnail.addEventListener('click', () => {
        document.querySelector('.main-img .active').classList.remove('active');
        document.querySelector('.picture-thumbnail .active').classList.remove('active');

        mainImages[index].classList.add('active');
        thumbnail.classList.add('active');
    })
})


lightboxThumbnails.forEach((thumbnail,index) => {
    thumbnail.addEventListener('click', () => {
        document.querySelector('.lightbox-main-img .active').classList.remove('active');
        document.querySelector('.lightbox-picture-thumbnail .active').classList.remove('active');

        lightboxMainImg[index].classList.add('active');
        thumbnail.classList.add('active');
    })
})


mainImages.forEach((picture,index) => {
    picture.addEventListener('click', () => {
        const lightbox = document.querySelector('.lightbox');
        lightbox.style.display = 'flex';

        document.querySelector('.lightbox-main-img .active').classList.remove('active');
        document.querySelector('.lightbox-picture-thumbnail .active').classList.remove('active');

        lightboxMainImg[index].classList.add('active')
        lightboxThumbnails[index].classList.add('active');
    });
});


let quantity = 0
let cart = [];

function decrement() {
  if (quantity > 0) {
    quantity--;
    document.getElementById('qtyInput').value = quantity;
  }
}

function increment() {
  quantity++;
  document.getElementById('qtyInput').value = quantity;
}




const cartContainer = document.querySelector('.cart-container');
const iconCart = document.querySelector('header svg');
const cartQty = document.getElementById('qtyCart');

iconCart.addEventListener('click', () => {
    cartContainer.classList.toggle('active');
    cartContainer.classList.toggle('hidden');
});

cartQty.addEventListener('click', () => {
    cartContainer.classList.toggle('active');
    cartContainer.classList.toggle('hidden');
});


const inputQty = document.getElementById('qtyInput');
const addCart = document.querySelector('.add-to-cart');


addCart.addEventListener('click', () => {
    const inputQuantity = parseInt(inputQty.value);
    if (inputQuantity > 0) {
        qtyCart.style.display = 'flex';
        cartQty.textContent = inputQuantity;

        addToCart(inputQuantity);
    } else {
        qtyCart.style.display = 'none';
    }
});

function addToCart(inputQuantity) {
    const existingProduct = cart.find(item => item.name === 'Fall Limited Edition Sneakers')

    if (existingProduct) {
        existingProduct.quantity += inputQuantity;
    } else {

    const product = {
        price: 125.00,
        quantity: inputQuantity,
        name: 'Fall Limited Edition Sneakers'
    };
    cart.push(product);
}
    renderCart();
}    


const cartContent = document.querySelector('.cart-content');

function renderCart() {
    // Clear the cart container
    cartContent.innerHTML = '';

    if (cart.length === 0) {
        const emptyContainerCart = document.createElement('div');
        emptyContainerCart.classList.add('container-cart-content-empty');
        cartContent.appendChild(emptyContainerCart);

        const emptyCart = document.createElement('p');
        emptyCart.textContent = 'Your cart is empty';
        emptyCart.classList.add('cart-content-empty');
        emptyContainerCart.appendChild(emptyCart);
        return;
    } else {
        let checkoutBtn = document.querySelector('.btn-checkout');
        checkoutBtn.style.display = 'flex';
    }




    // Loop through the products in the cart and add them to the cart container
    for (let product of cart) {
        
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('cart-content-box');
        cartContent.appendChild(itemContainer);
        
        const itemDetails = document.createElement('div');
        itemDetails.classList.add('item-details');
        itemContainer.appendChild(itemDetails);

        const itemImage = document.createElement('img');
        itemImage.src = './images/image-product-1-thumbnail.jpg';
        itemImage.classList.add('img-box-info')
        itemDetails.appendChild(itemImage);

        const itemDescription = document.createElement('div');
        itemDescription.classList.add('item-description');
        itemDetails.appendChild(itemDescription);
        
        const itemName = document.createElement('h3');
        itemName.textContent = 'Fall Limited Edition Sneakers';
        itemName.classList.add('item-name');
        itemDescription.appendChild(itemName);
        
        const divPrice = document.createElement('div');
        divPrice.classList.add('price-box');
        itemDescription.appendChild(divPrice);

        const priceQtyItem = document.createElement('div');
        priceQtyItem.classList.add('price-qty-item');
        divPrice.appendChild(priceQtyItem);
        
        const itemPrice = document.createElement('p');
        itemPrice.textContent = `$${product.price.toFixed(2)}`;
        itemPrice.classList.add('item-price');
        priceQtyItem.appendChild(itemPrice);
        
        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `x ${product.quantity}`;
        itemQuantity.classList.add('item-quantity');
        priceQtyItem.appendChild(itemQuantity);

        const divItemTotal = document.createElement('div');
        divItemTotal.classList.add('item-total-price');
        divPrice.appendChild(divItemTotal);

        const itemTotal = document.createElement('p');
        itemTotal.textContent = `$${product.price * product.quantity.toFixed(2)}`;
        itemTotal.classList.add('item-total');
        divItemTotal.appendChild(itemTotal);
        
        const deleteImage = document.createElement('img');
        deleteImage.src = './images/icon-delete.svg';
        deleteImage.classList.add('delete-icon');
        itemContainer.appendChild(deleteImage);

        deleteImage.addEventListener('click', () => {
        cart = cart.filter(item => item !== product);

        quantity = 0;

        let checkoutBtn = document.querySelector('.btn-checkout');
        checkoutBtn.style.display = 'none';
        let inputQty = document.getElementById('qtyInput');
        inputQty.value = 0;
        let cartQty = document.getElementById('qtyCart');
        cartQty.style.display='none';

        renderCart(); 
    });
  };
};


const nextButton = document.querySelector('.icon-next');
const prevButton = document.querySelector('.icon-previous');


let currentIndex = 0;

nextButton.addEventListener('click', () => {
    document.querySelector('.lightbox-main-img .active').classList.remove('active');
    document.querySelector('.lightbox-picture-thumbnail .active').classList.remove('active');

    currentIndex++;
    if (currentIndex >= lightboxMainImg.length) {
        currentIndex = 0;
    }

    lightboxMainImg[currentIndex].classList.add('active');
    lightboxThumbnails[currentIndex].classList.add('active');
})


prevButton.addEventListener('click', () => {
    document.querySelector('.lightbox-main-img .active').classList.remove('active');
    document.querySelector('.lightbox-picture-thumbnail .active').classList.remove('active');

    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = lightboxMainImg.length - 1;
    }

    lightboxMainImg[currentIndex].classList.add('active');
    lightboxThumbnails[currentIndex].classList.add('active');
})

const iconClose = document.querySelector('.icon-close');

iconClose.addEventListener('click', () => {
    const lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';
})



const menuIcon = document.querySelector('.icon-menu');
const navLinks = document.querySelector('.nav-links');
const overlay = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
    navLinks.classList.add('open-menu');
    overlay.classList.add('visible');
});

const iconMenuClose = document.querySelector('.icon-menu-close');

iconMenuClose.addEventListener('click', () => {
    navLinks.classList.remove('open-menu');
    overlay.classList.remove('visible');
});

const nextBtn = document.querySelector('.icon-next-mobile');
const previousBtn = document.querySelector('.icon-previous-mobile');

let currentIndexMobile = 0;

nextBtn.addEventListener('click', () => {
    document.querySelector('.main-img .active').classList.remove('active');

    currentIndexMobile++;
    if (currentIndexMobile >= mainImages.length) {
        currentIndexMobile = 0;
    }

    mainImages[currentIndexMobile].classList.add('active');
})

previousBtn.addEventListener('click', () => {
    document.querySelector('.main-img .active').classList.remove('active');

    currentIndexMobile--;
    if (currentIndexMobile < 0) {
        currentIndexMobile = mainImages.length - 1;
    }

    mainImages[currentIndexMobile].classList.add('active');
})















