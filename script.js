// document.addEventListener('DOMContentLoaded', () => {
//     const bookMarkInput = document.getElementById('bookmarkInput')
//     const addBookmarkBtn = document.getElementById('addBookmarkBtn')
//     const bookmarkList = document.getElementById('bookmarkList')

//     function loadBookMark() {
//         const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
//         bookmarkList.innerHTML = '';
//         bookmarks.forEach((bookmark, index) => {
//             const li = document.createElement('li')
//             const link = document.createElement('a')
//             link.textContent = bookmark;
//             link.href = bookmark;

//             const delateBtn = document.createElement('button')
//             delateBtn.textContent = 'X'
//             delateBtn.classList.add('delate')
//             delateBtn.onclick = () => {
//                 removeBookMark(index)
//             };
//             li.appendChild(link)
//             li.appendChild(delateBtn)
//             bookmarkList.appendChild(li)

//         })
//     }

//     function addBookmark(){
//         const url = bookMarkInput.value.trim()
//         if(url) {
//             const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
//             bookmarks.push(url)
//             localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
//             bookMarkInput.value = ''
//             loadBookMark()
//         }
//     }

//     function removeBookMark(index) {
//         const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || []
//         bookmarks.splice(index, 1)
//         localStorage.setItem('bookmarks', JSON.stringify(bookmarks))
//         loadBookMark()
//     }

//     addBookmarkBtn.addEventListener('click', addBookmark)
//     loadBookMark()
// })



document.addEventListener('DOMContentLoaded', () => {
    const userNameInput = document.getElementById('username')
    const passwordInput = document.getElementById('password')
    const saveBtn = document.getElementById('saveBtn')

    function loadForm() {
        const saveusername = localStorage.getItem('username')
        const savepassword = localStorage.getItem('password') 
        if(saveusername) {
            userNameInput.value = saveusername

        }
        if(savepassword) {
            passwordInput.value = savepassword
        }
    }

    function saveform() {
        localStorage.setItem('username', userNameInput.value)
        localStorage.setItem('password', passwordInput.value)
    }

    saveBtn.addEventListener('click', saveform)
    loadForm()
})