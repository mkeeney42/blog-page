function displayBlogs(){
    const blogs = JSON.parse(localStorage.getItem("blogs")) || []
    blogs.forEach(blog => {
        const card = document.createElement('div')
        const userEl = document.createElement('h3')
        const titleEl = document.createElement('h4')
        const contentEl = document.createElement('p')
        const hrel = document.createElement('hr')
        userEl.textContent = `Created by ${blog.username}`
        titleEl.textContent = blog.title
        contentEl.textContent = blog.content
        userEl.classList.add('card-body')
        titleEl.classList.add('card-header')
        contentEl.classList.add('card-body')
        card.classList.add('card')
        card.append(titleEl,hrel,contentEl,userEl)
        document.querySelector('main').append(card)
    });
}


displayBlogs();