// navbar.js - Genera la navbar dinamicamente in tutte le pagine

document.addEventListener('DOMContentLoaded', function() {
    
    // HTML della navbar con stile menu migliorato
    const navbarHTML = `
        <!-- Scroll progress bar -->
        <div class="scroll-progress" id="scrollProgress"></div>

        <!-- Navbar con stile menu migliorato -->
        <div class="navbar" id="navbar">
            <div class="nav-brand">
                <i class="fab fa-java"></i> 
                <span>JavaDoc<span class="brand-highlight">Hub</span></span>
            </div>
            <div class="nav-links">
                <a href="index.html" title="Home page">
                    <i class="fas fa-home"></i>
                    <span>Home</span>
                    <span class="nav-indicator"></span>
                </a>
                <a href="core-java.html" title="Fondamenti del linguaggio Java">
                    <i class="fab fa-java"></i>
                    <span>Core</span>
                    <span class="nav-indicator"></span>
                </a>
                <a href="fondamenti.html" title="Variabili, operatori, cicli, array">
                    <i class="fas fa-code"></i>
                    <span>Base</span>
                    <span class="nav-indicator"></span>
                </a>
                <a href="oop.html" title="Programmazione Orientata agli Oggetti">
                    <i class="fas fa-project-diagram"></i>
                    <span>OOP</span>
                    <span class="nav-indicator"></span>
                </a>
                <a href="collections.html" title="Collection Framework: List, Set, Map">
                    <i class="fas fa-layer-group"></i>
                    <span>Coll</span>
                    <span class="nav-indicator"></span>
                </a>
                <a href="streams.html" title="Stream API e Lambda Expressions">
                    <i class="fas fa-stream"></i>
                    <span>Stream</span>
                    <span class="nav-indicator"></span>
                </a>
                <a href="exceptions.html" title="Gestione delle eccezioni">
                    <i class="fas fa-exclamation-triangle"></i>
                    <span>Exc</span>
                    <span class="nav-indicator"></span>
                </a>
                <a href="multithreading.html" title="Thread, concorrenza e parallelismo">
                    <i class="fas fa-tasks"></i>
                    <span>Thread</span>
                    <span class="nav-indicator"></span>
                </a>
                <a href="microservices.html" title="Architettura a microservizi con Spring Boot">
                    <i class="fas fa-microchip"></i>
                    <span>μSvc</span>
                    <span class="nav-indicator"></span>
                </a>
                <a href="spring-boot.html" title="Spring Boot 3.x - Applicazioni enterprise">
                    <i class="fas fa-leaf"></i>
                    <span>SBoot</span>
                    <span class="nav-indicator"></span>
                </a>
                <a href="rest-api.html" title="REST API con Spring Boot">
                    <i class="fas fa-plug"></i>
                    <span>REST</span>
                    <span class="nav-indicator"></span>
                </a>
                <a href="java11-vs-java17.html" title="Confronto Java 11 e Java 17">
                    <i class="fas fa-code-compare"></i>
                    <span>11vs17</span>
                    <span class="nav-indicator"></span>
                </a>
                <a href="java17-vs-java21.html" title="Confronto Java 17 e Java 21">
                    <i class="fas fa-code-compare"></i>
                    <span>17vs21</span>
                    <span class="nav-indicator"></span>
                </a>
                <a href="solid-principles.html" title="Principi SOLID di progettazione">
                    <i class="fas fa-cubes"></i>
                    <span>SOLID</span>
                    <span class="nav-indicator"></span>
                </a>
				<a href="kubernetes-java.html" data-tooltip="☸️ Kubernetes per Java"  title="Kubernetes per Java">
				<i class="fab fa-kubernetes"></i>
				<span>K8s</span>
				<div class="button-tooltip">
					<span class="tooltip-icon">☸️</span>
					<span class="tooltip-text">Kubernetes per Java</span>
					<span class="tooltip-arrow"></span>
				</div>
			</a>
			<a href="spring-cloud.html" data-tooltip="☁️ Spring Cloud">
				<i class="fas fa-cloud"></i>
				<span>Cloud</span>
				<div class="button-tooltip">
					<span class="tooltip-icon">☁️</span>
					<span class="tooltip-text">Spring Cloud - Microservizi distribuiti</span>
					<span class="tooltip-arrow"></span>
				</div>
			</a>
            </div>
           
        </div>
    `;

    // Inserisci la navbar all'inizio del body con fade-in
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
    
    // Aggiungi classe per animazione fade-in
    const navbarElement = document.getElementById('navbar');
    if (navbarElement) {
        navbarElement.style.opacity = '0';
        navbarElement.style.transform = 'translateY(-10px)';
        navbarElement.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        // Forza il reflow
        navbarElement.offsetHeight;
        
        navbarElement.style.opacity = '1';
        navbarElement.style.transform = 'translateY(0)';
    }

    // ========== HEADER SCROLL EFFECT ==========
    if (navbarElement) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbarElement.classList.add('scrolled');
            } else {
                navbarElement.classList.remove('scrolled');
            }
        });
    }

    // ========== SCROLL PROGRESS BAR ==========
    const progressBar = document.getElementById('scrollProgress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    }

    // ========== ATTIVA LINK NAVBAR IN BASE ALLA PAGINA ==========
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        }
    });

    // ========== TOGGLE SIDEBAR PER MOBILE ==========
    const sidebarToc = document.getElementById('sidebarToc');
    const tocToggleBtn = document.getElementById('tocToggleBtn');

    if (tocToggleBtn && sidebarToc) {
        tocToggleBtn.addEventListener('click', () => {
            sidebarToc.classList.toggle('open');
        });
    }

    if (sidebarToc) {
        document.addEventListener('click', (e) => {
            if (window.innerWidth <= 768 && sidebarToc.classList.contains('open')) {
                if (!sidebarToc.contains(e.target) && e.target !== tocToggleBtn && !tocToggleBtn?.contains(e.target)) {
                    sidebarToc.classList.remove('open');
                }
            }
        });
    }
    
    // ========== MOBILE NAVBAR TOGGLE ==========
    const navMobileToggle = document.getElementById('navMobileToggle');
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (navMobileToggle && navLinksContainer) {
        navMobileToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('open');
        });
        
        // Chiudi il menu mobile quando si clicca su un link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('open');
            });
        });
    }
});