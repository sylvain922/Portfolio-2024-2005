// Récupérer le bouton et vérifier si un thème est déjà stocké dans localStorage
const toggleButton = document.getElementById('toggle-theme');

// Vérifier et appliquer le thème au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    // Désactiver temporairement les transitions
    document.body.classList.add('no-transition');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark');
        toggleButton.checked = true;
        toggleButton.textContent = 'Mode Clair';
    } else {
        document.body.classList.remove('dark');
        toggleButton.checked = false;
        toggleButton.textContent = 'Mode Sombre';
    }

    // Re-activer les transitions après un court délai
    setTimeout(() => {
        document.body.classList.remove('no-transition');
    }, 50);
});


// Ajouter l'événement de bascule du mode
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const isDarkMode = document.body.classList.contains('dark');

    // Mettre à jour le texte du bouton
    toggleButton.textContent = isDarkMode ? 'Mode Clair' : 'Mode Sombre';

    // Sauvegarder la préférence de thème dans localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});
