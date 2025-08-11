/**
 * ===============================================================================
 * 🍽️ MODERN MINIMALIST RESTAURANT TEMPLATE - COMPLETE JAVASCRIPT
 * ===============================================================================
 * 
 * 🎨 FEATURES:
 * • Auto-population from config.js
 * • Sophisticated navigation system
 * • Interactive reservation system
 * • WhatsApp integration
 * • Smooth animations and transitions
 * • Mobile-responsive interactions
 * 
 * 📝 CUSTOMIZATION:
 * • All customization through RESTAURANT_CONFIG in config.js
 * • Clean, modular JavaScript architecture
 * • Modern ES6+ features
 * 
 * ===============================================================================
 */

// ==========================================================================
// 🛠️ UTILITY FUNCTIONS
// ==========================================================================
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Smooth scroll with offset for fixed navigation
const smoothScroll = (target, offset = 100) => {
  const element = $(target);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

// Debounce function for performance optimization
const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

// Format Indonesian currency
const formatIDR = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
};

// Validate configuration
const validateConfig = () => {
  if (typeof window.RESTAURANT_CONFIG === 'undefined') {
    console.error('❌ RESTAURANT_CONFIG not found! Make sure config.js is loaded first.');
    return false;
  }
  return window.validateConfig ? window.validateConfig() : true;
};

// ==========================================================================
// 🎨 TEMPLATE CUSTOMIZER CLASS
// ==========================================================================
class ModernTemplateCustomizer {
  constructor() {
    this.config = window.RESTAURANT_CONFIG;
    if (!this.config) {
      console.error('❌ RESTAURANT_CONFIG not found!');
      return;
    }
    this.init();
  }
  
  init() {
    this.updateColors();
    this.updateRestaurantInfo();
    this.updateMetaTags();
    this.updateImages();
    this.updateContactInfo();
    this.updateFeatures();
    this.updateSpecialExperiences();
    this.updateMenuTabs();
    this.updateSocialLinks();
    this.updateGoogleMaps();
  }
  
  // Update CSS custom properties from config
  updateColors() {
    const root = document.documentElement;
    const colors = this.config.branding?.colors;
    
    if (colors) {
      root.style.setProperty('--primary-color', colors.primary);
      root.style.setProperty('--secondary-color', colors.secondary);
      root.style.setProperty('--accent-color', colors.accent);
      root.style.setProperty('--neutral-color', colors.neutral);
      root.style.setProperty('--text-primary', colors.textPrimary);
      root.style.setProperty('--text-secondary', colors.textSecondary);
    }
  }
  
