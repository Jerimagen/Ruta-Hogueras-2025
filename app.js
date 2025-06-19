const stops = [
    {
        title: "Baver-Els Antigons",
        lema: "Vanity",
        artist: "Paco Torres (diseño), Paco Camallonga",
        description: "Sátira sobre la cultura del selfie, las apariencias y el culto a la imagen.",
        image: "images/baver.png",
        map: "https://www.google.com/maps/search/?api=1&query=Hoguera+Baver-Els+Antigons,+Alicante", // ENLACE DE MAPA FUNCIONAL
        hasOptional: true,
        optionalStopIndex: 1,
        mainRouteIndex: 0
    },
    {
        title: "Pla Bon Repós-La Goteta (Opcional)",
        lema: "Electio",
        artist: "Fran Sierra",
        description: "Hoguera 'de bolsillo' situada antes de salir del parking, en Av. Periodista Rodolfo Salazar. Una pieza que explorar antes de adentrarse en la ruta principal.",
        image: "images/goteta.png",
        map: "https://www.google.com/maps/search/?api=1&query=Hoguera+Pla+Bon+Repós-La+Goteta,+Alicante", // ENLACE DE MAPA FUNCIONAL
        optional: true,
        returnPoint: 0
    },
    {
        title: "Carolinas Altas",
        lema: "Primum non nocere",
        artist: "Paco Giner (diseño), Paco Hidalgo",
        description: "Reflexión crítica sobre los dilemas éticos en la medicina moderna. Una hoguera de 20m de altura máxima.",
        image: "images/carolinas_altas.png",
        map: "https://www.google.com/maps/search/?api=1&query=Hoguera+Carolinas+Altas,+Alicante", // ENLACE DE MAPA FUNCIONAL
        mainRouteIndex: 2
    },
    {
        title: "Foguerer-Carolinas",
        lema: "Barlovent",
        artist: "David Sánchez Llongo",
        description: "Representa un viaje simbólico 'con el viento a favor'. Es un histórico distrito foguerer desde 1974.",
        image: "images/foguerer.png",
        map: "https://www.google.com/maps/search/?api=1&query=Hoguera+Foguerer-Carolinas,+Alicante", // ENLACE DE MAPA FUNCIONAL
        hasOptional: true,
        optionalStopIndex: 4,
        mainRouteIndex: 3
    },
    {
        title: "Doctor Bérgez-Carolinas (Opcional)",
        lema: "Fungi",
        artist: "Joaquín Rubio",
        description: "Un micromundo ambientado en hongos. Esta hoguera 'de bolsillo' se encuentra a 120 m desviando por Av. Doctor Bérgez.",
        image: "images/bergez.png",
        map: "https://www.google.com/maps/search/?api=1&query=Hoguera+Doctor+Bérgez-Carolinas,+Alicante", // ENLACE DE MAPA FUNCIONAL
        optional: true,
        returnPoint: 3
    },
    {
        title: "Parada: Bar Guillermo",
        lema: null,
        artist: null,
        description: "Famoso por sus tapas de gambas a la plancha y caña fría. Un ambiente local tradicional con un precio medio.",
        image: "images/guillermo.png",
        map: "https://www.google.com/maps/search/?api=1&query=Bar+Guillermo,+Alicante", // ENLACE DE MAPA FUNCIONAL
        mainRouteIndex: 5
    },
    {
        title: "Sagrada Familia",
        lema: "Al revés te lo digo para que me entiendas",
        artist: "Pere Baenas",
        description: "Monumental hoguera con guiños a la cultura popular. Su lema es una crítica a las incoherencias sociales mediante refranes al revés.",
        image: "images/sagrada.png",
        map: "https://www.google.com/maps/search/?api=1&query=Hoguera+Sagrada+Familia,+Alicante", // ENLACE DE MAPA FUNCIONAL
        hasOptional: true,
        optionalStopIndex: 7,
        mainRouteIndex: 6
    },
    {
        title: "Carolines Baixes (Opcional)",
        lema: "Terra",
        artist: "Pau Soler",
        description: "Enfocada en ecología y sostenibilidad. Esta hoguera 'de bolsillo' se encuentra girando a Cronista Viravens (paralela a Maestro Alonso).",
        image: "images/baixes.png",
        map: "https://www.google.com/maps/search/?api=1&query=Hoguera+Carolines+Baixes,+Alicante", // ENLACE DE MAPA FUNCIONAL
        optional: true,
        returnPoint: 6
    },
    {
        title: "Sèneca-Autobusos",
        lema: "Atracció Fatal",
        artist: "José Gallego & Toni Pérez",
        description: "Sátira sobre ferias y consumismo, alertando contra los excesos. ¡Fue el Ninot Indultat de 2025!",
        image: "images/seneca.png",
        map: "https://www.google.com/maps/search/?api=1&query=Hoguera+Sèneca-Autobusos,+Alicante", // ENLACE DE MAPA FUNCIONAL
        hasOptional: true,
        optionalStopIndex: 9,
        mainRouteIndex: 8
    },
    {
        title: "Hernán Cortés (Opcional)",
        lema: "Anhelo de Luz",
        artist: "Javier Gómez Morollón",
        description: "Hoguera 'de bolsillo' ubicada en la 'calle de las setas' (C/ Hernán Cortés), accesible tras pasar Cervecería Sento.",
        image: "images/hernan.png",
        map: "https://www.google.com/maps/search/?api=1&query=Hoguera+Hernán+Cortés,+Alicante", // ENLACE DE MAPA FUNCIONAL
        optional: true,
        returnPoint: 8
    },
    {
        title: "Parada: Cervecería Sento Rambla",
        lema: null,
        artist: null,
        description: "Ideal para refrescarse con sus montaditos y cervezas IPA locales. Con una valoración de 4,4★ en TripAdvisor.",
        image: "images/sento.png",
        map: "https://www.google.com/maps/search/?api=1&query=Cervecería+Sento+Rambla,+Alicante", // ENLACE DE MAPA FUNCIONAL
        hasOptional: true,
        optionalStopIndex: 11,
        mainRouteIndex: 10
    },
    {
        title: "Mercado Central (Opcional)",
        lema: "Desamor",
        artist: "Art en Foc",
        description: "Hoguera de categoría Primera plantada en plena Av. Alfonso el Sabio, que se bordeará al pasar la Cervecería Sento. Su lema 'Desamor' invita a la reflexión.",
        image: "images/Central.png",
        map: "https://www.google.com/maps/search/?api=1&query=Hoguera+Mercado+Central,+Alicante", // ENLACE DE MAPA FUNCIONAL
        optional: true,
        returnPoint: 10
    },
    {
        title: "Plaza de Luceros",
        lema: null,
        artist: null,
        description: "Fin de ruta. Mascletà a las 14:00. Ten en cuenta que el TRAM cierra a las 13:30. Es el punto central de la fiesta.",
        image: "images/luceros.png",
        map: "https://www.google.com/maps/search/?api=1&query=Plaza+de+Luceros,+Alicante", // ENLACE DE MAPA FUNCIONAL
        mainRouteIndex: 12
    }
];

