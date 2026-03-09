
// LOGIN → MAIN PAGE

function handleSignUp() {
    document.getElementById('login-page').style.display = 'none';
    document.getElementById('landing-page').style.display = 'block';
}


// NAVIGATION ENTRE LES PAGES

function showPage(page) {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('files-page').style.display = 'none';

    if (page === 'home') {
        document.getElementById('landing-page').style.display = 'block';
    } else if (page === 'files') {
        document.getElementById('files-page').style.display = 'block';
    }
}