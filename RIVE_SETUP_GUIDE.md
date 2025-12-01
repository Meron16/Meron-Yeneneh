# Rive Background Animation Setup Guide

## 🎨 High-Quality Portfolio Background with Rive

This guide provides everything you need to add a subtle, elegant Rive animation background to your portfolio.

---

## 📦 Installation

### Option 1: Install via npm (Recommended)
```bash
npm install rive-js
```

### Option 2: Use CDN (No installation needed)
Add this to your `app/layout.tsx` or `public/index.html`:
```html
<script src="https://unpkg.com/rive-js@latest/dist/rive.min.js"></script>
```

---

## 🎯 Recommended Free Rive Animations

Here are 3 excellent free Rive community animations perfect for portfolio backgrounds:

### 1. **Soft Blob Background** (Subtle & Organic)
- **Best for**: Minimalist, modern portfolios
- **Motion**: Gentle, organic blob movements
- **Performance**: ⭐⭐⭐⭐⭐ Excellent
- **CDN URL**: Use any soft blob animation from [Rive Community](https://rive.app/community/)
- **Search**: "soft blob background" or "organic shapes"

### 2. **Gradient Flow** (Elegant & Smooth)
- **Best for**: Creative, design-focused portfolios
- **Motion**: Slow flowing color gradients
- **Performance**: ⭐⭐⭐⭐⭐ Excellent
- **CDN URL**: Search for "gradient flow" or "color flow" animations
- **Tip**: Look for animations with slow, continuous loops

### 3. **Particle System** (Dynamic & Engaging)
- **Best for**: Tech, developer portfolios
- **Motion**: Gentle particle effects
- **Performance**: ⭐⭐⭐⭐ Good (slightly more CPU)
- **CDN URL**: Search for "particle background" or "particles"
- **Tip**: Choose low-particle-count versions for better performance

### Where to Find Free Animations:
1. **Rive Community**: https://rive.app/community/
2. **Search terms**: "background", "blob", "gradient", "particle", "abstract"
3. **Filter by**: Free, Background, Subtle motion

---

## 🚀 Usage

### React/Next.js Version (Recommended)

```tsx
import RiveBackground from '@/components/RiveBackground'

export default function Home() {
  return (
    <>
      {/* Rive background layer */}
      <RiveBackground 
        src="YOUR_RIVE_FILE_URL_HERE" 
        autoplay={true}
        scale="cover"
      />
      
      {/* Your content above the background */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        <div className="backdrop-blur-md bg-white/10 rounded-lg p-8">
          <h1>Your Portfolio Content</h1>
        </div>
      </main>
    </>
  )
}
```

### Plain HTML Version

See `public/rive-background-demo.html` for a complete standalone example.

---

## 🎨 Matching Your Portfolio Color Palette

### Method 1: Use Rive Editor
1. Download the `.riv` file
2. Open in [Rive Editor](https://rive.app/editor)
3. Adjust colors to match your palette
4. Export and use the new file

### Method 2: CSS Overlay
Add a colored overlay to tint the animation:

```css
.rive-bg::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(59, 130, 246, 0.1); /* Your brand color with low opacity */
  mix-blend-mode: multiply;
  pointer-events: none;
}
```

### Method 3: CSS Filters
Apply filters to match your theme:

```css
.rive-bg {
  filter: hue-rotate(180deg) saturate(0.8) brightness(0.9);
}
```

---

## ♿ Accessibility: Reduced Motion

The component automatically respects `prefers-reduced-motion`. To test:

### Browser DevTools:
1. Open DevTools (F12)
2. Go to Rendering tab
3. Check "Emulate CSS media feature prefers-reduced-motion"

### Manual Override:
```css
@media (prefers-reduced-motion: reduce) {
  .rive-bg {
    display: none;
  }
}
```

---

## ⚡ Performance Optimization Tips

### 1. **Choose Simple Animations**
- Avoid complex state machines
- Prefer continuous loops over triggered animations
- Limit particle/object count

### 2. **Optimize Canvas Size**
The component automatically handles high DPI, but you can limit max size:
```tsx
// In RiveBackground.tsx, modify resizeCanvas:
const maxWidth = 1920
const maxHeight = 1080
canvasEl.width = Math.min(window.innerWidth, maxWidth) * dpr
```

### 3. **Use GPU Acceleration**
Already implemented with:
- `will-change: transform`
- `transform: translateZ(0)`
- CSS `backdrop-filter` (use sparingly)

### 4. **Pause on Hidden Tabs**
```tsx
useEffect(() => {
  const handleVisibilityChange = () => {
    if (document.hidden && riveRef.current?.pause) {
      riveRef.current.pause()
    } else if (riveRef.current?.play) {
      riveRef.current.play()
    }
  }
  document.addEventListener('visibilitychange', handleVisibilityChange)
  return () => document.removeEventListener('visibilitychange', handleVisibilityChange)
}, [])
```

---

## 🐛 Troubleshooting

### Animation not loading?
1. Check browser console for errors
2. Verify the `.riv` URL is accessible (CORS)
3. Ensure `rive-js` is installed or CDN script is loaded

### Performance issues?
1. Use simpler animations
2. Reduce canvas size (see optimization tips)
3. Disable parallax effect (remove pointermove listener)

### Colors not matching?
1. Use Rive Editor to adjust colors
2. Apply CSS overlay/filters (see above)
3. Choose animations with similar color schemes

---

## 📝 Example Integration

### Full Next.js Page Example:

```tsx
// app/page.tsx
import RiveBackground from '@/components/RiveBackground'

export default function Home() {
  return (
    <div className="min-h-screen">
      <RiveBackground 
        src="https://cdn.rive.app/your-animation.riv"
        autoplay={true}
        scale="cover"
      />
      
      <main className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="backdrop-blur-xl bg-white/10 rounded-2xl p-12 border border-white/20 shadow-2xl max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-white/90 text-lg">
            Creating amazing web experiences
          </p>
        </div>
      </main>
    </div>
  )
}
```

---

## 🎓 Resources

- **Rive Documentation**: https://rive.app/developers/
- **Rive Community**: https://rive.app/community/
- **Rive Editor**: https://rive.app/editor
- **Performance Guide**: https://rive.app/developers/guides/runtime/performance

---

## ✅ Checklist

- [ ] Installed `rive-js` or added CDN script
- [ ] Chose a suitable animation from Rive Community
- [ ] Replaced `YOUR_RIVE_FILE_URL_HERE` with actual URL
- [ ] Tested on different screen sizes
- [ ] Verified reduced motion works
- [ ] Checked performance (60fps)
- [ ] Matched colors to portfolio theme

---

**Need help?** Check the Rive Discord community or GitHub issues.


