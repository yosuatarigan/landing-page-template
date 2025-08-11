/**
 * ===============================================================================
 * 🍽️ MODERN MINIMALIST RESTAURANT - INTERACTIVE FUNCTIONALITY
 * ===============================================================================
 * 
 * 🏗️ ARCHITECTURE: Component-Based (Flutter-like structure)
 * • Modular components for easy maintenance
 * • Clean separation of concerns
 * • Performance-optimized interactions
 * 
 * 📱 FEATURES:
 * • Responsive navigation with smooth animations
 * • Dynamic content loading from config
 * • WhatsApp reservation system
 * • Modern UI interactions
 * 
 * ===============================================================================
 */

// ==========================================================================
// 🛠️ UTILITY FUNCTIONS
// ==========================================================================
class Utils {
  static $(selector) { return document.querySelector(selector); }
  static $$(selector) { return document.querySelectorAll(selector); }
  
  static formatCurrency(amount, currency = 'IDR') {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: currency,
      minimumFractionDigits: 0
    }).format(amount);
  }
  
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  static smoothScroll(target, offset = 80) {
    const element = Utils.$(target);
    if (!element) return;
    
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  
  static createWhatsAppUrl(phone, message) {
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  }
}

// ==========================================================================
// 🎨 TEMPLATE CUSTOMIZER COMPONENT
// ==========================================================================
class TemplateCustomizer {
  constructor(config) {
    this.config = config;
    this.init();
  }
  
  init() {
    if (!this.config) {
      console.error('❌ RESTAURANT_CONFIG not found!');
      return;
    }
    
    this.updateMetadata();
    this.updateBranding();
    this.updateContent();
    this.updateImages();
    this.updateContactInfo();
    this.populateFeatures();
    this.populateExperiences(); 
    this.updateNavigation();
  }
  
  updateMetadata() {
    const { website, restaurantInfo } = this.config;
    
    // Update page title
    if (website?.title) {
      document.title = website.title;
    }
    
    // Update meta tags
    const metaDesc = Utils.$('meta[name="description"]');
    if (metaDesc && website?.description) {
      metaDesc.content = website.description;
    }
    
    const metaKeywords = Utils.$('meta[name="keywords"]');
    if (metaKeywords && website?.keywords) {
      metaKeywords.content = website.keywords;
    }
    
    // Update Open Graph
    const ogTitle = Utils.$('meta[property="og:title"]');
    const ogDesc = Utils.$('meta[property="og:description"]');
    const ogImage = Utils.$('meta[property="og:image"]');
    
    if (ogTitle) ogTitle.content = website?.title || restaurantInfo?.name;
    if (ogDesc) ogDesc.content = website?.description;
    if (ogImage && website?.ogImage) ogImage.content = website.ogImage;
  }
  
  updateBranding() {
    const { colors } = this.config.branding;
    const root = document.documentElement;
    
    if (colors) {
      root.style.setProperty('--primary-color', colors.primary);
      root.style.setProperty('--secondary-color', colors.secondary);
      root.style.setProperty('--accent-color', colors.accent);
      root.style.setProperty('--neutral-color', colors.neutral);
    }
  }
  