  // Update restaurant information throughout the site
  updateRestaurantInfo() {
    const info = this.config.restaurantInfo;
    if (!info) return;
    
    // Update restaurant name
    $$('.logo-text, .footer-logo-text, .footer-business-name').forEach(el => {
      el.textContent = info.name || 'LOADING';
    });
    
    // Update hero content
    const titleMain = $('.title-main');
    const titleSub = $('.title-sub');
    if (titleMain) titleMain.textContent = info.name || 'LOADING';
    if (titleSub) titleSub.textContent = info.tagline || 'Contemporary Dining';
    
    const heroSubtitle = $('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = info.description;
    
    // Update about section
    const aboutDescription = $('.about-description');
    if (aboutDescription) aboutDescription.textContent = info.story;
    
    const aboutPhilosophy = $('.about-philosophy');
    if (aboutPhilosophy) aboutPhilosophy.textContent = info.philosophy;
    
    // Update chef information
    const chefName = $('.chef-name');
    const chefTitle = $('.chef-title');
    if (chefName) chefName.textContent = info.chefName || 'Loading Chef Name';
    if (chefTitle) chefTitle.textContent = info.chefTitle || 'Executive Chef & Owner';
    
    // Update highlights/stats
    const establishedEl = $$('.highlight-number')[0];
    const capacityEl = $$('.highlight-number')[2];
    if (establishedEl) establishedEl.textContent = info.yearEstablished || '2019';
    if (capacityEl) capacityEl.textContent = info.capacity || '45';
  }
  
  // Update meta tags for SEO
  updateMetaTags() {
    const website = this.config.website;
    const restaurantInfo = this.config.restaurantInfo;
    
    if (website?.title) document.title = website.title;
    if (restaurantInfo?.name) {
      document.title = document.title.replace('Modern Restaurant Template', restaurantInfo.name);
    }
    
    // Update meta description
    const metaDescription = $('meta[name="description"]');
    if (metaDescription && website?.description) {
      metaDescription.content = website.description;
    }
    
    // Update meta keywords
    const metaKeywords = $('meta[name="keywords"]');
    if (metaKeywords && website?.keywords) {
      metaKeywords.content = website.keywords;
    }
    
    // Update Open Graph tags
    const ogTitle = $('meta[property="og:title"]');
    const ogDescription = $('meta[property="og:description"]');
    const ogImage = $('meta[property="og:image"]');
    
    if (ogTitle && website?.title) ogTitle.content = website.title;
    if (ogDescription && website?.description) ogDescription.content = website.description;
    if (ogImage && website?.ogImage) ogImage.content = website.ogImage;
  }
  
  // Update images from config
  updateImages() {
    const images = this.config.branding?.images;
    if (!images) return;
    
    // Update logo
    if (images.logo) {
      $$('.logo, .footer-logo img').forEach(img => {
        img.src = images.logo;
        img.alt = `${this.config.restaurantInfo?.name} Logo`;
      });
    }
    
    // Update hero background
    const heroImg = $('.hero-img');
    if (heroImg && images.heroBackground) {
      heroImg.src = images.heroBackground;
      heroImg.alt = 'Restaurant Interior';
    }
    
    // Update chef photo
    const chefImg = $('.chef-image');
    if (chefImg && images.chefPhoto) {
      chefImg.src = images.chefPhoto;
      chefImg.alt = this.config.restaurantInfo?.chefName || 'Executive Chef';
    }
    
    // Update favicon
    const favicon = $('link[rel="icon"]');
    const appleTouchIcon = $('link[rel="apple-touch-icon"]');
    if (favicon && images.favicon) favicon.href = images.favicon;
    if (appleTouchIcon && images.favicon) appleTouchIcon.href = images.favicon;
  }
  
  // Update contact information
  updateContactInfo() {
    const contact = this.config.contact;
    if (!contact) return;
    
    // Update hero info cards
    const infoCards = $$('.info-card');
    if (infoCards.length >= 3) {
      // Location card
      const locationValue = infoCards[0].querySelector('.info-value');
      if (locationValue) locationValue.textContent = `${contact.area}, ${contact.city}`;
      
      // Hours card  
      const hoursValue = infoCards[1].querySelector('.info-value');
      if (hoursValue) hoursValue.textContent = `${contact.hours?.days}, ${contact.hours?.open}-${contact.hours?.close}`;
      
      // Phone card
      const phoneValue = infoCards[2].querySelector('.info-value');
      if (phoneValue) phoneValue.textContent = contact.phone;
    }
    
    // Update WhatsApp links
    const reservationMessage = `Halo ${this.config.restaurantInfo?.name || 'Aurora'}, saya ingin melakukan reservasi meja.`;
    const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(reservationMessage)}`;
    
    $$('a[href*="wa.me"], .whatsapp-float, .cta-nav').forEach(link => {
      if (link.href.includes('wa.me') || link.classList.contains('whatsapp-float') || link.classList.contains('cta-nav')) {
        link.href = whatsappUrl;
      }
    });
    
    // Populate contact details section
    this.populateContactDetails();
  }
  
  // Populate detailed contact information
  populateContactDetails() {
    const contact = this.config.contact;
    const contactDetails = $('#contact-details');
    
    if (!contact || !contactDetails) return;
    
    const fullAddress = `${contact.address}, ${contact.area}, ${contact.city} ${contact.postalCode}`;
    
    contactDetails.innerHTML = `
      <div class="contact-item">
        <div class="contact-icon">📍</div>
        <div class="contact-text">
          <h3>Location</h3>
          <p>${fullAddress}<br><em>${contact.landmark || ''}</em></p>
        </div>
      </div>
      
      <div class="contact-item">
        <div class="contact-icon">📞</div>
        <div class="contact-text">
          <h3>Reservations</h3>
          <p>
            <a href="tel:+${contact.phone.replace(/\D/g, '')}">${contact.phone}</a><br>
            <a href="https://wa.me/${contact.whatsapp}" target="_blank">WhatsApp: +${contact.whatsapp}</a>
          </p>
        </div>
      </div>
      
      <div class="contact-item">
        <div class="contact-icon">⏰</div>
        <div class="contact-text">
          <h3>Opening Hours</h3>
          <p>
            ${contact.hours?.days || 'Tuesday - Sunday'}: ${contact.hours?.open} - ${contact.hours?.close}<br>
            <em>Closed ${contact.hours?.closedDay || 'Monday'}</em><br>
            Reservations: ${contact.hours?.reservationHours || '09:00 - 22:00'}
          </p>
        </div>
      </div>
      
      <div class="contact-item">
        <div class="contact-icon">✉️</div>
        <div class="contact-text">
          <h3>Email & Web</h3>
          <p>
            <a href="mailto:${contact.email}">${contact.email}</a><br>
            <a href="https://${contact.website}" target="_blank">${contact.website}</a>
          </p>
        </div>
      </div>
    `;
    
    // Update footer contact
    const footerContact = $('#footer-contact');
    if (footerContact) {
      footerContact.innerHTML = `
        <p>📍 ${fullAddress}</p>
        <p>📞 <a href="tel:+${contact.phone.replace(/\D/g, '')}">${contact.phone}</a></p>
        <p>💬 <a href="https://wa.me/${contact.whatsapp}" target="_blank">WhatsApp</a></p>
        <p>🕐 ${contact.hours?.days}: ${contact.hours?.open} - ${contact.hours?.close}</p>
      `;
    }
  }
  
  // Update restaurant features section
  updateFeatures() {
    const highlights = this.config.highlights;
    const featuresGrid = $('#features-grid');
    
    if (!highlights || !featuresGrid) return;
    
    featuresGrid.innerHTML = highlights.map(highlight => `
      <div class="feature-card">
        <div class="feature-icon">${highlight.icon}</div>
        <h3 class="feature-title">${highlight.title}</h3>
        <p class="feature-description">${highlight.description}</p>
      </div>
    `).join('');
  }
  
  // Update special experiences section
  updateSpecialExperiences() {
    const experiences = this.config.specialExperiences;
    const experiencesGrid = $('#experiences-grid');
    
    if (!experiences || !experiencesGrid) return;
    
    experiencesGrid.innerHTML = experiences.filter(exp => exp.active).map(experience => `
      <div class="experience-card">
        <div class="experience-badge">${experience.badge}</div>
        <h3 class="experience-title">${experience.title}</h3>
        <p class="experience-description">${experience.description}</p>
        <div class="experience-price">${experience.price}</div>
        <p class="experience-availability">${experience.availability}</p>
      </div>
    `).join('');
  }
  
  // Update menu tabs
  updateMenuTabs() {
    const categories = this.config.menuCategories;
    const menuTabsContainer = $('#menu-tabs');
    
    if (!categories || !menuTabsContainer) return;
    
    menuTabsContainer.innerHTML = categories.map((category, index) => `
      <button class="tab-btn ${index === 0 ? 'active' : ''}" data-tab="${category.id}">
        ${category.icon ? category.icon + ' ' : ''}${category.name}
      </button>
    `).join('');
  }
  
  // Update social media links
  updateSocialLinks() {
    const socialMedia = this.config.contact?.socialMedia;
    const socialLinksContainer = $('#social-links');
    const footerSocial = $('#footer-social');
    
    if (!socialMedia) return;
    
    const socialLinks = [];
    if (socialMedia.instagram) {
      socialLinks.push(`<a href="https://instagram.com/${socialMedia.instagram}" target="_blank" class="social-link" aria-label="Instagram">📸</a>`);
    }
    if (socialMedia.facebook) {
      socialLinks.push(`<a href="https://facebook.com/${socialMedia.facebook}" target="_blank" class="social-link" aria-label="Facebook">📘</a>`);
    }
    if (socialMedia.tiktok) {
      socialLinks.push(`<a href="https://tiktok.com/@${socialMedia.tiktok}" target="_blank" class="social-link" aria-label="TikTok">🎵</a>`);
    }
    if (this.config.contact?.whatsapp) {
      socialLinks.push(`<a href="https://wa.me/${this.config.contact.whatsapp}" target="_blank" class="social-link" aria-label="WhatsApp">💬</a>`);
    }
    
    if (socialLinksContainer) socialLinksContainer.innerHTML = socialLinks.join('');
    if (footerSocial) footerSocial.innerHTML = socialLinks.join('');
  }
  
  // Update Google Maps
  updateGoogleMaps() {
    const googleMapsUrl = this.config.website?.googleMapsEmbedUrl;
    const mapIframe = $('#google-maps');
    
    if (googleMapsUrl && mapIframe) {
      mapIframe.src = googleMapsUrl;
    }
  }
}

// ==========================================================================
// 📱 NAVIGATION SYSTEM
// ==========================================================================
class ModernNavigation {
  constructor() {
    this.navbar = $('#navbar');
    this.hamburger = $('#hamburger');
    this.navMenu = $('#nav-menu');
    this.navLinks = $$('.nav-link');
    this.isMenuOpen = false;
    
    this.init();
  }
  
  init() {
    this.setupHamburgerToggle();
    this.setupNavLinks();
    this.setupScrollEffect();
    this.setupActiveLink();
  }
  
  setupHamburgerToggle() {
    this.hamburger?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.toggleMobileMenu();
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (this.isMenuOpen && !this.navMenu.contains(e.target) && !this.hamburger.contains(e.target)) {
        this.closeMobileMenu();
      }
    });
    
    // Close menu on navigation link click
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (this.isMenuOpen) {
          this.closeMobileMenu();
        }
      });
    });
  }
  
  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.hamburger.classList.toggle('active');
    this.navMenu.classList.toggle('active');
    
    // Prevent body scroll
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  closeMobileMenu() {
    this.isMenuOpen = false;
    this.hamburger.classList.remove('active');
    this.navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  setupNavLinks() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Handle internal navigation
        if (href && href.startsWith('#') && href !== '#') {
          e.preventDefault();
          smoothScroll(href);
          this.closeMobileMenu();
        }
      });
    });
  }
  
  setupScrollEffect() {
    const handleScroll = debounce(() => {
      if (window.scrollY > 100) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
    }, 10);
    
    window.addEventListener('scroll', handleScroll);
  }
  
  setupActiveLink() {
    const handleScroll = debounce(() => {
      const sections = $$('section[id]');
      const scrollPos = window.scrollY + 150;
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          this.navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, 50);
    
    window.addEventListener('scroll', handleScroll);
  }
}

// ==========================================================================
// 🍽️ MENU SYSTEM
// ==========================================================================
class MenuSystem {
  constructor() {
    this.tabButtons = $$('.tab-btn');
    this.tabContents = $$('.menu-content');
    
    this.init();
  }
  
  init() {
    this.tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        this.switchTab(targetTab, button);
      });
    });
  }
  
  switchTab(targetTab, clickedButton) {
    // Remove active class from all tabs and contents
    this.tabButtons.forEach(btn => btn.classList.remove('active'));
    this.tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to clicked tab and corresponding content
    clickedButton.classList.add('active');
    const targetContent = $(`#${targetTab}`);
    if (targetContent) {
      targetContent.classList.add('active');
      
      // Animate menu items
      this.animateMenuItems(targetContent);
    }
  }
  
