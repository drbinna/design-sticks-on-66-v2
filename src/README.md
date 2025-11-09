# Sticks on 66 - America's First National Golf Trail

A modern, luxurious website for "Sticks on 66" - celebrating 66 public golf courses along historic Route 66, launching July 4, 2026 for America's 250th birthday and Route 66's 100th anniversary.

## 🎨 Design Philosophy

This website blends **luxury golf resort aesthetics** with **vintage Americana nostalgia**, featuring:

- Custom Route 66 color palette (sunset oranges, desert reds, highway yellows, golf greens)
- Comprehensive Motion animations (parallax scrolling, animated counters, stagger effects)
- Premium two-column hero layout with vintage Route 66 imagery
- Flowing highway journey theme with animated icons and decorative Americana elements

## 🛠️ Tech Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Motion (Framer Motion)** - Advanced animations
- **Lucide React** - Icon library
- **Recharts** - Data visualization
- **ShadCN UI** - Component library

## 📁 Project Structure

```
├── App.tsx                      # Main application entry point
├── components/
│   ├── Navigation.tsx           # Top navigation bar with Route 66 branding
│   ├── ScrollProgress.tsx       # Animated scroll progress indicator
│   ├── Hero.tsx                 # Hero section with vintage car background
│   ├── Stats.tsx                # Route 66 journey stats with highway theme
│   ├── StateCards.tsx           # Interactive state cards along Route 66
│   ├── FeaturedCourses.tsx      # Golf course carousel showcase
│   ├── PresidentialMedallions.tsx # Silver (33) & Gold (66) achievement cards
│   ├── Anniversary.tsx          # 250th/100th anniversary celebration
│   ├── CTABanner.tsx            # Call-to-action banner
│   ├── Footer.tsx               # Site footer
│   └── ui/                      # ShadCN UI components
├── styles/
│   └── globals.css              # Tailwind v4 config + Route 66 color system
```

## 🎯 Key Features

### 10 Custom Components

1. **Navigation** - Sticky navigation with Route 66 shield logo
2. **Hero** - Vintage car sunset background with waving American flag animation
3. **Stats** - Animated counters with Route 66 highway journey visualization
4. **StateCards** - 8 states along Route 66 with hover effects
5. **FeaturedCourses** - Golf course carousel with premium imagery
6. **Presidential Medallions** - Silver (33) & Gold (66) achievement cards
7. **Anniversary** - Dual celebration (America 250 / Route 66 100)
8. **CTABanner** - Conversion-focused call-to-action
9. **Footer** - Comprehensive site footer
10. **ScrollProgress** - Visual scroll indicator

### Animation Highlights

- **Parallax scrolling** throughout hero and sections
- **Animated counters** for stats (courses, miles, states)
- **Stagger effects** on card grids and lists
- **Hover interactions** with scale, glow, and lift effects
- **Spring physics** for natural motion
- **Waving flag animation** in hero section
- **Traveling icons** along Route 66 highway path

## 🎨 Color Palette

```css
--sunset-orange: #ff6b35
--desert-red: #dc143c
--highway-yellow: #ffd700
--desert-purple: #8b4789
--golf-green: #2d5016
--sand-beige: #f4e8c1
--charcoal: #2a2a2a
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sticks-on-66.git
cd sticks-on-66
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📦 Key Dependencies

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "motion": "^11.15.0",
  "lucide-react": "latest",
  "recharts": "^2.5.0",
  "react-slick": "latest",
  "slick-carousel": "latest"
}
```

## 🎭 Component Variants

The project includes experimental component variants:
- `HeroInterrupted.tsx` - Alternative hero layout
- `HeroPremium.tsx` - Premium hero variant
- `NavigationGlass.tsx` - Glass morphism navigation
- `StatsPixar.tsx` - Pixar-style stats animation
- `VintageCar.tsx` - Standalone vintage car component
- `CarIllustrations.tsx` - Car animation illustrations

## 📝 Development Notes

- Using **Tailwind v4** - No `tailwind.config.js` needed
- Custom typography system in `globals.css`
- Motion animations use spring physics for natural feel
- Responsive design with mobile-first approach
- Glass morphism effects with backdrop blur
- Custom Route 66 shield icons and decorative elements

## 🎯 Launch Timeline

**Official Launch:** July 4, 2026
- America's 250th Birthday
- Route 66's 100th Anniversary

## 📄 License

All rights reserved - Sticks on 66

## 🤝 Contributing

This is a private project. Contact the team for collaboration opportunities.

---

**Built with ❤️ for America's Main Street and the game of golf**
