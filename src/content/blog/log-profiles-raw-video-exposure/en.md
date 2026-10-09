---
title: "Exposing Log Curves and RAW Video: The False Color Method"
pubDate: 2026-08-10
coverImage: ../../../assets/blog/_DSC2344.webp
description: "Stop guessing on flat monitor profiles. How middle grey IRE mapping guarantees clean shadow recovery and rich skin tones."
tags: []
---
Shooting in logarithmic gamma profiles (such as Sony S-Log3, Canon C-Log2, or ARRI LogC) is standard operating procedure for commercial productions aiming to capture the maximum dynamic range of the sensor. However, evaluating a flat, desaturated Log image on a field monitor leads many operators into chronic underexposure.

## The Mathematics of the Log Curve

Standard broadcast video (Rec.709) applies a steep contrast curve designed to match consumer displays directly. In contrast, Log curves compress high dynamic range into a mathematical function that dedicates more code values to highlight transitions and shadow roll-off.

Because the visual contrast is flattened, an image that appears "correct" to the naked eye on a monitor is frequently underexposed by one to two stops. When transformed back to standard contrast in post-production, the lifted shadows produce objectionable chromatic grain and blotchy skin tones.

## Why False Color Outperforms Zebras and Waveforms

While waveform monitors are indispensable for evaluating overall scene balance, **False Color** is the most precise tool for exposure consistency across complex shooting schedules.

False Color assigns discrete, standardized chromatic colors to specific IRE brightness ranges:

- **Purple (0 to 4 IRE):** Crushed, clipped blacks.
- **Blue (20 to 30 IRE):** Deep shadow detail.
- **Green (38 to 42 IRE):** 18% Middle Grey standard target for most modern Log curves.
- **Pink / Light Grey (50 to 60 IRE):** Typical skin-tone range (adjust for the subject and the camera's Log curve).
- **Yellow / Orange (70 to 80 IRE):** Bright highlight details.
- **Red (98 to 100 IRE):** Sensor clipping and total data loss.

By loading your monitor's dedicated False Color scale corresponding to your camera's Log profile, you eliminate subjective eye fatigue. Position an 18% grey card into the scene, adjust exposure until it paints solid green, and verify that facial highlights register in the designated skin zone.

## RAW Video: Sensor Gain vs Metadata Exposure

When filming in 12-bit or 16-bit RAW video (such as ProRes RAW or REDCODE), the sensor records uncompressed sensor data without baked-in gamma curves. In RAW workflows:

- ISO is frequently a metadata tag rather than an analog gain multiplier.
- Setting your camera's dual native ISO base correctly dictates the dynamic range split above and below middle grey.
- Nailing your sensor exposure at the hardware level ensures maximum latitude when grading extreme contrast ratios in DaVinci Resolve.
