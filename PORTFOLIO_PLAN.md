# Jian Jie's Interactive WebGL Portfolio - Implementation Plan

## Overview
Build a stunning, interactive portfolio website using WebGL that showcases your Full-Stack Developer + AI/ML + Game Development background. The design balances visual impact with practical usability.

---

## Design Concept: "Hybrid Interactive"

### Visual Theme
- **Dark mode primary** with accent colors (cyan/purple gradients - tech aesthetic)
- **Floating geometric particles** in hero that respond to mouse movement
- **Subtle glow effects** and smooth transitions throughout
- **Clean typography** (Inter/Space Grotesk fonts)

### Layout Structure
```
+------------------------------------------+
|  HERO - Interactive 3D Particle Scene    |
|  Name + Title + CTA floating over 3D     |
+------------------------------------------+
|  ABOUT - Brief intro with subtle         |
|  parallax 3D elements                    |
+------------------------------------------+
|  SKILLS - 3D animated skill orbs/bars    |
|  Grouped: Languages, Frameworks, Cloud   |
+------------------------------------------+
|  PROJECTS - Interactive 3D cards         |
|  Click to expand with video embed        |
+------------------------------------------+
|  EXPERIENCE - Timeline with glow         |
|  effects on scroll                       |
+------------------------------------------+
|  EDUCATION & AWARDS - Minimal cards      |
+------------------------------------------+
|  CONTACT - Form + social links           |
|  3D animated background                  |
+------------------------------------------+
```

---

## Technology Stack

### Core Framework
| Technology | Purpose | Why |
|------------|---------|-----|
| **Next.js 14** | React framework | SSR, optimal performance, great DX |
| **React Three Fiber** | 3D rendering | React-native syntax for Three.js |
| **Drei** | R3F helpers | Pre-built 3D components, saves time |
| **TypeScript** | Type safety | Professional code quality |

### Styling & Animation
| Technology | Purpose |
|------------|---------|
| **Tailwind CSS** | Utility-first styling |
| **Framer Motion** | Page transitions, scroll animations |
| **GSAP** | Complex timeline animations |

### Hosting (FREE)
| Platform | Pros | Recommendation |
|----------|------|----------------|
| **Vercel** | Best Next.js perf, 100GB/mo, global CDN | **Primary choice** |
| **Netlify** | 125k req/mo, commercial OK | Backup option |
| **GitHub Pages** | Simple, reliable | For static fallback |

**Domain**: Use free `yourname.vercel.app` or buy custom domain (~$10/year)

---

## Content Mapping (From Your Resume)

### Hero Section
```
TAN JIAN JIE
Full-Stack Developer | AI/ML Systems | Real-Time Graphics
[View Projects] [Download Resume] [Contact]
```

### About Section
> Final-year Computer Science student at DigiPen specializing in Real-Time
> Interactive Simulation. I build production AI systems, cross-platform apps,
> and game engines. My RAG chatbot reduced 45-minute searches to 5 seconds.

### Skills (Grouped for 3D visualization)
**Languages**: Python, C++, HTML/CSS, Dart
**Frameworks**: React, FastAPI, Flutter
**AI/ML**: RAG Systems, Gemini API, ChromaDB, Zilliz, NLP
**Cloud**: GCP (Cloud Run), AWS (S3, Cognito), Docker, CI/CD
**Tools**: Git, Firebase, Firestore

### Projects (4 Main)
1. **Sunflower Childcare AI Chatbot** - Production RAG system
   - Video: [existing YouTube link]
   - Tech: FastAPI, Gemini, Flutter, Firebase, GCP
   - Impact: 45min -> 5s search time

2. **CloudShare Web** - Serverless cloud storage
   - Video: [existing YouTube link]
   - Tech: React, AWS S3, Cognito
   - Impact: Secure file management SPA

3. **Witch Way Up** - Game dev tools
   - Video: [existing YouTube link]
   - Tech: C++, Custom engine
   - Impact: 50% faster asset search

4. **Anotter World** - ECS game engine
   - Video: [existing YouTube link]
   - Tech: C++, ECS architecture
   - Impact: 25% faster feature integration

### Experience Timeline
- **Sunflower Childcare** (May 2025-Present) - Full-stack Dev Intern
- **Metta Welfare** (Sep-Dec 2016) - IT Intern
- **ITE College West** (Nov 2013-Jan 2014) - Level Designer/PM

### Education
- **DigiPen/SIT** - BS Computer Science, Real-Time Interactive Simulation (2020-2025)
- **Nanyang Polytechnic** - Diploma Engineering Informatics (2014-2017)

### Awards
- 2024: Commendation Award + 10-Year Service (Singapore Red Cross)
- 2023: Outstanding Youth-Led Project Award
- 2016: ITE Educational Project (Straits Times coverage)

---

## Project Structure

