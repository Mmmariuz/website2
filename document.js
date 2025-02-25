document.getElementById('toggle-button').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    updateButtonStyle();
});

function updateButtonStyle() {
    const button = document.getElementById('toggle-button');
    if (document.body.classList.contains('dark-mode')) {
        button.style.backgroundColor = '#81B29A';
        button.style.color = '#3D405B';
    } else {
        button.style.backgroundColor = '#3D405B';
        button.style.color = '#81B29A';
    }
}

// Initialize button style on page load
updateButtonStyle();
