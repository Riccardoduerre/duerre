---
title: "Compositing Multipass Renders: Beauty Passes, AOVs and Cryptomatte"
date: 2026-02-09
image: ../../assets/images/optimized/Giau_00001.webp
excerpt: "Breaking down the CGI render equation into separate diffuse, specular, and emissive passes for surgical control in post."
---
Rendering a final 3D image as a single, flattened "Beauty" file is acceptable for quick previews, but for high-end commercial production, it leaves zero flexibility in post-production. If an art director requests a slight drop in product reflections or warmer shadow tinting, re-rendering a complex 3D frame can take hours. Multipass rendering with Arbitrary Output Variables (AOVs) provides absolute control.

## Deconstructing the Render Equation

The final beauty render is the mathematical summation of distinct physical components of the rendering equation:

> **Beauty = Diffuse Direct + Diffuse Indirect + Specular Direct + Specular Indirect + Emission + Transmission**

By rendering these components as separate 32-bit OpenEXR layers (AOVs):
- **Diffuse Direct:** Light striking the matte base color directly from light fixtures.
- **Diffuse Indirect:** Secondary bounced light from neighboring geometry (global illumination).
- **Specular Direct/Indirect:** Sharp and rough reflections of lights and environment surfaces.
- **Transmission:** Light passing through refractive glass, liquids, and crystals.

In compositing software (such as DaVinci Resolve Fusion or Nuke), rebuilding the beauty pass using linear addition operators allows you to boost reflections, adjust subsurface scatter tint, or dim specific key lights in real time without touching the 3D software.

## The Revolution of Cryptomatte

Historically, isolating individual objects or materials in a render required generating cumbersome RGB clown passes or ID matte channels that suffered from jagged anti-aliasing edges and edge contamination.

**Cryptomatte** automatically generates procedural ID mattes at render time with:
- Flawless sub-pixel anti-aliasing.
- Support for motion blur and depth-of-field transparency.
- Automatic naming based on 3D hierarchy or material assignments.

With a single click in your compositor, you can select any component—a watch bezel, a leather stitch, an automotive headlamp—and isolate it with pixel-perfect alpha precision for color grading.

## Auxiliary Data Passes: Depth and Normals

Beyond optical passes, multi-pass rendering yields auxiliary geometric data passes:
1. **Z-Depth Pass:** Stores the distance of every pixel from the camera lens, allowing realistic post-depth of field and atmospheric fog simulation.
2. **World Normal Pass:** Stores 3D surface vectors, allowing relighting tools to cast directional virtual lights onto a pre-rendered 2D frame.
