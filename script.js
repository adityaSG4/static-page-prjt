function display(sectionId) {
    // Hide all sections
    document.getElementById('sectionhomepage').style.display = 'none';
    document.getElementById('sectionhdvr').style.display = 'none';
    document.getElementById('sectionfood').style.display = 'none';
    document.getElementById('sectiondiwali').style.display = 'none';
    document.getElementById('sectionpaper').style.display = 'none';

    // Display the selected section
    document.getElementById(sectionId).style.display = 'block';
}

function display(sectionId) {
    // Hide all sections
    document.querySelectorAll('[id^="section"]').forEach(function(section) {
        section.style.display = 'none';
    });

    // Display the selected section
    document.getElementById(sectionId).style.display = 'block';
}