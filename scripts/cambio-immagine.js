const imageMap = {
    egg1: "immagini/kind-mita.webp",
    egg2: "immagini/cappie.webp",
    egg3: "immagini/Mita_full.webp",
    egg4: "immagini/chibi-mita.webp",
    egg5: "immagini/sleepy-mita.webp",
    egg6: "immagini/Mila.webp"
};

const imageElement = document.querySelector(".image-container img");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                if (imageMap[id]) {
                    imageElement.src = imageMap[id];
                
                    // Rimuove classi precedenti di dimensione personalizzata
                    imageElement.classList.remove("chibi-size");
                
                    // Applica dimensione speciale solo per egg4
                    if (id === "egg4") {
                        imageElement.classList.add("chibi-size");
                    }
                }
            }
        });
    },
    {
        root: null,
        rootMargin: '0px',
        threshold: 0.6
    }
);

Object.keys(imageMap).forEach(id => {
    const section = document.getElementById(id);
    if (section) {
        observer.observe(section);
    }
});