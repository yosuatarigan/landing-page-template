/**
 * ===============================================================================
 * 🍽️ WARUNG TEMPLATE - COMPLETE JAVASCRIPT FUNCTIONALITY
 * ===============================================================================
 * 
 * 🔧 FEATURES:
 * • Auto-population from config.js
 * • Mobile-responsive navigation
 * • Interactive menu system
 * • Shopping cart functionality
 * • WhatsApp integration
 * • Performance optimizations
 * 
 * 📝 CUSTOMIZATION:
 * • All customization should be done in config.js
 * • Don't edit this file unless you're a developer
 * • This file reads from WARUNG_CONFIG object
 * 
 * 💡 DEPENDENCIES:
 * • Requires config.js to be loaded first
 * • Uses modern JavaScript (ES6+)
 * • No external libraries needed
 * 
 * ===============================================================================
 */

// ==========================================================================
// 🛠️ UTILITY FUNCTIONS
// ==========================================================================

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

// Format price to Indonesian Rupiah
const formatRupiah = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  }).format(amount);
};

// Debounce function for performance
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

// Smooth scroll function
const smoothScroll = (target, offset = 80) => {
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

// Validate configuration
const validateConfig = () => {
  if (typeof window.WARUNG_CONFIG === 'undefined') {
    console.error('❌ WARUNG_CONFIG not found! Make sure config.js is loaded first.');
    return false;
  }
  
  const config = window.WARUNG_CONFIG;
  const errors = [];
  
  // Check required fields
  if (!config.businessInfo?.name) errors.push('Business name is required');
  if (!config.contact?.whatsapp) errors.push('WhatsApp number is required');
  if (!config.contact?.phone) errors.push('Phone number is required');
  
  // Check WhatsApp format
  if (config.contact?.whatsapp && !config.contact.whatsapp.startsWith('628')) {
    errors.push('WhatsApp number should start with 628 (Indonesian format)');
  }
  
  // Check colors format
  if (config.branding?.colors) {
    Object.entries(config.branding.colors).forEach(([key, color]) => {
      if (color && !color.match(/^#[0-9A-Fa-f]{6}$/)) {
        errors.push(`Color ${key} should be in hex format (e.g., #FF6B35)`);
      }
    });
  }
  
  if (errors.length > 0) {
    console.warn('⚠️ Configuration Issues Found:');
    errors.forEach(error => console.warn(`• ${error}`));
    return false;
  }
  
  return true;
};

// ==========================================================================
// 🎨 TEMPLATE CUSTOMIZER CLASS
// ==========================================================================

class TemplateCustomizer {
  constructor() {
    this.config = window.WARUNG_CONFIG;
    if (!this.config) {
      console.error('❌ WARUNG_CONFIG not found!');
      return;
    }
    this.init();
  }
  
  init() {
    this.updateColors();
    this.updateBusinessInfo();
    this.updateMetaTags();
    this.updateImages();
    this.updateContactInfo();
    this.updateDeliveryInfo();
    this.updatePromotions();
    this.updateAboutFeatures();
    this.updateMenuTabs();
    this.updateSocialLinks();
    this.updateGoogleMaps();
  }
  
  // Update CSS colors from config
  updateColors() {
    const root = document.documentElement;
    const colors = this.config.branding?.colors;
    
    if (colors) {
      root.style.setProperty('--primary-color', colors.primary);
      root.style.setProperty('--secondary-color', colors.secondary);
      root.style.setProperty('--accent-color', colors.accent);
      root.style.setProperty('--success-color', colors.success || '#27AE60');
      
      // Calculate darker variants automatically
      root.style.setProperty('--primary-dark', this.darkenColor(colors.primary, 10));
      root.style.setProperty('--secondary-dark', this.darkenColor(colors.secondary, 10));
    }
  }
  
  // Update business information throughout the site
  updateBusinessInfo() {
    const info = this.config.businessInfo;
    
    if (!info) return;
    
    // Update business name
    $$('.logo-text, .footer-logo span, .footer-business-name').forEach(el => {
      el.textContent = info.name || 'Warung Template';
    });
    
    // Update hero title and subtitle
    const heroTitle = $('.hero-title');
    if (heroTitle && info.tagline) {
      const words = info.tagline.split(' ');
      const lastWord = words.pop();
      const firstWords = words.join(' ');
      heroTitle.innerHTML = `${firstWords} <span class="highlight">${lastWord}</span>`;
    }
    
    const heroSubtitle = $('.hero-subtitle');
    if (heroSubtitle && info.description) {
      heroSubtitle.textContent = info.description;
    }
    
    // Update chef info
    const chefName = $('.chef-info h4');
    const chefTitle = $('.chef-info p');
    if (chefName && info.ownerName) chefName.textContent = info.ownerName;
    if (chefTitle && info.ownerTitle) chefTitle.textContent = info.ownerTitle;
    
    // Update about story
    const storyText = $('.story-text');
    if (storyText && info.story) {
      storyText.textContent = info.story;
    }
    
    // Update footer description
    const footerDesc = $('.footer-description');
    if (footerDesc && info.yearEstablished) {
      footerDesc.textContent = `Masakan rumahan terlezat dengan resep turun temurun. Melayani sejak ${info.yearEstablished} dengan penuh cinta dan dedikasi.`;
    }
  }
  
  // Update meta tags for SEO
  updateMetaTags() {
    const website = this.config.website;
    const businessInfo = this.config.businessInfo;
    
    if (website?.title) document.title = website.title;
    if (businessInfo?.name) {
      document.title = document.title.replace('Loading...', businessInfo.name);
    }
    
    const metaDescription = $('meta[name="description"]');
    if (metaDescription && website?.description) {
      metaDescription.content = website.description;
    }
    
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
      });
    }
    
    // Update hero background
    const heroImg = $('.hero-img');
    if (heroImg && images.heroBackground) {
      heroImg.src = images.heroBackground;
    }
    
    // Update chef photo
    const chefImg = $('.chef-img');
    if (chefImg && images.ownerPhoto) {
      chefImg.src = images.ownerPhoto;
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
    
    // Update operating hours in hero
    $$('.info-item').forEach(item => {
      const text = item.textContent;
      if (text.includes('Buka:') && contact.hours) {
        item.innerHTML = `<span class="info-icon">🕐</span><span>Buka: ${contact.hours.open} - ${contact.hours.close}</span>`;
      }
    });
    
    // Update WhatsApp links
    const whatsappMessage = `Halo ${this.config.businessInfo?.name || 'Warung'}, saya ingin bertanya tentang menu`;
    const whatsappUrl = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    
    $$('a[href*="wa.me"], .whatsapp-float, .cta-nav').forEach(link => {
      if (link.href.includes('wa.me') || link.classList.contains('whatsapp-float') || link.classList.contains('cta-nav')) {
        link.href = whatsappUrl;
      }
    });
    
    // Update phone links
    if (contact.phone) {
      $$('a[href^="tel:"]').forEach(link => {
        link.href = `tel:+${contact.phone}`;
        if (link.textContent.includes('(021)') || link.textContent.includes('Loading')) {
          link.textContent = contact.phone;
        }
      });
    }
    
    // Update contact information section
    this.populateContactInfo();
  }
  
  // Populate contact information section
  populateContactInfo() {
    const contact = this.config.contact;
    const contactInfo = $('#contact-info');
    const footerContact = $('#footer-contact');
    
    if (!contact || !contactInfo) return;
    
    const fullAddress = `${contact.address}, ${contact.city} ${contact.postalCode}`;
    
    contactInfo.innerHTML = `
      <div class="contact-item">
        <span class="contact-icon">📍</span>
        <div class="contact-text">
          <h3>Alamat</h3>
          <p>${fullAddress}<br>${contact.addressNotes || ''}</p>
        </div>
      </div>
      
      <div class="contact-item">
        <span class="contact-icon">📞</span>
        <div class="contact-text">
          <h3>Telepon</h3>
          <p>
            <a href="tel:+${contact.phone}">${contact.phone}</a><br>
            <a href="https://wa.me/${contact.whatsapp}" target="_blank">+${contact.whatsapp} (WhatsApp)</a>
          </p>
        </div>
      </div>
      
      <div class="contact-item">
        <span class="contact-icon">🕐</span>
        <div class="contact-text">
          <h3>Jam Buka</h3>
          <p>
            ${contact.hours?.days || 'Senin - Minggu'}: ${contact.hours?.open} - ${contact.hours?.close}<br>
            Delivery: ${contact.hours?.deliveryStart} - ${contact.hours?.deliveryEnd}
          </p>
        </div>
      </div>
      
      <div class="contact-item">
        <span class="contact-icon">📱</span>
        <div class="contact-text">
          <h3>Media Sosial</h3>
          <div class="social-links">
            ${contact.socialMedia?.instagram ? `<a href="https://instagram.com/${contact.socialMedia.instagram}" target="_blank">Instagram</a>` : ''}
            ${contact.socialMedia?.facebook ? `<a href="https://facebook.com/${contact.socialMedia.facebook}" target="_blank">Facebook</a>` : ''}
            ${contact.socialMedia?.tiktok ? `<a href="https://tiktok.com/@${contact.socialMedia.tiktok}" target="_blank">TikTok</a>` : ''}
          </div>
        </div>
      </div>
    `;
    
    // Update footer contact
    if (footerContact) {
      footerContact.innerHTML = `
        <p>📍 ${fullAddress}</p>
        <p>📞 <a href="tel:+${contact.phone}">${contact.phone}</a></p>
        <p>💬 <a href="https://wa.me/${contact.whatsapp}" target="_blank">+${contact.whatsapp}</a></p>
        <p>🕐 ${contact.hours?.open} - ${contact.hours?.close} (${contact.hours?.days || 'Setiap Hari'})</p>
      `;
    }
  }
  
  // Update delivery information
  updateDeliveryInfo() {
    const delivery = this.config.delivery;
    const deliveryInfo = $('#delivery-info');
    
    if (!delivery || !deliveryInfo) return;
    
    deliveryInfo.innerHTML = `
      <div class="delivery-item">
        <span class="delivery-icon">🚚</span>
        <div class="delivery-text">
          <h3>Area Delivery</h3>
          <p>Melayani wilayah ${this.config.contact?.city || 'Jakarta'} dan sekitarnya dengan radius 5km dari warung</p>
        </div>
      </div>
      
      <div class="delivery-item">
        <span class="delivery-icon">⏰</span>
        <div class="delivery-text">
          <h3>Waktu Delivery</h3>
          <p>${this.config.contact?.hours?.days || 'Senin - Minggu'}: ${this.config.contact?.hours?.deliveryStart} - ${this.config.contact?.hours?.deliveryEnd}<br>Estimasi pengiriman: ${delivery.deliveryTime?.min}-${delivery.deliveryTime?.max} menit</p>
        </div>
      </div>
      
      <div class="delivery-item">
        <span class="delivery-icon">💰</span>
        <div class="delivery-text">
          <h3>Ongkos Kirim</h3>
          <p>
            • ${delivery.zones?.zone1?.distance}: ${delivery.zones?.zone1?.description}<br>
            • ${delivery.zones?.zone2?.distance}: ${delivery.zones?.zone2?.description}<br>
            • Min. order: ${formatRupiah(delivery.minOrder)}
          </p>
        </div>
      </div>
      
      <div class="delivery-item">
        <span class="delivery-icon">💳</span>
        <div class="delivery-text">
          <h3>Metode Pembayaran</h3>
          <p>${delivery.paymentMethods?.join(', ') || 'Cash, Transfer, E-wallet'}</p>
        </div>
      </div>
    `;
  }
  
  // Update promotions section
  updatePromotions() {
    const promotions = this.config.promotions;
    const promoGrid = $('#promo-grid');
    
    if (!promotions || !promoGrid) return;
    
    promoGrid.innerHTML = promotions.filter(promo => promo.active).map(promo => `
      <div class="promo-card">
        <div class="promo-badge">${promo.badge}</div>
        <h3>${promo.title}</h3>
        <p>${promo.description}</p>
        <div class="promo-code">${promo.code}</div>
      </div>
    `).join('');
  }
  
  // Update about features/highlights
  updateAboutFeatures() {
    const highlights = this.config.highlights;
    const featuresContainer = $('#about-features');
    
    if (!highlights || !featuresContainer) return;
    
    featuresContainer.innerHTML = highlights.map(highlight => `
      <div class="feature-item">
        <span class="feature-icon">${highlight.icon}</span>
        <div class="feature-text">
          <h4>${highlight.title}</h4>
          <p>${highlight.description}</p>
        </div>
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
    const footerSocial = $('#footer-social');
    
    if (!socialMedia || !footerSocial) return;
    
    const socialLinks = [];
    if (socialMedia.instagram) socialLinks.push(`<a href="https://instagram.com/${socialMedia.instagram}" target="_blank" aria-label="Instagram">📸</a>`);
    if (socialMedia.facebook) socialLinks.push(`<a href="https://facebook.com/${socialMedia.facebook}" target="_blank" aria-label="Facebook">📘</a>`);
    if (socialMedia.tiktok) socialLinks.push(`<a href="https://tiktok.com/@${socialMedia.tiktok}" target="_blank" aria-label="TikTok">🎵</a>`);
    if (this.config.contact?.whatsapp) socialLinks.push(`<a href="https://wa.me/${this.config.contact.whatsapp}" target="_blank" aria-label="WhatsApp">💬</a>`);
    
    footerSocial.innerHTML = socialLinks.join('');
  }
  
  // Update Google Maps
  updateGoogleMaps() {
    const googleMapsUrl = this.config.website?.googleMapsEmbedUrl;
    const mapIframe = $('#google-maps');
    
    if (googleMapsUrl && mapIframe) {
      mapIframe.src = googleMapsUrl;
    }
  }
  
  // Utility: Darken color by percentage
  darkenColor(color, percent) {
    if (!color) return color;
    const num = parseInt(color.replace("#",""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = (num >> 8 & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
      (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 + 
      (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
  }
}

// ==========================================================================
// 📱 NAVIGATION FUNCTIONALITY
// ==========================================================================

class Navigation {
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
    
    // Close menu when clicking on navigation links
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
    
    // Prevent body scroll when menu is open
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
  }
  
  closeMobileMenu() {
    this.isMenuOpen = false;
    this.hamburger.classList.remove('active');
    this.navMenu.classList.remove('active');
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  }
  
  setupNavLinks() {
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        
        // Handle internal links
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
// 🍽️ MENU TAB FUNCTIONALITY
// ==========================================================================

class MenuTabs {
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
// 🛒 SHOPPING CART FUNCTIONALITY
// ==========================================================================

class ShoppingCart {
  constructor() {
    this.cart = [];
    this.cartModal = $('#cart-modal');
    this.cartItems = $('#cart-items');
    this.totalAmount = $('#total-amount');
    this.checkoutBtn = $('#checkout-btn');
    this.cartClose = $('.cart-close');
    this.config = window.WARUNG_CONFIG;
    
    this.init();
  }
  
  init() {
    this.setupOrderButtons();
    this.setupCartModal();
    this.updateCartDisplay();
  }
  
  setupOrderButtons() {
    const orderButtons = $$('.btn-order');
    orderButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const name = button.getAttribute('data-name');
        const price = parseInt(button.getAttribute('data-price'));
        
        if (this.config?.features?.enableCart) {
          this.addToCart({ name, price, quantity: 1 });
          this.showCartModal();
        } else {
          // Direct WhatsApp order
          this.directWhatsAppOrder(name, price);
        }
      });
    });
  }
  
  setupCartModal() {
    // Close modal events
    this.cartClose?.addEventListener('click', () => this.hideCartModal());
    this.cartModal?.addEventListener('click', (e) => {
      if (e.target === this.cartModal) this.hideCartModal();
    });
    
    // Checkout button
    this.checkoutBtn?.addEventListener('click', () => {
      this.processCheckout();
    });
    
    // ESC key to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.cartModal?.style.display === 'flex') {
        this.hideCartModal();
      }
    });
  }
  
  addToCart(item) {
    const existingItem = this.cart.find(cartItem => cartItem.name === item.name);
    
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push({ ...item });
    }
    
    this.updateCartDisplay();
    this.showAddedToCartFeedback(item.name);
  }
  
  removeFromCart(itemName) {
    this.cart = this.cart.filter(item => item.name !== itemName);
    this.updateCartDisplay();
  }
  
  updateQuantity(itemName, newQuantity) {
    const item = this.cart.find(cartItem => cartItem.name === itemName);
    if (item) {
      if (newQuantity > 0) {
        item.quantity = newQuantity;
      } else {
        this.removeFromCart(itemName);
      }
    }
    this.updateCartDisplay();
  }
  
  updateCartDisplay() {
    if (!this.cartItems || !this.totalAmount) return;
    
    // Clear cart items
    this.cartItems.innerHTML = '';
    
    if (this.cart.length === 0) {
      this.cartItems.innerHTML = '<p style="text-align: center; color: #7F8C8D; padding: 20px;">Keranjang masih kosong</p>';
      this.totalAmount.textContent = '0';
      return;
    }
    
    // Render cart items
    let total = 0;
    this.cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 15px 0; border-bottom: 1px solid #eee;">
          <div>
            <h4 style="margin: 0 0 5px 0; font-size: 1rem;">${item.name}</h4>
            <p style="margin: 0; color: #7F8C8D; font-size: 0.9rem;">${formatRupiah(item.price)} x ${item.quantity}</p>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <button onclick="window.cartInstance.updateQuantity('${item.name}', ${item.quantity - 1})" style="background: #e74c3c; color: white; border: none; width: 25px; height: 25px; border-radius: 50%; cursor: pointer;">-</button>
            <span style="min-width: 20px; text-align: center; font-weight: 600;">${item.quantity}</span>
            <button onclick="window.cartInstance.updateQuantity('${item.name}', ${item.quantity + 1})" style="background: #27ae60; color: white; border: none; width: 25px; height: 25px; border-radius: 50%; cursor: pointer;">+</button>
            <button onclick="window.cartInstance.removeFromCart('${item.name}')" style="background: #95a5a6; color: white; border: none; padding: 5px 8px; border-radius: 4px; cursor: pointer; margin-left: 10px;">Hapus</button>
          </div>
        </div>
      `;
      this.cartItems.appendChild(cartItem);
    });
    
    this.totalAmount.textContent = total.toLocaleString('id-ID');
  }
  
  showCartModal() {
    if (this.cartModal) {
      this.cartModal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  }
  
  hideCartModal() {
    if (this.cartModal) {
      this.cartModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  }
  
  showAddedToCartFeedback(itemName) {
    // Create temporary notification
    const notification = document.createElement('div');
    notification.innerHTML = `
      <div style="position: fixed; top: 100px; right: 20px; background: #27ae60; color: white; padding: 15px 20px; border-radius: 8px; z-index: 9999; transform: translateX(100%); transition: transform 0.3s ease;">
        ✅ ${itemName} ditambahkan ke keranjang
      </div>
    `;
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
      notification.firstElementChild.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
      notification.firstElementChild.style.transform = 'translateX(100%)';
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }
  
  processCheckout() {
    if (this.cart.length === 0) {
      alert('Keranjang masih kosong!');
      return;
    }
    
    const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const minOrder = this.config?.delivery?.minOrder || 25000;
    
    if (total < minOrder) {
      alert(`Minimum order ${formatRupiah(minOrder)}`);
      return;
    }
    
    // Generate WhatsApp message
    const businessName = this.config?.businessInfo?.name || 'Warung';
    let message = `*PESANAN BARU - ${businessName}*\n\n`;
    message += `*Detail Pesanan:*\n`;
    
    this.cart.forEach(item => {
      const itemTotal = item.price * item.quantity;
      message += `• ${item.name}\n  ${item.quantity}x ${formatRupiah(item.price)} = ${formatRupiah(itemTotal)}\n\n`;
    });
    
    message += `*Total: ${formatRupiah(total)}*\n\n`;
    message += `Mohon konfirmasi pesanan dan info pengiriman. Terima kasih! 🙏`;
    
    // Open WhatsApp
    const whatsappNumber = this.config?.contact?.whatsapp || '628123456789';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Clear cart and close modal
    this.cart = [];
    this.updateCartDisplay();
    this.hideCartModal();
  }
  
  directWhatsAppOrder(itemName, price) {
    const businessName = this.config?.businessInfo?.name || 'Warung';
    const message = `Halo ${businessName}, saya ingin pesan:\n\n• ${itemName} - ${formatRupiah(price)}\n\nMohon info untuk pengiriman. Terima kasih!`;
    
    const whatsappNumber = this.config?.contact?.whatsapp || '628123456789';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  }
}

// ==========================================================================
// 📝 CONTACT FORM HANDLING
// ==========================================================================

class ContactForm {
  constructor() {
    this.form = $('#contact-form');
    this.config = window.WARUNG_CONFIG;
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
      email: formData.get('email'),
      message: formData.get('message')
    };
    
    // Validate
    if (!data.name || !data.phone || !data.message) {
      this.showMessage('Mohon isi semua field yang wajib!', 'error');
      return;
    }
    
    // Show loading
    const submitBtn = this.form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Mengirim...';
    submitBtn.disabled = true;
    
    try {
      // Send via WhatsApp
      const businessName = this.config?.businessInfo?.name || 'Warung';
      const whatsappMessage = `*PESAN BARU DARI WEBSITE*\n\n*Nama:* ${data.name}\n*Telepon:* ${data.phone}\n*Email:* ${data.email || 'Tidak diisi'}\n\n*Pesan:*\n${data.message}`;
      
      const whatsappNumber = this.config?.contact?.whatsapp || '628123456789';
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');
      
      this.showMessage('Pesan Anda akan dikirim via WhatsApp. Terima kasih!', 'success');
      this.form.reset();
      
    } catch (error) {
      this.showMessage('Terjadi kesalahan. Silakan coba lagi.', 'error');
    } finally {
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }
  }
  
  showMessage(message, type) {
    // Remove existing message
    const existingMessage = this.form.querySelector('.form-message');
    if (existingMessage) existingMessage.remove();
    
    // Create new message
    const messageEl = document.createElement('div');
    messageEl.className = 'form-message';
    messageEl.style.cssText = `
      padding: 12px 16px;
      border-radius: 6px;
      margin-top: 15px;
      font-weight: 500;
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
    this.setupScrollToTop();
    this.setupImageLoading();
  }
  
  setupLazyLoading() {
    const lazyImages = $$('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });
      
      lazyImages.forEach(img => imageObserver.observe(img));
    }
  }
  
  setupIntersectionObserver() {
    const animatedElements = $$('.menu-item, .testimonial-card, .feature-item, .promo-card');
    
    if ('IntersectionObserver' in window) {
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
  
  setupScrollToTop() {
    // Add scroll to top functionality
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
      position: fixed;
      bottom: 80px;
      right: 20px;
      width: 50px;
      height: 50px;
      border: none;
      border-radius: 50%;
      background: var(--primary-color);
      color: white;
      font-size: 20px;
      cursor: pointer;
      z-index: 999;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(255, 107, 53, 0.3);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide based on scroll position
    window.addEventListener('scroll', debounce(() => {
      if (window.scrollY > 500) {
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
  
  setupImageLoading() {
    // Add loading states for images
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
}

// ==========================================================================
// 📊 SECTION VISIBILITY MANAGER
// ==========================================================================

class SectionManager {
  constructor() {
    this.features = window.WARUNG_CONFIG?.features || {};
    this.init();
  }
  
  init() {
    this.toggleSections();
    this.updateNavigation();
  }
  
  toggleSections() {
    // Hide/show sections based on features config
    if (!this.features.showAbout) {
      this.hideSection('#about');
    }
    
    if (!this.features.showGallery) {
      this.hideSection('#gallery');
    }
    
    if (!this.features.showTestimonials) {
      this.hideSection('#testimonials');
    }
    
    if (!this.features.showPromo) {
      this.hideSection('#promo');
    }
    
    if (!this.features.showDeliveryInfo) {
      this.hideSection('#delivery');
    }
    
    if (!this.features.showContactForm) {
      const contactForm = $('.contact-form');
      if (contactForm) contactForm.style.display = 'none';
    }
  }
  
  hideSection(selector) {
    const section = $(selector);
    if (section) {
      section.style.display = 'none';
    }
  }
  
  updateNavigation() {
    // Remove navigation links for hidden sections
    const hiddenSections = [];
    
    if (!this.features.showAbout) hiddenSections.push('about');
    if (!this.features.showPromo) hiddenSections.push('promo');
    
    hiddenSections.forEach(section => {
      const navItem = $(`.nav-link[href="#${section}"]`);
      if (navItem && navItem.parentElement) {
        navItem.parentElement.style.display = 'none';
      }
    });
  }
}

// ==========================================================================
// 🚀 MAIN TEMPLATE CLASS
// ==========================================================================

class WarungTemplate {
  constructor() {
    this.components = [];
    this.init();
  }
  
  init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initializeComponents());
    } else {
      this.initializeComponents();
    }
  }
  
  initializeComponents() {
    // Validate configuration first
    if (!validateConfig()) {
      console.error('❌ Template initialization failed due to configuration errors');
      return;
    }
    
    try {
      // Initialize customization first
      this.customizer = new TemplateCustomizer();
      this.sectionManager = new SectionManager();
      
      // Initialize all components
      this.components.push(new Navigation());
      this.components.push(new MenuTabs());
      this.components.push(new ShoppingCart());
      this.components.push(new ContactForm());
      this.components.push(new PerformanceEnhancements());
      
      // Global cart instance for easier access
      window.cartInstance = this.components.find(c => c instanceof ShoppingCart);
      
      // Store customizer instance globally
      window.templateCustomizer = this.customizer;
      
      console.log('🍽️ Warung Template initialized successfully!');
      console.log('📝 To customize: Edit WARUNG_CONFIG object in config.js');
      console.log('💡 Quick help: Type showCustomizationHelp() in console');
      
    } catch (error) {
      console.error('❌ Error initializing Warung Template:', error);
    }
  }
}

// ==========================================================================
// 🌟 QUICK CUSTOMIZATION FUNCTIONS (Global Access)
// ==========================================================================

// Quick color change
window.changeColors = function(primary, secondary, accent) {
  if (window.WARUNG_CONFIG) {
    window.WARUNG_CONFIG.branding.colors.primary = primary;
    window.WARUNG_CONFIG.branding.colors.secondary = secondary;
    window.WARUNG_CONFIG.branding.colors.accent = accent;
    
    if (window.templateCustomizer) {
      window.templateCustomizer.updateColors();
    }
  }
  console.log(`✅ Colors updated! Primary: ${primary}, Secondary: ${secondary}, Accent: ${accent}`);
};

// Quick WhatsApp update
window.changeWhatsApp = function(number) {
  if (window.WARUNG_CONFIG) {
    window.WARUNG_CONFIG.contact.whatsapp = number;
    
    if (window.templateCustomizer) {
      window.templateCustomizer.updateContactInfo();
    }
  }
  console.log(`✅ WhatsApp number updated to: ${number}`);
};

// Quick business name change
window.changeBusinessName = function(name) {
  if (window.WARUNG_CONFIG) {
    window.WARUNG_CONFIG.businessInfo.name = name;
    
    if (window.templateCustomizer) {
      window.templateCustomizer.updateBusinessInfo();
    }
  }
  console.log(`✅ Business name updated to: ${name}`);
};

// Show customization help
window.showCustomizationHelp = function() {
  console.log(`
🎨 Quick Customization Functions:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

changeColors('#FF6B35', '#CC2936', '#FFD23F')
changeWhatsApp('628123456789') 
changeBusinessName('Warung Baru')

💡 Example usage:
changeColors('#e74c3c', '#2ecc71', '#f39c12')

📝 For full customization, edit WARUNG_CONFIG object in config.js!
  `);
};

// ==========================================================================
// ⚡ INITIALIZE THE APPLICATION
// ==========================================================================

// Start the app
const warungApp = new WarungTemplate();

// Show helpful customization message after load
window.addEventListener('load', () => {
  setTimeout(() => {
    if (window.WARUNG_CONFIG) {
      console.log(`
🍽️ ${window.WARUNG_CONFIG.businessInfo?.name || 'Warung Template'} - Ready!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Template loaded successfully!

📝 QUICK START GUIDE:
1. Edit WARUNG_CONFIG object in config.js
2. Change colors, business info, contact details
3. Upload all files to your hosting
4. Your website is ready!

💡 INSTANT CHANGES (try these in console):
• changeColors('#e74c3c', '#2ecc71', '#f39c12')
• changeWhatsApp('628123456789')
• changeBusinessName('Warung Baru')

🆘 NEED HELP?
• Type: showCustomizationHelp()
• Check config.js for all settings
• All major customization is in config.js!

Happy customizing! 🚀
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `);
    }
  }, 1000);
});