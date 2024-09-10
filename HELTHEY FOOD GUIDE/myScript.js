
// age Selection

document.getElementById('searchButton').addEventListener('click', function() {
    var ageRange = document.getElementById('ageRange').value;
    // Navigate to the corresponding page based on the selected age range
    window.location.href = ageRange + '.html';
});


document.getElementById('cartButton').addEventListener('click',function(){
    window.location.href = 'cart.html';
})

document.getElementById('wishlistButton').addEventListener('click',function(){
    window.location.href = 'like.html';
})