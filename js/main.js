function toggleTheme() {
    const html = document.documentElement;
    const icon = document.getElementById('icono-tema');

    const isDark = html.dataset.theme == "dark";
    html.dataset.theme = isDark ? "ligth" : "dark";

    icon.className = isDark ? "bi bi-moon-fill" : "bi bi-sun-fill";
}