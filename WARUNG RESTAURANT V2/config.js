/**
 * ===============================================================================
 * 🍽️ MODERN MINIMALIST RESTAURANT TEMPLATE - CONFIGURATION
 * ===============================================================================
 * 
 * 🎨 DESIGN PHILOSOPHY: "Sophisticated Simplicity"
 * 
 * 📝 HOW TO USE:
 * 1. Edit the values below (restaurant name, colors, contact info, etc.)
 * 2. Save this file
 * 3. Refresh your website - changes apply automatically!
 * 
 * 💡 TIPS:
 * • Use sophisticated color palettes (blacks, whites, golds)
 * • WhatsApp numbers: use format 628xxxxxxxxx (no + sign)
 * • Keep descriptions elegant and concise
 * • High-quality images for premium feel
 * 
 * ===============================================================================
 */

// ==========================================================================
// 🏪 RESTAURANT INFORMATION
// ==========================================================================
window.RESTAURANT_CONFIG = {
  
  // ✏️ Basic Restaurant Details
  restaurantInfo: {
    name: "Aurora",                                 // 📝 Restaurant name
    tagline: "Contemporary Dining",                 // 📝 Tagline/subtitle
    description: "Experience modern culinary artistry in an intimate setting where innovation meets tradition", // 📝 Hero description
    chefName: "Chef Marcus Chen",                   // 📝 Head chef name
    chefTitle: "Executive Chef & Owner",            // 📝 Chef title
    yearEstablished: "2019",                        // 📝 Year opened
    story: "Aurora represents the dawn of a new culinary era. Our commitment to exceptional ingredients, innovative techniques, and refined presentations creates an unforgettable dining experience that celebrates both tradition and modernity.", // 📝 Restaurant story
    philosophy: "We believe that dining is an art form - every dish tells a story, every meal creates a memory.", // 📝 Philosophy quote
    capacity: "45"                                  // 📝 Number of seats
  },

  // 📞 CONTACT INFORMATION
  contact: {
    // Phone & WhatsApp
    phone: "021-789-0123",                         // 📞 Landline phone
    whatsapp: "628123456789",                      // 📱 WhatsApp (format: 628xxxxxxxxx)
    
    // Address
    address: "Jl. Kemang Raya No. 88",            // 🏠 Street address
    area: "Kemang",                               // 🏙️ Area/district
    city: "Jakarta Selatan",                      // 🏙️ City
    postalCode: "12560",                          // 📮 Postal code
    landmark: "Belakang Plaza Kemang, lantai 2",  // 📍 Landmark description
    
    // Contact details
    email: "hello@aurora-restaurant.com",          // 📧 Email
    website: "www.aurora-restaurant.com",          // 🌐 Website
    
    // Operating hours
    hours: {
      open: "11:30",                              // 🕐 Opening time
      close: "23:00",                             // 🕐 Closing time
      days: "Tuesday - Sunday",                    // 📅 Operating days
      closedDay: "Monday",                        // 📅 Closed day
      reservationHours: "09:00 - 22:00"          // 📞 Reservation hours
    },
    
    // Social media
    socialMedia: {
      instagram: "aurora.restaurant",              // 📸 Instagram handle
      facebook: "aurorarestaurant",               // 📘 Facebook page
      tiktok: "",                                 // 🎵 TikTok (optional)
      youtube: ""                                 // 📺 YouTube (optional)
    }
  },

  // 🎨 VISUAL BRANDING & DESIGN
  branding: {
    // Sophisticated color palette
    colors: {
      primary: "#1A1A1A",         // 🖤 Deep charcoal (main brand)
      secondary: "#F8F8F8",       // 🤍 Light gray (backgrounds)
      accent: "#D4AF37",          // ✨ Warm gold (luxury accent)
      neutral: "#FFFFFF",         // ⚪ Pure white
      textPrimary: "#333333",     // 📝 Dark gray (main text)
      textSecondary: "#666666"    // 📝 Medium gray (secondary text)
    },
    
    // Premium imagery
    images: {
      // Logo (square, professional, min 200x200px)
      logo: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
      
      // Hero background (wide, atmospheric, min 1920x1080px)
      heroBackground: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      
      // Chef photo (professional portrait, min 400x600px)
      chefPhoto: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      
      // Favicon (small icon, 32x32px)
      favicon: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&q=80"
    },
    
    // Typography (Google Fonts)
    fonts: {
      primary: "Inter",              // 📝 Clean, modern sans-serif
      heading: "Playfair Display",   // ✨ Elegant serif for headings
      accent: "Montserrat"           // 📝 Secondary sans-serif
    }
  },

  // 🍽️ DINING EXPERIENCE SETTINGS
  dining: {
    // Reservation system
    reservations: {
      enabled: true,                               // ✅ Enable reservations
      advanceBooking: 30,                         // 📅 Days in advance (max)
      partySize: { min: 1, max: 8 },             // 👥 Party size limits
      timeSlots: [                                // ⏰ Available time slots
        "11:30", "12:00", "12:30",
        "18:00", "18:30", "19:00", "19:30", 
        "20:00", "20:30", "21:00"
      ]
    },
    
    // Dining options
    services: [
      "Fine Dining",                              // 🍽️ Main service
      "Wine Pairing",                             // 🍷 Wine service
      "Private Dining",                           // 👥 Private events
      "Chef's Table",                             // 👨‍🍳 Special experience
      "Corporate Events"                          // 💼 Business dining
    ],
    
    // Payment methods
    paymentMethods: [
      "Credit Cards",                             // 💳 Cards
      "Debit Cards",                              // 💳 Debit
      "Bank Transfer",                            // 🏦 Transfer
      "Digital Wallets",                          // 📱 E-wallets
      "Cash"                                      // 💵 Cash
    ]
  },

  // ✨ WEBSITE FEATURES
  features: {
    // Section visibility
    showAbout: true,                             // 📖 About Us section
    showFeatures: true,                          // ⭐ Features section
    showExperiences: true,                       // 🎭 Special experiences
    showGallery: true,                           // 🖼️ Photo gallery
    showTestimonials: true,                      // 🗣️ Customer reviews
    
    // Functionality
    enableReservations: true,                    // 📅 Reservation system
    enableWhatsApp: true,                        // 📱 WhatsApp integration
    showPrices: true,                            // 💰 Display prices
    
    // Advanced features
    enableAnimations: true,                      // ✨ Scroll animations
    enableLazyLoading: true,                     // ⚡ Performance optimization
    enableAnalytics: false                       // 📊 Google Analytics
  },

  // 📱 SEO & WEBSITE SETTINGS
  website: {
    title: "Aurora - Contemporary Dining Experience | Fine Restaurant Jakarta",
    description: "Aurora offers sophisticated contemporary dining in the heart of Jakarta. Experience our chef's innovative cuisine in an elegant, intimate setting.",
    keywords: "fine dining, contemporary restaurant, Jakarta, chef's table, wine pairing, upscale dining, modern cuisine",
    language: "id",                              // 🌐 Website language
    
    // Social sharing
    ogImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    
    // Analytics (optional)
    googleAnalyticsId: "",                       // 📊 GA4 ID (G-XXXXXXXXXX)
    
    // Google Maps embed
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8219925!3d-6.208763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sKemang%20Jakarta!5e0!3m2!1sen!2sid!4v1647834445726!5m2!1sen!2sid"
  },

  // 🍽️ MENU CATEGORIES
  menuCategories: [
    {
      id: "appetizers",
      name: "Appetizers",
      description: "Artfully crafted beginnings",
      icon: "🥗"
    },
    {
      id: "mains", 
      name: "Main Courses",
      description: "Signature dishes that define our kitchen",
      icon: "🍽️"
    },
    {
      id: "desserts",
      name: "Desserts",
      description: "Sweet conclusions to remember",
      icon: "🍰"
    },
    {
      id: "beverages",
      name: "Beverages",
      description: "Curated selection of drinks & wines",
      icon: "🍷"
    }
  ],

  // 🎭 SPECIAL EXPERIENCES
  specialExperiences: [
    {
      title: "Chef's Tasting Menu",
      description: "An exclusive 7-course journey through our chef's most innovative creations, featuring seasonal ingredients and artistic presentations.",
      price: "IDR 850,000",
      availability: "Tuesday - Saturday",
      badge: "Signature",
      active: true
    },
    {
      title: "Wine Pairing Dinner",
      description: "Expertly curated wine selections paired with our signature dishes, guided by our certified sommelier.",
      price: "IDR 1,200,000",
      availability: "Friday - Saturday",
      badge: "Premium",
      active: true
    },
    {
      title: "Private Chef's Table",
      description: "An intimate dining experience for up to 6 guests with direct interaction with our executive chef.",
      price: "IDR 2,500,000",
      availability: "By appointment",
      badge: "Exclusive",
      active: true
    }
  ],

  // 🌟 RESTAURANT FEATURES & HIGHLIGHTS
  highlights: [
    {
      icon: "👨‍🍳",
      title: "Award-Winning Chef",
      description: "Led by Chef Marcus Chen, winner of Jakarta Culinary Excellence 2023"
    },
    {
      icon: "🥘", 
      title: "Farm-to-Table",
      description: "Fresh, locally sourced ingredients delivered daily from partner farms"
    },
    {
      icon: "🍷",
      title: "Curated Wine Selection", 
      description: "Over 200 carefully selected wines from renowned regions worldwide"
    },
    {
      icon: "🎭",
      title: "Intimate Atmosphere",
      description: "Elegant 45-seat dining room designed for memorable experiences"
    }
  ]
};

