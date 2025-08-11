/**
 * ===============================================================================
 * 🍽️ MODERN MINIMALIST RESTAURANT - CONFIGURATION
 * ===============================================================================
 * 
 * 🎨 DESIGN PHILOSOPHY: "Sophisticated Simplicity"
 * • Premium aesthetic for upscale dining
 * • Clean, elegant, Instagram-ready design
 * • Focus on food photography and white space
 * 
 * 📝 CUSTOMIZATION: Edit values below to match your restaurant
 * 
 * ===============================================================================
 */

window.RESTAURANT_CONFIG = {
  
  // ✏️ Restaurant Identity
  restaurantInfo: {
    name: "Aurora",
    tagline: "Contemporary Dining Experience",
    description: "Where culinary artistry meets modern elegance in an intimate setting designed for discerning palates",
    philosophy: "We believe that dining is an art form - every dish tells a story, every meal creates a memory.",
    established: "2019",
    chefName: "Chef Marcus Chen",
    chefTitle: "Executive Chef & Owner",
    chefBio: "With over 15 years of culinary experience across Michelin-starred establishments, Chef Marcus brings innovative techniques and passionate creativity to every dish.",
    capacity: 45,
    rating: 4.9
  },

  // 📞 Contact Information
  contact: {
    phone: "+62 21 789 0123",
    whatsapp: "6287888889999", 
    email: "reservations@aurora-restaurant.com",
    website: "www.aurora-restaurant.com",
    
    address: {
      street: "Jl. Kemang Raya No. 88",
      area: "Kemang",
      city: "Jakarta Selatan", 
      postalCode: "12560",
      landmark: "Across from Kemang Village Mall"
    },
    
    hours: {
      restaurant: {
        open: "11:30",
        close: "23:00", 
        days: "Tuesday - Sunday",
        closed: "Monday"
      },
      reservations: {
        open: "09:00",
        close: "22:00",
        days: "Daily"
      }
    },

    socialMedia: {
      instagram: "aurora.restaurant",
      facebook: "AuroraRestaurantJakarta",
      tiktok: "aurora_restaurant"
    }
  },

  // 🎨 Visual Branding
  branding: {
    colors: {
      primary: "#1A1A1A",      // Deep charcoal
      secondary: "#F8F8F8",    // Light gray  
      accent: "#D4AF37",       // Warm gold
      neutral: "#FFFFFF"       // Pure white
    },
    
    images: {
      logo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      heroBackground: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      chefPhoto: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      favicon: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=32&q=80"
    }
  },

  // 🍽️ Menu Categories
  menuCategories: [
    { id: "appetizers", name: "Appetizers", icon: "🥗" },
    { id: "mains", name: "Main Courses", icon: "🥩" }, 
    { id: "desserts", name: "Desserts", icon: "🍰" },
    { id: "beverages", name: "Beverages", icon: "🍷" }
  ],

  // ✨ Restaurant Features
  features: [
    {
      icon: "👨‍🍳",
      title: "Michelin-Trained Chef",
      description: "Our Executive Chef trained in Europe's finest establishments"
    },
    {
      icon: "🌱", 
      title: "Farm-to-Table",
      description: "Fresh, locally-sourced ingredients delivered daily"
    },
    {
      icon: "🍷",
      title: "Curated Wine Selection", 
      description: "Over 200 carefully selected wines from around the world"
    },
    {
      icon: "🏆",
      title: "Award-Winning Cuisine",
      description: "Recognized by Jakarta's top culinary publications"
    }
  ],

  // 🎉 Special Experiences 
  specialExperiences: [
    {
      title: "Chef's Tasting Menu",
      description: "7-course journey showcasing our chef's creativity and seasonal ingredients",
      price: "IDR 850,000",
      availability: "Available Wednesday - Saturday",
      badge: "Signature",
      featured: true
    },
    {
      title: "Wine Pairing Dinner", 
      description: "5-course menu expertly paired with premium wines by our sommelier",
      price: "IDR 1,200,000",
      availability: "First Friday of each month", 
      badge: "Exclusive"
    },
    {
      title: "Private Dining Room",
      description: "Intimate setting for special occasions accommodating up to 12 guests",
      price: "IDR 2,500,000",
      availability: "By reservation only",
      badge: "Premium"
    }
  ],

  // 📱 Website Settings
  website: {
    title: "Aurora Restaurant - Contemporary Dining in Jakarta | Fine Dining Experience",
    description: "Aurora Restaurant offers contemporary dining with Michelin-trained chef, farm-to-table ingredients, and curated wine selection in Jakarta's Kemang district.",
    keywords: "fine dining, contemporary restaurant, Michelin chef, Jakarta dining, Kemang restaurant, wine pairing, private dining",
    language: "en",
    ogImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8219925!3d-6.208763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sKemang%20Village!5e0!3m2!1sen!2sid!4v1647834445726!5m2!1sen!2sid"
  },

  // ⚙️ Features Configuration
  features: {
    showAbout: true,
    showFeatures: true, 
    showGallery: true,
    showTestimonials: true,
    showExperiences: true,
    enableReservations: true,
    enableWhatsAppContact: true,
    showLocationMap: true
  },

  // 🔧 Advanced Settings
  settings: {
    reservationSystem: "whatsapp", // "whatsapp" | "form" | "external"
    defaultCurrency: "IDR",
    dateFormat: "DD/MM/YYYY", 
    timeFormat: "24h",
    language: "en",
    enableAnimations: true,
    enableLazyLoading: true
  }
};

// Quick customization functions for developers
window.updateRestaurantName = (name) => {
  RESTAURANT_CONFIG.restaurantInfo.name = name;
  console.log(`✅ Restaurant name updated to: ${name}`);
};

window.updateContactInfo = (phone, whatsapp, email) => {
  RESTAURANT_CONFIG.contact.phone = phone;
  RESTAURANT_CONFIG.contact.whatsapp = whatsapp; 
  RESTAURANT_CONFIG.contact.email = email;
  console.log("✅ Contact information updated");
};

window.updateBrandColors = (primary, secondary, accent) => {
  RESTAURANT_CONFIG.branding.colors.primary = primary;
  RESTAURANT_CONFIG.branding.colors.secondary = secondary;
  RESTAURANT_CONFIG.branding.colors.accent = accent;
  console.log("✅ Brand colors updated");
};

// Validation
window.validateRestaurantConfig = () => {
  const config = RESTAURANT_CONFIG;
  const errors = [];
  
  if (!config.restaurantInfo.name) errors.push("Restaurant name is required");
  if (!config.contact.phone) errors.push("Phone number is required");
  if (!config.contact.whatsapp) errors.push("WhatsApp number is required");
  
  if (errors.length > 0) {
    console.warn("⚠️ Configuration Issues:", errors);
    return false;
  }
  
  console.log("✅ Configuration validated successfully");
  return true;
};

// Auto-validate on load
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    setTimeout(() => {
      window.validateRestaurantConfig();
      console.log("🍽️ Aurora Restaurant Configuration Loaded");
    }, 1000);
  });
}