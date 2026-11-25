const navBar = document.getElementsByClassName('navbar')[0];
const navBarItems = navBar.querySelectorAll('.navbar-item.link');

for (let item of navBarItems) {
    item.addEventListener('mouseenter', function () {
        item.querySelector('.navbar-item-title').style.color = 'blue';
        item.querySelector('.navbar-item-icon').style.fill = 'blue';
    });

    item.addEventListener('mouseleave', function () {
        item.querySelector('.navbar-item-title').style.color = '';
        item.querySelector('.navbar-item-icon').style.fill = '';
    });

}

const projectLinks = document.querySelectorAll('.project-link');

for (const link of projectLinks) {
    link.addEventListener('mouseenter', function () {
        link.querySelector('.project-link-name').style.color = 'blue';
        link.querySelector('.project-link-icon').style.fill = 'blue';
        link.querySelector('.project-link-icon').style.stroke = 'blue';
    });

    link.addEventListener('mouseleave', function () {
        link.querySelector('.project-link-name').style.color = '';
        link.querySelector('.project-link-icon').style.fill = '';
        link.querySelector('.project-link-icon').style.stroke = '';
    });
}

