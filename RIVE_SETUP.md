# Rive Animation Setup

To use the Rive animation in the hero section, follow these steps:

## 1. Install Dependencies

The `@rive-app/react` package has been added to `package.json`. Run:

```bash
npm install
```

## 2. Add Your Rive File

1. Create or export your Rive animation file (`.riv` format)
2. Place it in the `public` folder as `rive-animation.riv`
3. The path should be: `/public/rive-animation.riv`

## 3. Update State Machine Names

If your Rive file uses different state machine or input names, update them in `components/RiveAnimation.tsx`:

- `stateMachines: 'State Machine 1'` - Change to your state machine name
- `'LookX'` and `'LookY'` - Change to your input names for eye tracking

## 4. Features

The Rive animation component includes:
- ✅ Cursor tracking (eyes follow mouse)
- ✅ Smooth movement with cursor
- ✅ Hover detection for background color changes
- ✅ Fallback placeholder if Rive file is not found

## Example Rive File Setup

Your Rive file should have:
- A state machine (e.g., "State Machine 1")
- Inputs for eye tracking:
  - `LookX` (number input, range -1 to 1)
  - `LookY` (number input, range -1 to 1)

The component will automatically normalize mouse position to these ranges.