```
D:\jj_website\
├── public/
│   ├── fonts/
│   ├── images/
│   │   ├── projects/
│   │   └── profile.jpg
│   ├── Tan_JianJie_Resume.pdf
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── three/              # 3D components
│   │   │   ├── ParticleField.tsx
│   │   │   ├── FloatingGeometry.tsx
│   │   │   ├── SkillOrbs.tsx
│   │   │   └── Scene.tsx
│   │   ├── sections/           # Page sections
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Education.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/                 # Reusable UI
│   │       ├── Navbar.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── TimelineItem.tsx
│   │       └── Button.tsx
│   ├── lib/
│   │   ├── data.ts             # Portfolio content
│   │   └── utils.ts
│   └── hooks/
│       └── useScrollAnimation.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## Implementation Phases

### Phase 1: Foundation Setup
1. Initialize Next.js 14 project with TypeScript
2. Install dependencies:
   - `@react-three/fiber` - React Three Fiber
   - `@react-three/drei` - Helpers library
   - `three` - Three.js core
   - `framer-motion` - Animations
   - `tailwindcss` - Styling
3. Configure Tailwind with custom dark theme
4. Set up project structure
5. Create data file with all resume content

### Phase 2: Core Layout & Sections
1. Build responsive Navbar with smooth scroll
2. Create section wrapper component with scroll animations
3. Implement each section (static first):
   - Hero (text overlay ready for 3D)
   - About
   - Skills (grid layout)
   - Projects (card grid)
   - Experience (timeline)
   - Education & Awards
   - Contact form

### Phase 3: WebGL Integration
1. **Hero 3D Scene**:
   - Particle field (1000+ particles)
   - Mouse-reactive movement
   - Floating geometric shapes
   - Gradient color shifts

2. **Skills Section**:
   - 3D orbs representing skill categories
   - Hover interactions
   - Orbit animations

3. **Project Cards**:
   - 3D tilt effect on hover
   - Glow/reflection effects
   - Smooth expand animation

4. **Background Effects**:
   - Subtle noise/grain texture
   - Ambient floating particles
   - Scroll-based parallax

### Phase 4: Animations & Polish
1. Page load animations (stagger reveal)
2. Scroll-triggered section reveals
3. Smooth section transitions
4. Loading state for 3D content
5. Mobile-optimized (reduce particles, simplify 3D)

### Phase 5: Performance & Deployment
1. Lazy load 3D components
2. Image optimization
3. Lighthouse audit (aim for 90+ scores)
4. Deploy to Vercel
5. Configure custom domain (optional)
6. Test on multiple devices/browsers

---

## Key 3D Components Detail

### 1. ParticleField.tsx (Hero Background)
```typescript
// Concept: Thousands of particles floating in space
// - Respond to mouse position
// - Subtle wave motion
// - Color gradient (cyan -> purple)
// - Performance: Use instanced mesh for 1000+ particles
```

### 2. FloatingGeometry.tsx (Decorative)
```typescript
// Concept: Floating icosahedrons, toruses, octahedrons
// - Slow rotation
// - Wireframe material with glow
// - Positioned around hero text
```

### 3. SkillOrbs.tsx (Skills Section)
```typescript
// Concept: Spheres representing skill categories
// - Size = proficiency level
// - Orbit around center
// - Click to reveal skills in category
// - Particle trails
```

### 4. ProjectCard3D.tsx (Projects)
```typescript
// Concept: Cards with 3D depth effect
// - Tilt based on mouse position
// - Reflection/glow on hover
// - Smooth flip to reveal details
```

---

## Mobile Responsiveness Strategy

| Feature | Desktop | Mobile |
|---------|---------|--------|
| Particle count | 1000+ | 200 |
| 3D geometry | Full detail | Simplified |
| Animations | All enabled | Reduced |
| Skills orbs | 3D interactive | 2D cards |
| Navigation | Fixed navbar | Hamburger menu |

---

## Free Resources Needed

### Fonts (Google Fonts - Free)
- **Space Grotesk** - Headings (techy feel)
- **Inter** - Body text (readable)

### Icons (Free)
- **Lucide React** - Clean icon set
- **Simple Icons** - Brand logos (GitHub, LinkedIn)

### 3D Assets (Free)
- Custom geometry (built with Three.js primitives)
- No external 3D models needed

### Images
- Profile photo (you provide)
- Project screenshots (from your videos)

---

## Deployment Checklist

### Vercel Deployment
1. Push code to GitHub repository
2. Connect repo to Vercel
3. Configure build settings (auto-detected for Next.js)
4. Deploy (automatic on push)
5. Get free URL: `jianjie.vercel.app`

### Optional: Custom Domain
- Purchase domain (~$10/year): `jianjie.dev` or `tanjianjie.com`
- Configure DNS in Vercel dashboard
- SSL automatically provisioned

---

## Success Metrics

- [ ] Loads in <3 seconds on 4G
- [ ] 90+ Lighthouse performance score
- [ ] Smooth 60fps animations
- [ ] Works on iOS Safari, Chrome, Firefox
- [ ] All project videos play correctly
- [ ] Contact form functional
- [ ] Resume downloadable
- [ ] Mobile experience polished

---

## Files to Create

1. `package.json` - Dependencies
2. `src/app/page.tsx` - Main page
3. `src/app/layout.tsx` - Root layout
4. `src/app/globals.css` - Global styles
5. `src/components/three/ParticleField.tsx` - Hero 3D
6. `src/components/three/Scene.tsx` - 3D canvas wrapper
7. `src/components/sections/Hero.tsx` - Hero section
8. `src/components/sections/About.tsx` - About section
9. `src/components/sections/Skills.tsx` - Skills section
10. `src/components/sections/Projects.tsx` - Projects section
11. `src/components/sections/Experience.tsx` - Experience timeline
12. `src/components/sections/Contact.tsx` - Contact form
13. `src/components/ui/Navbar.tsx` - Navigation
14. `src/components/ui/ProjectCard.tsx` - Project cards
15. `src/lib/data.ts` - All content data
16. `tailwind.config.ts` - Theme configuration
17. `next.config.js` - Next.js config

---

## Commands Reference

```bash
# Development
cd D:\jj_website
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Deploy to Vercel
npx vercel --prod
```

---

## Next Steps

1. Initialize the Next.js project
2. Set up the component structure
3. Build the Hero section with 3D particles
4. Iterate through each section
5. Add animations and polish
6. Deploy to Vercel

**Ready for implementation!**
