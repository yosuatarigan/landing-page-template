/**
 * ===============================================================================
 * 🍽️ WARUNG TEMPLATE - EASY CUSTOMIZATION CONFIG
 * ===============================================================================
 * 
 * 👋 Welcome! This is the ONLY file you need to edit to customize your warung website.
 * 
 * 📝 HOW TO USE:
 * 1. Edit the values below (business name, colors, contact info, etc.)
 * 2. Save this file
 * 3. Refresh your website - changes apply automatically!
 * 
 * 💡 TIPS:
 * • Colors use hex codes (like #FF6B35)
 * • WhatsApp numbers: use format 628xxxxxxxxx (no + sign)
 * • Keep quotes around text values
 * • Test WhatsApp links after changing numbers
 * 
 * 🆘 NEED HELP?
 * • Don't change the structure, only the values
 * • Keep all commas and brackets intact
 * • Use online color picker for hex codes
 * 
 * ===============================================================================
 */

// ==========================================================================
// 🏪 BUSINESS INFORMATION
// ==========================================================================
window.WARUNG_CONFIG = {
  
  // ✏️ Basic Business Details
  businessInfo: {
    name: "Warung Mak Sari",                    // 📝 Your business name
    tagline: "Masakan Rumahan Terlezat",        // 📝 Your tagline/slogan
    description: "Nikmati cita rasa autentik masakan Indonesia dengan resep turun temurun yang telah dipercaya lebih dari 20 tahun", // 📝 Hero description
    ownerName: "Mak Sari",                       // 📝 Owner/chef name
    ownerTitle: "Owner & Head Chef",             // 📝 Owner title
    yearEstablished: "2003",                     // 📝 Year started
    story: "Warung Mak Sari telah melayani masyarakat Jakarta sejak tahun 2003. Dengan resep rahasia yang diturunkan dari generasi ke generasi, kami menghadirkan masakan rumahan autentik yang memanjakan lidah Anda." // 📝 About story
  },

  // 📞 CONTACT INFORMATION
  contact: {
    // Phone numbers
    phone: "021-2345-6789",                     // 📞 Landline phone (with area code)
    whatsapp: "628123456789",                   // 📱 WhatsApp (format: 628xxxxxxxxx)
    
    // Address
    address: "Jl. Raya Kemang No. 123",         // 🏠 Street address
    city: "Jakarta Selatan",                    // 🏙️ City
    postalCode: "12560",                        // 📮 Postal code
    addressNotes: "(Sebelah Indomaret, depan SD Negeri 05)", // 📍 Landmark/notes
    
    // Optional contact info
    email: "info@warungmaksari.com",            // 📧 Email (optional)
    website: "www.warungmaksari.com",           // 🌐 Website (optional)
    
    // Operating hours
    hours: {
      open: "07:00",                            // 🕐 Opening time
      close: "22:00",                           // 🕐 Closing time
      deliveryStart: "09:00",                   // 🚚 Delivery start
      deliveryEnd: "21:00",                     // 🚚 Delivery end
      days: "Senin - Minggu"                    // 📅 Operating days
    },
    
    // Social media handles (optional - remove if not used)
    socialMedia: {
      instagram: "warungmaksari",               // 📸 Instagram username
      facebook: "warungmaksari",                // 📘 Facebook page name
      tiktok: "warungmaksari",                  // 🎵 TikTok username
      youtube: ""                               // 📺 YouTube channel (optional)
    }
  },

  // 🎨 VISUAL BRANDING & DESIGN
  branding: {
    // Website colors (use hex codes)
    colors: {
      primary: "#FF6B35",       // 🧡 Main brand color (orange)
      secondary: "#CC2936",     // ❤️ Secondary color (red)  
      accent: "#FFD23F",        // 💛 Accent color (yellow)
      success: "#27AE60"        // 💚 Success color (green) - for buttons
    },
    
    // Images - replace with your own URLs
    images: {
      // Logo (should be square, min 100x100px)
      logo: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      
      // Hero background (should be wide, min 1920x1080px)
      heroBackground: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      
      // Owner/chef photo (portrait orientation, min 400x600px)
      ownerPhoto: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      
      // Favicon (small icon for browser tab)
      favicon: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&q=80"
    },
    
    // Fonts (Google Fonts - change if needed)
    fonts: {
      primary: "Poppins",       // 📝 Main font for body text
      accent: "Dancing Script"   // ✨ Decorative font for headings
    }
  },

  // 🚚 DELIVERY & PAYMENT SETTINGS
  delivery: {
    enabled: true,                              // ✅ Enable/disable delivery service
    minOrder: 25000,                           // 💰 Minimum order amount (Rupiah)
    
    // Delivery zones and fees
    zones: {
      zone1: { 
        distance: "0-3km", 
        fee: 0,                                 // 🆓 Free delivery zone
        description: "GRATIS"
      },
      zone2: { 
        distance: "3-5km", 
        fee: 5000,                             // 💰 Delivery fee zone 2
        description: "Rp 5.000"
      },
      zone3: { 
        distance: "5km+", 
        fee: 10000,                            // 💰 Delivery fee zone 3
        description: "Rp 10.000"
      }
    },
    
    // Estimated delivery time
    deliveryTime: {
      min: 30,                                  // ⏱️ Minimum delivery time (minutes)
      max: 45                                   // ⏱️ Maximum delivery time (minutes)
    },
    
    // Accepted payment methods
    paymentMethods: [
      "Cash on Delivery",                       // 💵 Cash payment
      "Transfer Bank",                          // 🏦 Bank transfer
      "DANA",                                   // 📱 DANA e-wallet
      "OVO",                                    // 📱 OVO e-wallet
      "GoPay",                                  // 📱 GoPay e-wallet
      "ShopeePay"                              // 📱 ShopeePay e-wallet
    ]
  },

  // ✨ WEBSITE FEATURES (Turn on/off sections)
  features: {
    showAbout: true,                           // 📖 Show About Us section
    showGallery: true,                         // 🖼️ Show Photo Gallery section
    showTestimonials: true,                    // 🗣️ Show Customer Reviews section
    showPromo: true,                           // 🎉 Show Promotions section
    showDeliveryInfo: true,                    // 🚚 Show Delivery Information section
    showContactForm: true,                     // 📝 Show Contact Form
    
    // Cart & ordering system
    enableCart: true,                          // 🛒 Enable shopping cart system
    enableWhatsAppOrder: true,                 // 📱 Enable WhatsApp ordering
    showPrices: true,                          // 💰 Show prices on menu items
    
    // Advanced features
    enableLazyLoading: true,                   // ⚡ Enable lazy loading for images
    enableAnimations: true,                    // ✨ Enable scroll animations
    enablePWA: false                           // 📱 Enable Progressive Web App features
  },

  // 📱 SEO & WEBSITE SETTINGS
  website: {
    title: "Warung Mak Sari - Masakan Rumahan Terlezat | Delivery Gratis!",
    description: "Warung Mak Sari - Masakan rumahan terlezat dengan resep turun temurun. Pesan online dengan delivery gratis untuk wilayah Jakarta!",
    keywords: "warung, masakan rumahan, delivery makanan, catering, halal food, Jakarta, Indonesian food",
    language: "id",                            // 🌐 Website language (id = Indonesian)
    
    // Open Graph (social media sharing)
    ogImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    
    // Google Analytics (optional)
    googleAnalyticsId: "",                     // 📊 GA4 Measurement ID (G-XXXXXXXXXX)
    
    // Google Maps (for location)
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8219925!3d-6.208763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sSelamat%20Datang%20Monument!5e0!3m2!1sen!2sid!4v1647834445726!5m2!1sen!2sid"
  },

  // 🍽️ MENU CATEGORIES (Customize menu tabs)
  menuCategories: [
    {
      id: "makanan-utama",
      name: "Makanan Utama",
      icon: "🍛"
    },
    {
      id: "minuman", 
      name: "Minuman",
      icon: "🥤"
    },
    {
      id: "snack",
      name: "Snack & Gorengan", 
      icon: "🍟"
    },
    {
      id: "paket",
      name: "Paket Hemat",
      icon: "🍱"
    }
  ],

  // 🎉 PROMOTIONS & SPECIAL OFFERS
  promotions: [
    {
      title: "Gratis Ongkir",
      description: "Gratis ongkos kirim untuk pembelian minimal Rp 50.000",
      code: "GRATISONGKIR",
      badge: "Hari Ini",
      active: true
    },
    {
      title: "Diskon 15%", 
      description: "Diskon 15% untuk semua menu setiap Sabtu-Minggu",
      code: "WEEKEND15",
      badge: "Weekend",
      active: true
    },
    {
      title: "Beli 10 Gratis 1",
      description: "Untuk pelanggan setia yang sudah pesan 10x",
      code: "Otomatis",
      badge: "Member",
      active: true
    }
  ],

  // 🌟 SPECIAL FEATURES & HIGHLIGHTS
  highlights: [
    {
      icon: "🥘",
      title: "Bahan Segar Setiap Hari",
      description: "Semua bahan dipilih langsung dari pasar setiap pagi"
    },
    {
      icon: "👩‍🍳", 
      title: "Chef Berpengalaman 20+ Tahun",
      description: "Dipimpin oleh Mak Sari yang ahli masakan tradisional"
    },
    {
      icon: "🏆",
      title: "Sertifikat Halal & BPOM", 
      description: "Terjamin kehalalan dan keamanan makanan"
    }
  ]
};

