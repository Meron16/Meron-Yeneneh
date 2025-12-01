# How to Upload Your Photo

## Steps to Add Your Portrait Photo

1. **Prepare Your Image:**
   - Recommended size: 800x1000px (portrait orientation)
   - Format: JPG, PNG, or WebP
   - Make sure it's a good quality headshot/portrait

2. **Upload Your Image:**
   - Place your image in the `public` folder
   - Name it something like: `meron-photo.jpg` or `profile.jpg`

3. **Update the About Component:**
   - Open `components/About.tsx`
   - Find the commented section that says "Uncomment and update when you have your image"
   - Uncomment the Image component
   - Update the `src` path to your image:
     ```tsx
     <Image
       src="/meron-photo.jpg"  // Change this to your image name
       alt="Meron Yeneneh"
       width={400}
       height={500}
       className="w-full h-full object-cover object-center"
       priority
     />
     ```
   - Remove or comment out the placeholder div

4. **Style Your Photo:**
   - The photo will automatically have:
     - Rounded corners (rounded-3xl)
     - White border
     - Shadow effect
     - Portrait orientation
     - Responsive sizing

## Example:
```tsx
<Image
  src="/meron-photo.jpg"
  alt="Meron Yeneneh"
  width={400}
  height={500}
  className="w-full h-full object-cover object-center"
  priority
/>
```

Your photo will be displayed in a beautiful portrait frame matching the design!

