<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Copilot Instructions for Personal Website Template

This is a personal website template inspired by nenrikido.neocities.org with the following features:

## Key Features
- **Draggable Cards**: Cards can be dragged around the page by their headers
- **Theme Switching**: Multiple themes (pink, bubble, space, sleepy, spring) that change colors and styling
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Interactive Elements**: Music player, visit counter, clock, and animations

## Code Structure
- `index.html`: Main HTML structure with card-based layout
- `styles.css`: CSS with CSS variables for theming and responsive design
- `script.js`: JavaScript for interactivity (drag/drop, themes, animations)

## Theme System
Themes are implemented using CSS custom properties (variables) and data attributes. Each theme defines:
- Background colors (primary/secondary)
- Text colors (primary/secondary)
- Accent colors
- Border and shadow colors

## JavaScript Classes
- `ThemeManager`: Handles theme switching and persistence
- `ClockManager`: Updates the real-time clock
- `VisitCounter`: Tracks and displays visit count
- `MusicPlayer`: Basic play/pause functionality
- `CardAnimationManager`: Handles scroll animations

## Customization Guidelines
- Replace placeholder content with personal information
- Add actual images/assets in place of placeholder boxes
- Modify theme colors in CSS variables
- Add new cards by following the existing card structure
- Customize animations and interactions as needed

When suggesting code changes:
- Maintain the card-based structure
- Keep theme system compatibility
- Ensure responsive design is preserved
- Follow the existing naming conventions
- Consider accessibility in new features
