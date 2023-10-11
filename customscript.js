document.getElementById('search-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const searchInput = document.getElementById('search-input').value;
    

    window.location.href = '/Courier.html?query=' + encodeURIComponent(searchInput);
});

