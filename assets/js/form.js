function handleFormSubmit(event){
    event.preventDefault()
    const username = document.getElementById('username').value.trim()
    const title = document.getElementById('title').value.trim()
    const content = document.getElementById('content').value.trim()
    if (!username || !title || !content){
        const errorEl = document.getElementById('error')
        errorEl.textContent = 'Please fill out the entire form!'
        setTimeout(()=>{
            errorEl.textContent = ''
        }, 3000)
        return 
    }
    const blog = {
        username,
        title,
        content
    }
    setLocalStorage(blog)
    window.location.href = "blog.html"
}

function setLocalStorage(blog){
    const blogs = JSON.parse(localStorage.getItem("blogs")) || []
    blogs.push(blog)
    localStorage.setItem("blogs", JSON.stringify(blogs))
} 








document.querySelector('form').addEventListener('submit', handleFormSubmit)