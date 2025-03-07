const texts = [
    "Seller.", "Designer.", "Developer."
];

const socials = [
    {
        name: 'facebook',
        url: 'https://www.facebook.com/share/1XH7kThUjd/?mibextid=wwXIfr'
    },
    {
        name: 'messenger',
        url: 'https://m.me/khoindvn.esigncert'
    },
    {
        name: 'telegram',
        url: 'https://t.me/m/7P3IVuTSYTQ1'
    },
    {
        name: 'zalo',
        url: 'https://zalo.me/0386495528'}
]
const typingSpeed = 100; 
const deletingSpeed = 50; 
const pauseBeforeDeleting = 2000; 
let textIndex = 0; 
let charIndex = 0; 
let isDeleting = false; 

document.getElementById('menu-button').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
    navLinks.classList.toggle('box-shadow');
});

function typeText() {
    const currentText = texts[textIndex];
    
    if (!isDeleting && charIndex < currentText.length) {
 
        document.getElementById("typed-text").innerHTML = currentText.substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeText, typingSpeed);
    } else if (isDeleting && charIndex > 0) {

        document.getElementById("typed-text").innerHTML = currentText.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(typeText, deletingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {

        isDeleting = true;
        setTimeout(typeText, pauseBeforeDeleting);
    } else if (isDeleting && charIndex === 0) {

        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; 
        setTimeout(typeText, typingSpeed);
    }
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-fill');

    skillBars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        bar.style.width = percent;
    });
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function onScroll() {
    const skillSection = document.querySelector('.skills-section');
    if (isInViewport(skillSection)) {
        animateSkillBars();
        window.removeEventListener('scroll', onScroll); // To trigger the animation only once
    }
}

window.addEventListener('scroll', onScroll);


const socialButton = document.querySelector('.social-buttons');



socials.forEach(social => {
    const button = document.createElement('button');
    button.classList.add('social-btn', 'box-shadow');
    button.innerHTML = `<img src="img/logo/${social.name}.png" class="logo"/>`;
    button.addEventListener('click', () => {
        window.open(social.url, '_blank');
    });
    socialButton.appendChild(button);
});

function enter() {
    for (let i = 20; i >= 0; i--) {
        setTimeout(() => {
            document.querySelector('.enter').style.backdropFilter = `blur(${i}px)`;
            document.querySelector('.enter').style.WebkitBackdropFilter = `blur(${i}px)`;
        }, 40 * (20 - i));
    }
}

colorMode.addEventListener('click', () => {
    const bodi = document.body;
    const skill = document.querySelector('.skills-section');
    const wave1 = document.querySelector('#wave1');
    const wave2 = document.querySelector('#wave2');
    const svg1 = document.querySelector('.svg1');
    const svg2 = document.querySelector('.svg2');
    const current = document.body.style.getPropertyValue("--dark-mode") - 0;
    bodi.style.setProperty("--dark-mode", 1 - current);
    bodi.style.color = current ? 'black' : 'white';
    bodi.style.background = current ? 'linear-gradient(0deg, #94bbff, #fff)' : 'linear-gradient(0deg, #777272, #000';
    
    skill.style.backgroundColor = current ? 'white' : 'black';
    svg1.style.fill = current ? 'white' : 'black';
    wave2.style.backgroundColor = current ? 'white' : 'black';
    svg2.style.fill = current ? '#f4f4f4' : 'black';
})

document.addEventListener('DOMContentLoaded', () => {
    enter();
});
window.onload = onScroll;
window.onload = typeText;
