document.querySelectorAll('.imagegaller-link').forEach(links =>{
    links.addEventListener('click', (a) =>{
        a.preventDefault();
        let src = links.getAttribute('href');
        document.querySelector('.image').src =src;
    });
});