// ==========================================================================
// 🔧 QUICK CUSTOMIZATION FUNCTIONS
// ==========================================================================

/**
 * Quick color scheme change
 * Usage: changeColorScheme('dark') or changeColorScheme('light')
 */
window.changeColorScheme = function(scheme) {
  const schemes = {
    dark: {
      primary: '#000000',
      secondary: '#1A1A1A', 
      accent: '#D4AF37',
      neutral: '#FFFFFF'
    },
    light: {
      primary: '#2C3E50',
      secondary: '#ECF0F1',
      accent: '#E67E22',
      neutral: '#FFFFFF'
    },
    elegant: {
      primary: '#1A1A1A',
      secondary: '#F8F8F8',
      accent: '#D4AF37',
      neutral: '#FFFFFF'
    }
  };
  
  if (schemes[scheme]) {
    Object.assign(RESTAURANT_CONFIG.branding.colors, schemes[scheme]);
    if (window.templateCustomizer) {
      window.templateCustomizer.updateColors();
    }
    console.log(`✅ Color scheme updated to: ${scheme}`);
  }
};

/**
 * Quick restaurant name change
 * Usage: changeRestaurantName('New Restaurant Name')
 */
window.changeRestaurantName = function(name) {
  RESTAURANT_CONFIG.restaurantInfo.name = name;
  if (window.templateCustomizer) {
    window.templateCustomizer.updateRestaurantInfo();
  }
  console.log(`✅ Restaurant name updated to: ${name}`);
};

