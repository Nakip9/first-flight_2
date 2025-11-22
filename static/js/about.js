import { initI18n, setLanguage } from './i18n.js';

class AboutApp {
    constructor() {
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
            }, 1500);
        });
    }

    renderApp() {
        const appHTML = `
            ${this.renderTopBar()}
            ${this.renderNavbar()}
            <main>
                ${this.renderHero()}
                ${this.renderStory()}
                ${this.renderHighlights()}
                ${this.renderTeamValues()}
                ${this.renderCTA()}
            </main>
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
                <a href="/" class="logo-link">
                    <img src="https://img.icons8.com/?size=100&id=69543&format=png&color=000000" alt="AwabTravel" class="logo-img" />
                    <span class="logo-text" data-i18n="brand">AwabTravel</span>
                </a>
                <div class="nav-links">
                    <a href="/" class="nav-link" data-i18n="nav.home">Home</a>
                    <a href="/#destinations" class="nav-link" data-i18n="nav.destinations">Destinations</a>
                    <a href="/#services" class="nav-link" data-i18n="nav.services">Services</a>
                    <a href="/about" class="nav-link" data-i18n="nav.about">About</a>
                    <a href="/#contact" class="nav-link" data-i18n="nav.contact">Connect</a>
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
            <section class="hero about-hero">
                <div class="container about-hero__content">
                    <div class="hero-content">
                        <h1 class="hero-title" data-i18n="about.hero.title">We are AwabTravel</h1>
                        <p class="hero-subtitle" data-i18n="about.hero.subtitle">Crafting journeys with heart, expertise, and meticulous care.</p>
                        <div class="hero-actions">
                            <a href="/#services" class="btn btn-primary">
                                <span data-i18n="about.hero.cta">Explore our services</span>
                                <i class="fas fa-arrow-right"></i>
                            </a>
                            <a href="/#contact" class="btn btn-secondary">
                                <span data-i18n="about.hero.secondary">Connect with our team</span>
                            </a>
                        </div>
                    </div>
                    <div class="about-hero__stats">
                        <div class="stat-card fade-in-up">
                            <div class="stat-number" data-count="15">0</div>
                            <div class="stat-label" data-i18n="about.hero.years">Years of experience</div>
                        </div>
                        <div class="stat-card fade-in-up">
                            <div class="stat-number" data-count="1200">0</div>
                            <div class="stat-label" data-i18n="about.hero.travellers">Travellers served</div>
                        </div>
                        <div class="stat-card fade-in-up">
                            <div class="stat-number" data-count="40">0</div>
                            <div class="stat-label" data-i18n="about.hero.partners">Trusted partners</div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderStory() {
        return `
            <section class="section" id="about-story">
                <div class="container">
                    <div class="section-header fade-in-up">
                        <h2 data-i18n="about.story.title">Our Story</h2>
                        <p data-i18n="about.story.subtitle">A boutique agency dedicated to seamless journeys.</p>
                    </div>
                    <div class="timeline">
                        <div class="timeline-item fade-in-up">
                            <div class="timeline-icon"><i class="fas fa-flag"></i></div>
                            <div class="timeline-content">
                                <h3 data-i18n="about.story.start.title">Founded with passion</h3>
                                <p data-i18n="about.story.start.body">AwabTravel began as a family dream to make travel feel effortless and inspiring.</p>
                            </div>
                        </div>
                        <div class="timeline-item fade-in-up">
                            <div class="timeline-icon"><i class="fas fa-globe"></i></div>
                            <div class="timeline-content">
                                <h3 data-i18n="about.story.growth.title">Global reach</h3>
                                <p data-i18n="about.story.growth.body">We expanded through trusted partners, curating meaningful experiences on every continent.</p>
                            </div>
                        </div>
                        <div class="timeline-item fade-in-up">
                            <div class="timeline-icon"><i class="fas fa-heart"></i></div>
                            <div class="timeline-content">
                                <h3 data-i18n="about.story.today.title">Service-first today</h3>
                                <p data-i18n="about.story.today.body">Today we blend technology and hospitality to deliver responsive, human service.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    renderHighlights() {
        return `
            <section class="section highlights">
                <div class="container">
                    <div class="section-header fade-in-up">
                        <h2 data-i18n="about.highlights.title">Why travelers choose us</h2>
                        <p data-i18n="about.highlights.subtitle">Distinctive touches that keep journeys memorable.</p>
                    </div>
                    <div class="cards-grid">
                        ${this.renderHighlightCard('about.highlights.curated.title', 'about.highlights.curated.body', 'fas fa-compass')}
                        ${this.renderHighlightCard('about.highlights.support.title', 'about.highlights.support.body', 'fas fa-headset')}
                        ${this.renderHighlightCard('about.highlights.trust.title', 'about.highlights.trust.body', 'fas fa-shield-heart')}
                        ${this.renderHighlightCard('about.highlights.responsive.title', 'about.highlights.responsive.body', 'fas fa-bolt')}
                    </div>
                </div>
            </section>
        `;
    }

    renderHighlightCard(titleKey, bodyKey, icon) {
        return `
            <div class="card fade-in-up">
                <div class="icon-badge"><i class="${icon}"></i></div>
                <div class="card-content">
                    <h3 class="card-title" data-i18n="${titleKey}">Personalized itineraries</h3>
                    <p class="card-description" data-i18n="${bodyKey}">We pair local insight with modern planning tools.</p>
                </div>
            </div>
        `;
    }

    renderTeamValues() {
        return `
            <section class="section team-values">
                <div class="container">
                    <div class="section-header fade-in-up">
                        <h2 data-i18n="about.values.title">Our values</h2>
                        <p data-i18n="about.values.subtitle">Guiding principles behind every itinerary.</p>
                    </div>
                    <div class="values-grid">
                        ${this.renderValueCard('about.values.hospitality.title', 'about.values.hospitality.body', 'fas fa-hand-holding-heart')}
                        ${this.renderValueCard('about.values.craft.title', 'about.values.craft.body', 'fas fa-pen-fancy')}
                        ${this.renderValueCard('about.values.safety.title', 'about.values.safety.body', 'fas fa-shield-alt')}
                        ${this.renderValueCard('about.values.innovation.title', 'about.values.innovation.body', 'fas fa-sparkles')}
                    </div>
                </div>
            </section>
        `;
    }

    renderValueCard(titleKey, bodyKey, icon) {
        return `
            <div class="value-card fade-in-up">
                <div class="value-icon"><i class="${icon}"></i></div>
                <h3 data-i18n="${titleKey}">Hospitality first</h3>
                <p data-i18n="${bodyKey}">We treat every traveler like a valued guest.</p>
            </div>
        `;
    }

    renderCTA() {
        return `
            <section class="section consultation-cta about-cta">
                <div class="container about-cta__content">
                    <div>
                        <h3 class="fade-in-up" data-i18n="about.cta.title">Ready to plan your next journey?</h3>
                        <p class="fade-in-up" data-i18n="about.cta.body">Tell us about your goals and we'll craft a responsive plan.</p>
                        <div class="hero-actions" style="margin-top: 1.5rem;">
                            <a href="/#services" class="btn btn-primary fade-in-up">
                                <span data-i18n="about.cta.primary">View our services</span>
                                <i class="fas fa-arrow-right"></i>
                            </a>
                            <a href="/#contact" class="btn btn-secondary fade-in-up">
                                <span data-i18n="about.cta.secondary">Talk to a specialist</span>
                            </a>
                        </div>
                    </div>
                    <div class="about-cta__badge fade-in-up">
                        <i class="fas fa-moon"></i>
                        <div>
                            <p data-i18n="about.cta.badge.title">Hajj & Umrah expertise</p>
                            <small data-i18n="about.cta.badge.body">Dedicated guidance for spiritual journeys.</small>
                        </div>
                    </div>
                </div>
            </section>
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
        window.addEventListener('scroll', this.handleScroll.bind(this));
        document.querySelector('.mobile-menu-btn')?.addEventListener('click', this.toggleMobileMenu.bind(this));
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

    initAnimations() {
        this.animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, { threshold: 0.1 });

        this.observeAnimatedElements();
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
    new AboutApp();
});
