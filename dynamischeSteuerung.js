document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("video2");
    const videoSource = document.getElementById("videoSource2");
    const iframe = document.getElementById("prototype2");
    const image = document.getElementById("image2");

    // Definiere die URLs für die Quellen
    const videoUrl = "path/to/video.mp4"; // Video-URL
    const iframeUrl = ""; // iFrame-URL (leer, wenn nicht vorhanden)
    const imageUrl = "path/to/image.jpg"; // Bild-URL

    // Prüfe Videoquelle
    if (videoUrl) {
        videoSource.src = videoUrl;
        video.style.display = "block";
        video.load(); // Stelle sicher, dass das Video geladen wird
    } else {
        video.style.display = "none";
    }

    // Prüfe iFrame-Quelle
    if (iframeUrl) {
        iframe.src = iframeUrl;
        iframe.style.display = "block";
    } else {
        iframe.style.display = "none";
    }

    // Prüfe Bildquelle
    if (imageUrl) {
        image.src = imageUrl;
        image.style.display = "block";
    } else {
        image.style.display = "none";
    }
});
