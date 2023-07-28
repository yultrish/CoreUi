window.addEventListener('load', function(){
    console.log('hellooooo');
    menu = document.querySelector('.menu')
    sideBar = document.querySelector('.sidebar')

    menu.addEventListener('click', function(){
        sideBar.style.display = 'block';
    })
})