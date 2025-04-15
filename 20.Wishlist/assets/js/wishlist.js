let wishlistItems = Document.querySelectorAll('.wishlist-item');
let userData = JSON.parse(localStorage.getItem('userData'));

let wishlist = userData.wishlist || [];

wishlistItems.forEach(item => {
    let itemId = item.getAttribute('data-id');
    let removeButton = item.querySelector('.remove-from-wishlist');
    
    removeButton.addEventListener('click', () => {
        removeFromWishlist(itemId);
        item.remove();
    });
});


function removeFromWishlist(itemId) {
    let index = wishlist.indexOf(itemId);
    if (index > -1) {
        wishlist.splice(index, 1);
        userData.wishlist = wishlist;
        localStorage.setItem('userData', JSON.stringify(userData));
    }
}

