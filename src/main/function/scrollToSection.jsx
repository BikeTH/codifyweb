export default function ScrollToSection(id){
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        console.warn(`Element with ID ${id} not found.`);
    }
}