  updateContent() {
    const { restaurantInfo } = this.config;
    
    // Update restaurant name
    Utils.$$('.logo-text, .footer-logo-text, .footer-business-name').forEach(el => {
      el.textContent = restaurantInfo.name;
    });
    
    // Update hero content
    const titleMain = Utils.$('.title-main');
    const titleSub = Utils.$('.title-sub'); 
    
    if (titleMain) titleMain.textContent = restaurantInfo.name;
    if (titleSub) titleSub.textContent = restaurantInfo.tagline;
    
    // Update hero description
    const heroSubtitle = Utils.$('.hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = restaurantInfo.description;
    
    // Update about section
    const aboutDescription = Utils.$('.about-description');
    if (aboutDescription) aboutDescription.textContent = restaurantInfo.description;
    
    const aboutPhilosophy = Utils.$('.about-philosophy');
    if (aboutPhilosophy) aboutPhilosophy.textContent = `"${restaurantInfo.philosophy}"`;
    
    // Update chef info
    const chefName = Utils.$('.chef-name');
    const chefTitle = Utils.$('.chef-title');
    const chefBio = Utils.$('.chef-bio');
    
    if (chefName) chefName.textContent = restaurantInfo.chefName;
    if (chefTitle) chefTitle.textContent = restaurantInfo.chefTitle;
    if (chefBio) chefBio.textContent = restaurantInfo.chefBio;
    
    // Update highlights
    const highlights = Utils.$$('.highlight-number');
    if (highlights.length >= 3) {
      highlights[0].textContent = restaurantInfo.established;
      highlights[1].textContent = restaurantInfo.rating;
      highlights[2].textContent = restaurantInfo.capacity;
    }
  }
  
  updateImages() {
    const { images } = this.config.branding;
    
    // Update logos
    Utils.$$('.logo, .footer-logo img').forEach(img => {
      if (images.logo) img.src = images.logo;
    });
    
    // Update hero background
    const heroImg = Utils.$('.hero-img');
    if (heroImg && images.heroBackground) {
      heroImg.src = images.heroBackground;
    }
    
    // Update chef photo
    const chefImage = Utils.$('.chef-image');
    if (chefImage && images.chefPhoto) {
      chefImage.src = images.chefPhoto;
    }
    
    // Update favicon
    const favicon = Utils.$('link[rel="icon"]');
    if (favicon && images.favicon) favicon.href = images.favicon;
  }
  
  updateContactInfo() {
    const { contact } = this.config;
    
    // Update hero info cards - fix selector
    const infoValues = Utils.$('.info-value');
    if (infoValues.length >= 3) {
      infoValues[0].textContent = `${contact.address.area}, ${contact.address.city}`;
      infoValues[1].textContent = `${contact.hours.restaurant.days}, ${contact.hours.restaurant.open}-${contact.hours.restaurant.close}`;
      infoValues[2].textContent = contact.phone;
    }
    
    // Also update via alternative selector if needed
    const locationValue = Utils.$('.info-card:nth-child(1) .info-value');
    const hoursValue = Utils.$('.info-card:nth-child(2) .info-value');
    const phoneValue = Utils.$('.info-card:nth-child(3) .info-value');
    
    if (locationValue) locationValue.textContent = `${contact.address.area}, ${contact.address.city}`;
    if (hoursValue) hoursValue.textContent = `${contact.hours.restaurant.days}, ${contact.hours.restaurant.open}-${contact.hours.restaurant.close}`;
    if (phoneValue) phoneValue.textContent = contact.phone;
    
    // Populate contact details
    this.populateContactDetails();
    
    // Update WhatsApp links
    this.updateWhatsAppLinks();
    
    // Update social media
    this.updateSocialMedia();
  }
  
  populateContactDetails() {
    const { contact } = this.config;
    const contactDetails = Utils.$('#contact-details');
    
    if (!contactDetails) return;
    
    contactDetails.innerHTML = `
      <div class="contact-item">
        <div class="contact-icon">📍</div>
        <div class="contact-text">
          <h3>Location</h3>
          <p>${contact.address.street}<br>${contact.address.area}, ${contact.address.city} ${contact.address.postalCode}<br><em>${contact.address.landmark}</em></p>
        </div>
      </div>
      
      <div class="contact-item">
        <div class="contact-icon">📞</div>
        <div class="contact-text">
          <h3>Reservations</h3>
          <p>
            <a href="tel:${contact.phone}">${contact.phone}</a><br>
            <a href="${Utils.createWhatsAppUrl(contact.whatsapp, 'Hello, I would like to make a reservation')}" target="_blank">WhatsApp: +${contact.whatsapp}</a>
          </p>
        </div>
      </div>
      
      <div class="contact-item">
        <div class="contact-icon">⏰</div>
        <div class="contact-text">
          <h3>Hours</h3>
          <p>
            <strong>Dining:</strong> ${contact.hours.restaurant.days}<br>
            ${contact.hours.restaurant.open} - ${contact.hours.restaurant.close}<br>
            <em>Closed ${contact.hours.restaurant.closed}</em>
          </p>
        </div>
      </div>
      
      <div class="contact-item">
        <div class="contact-icon">✉️</div>
        <div class="contact-text">
          <h3>Email</h3>
          <p><a href="mailto:${contact.email}">${contact.email}</a></p>
        </div>
      </div>
    `;
  }
  
  updateWhatsAppLinks() {
    const { contact, restaurantInfo } = this.config;
    const message = `Hello ${restaurantInfo.name}, I would like to make a reservation`;
    const whatsappUrl = Utils.createWhatsAppUrl(contact.whatsapp, message);
    
    Utils.$$('a[href="#"], .cta-nav, #whatsapp-float').forEach(link => {
      if (link.textContent.toLowerCase().includes('reserve') || 
          link.id === 'whatsapp-float' ||
          link.classList.contains('cta-nav')) {
        link.href = whatsappUrl;
        link.target = '_blank';
      }
    });
  }
  
  updateSocialMedia() {
    const { socialMedia } = this.config.contact;
    const socialContainer = Utils.$('#social-links');
    const footerSocial = Utils.$('#footer-social');
    
    if (!socialMedia) return;
    
    const socialHTML = `
      ${socialMedia.instagram ? `<a href="https://instagram.com/${socialMedia.instagram}" target="_blank" class="social-link">📸</a>` : ''}
      ${socialMedia.facebook ? `<a href="https://facebook.com/${socialMedia.facebook}" target="_blank" class="social-link">📘</a>` : ''}
      ${socialMedia.tiktok ? `<a href="https://tiktok.com/@${socialMedia.tiktok}" target="_blank" class="social-link">🎵</a>` : ''}
    `;
    
    if (socialContainer) socialContainer.innerHTML = socialHTML;
    if (footerSocial) footerSocial.innerHTML = socialHTML;
  }
  
  populateFeatures() {
    const featuresGrid = Utils.$('#features-grid');
    if (!featuresGrid || !this.config.features) return;
    
    featuresGrid.innerHTML = this.config.features.map(feature => `
      <div class="feature-card">
        <div class="feature-icon">${feature.icon}</div>
        <h3 class="feature-title">${feature.title}</h3>
        <p class="feature-description">${feature.description}</p>
      </div>
    `).join('');
  }
  
  populateExperiences() {
    const experiencesGrid = Utils.$('#experiences-grid');
    if (!experiencesGrid || !this.config.specialExperiences) return;
    
    experiencesGrid.innerHTML = this.config.specialExperiences.map(exp => `
      <div class="experience-card ${exp.featured ? 'featured' : ''}">
        ${exp.badge ? `<div class="experience-badge">${exp.badge}</div>` : ''}
        <h3 class="experience-title">${exp.title}</h3>
        <p class="experience-description">${exp.description}</p>
        <div class="experience-price">${exp.price}</div>
        <p class="experience-availability">${exp.availability}</p>
      </div>
    `).join('');
  }
  
  updateNavigation() {
    // Update menu tabs
    const menuTabs = Utils.$('#menu-tabs');
    if (menuTabs && this.config.menuCategories) {
      menuTabs.innerHTML = this.config.menuCategories.map((cat, index) => `
        <button class="tab-btn ${index === 0 ? 'active' : ''}" data-tab="${cat.id}">
          ${cat.icon} ${cat.name}
        </button>
      `).join('');
    }
    
    // Update Google Maps
    const googleMaps = Utils.$('#google-maps');
    if (googleMaps && this.config.website?.googleMapsUrl) {
      googleMaps.src = this.config.website.googleMapsUrl;
    }
    
    // Fix gallery display
    this.fixGalleryDisplay();
  }
  
  fixGalleryDisplay() {
    // Ensure gallery grid is visible and properly styled
    const galleryGrid = Utils.$('.gallery-grid');
    if (galleryGrid) {
      // Force gallery visibility
      galleryGrid.style.display = 'grid';
      galleryGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
      galleryGrid.style.gridTemplateRows = 'repeat(3, 200px)';
      galleryGrid.style.gap = 'var(--spacing-md)';
      galleryGrid.style.width = '100%';
      galleryGrid.style.height = 'auto';
      galleryGrid.style.visibility = 'visible';
      galleryGrid.style.opacity = '1';
      
      // Make sure gallery items are visible
      const galleryItems = galleryGrid.querySelectorAll('.gallery-item');
      galleryItems.forEach((item, index) => {
        item.style.display = 'block';
        item.style.opacity = '1';
        item.style.visibility = 'visible';
        item.style.position = 'relative';
        
        // Ensure images load properly
        const img = item.querySelector('img');
        if (img) {
          img.style.width = '100%';
          img.style.height = '100%';
          img.style.objectFit = 'cover';
          img.style.display = 'block';
          
          // Force reload image if not loaded
          if (!img.complete) {
            const src = img.src;
            img.src = '';
            img.src = src;
          }
        }
      });
      
      // Also ensure gallery section is visible
      const gallerySection = Utils.$('#gallery');
      if (gallerySection) {
        gallerySection.style.display = 'block';
        gallerySection.style.visibility = 'visible';
        gallerySection.style.opacity = '1';
      }
      
      console.log(`✅ Gallery fixed: ${galleryItems.length} items visible`);
    } else {
      console.warn('Gallery grid not found');
    }
  }
}

// ==========================================================================
// 🧭 NAVIGATION COMPONENT
// ==========================================================================
class Navigation {
  constructor() {
    this.navbar = Utils.$('#navbar');
    this.hamburger = Utils.$('#hamburger');
    this.navMenu = Utils.$('#nav-menu');
    this.navLinks = Utils.$$('.nav-link');
    this.isMenuOpen = false;
    
    this.init();
  }
  
