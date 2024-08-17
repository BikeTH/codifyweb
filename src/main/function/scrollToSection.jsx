export default function ScrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
        // Calculate the offset from the top of the document
        const elementTop = element.getBoundingClientRect().top + window.pageYOffset;
        // Get the height of the fixed navbar
        const navbarHeight = document.querySelector('.ITconsult-nav-bar').offsetHeight;
        // Scroll to the element minus the navbar height
        
        window.scrollTo({
            top: elementTop - navbarHeight,
            behavior: 'smooth'
        });
    } else {
        console.warn(`Element with ID ${id} not found.`);
    }
}