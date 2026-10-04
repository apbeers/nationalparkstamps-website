# Icon Composer artwork

Each appearance folder contains four aligned 1024 × 1024 SVG layers with transparent backgrounds. Import the files in numeric order into Icon Composer; the filenames preserve the intended back-to-front stacking. The artwork has no background fill or rounded mask so Composer can provide its Liquid Glass material and crop.

## Suggested workflow

1. Create a new iOS icon in Apple Icon Composer.
2. Import the four SVGs from `light/` in filename order.
3. Set the canvas background in Composer, then tune the group and layer Liquid Glass properties. The separate sun, rear peaks, front peak, and base allow the material and refraction to respond between shapes.
4. Select the Dark appearance in Composer and adjust the layer colors to match the corresponding files in `dark/`. Keep the same geometry so both appearances align.
5. Preview Default, Dark, and Mono (clear and tinted) in Composer, then save the resulting `.icon` document for Xcode.

Apple’s current guidance recommends SVG or PNG artwork layers on a 1024 × 1024 canvas for iPhone, iPad, and Mac. Background colors and gradients, Liquid Glass effects, and the rounded mask are applied in Icon Composer. For Apple Watch, use a 1088 × 1088 canvas instead.
