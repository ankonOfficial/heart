# 💖 For My Dearest - A Mathematical Love Story

A beautiful, interactive romantic web application featuring mathematically-generated heart animations, customizable effects, and romantic content. Built with Next.js, TypeScript, and Tailwind CSS.

🌐 **Live Demo**: [https://heart-an.netlify.app/](https://heart-an.netlify.app/)

## ✨ Features

### 🎨 Interactive Heart Animation
- **Mathematical Heart**: Parametric equations create a perfect heart shape
- **Customizable Colors**: Choose from multiple heart colors and themes
- **Animation Controls**: Adjust speed, size, and animation effects
- **Real-time Rendering**: Smooth 60fps canvas animations

### 🎵 Multimedia Experience
- **Background Music**: Romantic soundtrack with play/pause controls
- **Confetti Effects**: Animated confetti particles for celebration
- **Stardust Background**: Optional starry night theme
- **Sound Controls**: Toggle music on/off with visual feedback

### 💝 Romantic Content
- **Dynamic Messages**: Rotating collection of love messages
- **Love Calculator**: Fun compatibility calculator with animations
- **Message Panel**: Send romantic messages with beautiful UI
- **Gallery**: Save and view heart variations

### 🎯 Interactive Features
- **Fullscreen Mode**: Immersive viewing experience
- **Responsive Design**: Works perfectly on all devices
- **Keyboard Shortcuts**: ESC to exit fullscreen
- **Touch Support**: Mobile-friendly interactions

### 🛠️ Customization Options
- **Color Themes**: Multiple preset color schemes
- **Animation Speed**: Slow to fast animation controls
- **Heart Size**: Adjustable heart dimensions
- **Effect Toggles**: Enable/disable various visual effects
- **Settings Export**: Save and load custom configurations

## 🚀 Technologies Used

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS v4, Custom CSS animations
- **UI Components**: shadcn/ui component library
- **Icons**: Font Awesome 6
- **Fonts**: Inter, Merriweather (Google Fonts)
- **Canvas**: HTML5 Canvas for heart rendering
- **Audio**: HTML5 Audio API

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🎮 How to Use

1. **Start Experience**: Click "Start Our Journey" to begin
2. **Customize Heart**: Use the customize panel to change colors, size, and speed
3. **Send Messages**: Open the message panel to send romantic notes
4. **View Gallery**: Save heart variations and view them in the gallery
5. **Fullscreen Mode**: Click fullscreen for an immersive experience
6. **Music Controls**: Toggle background music on/off

## 🔧 Installation & Development


# Navigate to project directory
cd romantic-heart-app

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main application component
│   └── globals.css         # Global styles and animations
├── components/
│   ├── start-overlay.tsx   # Welcome screen component
│   ├── main-content.tsx    # Main content wrapper
│   ├── heart-canvas.tsx    # Mathematical heart animation
│   ├── floating-buttons.tsx # Action buttons
│   ├── customize-panel.tsx # Customization controls
│   ├── message-panel.tsx   # Message sending interface
│   ├── gallery-modal.tsx   # Heart gallery viewer
│   ├── confetti-container.tsx # Confetti effects
│   └── ui/                 # Reusable UI components
├── public/
│   └── music.mp3          # Background music file
└── README.md              # Project documentation
\`\`\`

## 🎨 Mathematical Heart Equation

The heart shape is generated using parametric equations:

\`\`\`javascript
// Heart equation parameters
const t = (i / steps) * 2 * Math.PI
const x = 16 * Math.sin(t) ** 3
const y = -(13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t))
\`\`\`

## 🌟 Key Features Explained

### Animation System
- **Smooth Rendering**: Uses `requestAnimationFrame` for 60fps animations
- **Performance Optimized**: Efficient canvas clearing and redrawing
- **Responsive Scaling**: Adapts to different screen sizes

### Customization Engine
- **Real-time Updates**: Changes apply immediately without page refresh
- **Persistent Settings**: Configurations saved in component state
- **Theme System**: Coordinated color schemes for consistent design

### Audio Integration
- **Seamless Playback**: Background music with fade effects
- **User Controls**: Play/pause with visual feedback
- **Browser Compatibility**: Handles autoplay restrictions gracefully

## 🎯 Performance Features

- **Optimized Rendering**: Efficient canvas operations
- **Lazy Loading**: Components load only when needed
- **Memory Management**: Proper cleanup of animations and events
- **Mobile Optimized**: Touch-friendly interactions and responsive design

## 🔮 Future Enhancements

- [ ] Multiple heart shapes and patterns
- [ ] Social sharing capabilities
- [ ] Custom message templates
- [ ] Advanced animation presets
- [ ] User accounts and saved preferences
- [ ] Mobile app version

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

Created with ❤️ by **Ankon Das**

- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

## 🙏 Acknowledgments

- Mathematical heart equation inspiration from various mathematical art sources
- UI/UX design inspired by modern romantic web applications
- Music and sound effects from royalty-free sources
- Special thanks to the open-source community for amazing tools and libraries

---

**© 2025 Ankon Das Portfolio. All rights reserved.**

*Made with love, mathematics, and lots of coffee ☕*
