let darkstyle = localStorage.getItem('darkstyle')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkstyle = () => {
    document.body.classList.add('darkstyle')
    localStorage.setItem('darkstyle', 'active')
} 

const disableDarkstyle = () => {
    document.body.classList.remove('darkstyle')
    localStorage.setItem('darkstyle', null)
}
if(darkstyle === "active") enableDarkstyle()

themeSwitch.addEventListener("click", () => {
   darkstyle = localStorage.getItem('darkstyle')
   darkstyle !==  "active" ? enableDarkstyle() : disableDarkstyle()
})