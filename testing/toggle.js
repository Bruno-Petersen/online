// var checkbox = document.querySelector('input[name=theme]');
// checkbox.addEventListener('change', function() {
//     if(this.checked) {
//         document.documentElement.setAttribute('href', 'dark')
//     } else {
//         document.documentElement.setAttribute('href', 'light')
//     }
// })




var checkbox = document.querySelector('input[name=theme]');
checkbox.addEventListener('change', function() {
    if(this.checked) {
        trans()
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme', 'light')
    }
})

let trans = () => {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}