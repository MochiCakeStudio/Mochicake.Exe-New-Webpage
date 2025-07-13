# Personal Website Template

A customizable personal website template inspired by nenrikido.neocities.org, featuring draggable cards, multiple themes, and responsive design.

## 🌟 Features

- **Multiple Themes**: 5 different color themes (Pink, Bubble, Space, Sleepy, Spring)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Real-time clock
  - Visit counter with local storage
  - Basic music player interface
  - Smooth animations and transitions
- **Clean Template Structure**: Easy to customize and add your own content

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Test the features**:
   - Try dragging cards around by clicking and dragging their headers
   - Click the theme emoji buttons to switch between different color schemes
   - Click the START button for a welcome message
3. **Start customizing**: Replace the placeholder content with your own

## 📁 File Structure

```
├── index.html          # Main HTML structure
├── styles.css          # CSS styling with theme variables
├── script.js           # JavaScript for interactivity
├── README.md           # This file
└── .github/
    └── copilot-instructions.md  # GitHub Copilot instructions
```

## 🎨 Customization Guide

### Adding Your Content

1. **Replace Placeholder Text**: 
   - Edit the content in each card section in `index.html`
   - Update the welcome message, blog posts, updates, etc.

2. **Add Images**:
   - Replace the placeholder boxes with your actual images
   - Add your pixel art, photos, or graphics
   - Update the favicon in the HTML head

3. **Customize Themes**:
   - Modify CSS variables in `styles.css` to change colors
   - Add new themes by creating new `[data-theme="name"]` sections

4. **Add New Cards**:
   ```html
   <div class="card draggable" data-card="your-card">
       <div class="card-header">
           <h2>YOUR TITLE</h2>
       </div>
       <div class="card-content">
           <!-- Your content here -->
       </div>
   </div>
   ```

### Available Themes

- **Pink** (💗): Soft pink tones
- **Bubble** (🫧): Light blue and cyan
- **Space** (🪐): Dark theme with purple accents
- **Sleepy** (💤): Warm beige and lavender
- **Spring** (🌷): Fresh green tones

## 🛠️ Technical Details

### JavaScript Classes

- `ThemeManager`: Handles theme switching and localStorage persistence
- `DragDropManager`: Manages card dragging functionality  
- `ClockManager`: Updates the real-time clock display
- `VisitCounter`: Tracks page visits using localStorage
- `MusicPlayer`: Basic play/pause functionality
- `CardAnimationManager`: Handles scroll-based animations

### CSS Features

- CSS Custom Properties for easy theming
- Flexbox and Grid for responsive layouts
- Smooth transitions and hover effects
- Mobile-first responsive design
- Custom scrollbar styling

## 📱 Browser Compatibility

- Chrome/Edge: Full support
- Firefox: Full support  
- Safari: Full support
- Mobile browsers: Full support

## 💡 Ideas for Customization

- Add a photo gallery or portfolio section
- Include social media links and profiles
- Add a contact form or email integration
- Create a blog section with multiple posts
- Add music integration with actual audio files
- Include a guestbook or comment system
- Add weather widgets or other API integrations

## 🎯 Credits

This template is inspired by the amazing personal website at nenrikido.neocities.org. The original site features incredible design and creativity - this template aims to provide a starting point for creating similar personal websites.

## 📄 License

This template is free to use and modify for personal or commercial projects. No attribution required, but always appreciated!

---

**Happy customizing!** 🎉

Start by opening `index.html` in your browser and begin making it your own.