  animateMenuItems(container) {
    const menuItems = container.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(30px)';
      
      setTimeout(() => {
        item.style.transition = 'all 0.4s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }
}

// ==========================================================================
// 📅 RESERVATION SYSTEM
// ==========================================================================
class ReservationSystem {
  constructor() {
    this.form = $('#reservation-form');
    this.config = window.RESTAURANT_CONFIG;
    this.init();
  }
  
  init() {
    if (!this.form) return;
    
    this.setupDateValidation();
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleReservation(e);
    });
  }
  
  setupDateValidation() {
    const dateInput = this.form.querySelector('input[type="date"]');
    if (!dateInput) return;
    
    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    dateInput.min = today;
    
    // Set maximum date based on advance booking setting
    const advanceDays = this.config?.dining?.reservations?.advanceBooking || 30;
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + advanceDays);
    dateInput.max = maxDate.toISOString().split('T')[0];
  }
  
  async handleReservation(e) {
    const formData = new FormData(this.form);
    const reservationData = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      date: formData.get('date'),
      time: formData.get('time'),
      guests: formData.get('guests'),
      occasion: formData.get('occasion'),
      requests: formData.get('requests')
    };
    
    // Validate required fields
    if (!reservationData.name || !reservationData.phone || !reservationData.date || 
        !reservationData.time || !reservationData.guests) {
      this.showMessage('Please fill in all required fields', 'error');
      return;
    }
    
