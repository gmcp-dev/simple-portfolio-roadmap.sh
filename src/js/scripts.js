window.addEventListener('load', function() {
    const mainContainer = document.getElementById('main-container');

    fetch('layouts/nav.html').then(r => {
        r.text().then(v => {
            if (!mainContainer) {
                throw new Error('Main container is undefined');
            }

            mainContainer.insertAdjacentHTML('afterbegin', v);
        });
    });

    fetch('layouts/footer.html').then(r => {
        r.text().then(v => {
            if (!mainContainer) {
                throw new Error('Main container is undefined');
            }

            mainContainer.insertAdjacentHTML('beforeend', v);
        });
    });
    
});