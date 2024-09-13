const tabs = document.querySelectorAll('.open-menu,.navbar-close');
const allctn = document.querySelectorAll('.navbar-sidebar');

tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => { tab.classList.remove('active') })
        tab.classList.add('active')
        allctn.forEach(content => { content.classList.remove('active') })
        allctn[index].classList.add('active');
    })
})