    // Show loading state
    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Processing...';
    submitBtn.disabled = true;
    
    try {
      // Format reservation message for WhatsApp
      const restaurantName = this.config?.restaurantInfo?.name || 'Aurora';
      const whatsappMessage = this.formatReservationMessage(reservationData, restaurantName);
      
      // Send to WhatsApp
      const whatsappNumber = this.config?.contact?.whatsapp || '628123456789';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      this.showMessage('Reservation request sent! We\'ll confirm via WhatsApp within 2 hours.', 'success');
      this.form.reset();
      
    } catch (error) {
      this.showMessage('Error processing reservation. Please try again.', 'error');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }
  
  formatReservationMessage(data, restaurantName) {
    const formatDate = (dateStr) => {
      const date = new Date(dateStr);
      return date.toLocaleDateString('id-ID', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    };
    
    let message = `*RESERVATION REQUEST - ${restaurantName}*\n\n`;
    message += `*Guest Details:*\n`;
    message += `• Name: ${data.name}\n`;
    message += `• Phone: ${data.phone}\n\n`;
    message += `*Reservation Details:*\n`;
    message += `• Date: ${formatDate(data.date)}\n`;
    message += `• Time: ${data.time}\n`;
    message += `• Party Size: ${data.guests} ${data.guests === '1' ? 'guest' : 'guests'}\n`;
    
    if (data.occasion) {
      message += `• Occasion: ${data.occasion}\n`;
    }
    
    if (data.requests) {
      message += `\n*Special Requests:*\n${data.requests}\n`;
    }
    
    message += `\nPlease confirm availability. Thank you! 🍽️`;
    
    return message;
  }
  
  showMessage(message, type) {
    // Remove existing message
    const existingMessage = this.form.querySelector('.form-message');
    if (existingMessage) existingMessage.remove();
    
    // Create new message
    const messageEl = document.createElement('div');
    messageEl.className = 'form-message';
    messageEl.style.cssText = `
      padding: 16px 20px;
      border-radius: 8px;
      margin-top: 20px;
      font-weight: 500;
      text-align: center;
      ${type === 'success' 
        ? 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' 
        : 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
      }
    `;
    messageEl.textContent = message;
    
    this.form.appendChild(messageEl);
    
    // Remove after 5 seconds
    setTimeout(() => messageEl.remove(), 5000);
  }
}

// ==========================================================================
// ⚡ PERFORMANCE & UX ENHANCEMENTS
// ==========================================================================
class PerformanceEnhancements {
  constructor() {
    this.init();
  }
  
