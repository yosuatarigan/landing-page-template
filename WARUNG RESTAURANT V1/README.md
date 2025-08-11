# 🍽️ Warung Template - Professional Restaurant Website

> **Modern, responsive, and fully customizable restaurant template for Indonesian businesses**

![Warung Template Preview](https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

## ✨ Features

- 🎨 **Easy Customization** - Edit one file to change everything
- 📱 **Mobile Responsive** - Perfect on all devices
- 💬 **WhatsApp Integration** - Direct ordering system
- 🛒 **Shopping Cart** - Advanced order management
- ⚡ **Fast Loading** - Optimized performance
- 🔍 **SEO Ready** - Google-friendly structure
- 🇮🇩 **Indonesian Focused** - Built for local market

## 📦 Package Contents

```
warung-template/
├── 📄 index.html         # Main website file
├── ⚙️ config.js          # ⭐ EDIT THIS FILE (Main customization)
├── 🎨 style.css          # All styling and design
├── ⚡ script.js          # All functionality
└── 📖 README.md          # This setup guide
```

## 🚀 Quick Start (5 Minutes)

### Step 1: Download & Extract
1. Download the template package
2. Extract all files to a folder
3. Keep all 4 files together

### Step 2: Customize Your Business
1. Open `config.js` in any text editor
2. Edit the business information:

```javascript
businessInfo: {
  name: "YOUR WARUNG NAME",           // Change this
  tagline: "YOUR TAGLINE",            // Change this
  // ... edit other details
},

contact: {
  phone: "021-YOUR-PHONE",            // Change this
  whatsapp: "628XXXXXXXXX",           // Change this (Indonesian format)
  address: "YOUR ADDRESS",            // Change this
  // ... edit other contact info
}
```

### Step 3: Choose Your Colors
```javascript
branding: {
  colors: {
    primary: "#FF6B35",    // Main color
    secondary: "#CC2936",  // Secondary color
    accent: "#FFD23F"      // Accent color
  }
}
```

### Step 4: Upload to Hosting
1. Upload ALL 4 files to your web hosting
2. Make sure they're in the same folder
3. Visit your website URL
4. Done! 🎉

## 🎨 Customization Guide

### 🏪 Business Information
Edit these in `config.js`:

```javascript
businessInfo: {
  name: "Warung Mak Sari",
  tagline: "Masakan Rumahan Terlezat",
  description: "Your business description...",
  ownerName: "Mak Sari",
  ownerTitle: "Owner & Head Chef",
  yearEstablished: "2003"
}
```

### 📞 Contact Details
```javascript
contact: {
  phone: "021-2345-6789",
  whatsapp: "628123456789",        // ⚠️ Use 628 format (not +62)
  address: "Jl. Raya Kemang No. 123",
  city: "Jakarta Selatan",
  email: "info@warungmaksari.com"  // Optional
}
```

### 🎨 Colors & Branding
```javascript
branding: {
  colors: {
    primary: "#FF6B35",    // Orange (main brand color)
    secondary: "#CC2936",  // Red (secondary color)
    accent: "#FFD23F"      // Yellow (accent color)
  },
  images: {
    logo: "your-logo-url.jpg",
    heroBackground: "your-hero-image.jpg",
    ownerPhoto: "your-photo.jpg"
  }
}
```

### 🚚 Delivery Settings
```javascript
delivery: {
  enabled: true,
  minOrder: 25000,        // Minimum order amount
  zones: {
    zone1: { distance: "0-3km", fee: 0 },      // Free delivery
    zone2: { distance: "3-5km", fee: 5000 },   // Rp 5,000
    zone3: { distance: "5km+", fee: 10000 }    // Rp 10,000
  }
}
```

### ✨ Features On/Off
```javascript
features: {
  showAbout: true,           // Show About section
  showGallery: true,         // Show Photo Gallery
  showTestimonials: true,    // Show Customer Reviews
  showPromo: true,           // Show Promotions
  enableCart: true           // Enable shopping cart
}
```

## 🛠️ Advanced Customization

### Quick Console Commands
Open browser console (F12) and try these:

```javascript
// Change colors instantly
changeColors('#e74c3c', '#2ecc71', '#f39c12')

// Update WhatsApp number
changeWhatsApp('628123456789')

// Change business name
changeBusinessName('Warung Baru')

// Show all available functions
showCustomizationHelp()
```

### Menu Customization
Edit menu items directly in `index.html` or use the menu data structure in `config.js` for advanced users.

### Images
Replace image URLs in `config.js` with your own:
- **Logo**: Square format, minimum 100x100px
- **Hero Background**: Wide format, minimum 1920x1080px
- **Owner Photo**: Portrait format, minimum 400x600px

## 📱 WhatsApp Integration

### Format Requirements
- ✅ **Correct**: `628123456789` (starts with 628)
- ❌ **Wrong**: `+628123456789` or `08123456789`

### Testing WhatsApp Links
1. Save your changes in `config.js`
2. Refresh your website
3. Click any "Pesan Sekarang" button
4. Verify WhatsApp opens with correct number

## 🔧 Troubleshooting

### Website Not Loading?
- Check all 4 files are uploaded
- Ensure files are in same folder
- Check file names are exactly: `index.html`, `config.js`, `style.css`, `script.js`

### WhatsApp Not Working?
- Verify WhatsApp number format (628XXXXXXXXX)
- Test the number by messaging manually
- Check no extra spaces in phone number

### Colors Not Changing?
- Check hex color format (#FF6B35)
- Refresh browser (Ctrl+F5)
- Check browser console for errors (F12)

### Mobile Not Responsive?
- Template is mobile-first responsive
- Test on actual mobile device
- Check viewport meta tag is present

## 🆘 Support

### Configuration Issues
1. Check browser console (F12) for error messages
2. Validate your `config.js` using online JSON validator
3. Ensure all quotes and commas are properly placed

### Common Mistakes
- ❌ Missing quotes around text values
- ❌ Wrong WhatsApp number format
- ❌ Uploading only some files
- ❌ Editing HTML instead of config.js

### Getting Help
- Read error messages in browser console
- Check this README file thoroughly
- Ensure config.js follows exact format

## 🎯 SEO Optimization

The template is SEO-ready, but you can improve it:

1. **Update meta descriptions** in `config.js`:
```javascript
website: {
  title: "Your Business - Keywords",
  description: "Your business description with local keywords",
  keywords: "warung, makanan, delivery, [your city]"
}
```

2. **Add Google Analytics** (optional):
```javascript
website: {
  googleAnalyticsId: "G-XXXXXXXXXX"  // Your GA4 ID
}
```

3. **Local SEO**:
   - Update address with local landmarks
   - Include city/area names in content
   - Add local phone number format

## 🚀 Performance Tips

### Image Optimization
- Use WebP format for better compression
- Compress images before uploading
- Use appropriate image sizes (don't upload 4MB photos)

### Hosting Recommendations
- Use SSD-based hosting
- Enable gzip compression
- Use CDN if possible
- Regular hosting providers work fine

### Loading Speed
- Template is already optimized
- Avoid adding heavy external scripts
- Use optimized images

## 📊 Analytics & Tracking

### Google Analytics Setup
1. Create Google Analytics account
2. Get your GA4 Measurement ID
3. Add to config.js:
```javascript
website: {
  googleAnalyticsId: "G-XXXXXXXXXX"
}
```

### Facebook Pixel (Optional)
```javascript
facebookPixel: {
  enabled: true,
  pixelId: "YOUR_PIXEL_ID"
}
```

## 🔒 Security & Maintenance

### Regular Updates
- Keep hosting account secure
- Update contact information as needed
- Review and update menu prices regularly

### Backup
- Download website files regularly
- Keep a backup of your customized config.js
- Take screenshots of working website

## 💡 Tips for Success

### Content Tips
- Use high-quality food photography
- Write appetizing menu descriptions
- Include authentic customer testimonials
- Update promotions regularly

### Business Tips
- Respond quickly to WhatsApp orders
- Keep menu prices current
- Test all functionality regularly
- Monitor website performance

### Marketing Tips
- Share website URL on social media
- Include website link in business cards
- Add QR code for easy mobile access
- Use Google My Business with website link

## 📈 Template Features Breakdown

### Included Sections
- ✅ **Hero Section** - Eye-catching landing area
- ✅ **About Section** - Business story and features
- ✅ **Menu Section** - Organized with tabs
- ✅ **Promotions** - Special offers display
- ✅ **Gallery** - Photo showcase
- ✅ **Delivery Info** - Coverage and pricing
- ✅ **Testimonials** - Customer reviews
- ✅ **Contact** - Multiple contact methods
- ✅ **Footer** - Complete site navigation

### Interactive Features
- 📱 **WhatsApp Integration** - Direct ordering
- 🛒 **Shopping Cart** - Order management
- 📋 **Contact Form** - Customer inquiries
- 🎯 **Smooth Scrolling** - Professional navigation
- 📱 **Mobile Menu** - Responsive hamburger menu
- ⚡ **Fast Loading** - Optimized performance

## 🎉 Congratulations!

You now have a professional restaurant website that:
- Looks great on all devices
- Accepts orders via WhatsApp
- Showcases your menu beautifully
- Provides all necessary business information
- Is optimized for Indonesian market

## 📞 Need More Help?

This template is designed to be self-sufficient, but if you need additional customization:

1. **Basic Changes**: Use this README guide
2. **Advanced Features**: Consider hiring a web developer
3. **Design Changes**: Most can be done via config.js
4. **Functionality**: Template includes all standard restaurant features

---

## 📝 Version Information

- **Template Version**: 1.0
- **Last Updated**: 2024
- **Compatibility**: All modern browsers
- **Mobile Support**: iOS, Android
- **Framework**: Vanilla HTML/CSS/JavaScript (no dependencies)

---

**🍽️ Enjoy your new restaurant website!**

*Made with ❤️ for Indonesian restaurant businesses*