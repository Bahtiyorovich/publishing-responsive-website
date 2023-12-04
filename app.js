const menu = document.querySelector('#menu-icon')
const menuList = document.querySelector('#menu-0')

menu.onclick = () => {
  menuList.classList.toggle('hide')
}