  init() {
    this.setupLazyLoading();
    this.setupIntersectionObserver();
    this.setupImageOptimization();
    this.setupScrollToTop();
  }
  
  setupLazyLoading() {
    const lazyImages = $$('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }
  
  setupIntersectionObserver() {
    const animatedElements = $$('.feature-card, .experience-card, .menu-item, .testimonial-card');
    
    if ('IntersectionObserver' in window && window.RESTAURANT_CONFIG?.features?.enableAnimations) {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);
      
      animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
      });
    }
  }
  
  setupImageOptimization() {
    $$('img').forEach(img => {
      if (!img.complete) {
        img.style.opacity = '0';
        img.addEventListener('load', () => {
          img.style.transition = 'opacity 0.3s ease';
          img.style.opacity = '1';
        });
      }
    });
  }
  
  setupScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.style.cssText = `
      position: fixed;
      bottom: 100px;
      right: 30px;
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 50%;
      background: var(--primary-color);
      color: var(--neutral-color);
      font-size: 20px;
      cursor: pointer;
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px var(--shadow-medium);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide based on scroll
    window.addEventListener('scroll', debounce(() => {
      if (window.scrollY > 600) {
        scrollBtn.style.opacity = '1';
        scrollBtn.style.visibility = 'visible';
      } else {
        scrollBtn.style.opacity = '0';
        scrollBtn.style.visibility = 'hidden';
      }
    }, 100));
    
    // Scroll to top on click
    scrollBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

// ==========================================================================
// 📊 SECTION VISIBILITY MANAGER
// ==========================================================================
class SectionManager {
  constructor() {
    this.features = window.RESTAURANT_CONFIG?.features || {};
    this.init();
  }
  
  init() {
    this.toggleSections();
    this.updateNavigation();
  }
  
  toggleSections() {
    if (!this.features.showAbout) this.hideSection('#about');
    if (!this.features.showFeatures) this.hideSection('.features');
    if (!this.features.showExperiences) this.hideSection('#experiences');
    if (!this.features.showGallery) this.hideSection('#gallery');
    if (!this.features.showTestimonials) this.hideSection('.testimonials');
    
    if (!this.features.enableReservations) {
      const reservationForm = $('.reservation-form');
      if (reservationForm) reservationForm.style.display = 'none';
    }
  }
  
  hideSection(selector) {
    const section = $(selector);
    if (section) section.style.display = 'none';
  }
  
  updateNavigation() {
    const hiddenSections = [];
    
    if (!this.features.showAbout) hiddenSections.push('about');
    if (!this.features.showGallery) hiddenSections.push('gallery');
    
    hiddenSections.forEach(section => {
      const navItem = $(`.nav-link[href="#${section}"]`);
      if (navItem?.parentElement) {
        navItem.parentElement.style.display = 'none';
      }
    });
  }
}

// ==========================================================================
// 🚀 MAIN APPLICATION CLASS
// ==========================================================================
class ModernRestaurantApp {
  constructor() {
    this.components = [];
    this.init();
  }
  
  init() {
    // Wait for DOM and config to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
    } else {
      this.initializeComponents();
    }
  }
  
  initializeComponents() {
    // Validate configuration
    if (!validateConfig()) {
      console.error('❌ App initialization failed due to configuration errors');
      return;
    }
    
    try {
      // Initialize core systems
      this.customizer = new ModernTemplateCustomizer();
      this.sectionManager = new SectionManager();
      
      // Initialize all components
      this.components.push(new ModernNavigation());
      this.components.push(new MenuSystem());
      this.components.push(new ReservationSystem());
      this.components.push(new PerformanceEnhancements());
      
      // Store global references
      window.templateCustomizer = this.customizer;
      
      console.log('🍽️ Modern Restaurant Template initialized successfully!');
      console.log('💡 Type showCustomizationHelp() for quick customization tips');
      
    } catch (error) {
      console.error('❌ Error initializing Modern Restaurant Template:', error);
    }
  }
}

// ==========================================================================
// 🌟 GLOBAL QUICK FUNCTIONS
// ==========================================================================
window.changeColorScheme = function(scheme) {
  if (window.RESTAURANT_CONFIG && window.RESTAURANT_CONFIG.changeColorScheme) {
    window.RESTAURANT_CONFIG.changeColorScheme(scheme);
  }
};

window.changeRestaurantName = function(name) {
  if (window.RESTAURANT_CONFIG && window.RESTAURANT_CONFIG.changeRestaurantName) {
    window.RESTAURANT_CONFIG.changeRestaurantName(name);
  }
};

window.updateContact = function(contactData) {
  if (window.RESTAURANT_CONFIG && window.RESTAURANT_CONFIG.updateContact) {
    window.RESTAURANT_CONFIG.updateContact(contactData);
  }
};

// ==========================================================================
// ⚡ START THE APPLICATION
// ==========================================================================
const modernRestaurantApp = new ModernRestaurantApp();

// Show welcome message after everything loads
window.addEventListener('load', () => {
  setTimeout(() => {
    if (window.RESTAURANT_CONFIG) {
      console.log(`
🍽️ ${window.RESTAURANT_CONFIG.restaurantInfo?.name || 'Modern Restaurant'} - Template Ready!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Sophisticated template loaded successfully!

📝 QUICK CUSTOMIZATION:
1. Edit RESTAURANT_CONFIG in config.js
2. Update restaurant info, colors, contact details
3. Save and refresh to see changes

💡 CONSOLE COMMANDS:
• changeColorScheme('dark' | 'light' | 'elegant')
• changeRestaurantName('Your Restaurant Name')
• updateContact({phone: '021-xxx-xxxx', whatsapp: '628xxxxxxxxx'})

🎨 DESIGN READY FOR:
• Fine dining restaurants
• Modern cafes & bistros
• Contemporary cuisine
• Upscale dining experiences

Perfect for sophisticated dining establishments! 🌟
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `);
    }
  }, 1200);
});