let currentStopIndex = 0;

// Elementos de la pantalla de bienvenida
const welcomeScreen = document.getElementById("welcome-screen");
const startButton = document.getElementById("start-button");

// Elementos de la pantalla de la app
const appScreen = document.getElementById("app-screen");
const stopTitleEl = document.getElementById("stop-title");
const stopLemaEl = document.getElementById("stop-lema");
const stopArtistEl = document.getElementById("stop-artist");
const stopImageEl = document.getElementById("stop-image");
const stopDescriptionEl = document.getElementById("stop-description");
const currentStopNumberEl = document.getElementById("current-stop-number");

// Botones de navegación
const mapBtn = document.getElementById("map-btn");
const backBtn = document.getElementById("back-btn");
const nextBtn = document.getElementById("next-btn");
const optionalBtn = document.getElementById("optional-btn");
const homeBtn = document.getElementById("home-btn");

// Elementos del desplegable
const stopSelector = document.getElementById("stop-selector");

// Elementos del modal de imagen
const imageModal = document.getElementById("image-modal");
const modalImage = document.getElementById("modal-image");
const closeButton = document.querySelector(".close-button");


// Función para poblar el desplegable de paradas
function populateStopSelector() {
    stopSelector.innerHTML = ''; // Limpiar opciones existentes
    stops.forEach((stop, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = `${index + 1}. ${stop.title}`;
        stopSelector.appendChild(option);
    });
}