// ==========================================================================
// 🔧 ADVANCED CUSTOMIZATION (Optional)
// ==========================================================================

// Custom CSS variables (advanced users only)
window.CUSTOM_CSS = {
  // Override default spacing, fonts, etc.
  // Example: '--primary-color': '#e74c3c'
};

// Custom JavaScript functions (advanced users only)
window.CUSTOM_JS = {
  // Add custom functionality here
  onPageLoad: function() {
    // Custom code to run when page loads
    console.log('Custom JavaScript loaded!');
  },
  
  onMenuItemClick: function(itemName, price) {
    // Custom code when menu item is clicked
    // Example: Google Analytics tracking
  }
};

// ==========================================================================
// 📊 ANALYTICS & TRACKING (Optional)
// ==========================================================================
window.ANALYTICS_CONFIG = {
  googleAnalytics: {
    enabled: false,                            // ✅ Enable Google Analytics
    measurementId: ""                          // 📊 Your GA4 Measurement ID
  },
  
  facebookPixel: {
    enabled: false,                            // ✅ Enable Facebook Pixel
    pixelId: ""                               // 📊 Your Facebook Pixel ID
  },
  
  customEvents: {
    trackWhatsAppClicks: true,                // 📱 Track WhatsApp button clicks
    trackMenuViews: true,                     // 👀 Track menu section views
    trackOrderAttempts: true                  // 🛒 Track order button clicks
  }
};

