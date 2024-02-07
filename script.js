document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var file = document.getElementById('excel-file').files[0];
    if (file) {
        // Ici, vous ajouteriez le code pour envoyer le fichier à votre service de backend ou API tierce.
        console.log("Fichier capturé : ", file.name);
    }
});
