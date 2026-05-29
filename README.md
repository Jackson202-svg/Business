# Palmy × Jayden Imel | Music & Digital Creative Brand

A professional GitHub Pages website for **Palmy × Jayden Imel**, a music and digital creative brand combining independent music production with modern digital creativity.

## 📋 Project Description

This is a clean, modern, professional business website showcasing:
- **Palmy**: Independent music creator with focus on structured creative sound development
- **Jayden Imel**: Digital creative collaborator specializing in music-related projects

The website features music distribution links, professional branding, and direct contact capabilities.

## 📁 Folder Structure

```
project-root/
├── public/
│   └── favicon.ico           # Website favicon
├── src/
│   ├── index.html            # Main HTML structure
│   ├── style.css             # Professional styling
│   └── script.js             # Interactive features
└── README.md                 # This file
```

## 🎯 Features

### Sections
- **Navigation Bar**: Fixed, professional navigation with smooth scrolling
- **Hero Section**: Eye-catching introduction with call-to-action
- **About Section**: Professional profiles for Palmy and Jayden Imel
- **Music Links Section**: Clickable cards linking to Spotify and Suno
- **Contact Section**: Email with copy-to-clipboard functionality
- **Footer**: Copyright and brand information

### Design Elements
- Dark modern professional theme
- Responsive design (desktop, tablet, mobile)
- Subtle gradient backgrounds
- Smooth scrolling and fade-in animations
- Professional typography and spacing
- Hover transitions and interactive feedback

### Interactions
- Copy email to clipboard with feedback
- Scroll-triggered fade-in animations
- Smooth navigation scrolling
- Hover effects on cards and buttons
- Active link highlighting

## 🚀 Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/Jackson202-svg/Business.git
cd Business
```

### 2. Local Testing
To test locally, use a simple HTTP server:

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (with http-server):**
```bash
npm install -g http-server
http-server
```

Then open `http://localhost:8000/src/` in your browser.

### 3. File Organization
Ensure the structure is maintained:
- `/public/` - Contains only static assets (favicon, images, etc.)
- `/src/` - Contains HTML, CSS, and JavaScript files
- Root level - Contains README.md

## 📝 How to Edit Content

### Edit Hero Section
In `src/index.html`, find the hero section:
```html
<h1 class="hero-title">Palmy × Jayden Imel</h1>
<p class="hero-subtitle">Music & Digital Creative Brand</p>
<p class="hero-description">Your description here...</p>
```

### Edit About Profiles
Locate the about section to modify Palmy and Jayden descriptions:
```html
<h3 class="about-card-title">Palmy</h3>
<p class="about-card-text">Edit profile description here...</p>
```

### Edit Music Links
Update streaming service links in the links-grid section:
```html
<a href="YOUR_SPOTIFY_LINK" target="_blank" rel="noopener noreferrer" class="link-card">
```

### Edit Contact Email
Update the email in both HTML and JavaScript:
```html
<!-- In HTML -->
<p class="contact-email">your-email@example.com</p>

<!-- In script.js -->
const email = 'your-email@example.com';
```

### Customize Colors
Edit CSS variables in `src/style.css`:
```css
:root {
    --primary-dark: #0a0e27;
    --accent-purple: #7c3aed;
    --accent-blue: #3b82f6;
    /* ... other colors ... */
}
```

## 🔗 Music Distribution Links

- **Palmy on Spotify**: https://open.spotify.com/artist/1W1yRteiJWyrDYff4MMTdk?si=xeg_Ad49Q6CqpcMDMWr0Fw
- **Jayden Imel on Spotify**: https://open.spotify.com/artist/65Q4nTFP2EIh7TlhZmXf2f?si=wwZ70moxRPCTw7r937qGGw
- **Versatone on Suno**: https://suno.com/@versatone

## 📧 Contact
Email: iimel3952@gmail.com

## 🌐 GitHub Pages Deployment

### Enable GitHub Pages
1. Go to repository Settings → Pages
2. Ensure "Source" is set to "Deploy from a branch"
3. Select the branch (typically `main`) and `/src` folder or `/` (root) folder
4. Save

### Deployment Checklist
- ✅ Repository is public
- ✅ Index file is at `src/index.html`
- ✅ All file references use correct relative paths
- ✅ No broken external links
- ✅ Favicon path is correct

## 🎨 Design Specifications

### Color Palette
- **Primary Dark**: #0a0e27
- **Secondary Dark**: #1a1f3a
- **Accent Purple**: #7c3aed
- **Accent Blue**: #3b82f6
- **Text Primary**: #f5f5f5
- **Text Secondary**: #b0b0b0

### Typography
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Titles**: 700 weight, large sizes
- **Body**: 400-500 weight
- **Professional spacing** throughout

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: Below 768px
- Extra small: Below 480px

## 📦 Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android Latest

## 🔧 Maintenance

### Adding New Sections
1. Add HTML in `src/index.html`
2. Style in `src/style.css`
3. Add interactivity in `src/script.js` if needed
4. Update navigation links

### Performance Tips
- Optimize images before adding to `/public/`
- Use CSS animations instead of JavaScript animations
- Keep JavaScript minimal
- Test on multiple devices

### Troubleshooting

**Website not loading?**
- Check GitHub Pages settings
- Verify all files are in correct directories
- Check browser console for errors

**Styling not applied?**
- Clear browser cache (Ctrl+F5)
- Verify CSS path in HTML
- Check CSS variable definitions

**Links not working?**
- Verify URLs in HTML
- Check for typos in paths
- Test in new incognito window

## 📄 License
© 2026 Palmy × Jayden Imel. All rights reserved.

## 📞 Support
For technical issues or questions, contact: iimel3952@gmail.com

---

**Version**: 1.0.0  
**Last Updated**: May 2026  
**Status**: Production Ready