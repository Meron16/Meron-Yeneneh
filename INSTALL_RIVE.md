# Installing Rive Animation (Optional)

The hero section now has a beautiful animated character that works without Rive! However, if you want to use your own Rive animation file, follow these steps:

## Installation

### Option 1: Using npm (if execution policy allows)
```bash
npm install @rive-app/react
```

### Option 2: Using PowerShell with bypass
```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
npm install @rive-app/react
```

### Option 3: Manual Installation
1. Open `package.json`
2. Ensure `@rive-app/react` is in dependencies
3. Run: `npm install`

## After Installation

1. Place your `.riv` file in the `public` folder as `rive-animation.riv`
2. Update `components/RiveAnimation.tsx` to use the Rive component
3. The current component has a beautiful fallback animation that works great!

## Current Animation Features

✅ **Eye tracking** - Eyes follow your cursor smoothly  
✅ **Character movement** - Character moves with cursor  
✅ **Smooth animations** - Spring physics for natural movement  
✅ **Background color changes** - Changes on hover  
✅ **Floating particles** - Decorative animated elements  
✅ **Responsive design** - Works on all screen sizes  

The current animation is production-ready and looks professional!