// ==========================================================================
// 🚀 QUICK CUSTOMIZATION FUNCTIONS
// ==========================================================================

/**
 * Quick color change function
 * Usage: changeColors('#e74c3c', '#2ecc71', '#f39c12')
 */
window.changeColors = function(primary, secondary, accent) {
  WARUNG_CONFIG.branding.colors.primary = primary;
  WARUNG_CONFIG.branding.colors.secondary = secondary;
  WARUNG_CONFIG.branding.colors.accent = accent;
  
  // Apply immediately if page is loaded
  if (window.templateCustomizer) {
    window.templateCustomizer.updateColors();
  }
  
  console.log(`✅ Colors updated! Primary: ${primary}, Secondary: ${secondary}, Accent: ${accent}`);
};

/**
 * Quick WhatsApp number change
 * Usage: changeWhatsApp('628123456789')
 */
window.changeWhatsApp = function(number) {
  WARUNG_CONFIG.contact.whatsapp = number;
  
  // Update links immediately if page is loaded
  if (window.templateCustomizer) {
    window.templateCustomizer.updateContactInfo();
  }
  
  console.log(`✅ WhatsApp number updated to: ${number}`);
};

/**
 * Quick business name change
 * Usage: changeBusinessName('Warung Baru')
 */
window.changeBusinessName = function(name) {
  WARUNG_CONFIG.businessInfo.name = name;
  
  // Update immediately if page is loaded
  if (window.templateCustomizer) {
    window.templateCustomizer.updateBusinessInfo();
  }
  
  console.log(`✅ Business name updated to: ${name}`);
};

