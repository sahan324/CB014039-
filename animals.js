const app = {
    currentPage: 'home',
    currentPageContent: '',
    init() {
        this.getContent();
        window.localStorage.setItem('content', JSON.stringify(this.content));
        const content = JSON.parse(window.localStorage.getItem('content'));
        this.content = content;
    },
    async getContent() {
        const response = await fetch('index.json');
        const data = await response.json();
        this.content = data;
        this.setPageContent();
    },
    setPageContent() {
        this.currentPageContent = this.content[this.currentPage].content;
    },
    changePage(page) {
        this.currentPage = page;
        this.setPageContent();
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('href').slice(1);
            app.changePage(page);
        });
    });
});
