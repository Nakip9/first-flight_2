import { initI18n, setLanguage } from './i18n.js';

class TravelApp {
    constructor() {
        this.services = [
            { key: 'saudi', image: 'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4' },
            { key: 'france', image: 'https://images.unsplash.com/photo-1502602898536-47ad22581b52' },
            { key: 'japan', image: 'https://images.unsplash.com/photo-1540959733332-8ab4de18bee0' },
            { key: 'turkiye', image: 'https://images.unsplash.com/photo-1528181304800-259b08848526' },
            { key: 'indonesia', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2' },
            { key: 'usa', image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b' }
        ];
        this.services = {
            europe: [
                {
                    key: 'europe.grandTour',
                    title: "European Grand Tour",
                    destination: "France, Italy, Spain",
                    image: "https://images.unsplash.com/photo-1596484552834-6a58f850e0a1",
                    duration: "14 Days",
                    price: "Consultation Required",
                    features: ["6 Countries", "Luxury Hotels", "Guided Tours", "Breakfast Included"],
                    badge: "Popular"
                }
            ],
            asia: [
                {
                    key: 'asia.signature',
                    title: "Asian Adventure",
                    destination: "Japan, Thailand, Vietnam",
                    image: "https://images.unsplash.com/photo-1540959733332-8ab4de18bee0",
                    duration: "12 Days",
                    price: "Consultation Required",
                    features: ["Cultural Tours", "Street Food", "Temples", "Local Guides"],
                    badge: "Cultural",
                }
            ],
            hajj: [
                {
                    key: 'hajj.hajj',
                    title: "Hajj Services",
                    destination: "Makkah, Madinah",
                    image: "https://images.unsplash.com/photo-1547994777-8d47e7d45e1f",
                    duration: "14-30 Days",
                    price: "Consultation Required",
                    features: ["5-Star Hotels", "Ziyarat Tours", "Expert Guides", "Complete Visa Processing"],
                    badge: "Spiritual",
                },
                {
                    key: 'hajj.umrah',
                    title: "Umrah Services",
                    destination: "Makkah, Madinah",
                    image: "https://images.unsplash.com/photo-1570554520913-f3eabf1b72a6",
                    duration: "7-14 Days",
                    price: "Consultation Required",
                    features: ["Flexible Dates", "Comfortable Accommodation", "Transportation", "Spiritual Guidance"],
                    badge: "Flexible",
                }
            ]
        };
        this.init();
    }

    async init() {
        await this.showLoadingScreen();
        await this.renderApp();
        this.initEventListeners();
        this.initAnimations();
        initI18n('en');
    }

    showLoadingScreen() {
        return new Promise((resolve) => {
            const loadingHTML = `
                <div class="loading-screen">
                    <div class="plane-loader">
                        <i class="fas fa-plane"></i>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', loadingHTML);
            
            setTimeout(() => {
                const loader = document.querySelector('.loading-screen');
                loader.classList.add('fade-out');
                setTimeout(() => loader.remove(), 500);
                resolve();
            }, 2000);
        });
    }

    renderApp() {
        const appHTML = `
            ${this.renderTopBar()}
            ${this.renderNavbar()}
            <main>
                ${this.renderHero()}
                ${this.renderDestinations()}
                ${this.renderStats()}
                ${this.renderServices()}
                ${this.renderAbout()}
                ${this.renderContact()}
            </main>
            ${this.renderFloatingCTA()}
            ${this.renderFooter()}
        `;
        document.getElementById('root').innerHTML = appHTML;
    }

    renderTopBar() {
        return `
            <div class="top-bar">
                <div class="hotline">
                    <i class="fas fa-phone"></i>
                    <span data-i18n="hotline.text">24/7 Hotline: +1 (555) 123-4567</span>
                </div>
                <div class="social-links-top">
                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                </div>
            </div>
        `;
    }

    renderNavbar() {
        return `
            <nav class="navbar">
                <a href="#hero" class="logo-link">
                    <img src="https://img.icons8.com/?size=100&id=69543&format=png&color=000000" alt="AwabTravel" class="logo-img" />
                    <span class="logo-text" data-i18n="brand">AwabTravel</span>
                </a>
                <div class="nav-links">
                    <a href="#hero" class="nav-link" data-i18n="nav.home">Home</a>
                    <a href="#destinations" class="nav-link" data-i18n="nav.destinations">Destinations</a>
                    <a href="#services" class="nav-link" data-i18n="nav.services">Services</a>
                    <a href="#about" class="nav-link" data-i18n="nav.about">About</a>
                    <a href="/about" class="nav-link" data-i18n="nav.about">About</a>
                    <a href="#contact" class="nav-link" data-i18n="nav.contact">Connect</a>
                    <div class="language-switcher">
                        <select id="language-switcher">
                            <option value="en">EN</option>
                            <option value="ar">AR</option>
                        </select>
                    </div>
                </div>
                <button class="mobile-menu-btn">
                    <i class="fas fa-bars"></i>
                </button>
            </nav>
        `;
    }

    renderHero() {
        return `
            <section id="hero" class="hero">
                <div class="container" style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
                    <div class="hero-content">
                        <h1 class="hero-title" data-i18n="hero.title">Discover Your Next Adventure</h1>
                        <p class="hero-subtitle" data-i18n="hero.subtitle">Experience the world like never before with our curated travel services and personalized care.</p>
                        <div class="hero-actions">
                            <a href="#services" class="btn btn-primary">
                                <span data-i18n="hero.cta">Explore Services</span>
                                <i class="fas fa-arrow-right"></i>
                            </a>
                            <a href="#contact" class="btn btn-secondary">
                                <span data-i18n="hero.secondary">Get Free Consultation</span>
                            </a>
                        </div>
                    </div>
                    <div class="hero-visual">
                        <div class="animated-globe">
                            <div class="globe-sphere">
                                ${this.generateGlobeLines()}
                                ${this.generateGlobeDots()}
                            </div>
                            <div class="flight-path">
                                <div class="airplane">
                                    <i class="fas fa-plane"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    generateGlobeLines() {
        let lines = '';
        // Horizontal lines
        for (let i = 0; i < 180; i += 20) {
            lines += `<div class="globe-line horizontal" style="top: ${i}%"></div>`;
        }
        // Vertical lines
        for (let i = 0; i < 180; i += 20) {
            lines += `<div class="globe-line vertical" style="left: ${i}%"></div>`;
        }
        return lines;
    }

    generateGlobeDots() {
        let dots = '';
        const positions = [
            { top: '20%', left: '30%' }, // Paris
            { top: '45%', left: '65%' }, // Tokyo
            { top: '60%', left: '50%' }, // Bali
            { top: '35%', left: '40%' }, // Dubai
            { top: '70%', left: '20%' }, // Rio
            { top: '25%', left: '15%' }  // New York
        ];
        
        positions.forEach(pos => {
            dots += `<div class="globe-dot" style="top: ${pos.top}; left: ${pos.left};"></div>`;
        });
        
        return dots;
    }

    renderDestinations() {
        return `
            <section id="destinations" class="section">
                <div class="container">
                    <div class="section-header fade-in-up">
                        <h2 data-i18n="destinations.title">Top Destinations</h2>
                        <p data-i18n="destinations.subtitle">Hand-picked places loved by our travelers.</p>
                    </div>
                    <div class="cards-grid">
                        ${this.renderDestinationCard('Paris', 'France', 'City of Love & Lights', 'https://images.unsplash.com/photo-1502602898536-47ad22581b52')}
                        ${this.renderDestinationCard('Tokyo', 'Japan', 'Modern Meets Traditional', 'https://images.unsplash.com/photo-1540959733332-8ab4de18bee0')}
                        ${this.renderDestinationCard('Bali', 'Indonesia', 'Tropical Paradise', 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2')}
                        ${this.renderDestinationCard('Santorini', 'Greece', 'Stunning Sunsets', 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff')}
                    </div>
                </div>
            </section>
        `;
    }

    renderDestinationCard(city, country, description, image) {
        return `
            <div class="card fade-in-up">
                <img src="${image}" alt="${city}" class="card-image" loading="lazy">
                <div class="card-content">
                    <h3 class="card-title">${city}, ${country}</h3>
                    <p class="card-description">${description}</p>
                    <button class="btn btn-secondary" style="margin-top: 1rem;">
                        Explore <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
    }

    renderStats() {
        return `
            <section class="stats-section">
                <div class="container">
                    <div class="stats-grid">
                        <div class="stat-card fade-in-up">
                            <div class="stat-number" data-count="500">0</div>
                            <div class="stat-label" data-i18n="stats.trips">Trips Organized</div>
                        </div>
                        <div class="stat-card fade-in-up">
                            <div class="stat-number" data-count="98">0</div>
                            <div class="stat-label" data-i18n="stats.satisfaction">Satisfaction Rate</div>
                        </div>
                        <div class="stat-card fade-in-up">
                            <div class="stat-number" data-count="50">0</div>
                            <div class="stat-label" data-i18n="stats.destinations">Destinations</div>
                        </div>
                        <div class="stat-card fade-in-up">
                            <div class="stat-number" data-count="24">0</div>
                            <div class="stat-label" data-i18n="stats.support">Support Hours</div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderServices() {
        return `
            <section id="services" class="services-section">
                <div class="container">
                    <div class="section-header fade-in-up">
                        <h2 data-i18n="services.title">Featured Services</h2>
                        <p data-i18n="services.subtitle">Ready-to-go itineraries designed by experts.</p>
                    </div>
                    <div class="packages-grid services-grid" id="package-content">
                        ${this.services.map(pkg => `
                            <div class="package-card fade-in-up">
                                <img src="${pkg.image}" alt="${pkg.key}" class="package-image" loading="lazy">
                                <div class="package-content">
                                    <h3 class="package-title" data-i18n="services.countries.${pkg.key}">${pkg.key}</h3>
                                    <p class="package-duration" data-i18n="services.cta.body">Let our experts help you plan your perfect journey</p>
                                </div>
                            </div>
                        `).join('')}
                    <div class="package-tabs">
                        <button class="tab-btn active" data-tab="europe" data-i18n="services.tabs.europe">European Journeys</button>
                        <button class="tab-btn" data-tab="asia" data-i18n="services.tabs.asia">Asian Adventures</button>
                        <button class="tab-btn" data-tab="hajj" data-i18n="services.tabs.hajj">Hajj & Umrah</button>
                    </div>
                    <div class="packages-grid services-grid" id="package-content">
                        ${this.renderServiceCards('europe')}
                    </div>
                    <div class="consultation-cta fade-in-up" style="text-align: center; margin-top: 3rem;">
                        <h3 style="margin-bottom: 1rem; color: #0f172a;" data-i18n="services.cta.title">Get Free Consultation</h3>
                        <p style="margin-bottom: 2rem; color: #64748b;" data-i18n="services.cta.body">Let our experts help you plan your perfect journey</p>
                        <a href="#contact" class="btn btn-primary">
                            <span data-i18n="services.cta.button">Get Free Consultation</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>
        `;
    }

    renderAbout() {
        return `
            <section id="about" class="section">
                <div class="container">
                    <div class="section-header fade-in-up">
                        <h2 data-i18n="about.title">About AwabTravel</h2>
                        <p data-i18n="about.subtitle">Travel made simple, memorable, and bilingual.</p>
                    </div>
                    <div class="about-hero__content">
                        <div class="timeline fade-in-up">
                            <div class="timeline-item">
                                <div class="timeline-icon"><i class="fas fa-heart"></i></div>
                                <h3 data-i18n="about.story">Family-built agency that crafts smooth journeys.</h3>
                                <p data-i18n="about.body">We pair local expertise with modern tools so every trip feels personal.</p>
                            </div>
                        </div>
                        <div class="about-hero__stats">
                            ${['care', 'support', 'trust'].map(key => `
                                <div class="stat-card fade-in-up">
                                    <div class="stat-number" data-i18n="about.stats.${key}.value">24/7</div>
                                    <div class="stat-label" data-i18n="about.stats.${key}.label">Support</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            </section>
        `;
    renderServiceCards(type) {
        return this.services[type].map(pkg => {
            const baseKey = `services.cards.${pkg.key}`;
            return `
            <div class="package-card fade-in-up">
                ${pkg.badge ? `<div class="package-badge" data-i18n="${baseKey}.badge">${pkg.badge}</div>` : ''}
                <img src="${pkg.image}" alt="${pkg.title}" class="package-image" loading="lazy">
                <div class="package-content">
                    <h3 class="package-title" data-i18n="${baseKey}.title">${pkg.title}</h3>
                    <div class="package-destination">
                        <i class="fas fa-map-marker-alt"></i>
                        <span data-i18n="${baseKey}.destination">${pkg.destination}</span>
                    </div>
                    <ul class="package-features">
                        ${pkg.features.map((feature, index) => `
                            <li>
                                <i class="fas fa-check"></i>
                                <span data-i18n="${baseKey}.features.${index}">${feature}</span>
                            </li>
                        `).join('')}
                    </ul>
                    <div class="package-footer">
                        <div>
                            <div class="package-price" data-i18n="${baseKey}.price">${pkg.price}</div>
                            <div class="package-duration" data-i18n="${baseKey}.duration">${pkg.duration}</div>
                        </div>
                        <button class="btn btn-primary" data-i18n="services.cards.cta">Book Now</button>
                    </div>
                </div>
            </div>
        `;}).join('');
    }

    renderContact() {
        return `
            <section id="contact" class="section">
                <div class="container">
                    <div class="section-header fade-in-up">
                        <h2 data-i18n="contact.title">Connect With Us</h2>
                        <p data-i18n="contact.subtitle">We're here to make your travel dreams come true.</p>
                    </div>
                    <div class="contact-grid">
                        ${this.renderContactCard('whatsapp', 'contact.whatsapp.title', 'contact.whatsapp.body', 'fab fa-whatsapp', 'WhatsApp Business', 'Open a chat with a pre-filled message.')}
                        ${this.renderContactCard('messenger', 'contact.messenger.title', 'contact.messenger.body', 'fab fa-facebook-messenger', 'Messenger', 'Facebook chat')}
                        ${this.renderContactCard('instagram', 'contact.instagram.title', 'contact.instagram.body', 'fab fa-instagram', 'Instagram', 'DM us anytime')}
                        ${this.renderContactCard('phone', 'contact.phone.title', 'contact.phone.body', 'fas fa-phone', 'Call Us', '24/7 support')}
                    </div>
                </div>
            </section>
        `;
    }

    renderContactCard(type, titleKey, bodyKey, icon, defaultTitle, defaultBody) {
        let link = "#";
        
        switch(type) {
            case 'whatsapp':
                link = "https://wa.me/1234567890?text=Hi%20AwabTravel!%20I%20would%20like%20to%20get%20more%20information%20about%20your%20travel%20services.";
                break;
            case 'messenger':
                link = "https://m.me/awabtravel";
                break;
            case 'instagram':
                link = "https://instagram.com/awabtravel";
                break;
            case 'phone':
                link = "tel:+1234567890";
                break;
        }
        
        return `
            <a href="${link}" class="contact-card fade-in-up" data-contact="${type}" ${type !== 'phone' ? 'target="_blank"' : ''}>
                <div class="contact-icon">
                    <i class="${icon}"></i>
                </div>
                <h3 data-i18n="${titleKey}">${defaultTitle}</h3>
                <p data-i18n="${bodyKey}">${defaultBody}</p>
            </a>
        `;
    }

    renderFloatingCTA() {
        return `
            <a href="https://wa.me/1234567890?text=Hi%20AwabTravel!%20I%20would%20like%20to%20get%20more%20information%20about%20your%20travel%20services."
               class="floating-cta btn btn-primary" target="_blank">
                <i class="fab fa-whatsapp"></i>
                <span data-i18n="cta.quick">Quick Connect</span>
            </a>
        `;
    }

    renderFooter() {
        return `
            <footer class="footer">
                <div class="container">
                    <p data-i18n="footer.copy">© 2024 AwabTravel. All rights reserved.</p>
                    <div class="footer-social">
                        <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
            </footer>
        `;
    }

    initEventListeners() {
        // Nav scroll effect
        window.addEventListener('scroll', this.handleScroll.bind(this));

        // Mobile menu
        document.querySelector('.mobile-menu-btn')?.addEventListener('click', this.toggleMobileMenu.bind(this));

        // Language switcher
        document.getElementById('language-switcher')?.addEventListener('change', (e) => {
            setLanguage(e.target.value);
        });
    }

    handleScroll() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    toggleMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('active');
    }

    switchTab(e) {
        const tabBtns = document.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        const tabType = e.target.dataset.tab;
        const packageContent = document.getElementById('package-content');
        packageContent.innerHTML = this.renderServiceCards(tabType);
        this.observeAnimatedElements();
        const currentLang = document.getElementById('language-switcher')?.value || 'en';
        setLanguage(currentLang);
    }

    initAnimations() {
        // Intersection Observer for fade-in animations
        this.animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, { threshold: 0.1 });

        this.observeAnimatedElements();

        // Animate counters
        this.animateCounters();
    }

    observeAnimatedElements() {
        document.querySelectorAll('.fade-in-up').forEach(el => this.animationObserver.observe(el));
    }

    animateCounters() {
        const counters = document.querySelectorAll('[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        updateCounter();
                        observer.unobserve(entry.target);
                    }
                });
            });

            observer.observe(counter);
        });
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TravelApp();
});