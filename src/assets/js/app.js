// ТАБЫ





const tabHeaders = document.querySelectorAll('[data-tab]');

const contentBoxes = document.querySelectorAll('[data-tab-content]');

tabHeaders.forEach(function (item) {
    item.addEventListener('click', function () {

      
        contentBoxes.forEach(function (item) {
            item.classList.add('hidden');
        });

       
        const contentBox = document.querySelector('#' + this.dataset.tab);
        contentBox.classList.remove('hidden');

    })
})


// ACCORDEON
const headers = document.querySelectorAll("[data-name='accordeon-title']");

headers.forEach(function (item) {
    item.addEventListener('click', showContent);
})

function showContent() {
    this.nextElementSibling.classList.toggle('hidden');
}
