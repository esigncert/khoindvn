
const apps = [{
        name: 'Esign Sunshine 1',
        url: 'https://www.facebook.com/24NDVN1111?mibextid=LQQJ4d',
        img: 'img/pf/profile-pic.png',
        descriptions: '🇻🇳 Việt Nam'
    },
    {
        name: 'Update TF LQ Hack Map & Mod Skin',
        url: 'https://sub4unlock.io/Lx24i',
        img: 'https://ipa.chungchi365.com/api/storage/image/preview/284326462fa3756ecddcbe18437d8779',
        descriptions: '🇻🇳 Việt Nam'
    },
    {
        name: 'Update Key LQ Hack Map & Mod Skin',
        url: 'https://sub4unlock.io/BqV3N7gwA9',
        img: 'img/pf/lq.png',
        descriptions: '🇻🇳 Việt Nam'
    },
    {
        name: 'TrollStore X',
        url: 'https://yeumoney.com/j98nb',
        img: 'https://raw.githubusercontent.com/alfiecg24/TrollInstallerX/main/Resources/Icon.png',
        descriptions: '🇻🇳 Việt Nam'
    },
    {
        name: 'Spotify Premium',
        url: 'https://sub4unlock.io/ZO6D2',
        img: 'img/pf/spotify.png',
        descriptions: '🇻🇳 Việt Nam'
    },
    {
        name: 'Tiktok Dark',
        url: 'https://sub4unlock.io/RWAQs',
        img: 'img/pf/tiktok.png',
        descriptions: '🇻🇳 Việt Nam'
    },
    {
        name: 'Video Star Old',
        url: 'https://sub4unlock.io/I87oR',
        img: 'img/pf/video.png',
        descriptions: '🇻🇳 Việt Nam'
    },
    {
        name: 'IPA Coin Master Speed',
        url: 'https://sub4unlock.io/mTOsI',
        img: 'img/pf/coin.png',
        descriptions: '🇻🇳 Việt Nam'
    },
    {
        name: 'IPA Apple Ware',
        url: 'https://sub4unlock.io/zhBcR',
        img: 'img/pf/robloc.png',
        descriptions: '🇻🇳 Việt Nam'
    },
    
]

const esigns = [
    {
        name: 'Esign ANBANG INSURANCE',
        url: 'https://api.khoindvn.eu.org/fK34ZN',
        img: 'img/pf/profile-pic.png',
        descriptions: ''
    },
    {
        name: 'Esign Bank Of Chongqing',
        url: 'https://api.khoindvn.eu.org/S3pESj',
        img: 'img/pf/profile-pic.png',
        descriptions: ''
    },{
        name: 'Esign China CITIC',
        url: 'https://api.khoindvn.eu.org/GqtMdU',
        img: 'img/pf/profile-pic.png',
        descriptions: ''
    },{
        name: 'Esign HDFC Life',
        url: 'https://api.khoindvn.eu.org/JdI495',
        img: 'img/pf/profile-pic.png',
        descriptions: ''
    },{
        name: 'Esign Henan Provincial',
        url: 'https://api.khoindvn.eu.org/aJJPlE',
        img: 'img/pf/profile-pic.png',
        descriptions: ''
    },{
        name: 'Esign Sunshine',
        url: 'https://api.khoindvn.eu.org/PYdXWo',
        img: 'img/pf/profile-pic.png',
        descriptions: ''
    },{
        name: 'Esign Sunshine 1',
        url: 'https://api.khoindvn.eu.org/EHXoPK',
        img: 'img/pf/profile-pic.png',
        descriptions: ''
    }
];




const cloudIcon = `<svg class="icon" style="width: 24px;height: 24px    ;vertical-align: middle;fill: currentColor;overflow: hidden;" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="739"><path d="M691.3 693.9c-24.7 0-44.8-20-44.8-44.8 0-24.7 20-44.8 44.8-44.8h40c190.6 0 176.8-274.4 0.2-268.1C671.2 37.2 208 145.1 299 445c-93-73.9-204.6 69.2-109.6 139.8 67.2 49.9 188.5-18.4 188.5 64.3 0 56.3-63.9 44.8-125.3 44.8-149.3 0-241.3-159.3-155.8-281.1 40.8-58.2 104.9-72.6 104.9-72.6C231.4 111.3 492.7-9.5 686.2 120c83.1 55.6 114.5 136.9 114.5 136.9 48.8 14.8 90.7 45.6 119.2 86.4 96 137.3 21.5 350.6-228.6 350.6zM514.2 335.8c0.2 0 0.3 0.1 0.5 0.1s0.3-0.1 0.5-0.1h-1z m177.1 421.1c0-17.5-45.8-17.3-63.3 0.1l-32.8 32.9c-14.1 14.1-38.2 4.2-38.2-15.8V380.6c0-24.5-17.9-44.4-42.3-44.7-24.5 0.3-47.2 20.1-47.2 44.7v393.5c0 19.9-24.1 29.9-38.2 15.8l-32.8-42.1c-17.5-17.5-45.3-9.3-62.8-9.3h-0.2c-17.5 44.8-17.6 55.1-0.1 72.6L449 931.5c35 35 91.6 37.3 126.6 2.3l115.7-114.6c17.5-17.5 0-45.2 0-62.7v0.4z" p-id="740"></path></svg>`
const appContainer = document.querySelector('.app-section');
const esignContainer = document.querySelector('.esign-section');

apps.forEach(app => {
    appContainer.innerHTML += render(app.name, app.url, app.img, app.descriptions);
});
esigns.forEach(esign => {
    esignContainer.innerHTML += render(esign.name, esign.url, esign.img, esign.descriptions);
});
function render(name, url, img, description) {
    return  `<div class="app-container">
        <div class="app">
            <img src="${img}" class="app-img box-shadow" alt="">
            <h1 style="margin-left: 1em">${name}<br>
                <p>${description}</p>
            </h1>
        </div>
        <i href="${url}" class="download-btn" style="color: #007aff;">
            ${cloudIcon}
        </i>
    </div>`
}