  init() {
    this.setupHamburgerToggle();
    this.setupNavLinks();
    this.setupScrollEffect();
    this.setupActiveLinks();
  }
  
  setupHamburgerToggle() {
    this.hamburger?.addEventListener('click', (e) => {
      e.preventDefault();
      this.toggleMobileMenu();
    });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (this.isMenuOpen && 
          !this.navMenu.contains(e.target) && 
          !this.hamburger.contains(e.target)) {
        this.closeMobileMenu();
      }
    });
  }
  
  toggleMobileMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.hamburger.classList.toggle('active');
    this.navMenu.classList.toggle('active');
    
    // Prevent body scroll
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
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
        
        if (href && href.startsWith('#') && href !== '#') {
          e.preventDefault();
          Utils.smoothScroll(href);
          this.closeMobileMenu();
        }
      });
    });
  }
  
  setupScrollEffect() {
    const handleScroll = Utils.debounce(() => {
      if (window.scrollY > 100) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
    }, 10);
    
    window.addEventListener('scroll', handleScroll);
  }
  
  setupActiveLinks() {
    const handleScroll = Utils.debounce(() => {
      const sections = Utils.$$('section[id]');
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
// 🍽️ MENU COMPONENT
// ==========================================================================
class MenuTabs {
  constructor() {
    this.tabButtons = Utils.$$('.tab-btn');
    this.tabContents = Utils.$$('.menu-content');
    
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
    // Remove active classes
    this.tabButtons.forEach(btn => btn.classList.remove('active'));
    this.tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active classes
    clickedButton.classList.add('active');
    const targetContent = Utils.$(`#${targetTab}`);
    if (targetContent) {
      targetContent.classList.add('active');
      this.animateMenuItems(targetContent);
    }
  }
  
  animateMenuItems(container) {
    const menuItems = container.querySelectorAll('.menu-item');
    menuItems.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
      
      setTimeout(() => {
        item.style.transition = 'all 0.3s ease';
        item.style.opacity = '1';
        item.style.transform = 'translateY(0)';
      }, index * 100);
    });
  }
}

// ==========================================================================
// 📝 RESERVATION FORM COMPONENT
// ==========================================================================
class ReservationForm {
  constructor(config) {
    this.form = Utils.$('#reservation-form');
    this.config = config;
    
    this.init();
  }
  
  init() {
    if (!this.form) return;
    
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit(e);
    });
  }
  
  async handleSubmit(e) {
    const formData = new FormData(this.form);
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      date: formData.get('date'),
      time: formData.get('time'),
      guests: formData.get('guests'),
      occasion: formData.get('occasion'),
      requests: formData.get('requests')
    };
    
    // Validate required fields
    if (!data.name || !data.phone || !data.date || !data.time || !data.guests) {
      this.showMessage('Please fill in all required fields', 'error');
      return;
    }
    
    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    try {
      submitBtn.textContent = 'Sending...';
      submitBtn.disabled = true;
      
      // Create WhatsApp message
      const restaurantName = this.config.restaurantInfo.name;
      const message = this.createReservationMessage(data, restaurantName);
      
      // Open WhatsApp
      const whatsappUrl = Utils.createWhatsAppUrl(this.config.contact.whatsapp, message);
      window.open(whatsappUrl, '_blank');
      
      this.showMessage('Reservation request sent via WhatsApp. We\'ll confirm within 2 hours!', 'success');
      this.form.reset();
      
    } catch (error) {
      this.showMessage('Something went wrong. Please try again.', 'error');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }
  
  createReservationMessage(data, restaurantName) {
    return `🍽️ *RESERVATION REQUEST - ${restaurantName}*

👤 *Guest Details:*
Name: ${data.name}
Phone: ${data.phone}

📅 *Reservation Details:*
Date: ${data.date}
Time: ${data.time}
Guests: ${data.guests}
${data.occasion ? `Occasion: ${data.occasion}` : ''}

${data.requests ? `💬 *Special Requests:*
${data.requests}` : ''}

Please confirm availability. Thank you! 🙏`;
  }
  
  showMessage(message, type) {
    const existingMessage = this.form.querySelector('.form-message');
    if (existingMessage) existingMessage.remove();
    
    const messageEl = document.createElement('div');
    messageEl.className = 'form-message';
    messageEl.style.cssText = `
      padding: 12px 16px;
      border-radius: 8px;
      margin-top: 15px;
      font-weight: 500;
      ${type === 'success' 
        ? 'background: #d4edda; color: #155724; border: 1px solid #c3e6cb;' 
        : 'background: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;'
      }
    `;
    messageEl.textContent = message;
    
    this.form.appendChild(messageEl);
    
    setTimeout(() => messageEl.remove(), 5000);
  }
}

