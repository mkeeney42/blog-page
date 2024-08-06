Personal Blog
Description
This project is a two-page website where users can input and view blog posts. It features a content form for creating posts, dynamically rendered blog entries, and a light/dark mode toggle. The project demonstrates practical JavaScript skills and explores the Document Object Model (DOM) for dynamic content manipulation.

Table of Contents
Installation
Usage
File Structure
Features
License
Contributing
Questions
Installation
To run this project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/your-username/my-blog.git
Navigate to the project directory:

bash
Copy code
cd my-blog
Open index.html in your browser:

Simply double-click the index.html file in the project directory or drag it into your browser.

Usage
Landing Page:

Upon loading the app, you will see a form with fields for your username, blog title, and blog content. Fill in these fields to create a new blog post.
Creating a Post:

After entering your information, click the "Submit" button. The post will be saved to localStorage, and you will be redirected to the posts page.
Viewing Posts:

On the posts page, you can see all the blog posts you've created. Each post displays the author's username, the title, and the content.
Light/Dark Mode Toggle:

Use the toggle switch at the top of the posts page to switch between light and dark modes. This changes the visual theme of the page.
Navigation:

Use the "Back" button to return to the landing page and create more blog posts.
File Structure
The project is organized as follows:

md
Copy code
my-blog
├── assets
│   ├── css
│   │   ├── blog.css
│   │   ├── form.css
│   │   └── styles.css
│   └── js
│       ├── blog.js
│       ├── form.js
│       └── logic.js
├── index.html
├── blog.html
└── README.md
index.html: The landing page where users can submit new blog posts.
blog.html: The page that displays all saved blog posts.
assets/css: Contains stylesheets for the application.
assets/js: Contains JavaScript files that handle form submission, localStorage management, and UI updates.
Features
Form Submission: Easily create new blog posts by filling out a simple form.
Dynamic Rendering: Blog posts are dynamically rendered from localStorage.
Light/Dark Mode: Toggle between light and dark modes for a comfortable viewing experience.
LocalStorage: Blog posts are saved locally in your browser, allowing them to persist across sessions.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Contributions are welcome! If you'd like to contribute, please fork the repository, make your changes, and submit a pull request. For major changes, please open an issue first to discuss what you would like to change.

Questions
If you have any questions or need further assistance, please feel free to reach out:

GitHub: mkeeney41
Email: mkeeney4202@gmail.com

