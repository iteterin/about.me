document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if(sectionTop < triggerBottom) { section.classList.add('visible'); } 
            else                           { section.classList.remove('visible'); }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
});

async function fetchGitHubData() {
    const response = await fetch('https://api.github.com/users/iteterin'); 
    const data = await response.json();
    document.querySelector('.header h1').innerHTML += `${data.name}`;
    document.querySelector('.main p').innerHTML += `<div class="circle-image"><img src=${data.avatar_url} /></div>`;
}

fetchGitHubData();
/*============================================================================ */