/**
 * Quick contact update
 * Usage: updateContact({phone: '021-123-4567', whatsapp: '628123456789'})
 */
window.updateContact = function(contactData) {
  Object.assign(RESTAURANT_CONFIG.contact, contactData);
  if (window.templateCustomizer) {
    window.templateCustomizer.updateContactInfo();
  }
  console.log('✅ Contact information updated');
};

/**
 * Show all customization options
 */
window.showCustomizationHelp = function() {
  console.log(`
🎨 Modern Restaurant Customization:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Quick Functions:
changeColorScheme('dark' | 'light' | 'elegant')
changeRestaurantName('Your Restaurant Name')
updateContact({phone: '021-xxx-xxxx', whatsapp: '628xxxxxxxxx'})

💡 Examples:
changeColorScheme('dark')
changeRestaurantName('Sakura Fine Dining')

📝 For complete customization, edit RESTAURANT_CONFIG in this file!
  `);
};

// ==========================================================================
// ✅ CONFIGURATION VALIDATION
// ==========================================================================
window.validateConfig = function() {
  const config = RESTAURANT_CONFIG;
  const errors = [];
  
  // Required fields validation
  if (!config.restaurantInfo.name) errors.push('Restaurant name is required');
  if (!config.contact.phone) errors.push('Phone number is required');
  if (!config.contact.whatsapp) errors.push('WhatsApp number is required');
  
  // WhatsApp format validation
  if (config.contact.whatsapp && !config.contact.whatsapp.startsWith('628')) {
    errors.push('WhatsApp number should start with 628 (Indonesian format)');
  }
  
  // Color format validation
  Object.entries(config.branding.colors).forEach(([key, color]) => {
    if (color && !color.match(/^#[0-9A-Fa-f]{6}$/)) {
      errors.push(`Color ${key} should be in hex format (e.g., #1A1A1A)`);
    }
  });
  
  // URL validation for images
  const imageFields = ['logo', 'heroBackground', 'chefPhoto', 'favicon'];
  imageFields.forEach(field => {
    const url = config.branding.images[field];
    if (url && !url.startsWith('http')) {
      errors.push(`${field} should be a valid URL`);
    }
  });
  
  if (errors.length > 0) {
    console.warn('⚠️ Configuration Issues:');
    errors.forEach(error => console.warn(`• ${error}`));
    return false;
  } else {
    console.log('✅ Configuration validated successfully!');
    return true;
  }
};

// Auto-validate on load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      window.validateConfig();
      console.log('🍽️ Modern Restaurant Template Config Loaded!');
      console.log('💡 Type showCustomizationHelp() for quick tips');
    }, 1000);
  });
}

/**
 * ===============================================================================
 * 📝 CUSTOMIZATION CHECKLIST
 * ===============================================================================
 * 
 * ✅ ESSENTIAL SETUP (10 minutes):
 * □ Update restaurant name and tagline
 * □ Set phone and WhatsApp numbers  
 * □ Configure address and hours
 * □ Choose sophisticated color scheme
 * 
 * ✅ VISUAL BRANDING (15 minutes):
 * □ Upload professional logo
 * □ Select hero background image
 * □ Add chef professional photo
 * □ Test color combinations
 * 
 * ✅ CONTENT & SERVICES (20 minutes):
 * □ Write compelling restaurant story
 * □ Configure dining services
 * □ Set reservation parameters
 * □ Customize special experiences
 * 
 * ✅ FINAL TESTING (10 minutes):
 * □ Test WhatsApp reservation links
 * □ Verify mobile responsiveness
 * □ Check all contact information
 * □ Test reservation form
 * 
 * 🎉 TOTAL SETUP TIME: ~55 minutes
 * 
 * ===============================================================================
 */