// ==========================================================================
// ⚡ PERFORMANCE ENHANCEMENTS
// ==========================================================================
class PerformanceEnhancements {
  constructor() {
    this.init();
  }
  
  init() {
    this.setupLazyLoading();
    this.setupIntersectionObserver();
    this.setupImageOptimization();
  }
  
  setupLazyLoading() {
    const lazyImages = Utils.$$('img[loading="lazy"]');
    
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
    const animatedElements = Utils.$$('.feature-card, .testimonial-card, .experience-card, .menu-item');
    
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
      
      animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
      });
    }
  }
  
  setupImageOptimization() {
    Utils.$$('img').forEach(img => {
      if (!img.complete) {
        img.style.opacity = '0';
        img.addEventListener('load', () => {
          img.style.transition = 'opacity 0.3s ease';
          img.style.opacity = '1';
        });
      }
    });
  }
}

// ==========================================================================
// 🏗️ MAIN APPLICATION CLASS
// ==========================================================================
class ModernRestaurant {
  constructor() {
    this.config = window.RESTAURANT_CONFIG;
    this.components = [];
    
    this.init();
  }
  
  init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeApp());
    } else {
      this.initializeApp();
    }
  }
  
  initializeApp() {
    if (!this.config) {
      console.error('❌ RESTAURANT_CONFIG not found! Make sure config.js is loaded first.');
      return;
    }
    
    try {
      // Initialize template customization
      this.customizer = new TemplateCustomizer(this.config);
      
      // Initialize components
      this.components.push(new Navigation());
      this.components.push(new MenuTabs());
      this.components.push(new ReservationForm(this.config));
      this.components.push(new PerformanceEnhancements());
      
      // Fix common display issues immediately
      this.fixCommonIssues();
      
      // Additional fixes after DOM is fully loaded
      setTimeout(() => {
        this.customizer.fixGalleryDisplay();
        this.fixHeroTextVisibility();
      }, 500);
      
      // Set current year
      const yearElement = Utils.$('#current-year');
      if (yearElement) yearElement.textContent = new Date().getFullYear();
      
      console.log(`🍽️ ${this.config.restaurantInfo.name} - Modern Restaurant Template Loaded Successfully!`);
      console.log('📝 Configuration can be customized in config.js');
      console.log('🔧 Template components initialized:', this.components.length);
      
      // Debug gallery display
      setTimeout(() => {
        const galleryItems = Utils.$('.gallery-item');
        console.log(`🖼️ Gallery items found: ${galleryItems.length}`);
        if (galleryItems.length === 0) {
          console.warn('⚠️ No gallery items found - this may be a display issue');
        }
      }, 1000);
      
    } catch (error) {
      console.error('❌ Error initializing Modern Restaurant Template:', error);
    }
  }
  
  fixCommonIssues() {
    // Remove any unwanted circular elements
    const unwantedElements = Utils.$('.circular-element, .broken-circle');
    unwantedElements.forEach(el => el.remove());
    
    // Ensure footer contact is populated
    this.populateFooterContact();
    
    // Fix any empty sections
    this.fixEmptySections();
  }
  
  populateFooterContact() {
    const { contact } = this.config;
    const footerContact = Utils.$('#footer-contact');
    
    if (footerContact) {
      footerContact.innerHTML = `
        <p>📍 ${contact.address.street}, ${contact.address.city}</p>
        <p>📞 <a href="tel:${contact.phone}">${contact.phone}</a></p>
        <p>💬 <a href="${Utils.createWhatsAppUrl(contact.whatsapp, 'Hello!')}" target="_blank">+${contact.whatsapp}</a></p>
        <p>⏰ ${contact.hours.restaurant.days}: ${contact.hours.restaurant.open}-${contact.hours.restaurant.close}</p>
      `;
    }
  }
  
  fixEmptySections() {
    // Ensure all sections have minimum content
    const sections = Utils.$('section');
    sections.forEach(section => {
      if (section.textContent.trim().length < 10) {
        console.warn(`Section ${section.id} appears to be empty`);
      }
    });
  }
}