// Función para mostrar una parada específica
function showStop(index) {
    // Validar el índice para evitar errores
    if (index < 0 || index >= stops.length) {
        console.error("Índice de parada inválido:", index);
        return;
    }

    currentStopIndex = index; // Actualizar el índice de la parada actual
    const stop = stops[currentStopIndex];

    stopTitleEl.textContent = stop.title;
    stopLemaEl.textContent = stop.lema ? `Lema: "${stop.lema}"` : '';
    stopArtistEl.textContent = stop.artist ? `Artista: ${stop.artist}` : '';
    stopDescriptionEl.textContent = stop.description;
    stopImageEl.src = stop.image;
    mapBtn.onclick = () => window.open(stop.map, "_blank");

    // Actualizar el valor seleccionado en el desplegable
    stopSelector.value = currentStopIndex;

    // Actualizar número de parada si estamos en la ruta principal
    if (stop.mainRouteIndex !== undefined) {
        const mainStopsCount = stops.filter(s => s.mainRouteIndex !== undefined).length;
        const currentMainStopNumber = stops.filter(s => s.mainRouteIndex !== undefined && s.mainRouteIndex <= stop.mainRouteIndex).length;
        currentStopNumberEl.textContent = `${currentMainStopNumber}/${mainStopsCount}`;
    } else {
        currentStopNumberEl.textContent = ""; // No mostrar número para paradas opcionales
    }


    // Lógica de visibilidad y texto de los botones
    // Botón "Volver"
    backBtn.style.display = "inline-block"; // Por defecto, visible
    if (currentStopIndex === 0) { // Si es la primera parada, no hay botón de volver
        backBtn.style.display = "none";
    } else if (stop.optional) { // Si es una parada opcional, el botón vuelve a la principal
        backBtn.textContent = "Volver a ruta principal";
        backBtn.onclick = () => {
            currentStopIndex = stop.returnPoint;
            showStop(currentStopIndex);
        };
    } else { // Para paradas no opcionales (excepto la primera)
        backBtn.textContent = "Volver";
        backBtn.onclick = () => {
            showStop(currentStopIndex - 1); // Va al índice anterior en el array
        };
    }

    // Botón "Siguiente"
    nextBtn.style.display = "inline-block"; // Por defecto, visible
    if (currentStopIndex === stops.length - 1) { // Última parada, no hay siguiente
        nextBtn.style.display = "none";
    } else if (stop.optional) { // Si es una parada opcional, no hay "Siguiente" normal
        nextBtn.style.display = "none";
    } else { // Para paradas no opcionales (excepto la última)
        nextBtn.textContent = "Siguiente";
        nextBtn.onclick = () => {
            // Encuentra la siguiente parada principal en la secuencia
            let nextMainIndex = -1;
            for (let i = currentStopIndex + 1; i < stops.length; i++) {
                if (stops[i].mainRouteIndex !== undefined) {
                    nextMainIndex = i;
                    break;
                }
            }
            if (nextMainIndex !== -1) {
                showStop(nextMainIndex);
            }
        };
    }

    // Botón "Ver parada extra" / "Volver a ruta principal" (para opcionales)
    optionalBtn.style.display = "none"; // Por defecto, oculto
    if (stop.hasOptional && !stop.optional) { // Si la parada actual tiene una opcional y NO es ya una opcional
        optionalBtn.style.display = "inline-block";
        optionalBtn.textContent = "Ver parada extra";
        optionalBtn.onclick = () => {
            showStop(stop.optionalStopIndex);
        };
    } else if (stop.optional) { // Si es una parada opcional, este botón permite volver a la principal
        optionalBtn.style.display = "inline-block";
        optionalBtn.textContent = "Volver a ruta principal";
        optionalBtn.onclick = () => {
            showStop(stop.returnPoint);
        };
    }

    // Manejo especial para la última parada (Luceros)
    if (currentStopIndex === stops.length - 1) {
        nextBtn.style.display = "none"; // No hay siguiente desde Luceros
        optionalBtn.style.display = "none"; // No hay opcionales ni retorno desde Luceros
    }
}

// Event Listeners
startButton.onclick = () => {
    // console.log("Botón 'Comenzar ruta' clicado."); // Para depuración
    welcomeScreen.classList.remove("active");
    appScreen.classList.add("active");
    populateStopSelector(); // Rellenar el desplegable al iniciar la app
    showStop(0); // Iniciar en la primera parada
};

homeBtn.onclick = () => {
    welcomeScreen.classList.add("active");
    appScreen.classList.remove("active");
    // No reseteamos currentStopIndex aquí; al iniciar de nuevo desde 0, se mostrará la primera parada.
};

// Listener para el desplegable
stopSelector.onchange = (event) => {
    const selectedIndex = parseInt(event.target.value);
    showStop(selectedIndex);
};

// Listener para abrir la imagen en el modal
stopImageEl.onclick = () => {
    modalImage.src = stopImageEl.src;
    imageModal.classList.add("active");
};

// Listener para cerrar el modal de imagen
closeButton.onclick = () => {
    imageModal.classList.remove("active");
};
// También cierra el modal si se clica fuera de la imagen (en el fondo)
imageModal.onclick = (event) => {
    if (event.target === imageModal) {
        imageModal.classList.remove("active");
    }
};


// Navegación con flechas del teclado (opcional para desarrollo/desktop)
document.addEventListener('keydown', (e) => {
    if (appScreen.classList.contains('active')) {
        if (e.key === 'ArrowRight' && nextBtn.style.display === 'inline-block') {
            nextBtn.click();
        } else if (e.key === 'ArrowLeft' && backBtn.style.display === 'inline-block') {
            backBtn.click();
        }
    }
});

// Inicializar la app mostrando la pantalla de bienvenida
document.addEventListener('DOMContentLoaded', () => {
    welcomeScreen.classList.add("active");
    appScreen.classList.remove("active");
});