/**
 * Show all available customization functions
 */
window.showCustomizationHelp = function() {
  console.log(`
🎨 Quick Customization Functions:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

changeColors('#FF6B35', '#CC2936', '#FFD23F')
changeWhatsApp('628123456789') 
changeBusinessName('Warung Baru')

💡 Example usage:
changeColors('#e74c3c', '#2ecc71', '#f39c12')

📝 For full customization, edit WARUNG_CONFIG object in this file!
  `);
};

// ==========================================================================
// ✅ CONFIGURATION VALIDATION
// ==========================================================================

// Simple validation to catch common mistakes
window.validateConfig = function() {
  const config = WARUNG_CONFIG;
  const errors = [];
  
  // Check required fields
  if (!config.businessInfo.name) errors.push('Business name is required');
  if (!config.contact.whatsapp) errors.push('WhatsApp number is required');
  if (!config.contact.phone) errors.push('Phone number is required');
  
  // Check WhatsApp format
  if (config.contact.whatsapp && !config.contact.whatsapp.startsWith('628')) {
    errors.push('WhatsApp number should start with 628 (Indonesian format)');
  }
  
  // Check colors format
  Object.entries(config.branding.colors).forEach(([key, color]) => {
    if (color && !color.match(/^#[0-9A-Fa-f]{6}$/)) {
      errors.push(`Color ${key} should be in hex format (e.g., #FF6B35)`);
    }
  });
  
  if (errors.length > 0) {
    console.warn('⚠️ Configuration Issues Found:');
    errors.forEach(error => console.warn(`• ${error}`));
  } else {
    console.log('✅ Configuration looks good!');
  }
  
  return errors.length === 0;
};

// Auto-validate on load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      window.validateConfig();
      console.log('🍽️ Warung Template Config Loaded Successfully!');
      console.log('💡 Type showCustomizationHelp() for quick customization tips');
    }, 1000);
  });
}

/**
 * ===============================================================================
 * 📝 CUSTOMIZATION CHECKLIST
 * ===============================================================================
 * 
 * ✅ BASIC SETUP (5 minutes):
 * □ Change business name and tagline
 * □ Update phone and WhatsApp numbers  
 * □ Set your address and operating hours
 * □ Choose your brand colors
 * 
 * ✅ VISUAL BRANDING (10 minutes):
 * □ Upload your logo image
 * □ Choose hero background image
 * □ Add owner/chef photo
 * □ Test colors on different sections
 * 
 * ✅ CONTENT & FEATURES (15 minutes):
 * □ Customize about us story
 * □ Set delivery zones and fees
 * □ Configure payment methods
 * □ Enable/disable sections as needed
 * 
 * ✅ FINAL TESTING (10 minutes):
 * □ Test WhatsApp links
 * □ Check mobile responsiveness
 * □ Verify contact information
 * □ Test menu ordering flow
 * 
 * 🎉 TOTAL SETUP TIME: ~40 minutes
 * 
 * ===============================================================================
 */