// ==========================================================================
// 🚀 INITIALIZE APPLICATION
// ==========================================================================
const modernRestaurant = new ModernRestaurant();

// ==========================================================================
// 🌟 GLOBAL HELPER FUNCTIONS
// ==========================================================================
window.modernRestaurantHelp = () => {
  console.log(`
🍽️ Modern Restaurant Template - Quick Help
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 CUSTOMIZATION:
• Edit RESTAURANT_CONFIG in config.js
• All content, colors, and contact info controlled there
• No need to edit HTML or CSS files

🔧 QUICK COMMANDS:
• updateRestaurantName('New Name')
• updateContactInfo('+62...', '628...', 'email@...')
• updateBrandColors('#color1', '#color2', '#color3')
• validateRestaurantConfig()

💡 TIPS:
• Use high-quality images (min 1920px width for hero)
• Test WhatsApp integration thoroughly
• Keep content concise and elegant

📱 MOBILE-FIRST DESIGN:
• Responsive across all devices
• Touch-friendly interactions
• Optimized loading performance

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  `);
};

// Show help message after load
window.addEventListener('load', () => {
  setTimeout(() => {
    if (window.RESTAURANT_CONFIG) {
      console.log(`
🎉 Welcome to ${window.RESTAURANT_CONFIG.restaurantInfo.name}!

💡 Type modernRestaurantHelp() for customization guide
📝 Edit config.js to customize your restaurant
🚀 Upload all files to your hosting to go live

🔧 Quick Debug Commands:
• fixGalleryNow() - Force fix gallery display
• fixHeroNow() - Force fix hero text visibility
      `);
    }
  }, 1500);
});

// Quick fix functions for debugging
window.fixGalleryNow = () => {
  const galleryGrid = Utils.$('.gallery-grid');
  if (galleryGrid) {
    galleryGrid.style.display = 'grid !important';
    galleryGrid.style.visibility = 'visible !important';
    galleryGrid.style.opacity = '1 !important';
    
    const items = galleryGrid.querySelectorAll('.gallery-item');
    items.forEach(item => {
      item.style.display = 'block !important';
      item.style.visibility = 'visible !important';
      item.style.opacity = '1 !important';
    });
    
    console.log(`✅ Gallery force-fixed: ${items.length} items`);
  }
};

window.fixHeroNow = () => {
  const titleMain = Utils.$('.title-main');
  const titleSub = Utils.$('.title-sub');
  
  if (titleMain) {
    titleMain.style.color = '#FFFFFF !important';
    titleMain.style.textShadow = '2px 2px 8px rgba(0, 0, 0, 0.8) !important';
  }
  
  if (titleSub) {
    titleSub.style.color = '#D4AF37 !important';
    titleSub.style.textShadow = '1px 1px 4px rgba(0, 0, 0, 0.8) !important';
  }
  
  console.log('✅ Hero text force-fixed');
};