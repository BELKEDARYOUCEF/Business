function toggleSection(sectionId) {
    const sections = [
        "IMPORTANT",
        "I-THE_BUSINESS",
        "II-THE_PRODUCT",
        "III-THE_STORE",
        "IV-THE_LANDER",
        "V-THE_AD",
        "VI-MEDIA_BUYING",
        "Number2",
        "VIII-SCALING",
        "AL_BIDAYA",
    ];

    let anySectionVisible = false; // Indique si une section autre que l'accueil est affichée
    const accueil = document.getElementById("Contenu d'Accueil");

    sections.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            if (id === sectionId) {
                element.style.display = "block";
                anySectionVisible = true; // Une section est visible
            } else {
                element.style.display = "none";
            }
        }
    });

    // Gérer l'affichage du contenu d'accueil
    accueil.style.display = anySectionVisible ? "none" : "block";
}

// Exemples d'utilisation
function Form1() { toggleSection("IMPORTANT"); }
function Form2() { toggleSection("I-THE_BUSINESS"); }
function Form3() { toggleSection("II-THE_PRODUCT"); }
function Form4() { toggleSection("III-THE_STORE"); }
function Form5() { toggleSection("IV-THE_LANDER"); }
function Form6() { toggleSection("V-THE_AD"); }
function Form7() { toggleSection("VI-MEDIA_BUYING"); }
function Form8() { toggleSection("Number2"); }
function Form9() { toggleSection("VIII-SCALING"); }
function Form10() { toggleSection("AL_BIDAYA"); }

/*function toggleSection(sectionId) {
    const sections = [
        "Contenu d'Accueil",
        "IMPORTANT",
        "I-THE_BUSINESS",
        "II-THE_PRODUCT",
        "III-THE_STORE",
        "IV-THE_LANDER",
        "V-THE_AD",
        "VI-MEDIA_BUYING",
        "Number2",
        "VIII-SCALING",
        "AL_BIDAYA",
    ];

    sections.forEach(id => {
        const element = document.getElementById(id);
        const Accueil = document.getElementById("Contenu d'Accueil");
        if (element) {
            element.style.display = (id === sectionId && element.style.display === "none") ? "block" : "none";
        }
        else{
            Accueil.style.display="block";
        }
    });
}

// Exemples d'utilisation
function Form1() { toggleSection("IMPORTANT"); }
function Form2() { toggleSection("I-THE_BUSINESS"); }
function Form3() { toggleSection("II-THE_PRODUCT"); }
function Form4() { toggleSection("III-THE_STORE"); }
function Form5() { toggleSection("IV-THE_LANDER"); }
function Form6() { toggleSection("V-THE_AD"); }
function Form7() { toggleSection("VI-MEDIA_BUYING"); }
function Form8() { toggleSection("Number2"); }
function Form9() { toggleSection("VIII-SCALING"); }
function Form10() { toggleSection("AL_BIDAYA"); }*/