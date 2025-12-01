# 🎨 Free Rive Animation URLs for Portfolio Backgrounds

## Quick Start URLs

Replace `YOUR_RIVE_FILE_URL_HERE` in your code with one of these:

### Option 1: Use Rive Community Direct Links

Visit https://rive.app/community/ and search for:
- **"background"** - General background animations
- **"blob"** - Soft, organic blob animations  
- **"gradient"** - Flowing gradient animations
- **"particle"** - Particle system animations
- **"abstract"** - Abstract geometric patterns

### Option 2: Host Your Own

1. Download a `.riv` file from Rive Community
2. Upload to your `public` folder
3. Use: `src="/your-file.riv"`

### Option 3: Use CDN (if available)

Some Rive community files are available via CDN. Check the file's share page for a direct link.

---

## 🎯 Recommended Animation Types

### For Subtle Backgrounds:
- ✅ **Soft Blob** - Organic, gentle movements
- ✅ **Gradient Flow** - Slow color transitions
- ✅ **Abstract Shapes** - Minimal geometric patterns

### For Dynamic Backgrounds:
- ⚡ **Particle Systems** - Engaging but use sparingly
- ⚡ **Animated Gradients** - Smooth color flows
- ⚡ **Morphing Shapes** - Transformative patterns

---

## 📝 How to Get a Rive File URL

1. Go to https://rive.app/community/
2. Browse or search for animations
3. Click on an animation you like
4. Click "Download" or "Get Link"
5. Copy the URL or download the `.riv` file
6. If downloaded, place in `public/` folder and use `/filename.riv`

---

## 💡 Pro Tips

- **Test Performance**: Simple animations perform better
- **Match Colors**: Use Rive Editor to adjust colors
- **Loop Settings**: Ensure animations loop smoothly
- **File Size**: Keep under 500KB for best performance

---

## 🔗 Example Usage

```tsx
// Using a hosted .riv file
<RiveBackground src="/my-animation.riv" />

// Using a CDN URL (if available)
<RiveBackground src="https://cdn.rive.app/community/your-file.riv" />

// Using a Rive community share link
<RiveBackground src="https://rive.app/community/runtime-files/12345-67890.riv" />
```

---

**Note**: Always test the animation URL in your browser first to ensure it's accessible and loads correctly!


