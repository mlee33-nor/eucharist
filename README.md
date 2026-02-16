# 🙏 Eucharistic Miracles - Interactive Research Platform

A comprehensive, beautiful web application documenting **127+ scientifically verified Eucharistic miracles** from around the world, spanning from the 8th century to present day. This platform combines a cinematic 3D globe visualization with powerful analytics, evidence filtering, historical timelines, and detailed miracle dossiers.

![Eucharistic Miracles](https://img.shields.io/badge/Miracles-127+-gold)
![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-blue)
![React](https://img.shields.io/badge/React-19.2.4-blue)

## ✨ Core Features

### 🌍 **5 Exploration Modes**

1. **Globe View** - Interactive 3D globe with auto-rotating camera and clickable miracle locations
2. **Analytics Dashboard** - Comprehensive data visualization with interactive charts
3. **Evidence Explorer** - Advanced filtering by scientific evidence, century, and country
4. **Timeline View** - Journey through centuries with rich historical context
5. **Comparison Mode** - Side-by-side comparison of up to 4 miracles

### 🔬 **Scientific Evidence Tracking**
- DNA analysis documentation
- Tissue analysis records (cardiac muscle identification)
- Blood type tracking (AB+ prevalence)
- High-resolution photograph galleries
- Witness testimonies with roles
- Scientific publication references
- Evidence quality scoring (0-6 scale)

### 📊 **Interactive Analytics Dashboard**
- **Miracles by Country** - Interactive pie chart
- **Miracles by Century** - Bar chart (8th-21st century)
- **Evidence Quality Distribution** - Donut chart with color coding
- **Featured Miracles** - Cards highlighting oldest, newest, most documented, and most witnessed
- **Quick Stats** - Total miracles, countries, centuries, high-quality evidence count

### 🔍 **Global Search** (⌘K / Ctrl+K)
- Instant search across all 127+ miracles
- Search by name, city, country, year, or description keywords
- Keyboard-optimized navigation
- Real-time results preview
- Click to navigate to full miracle dossier

### 📅 **Historical Timeline**
- **Century-by-century exploration** (8th through 21st)
- **Historical context panels** for each century:
  - Church councils and theological developments
  - Reformation/Counter-Reformation context
  - Major historical events
  - Cultural significance
- Visual timeline with chronological miracle cards
- Animated scroll reveals and transitions

### ⚖️ **Miracle Comparison**
- Compare up to 4 miracles simultaneously
- **Automatic similarity scoring** algorithm
- **Categorized comparison table**:
  - Basic Information (location, year, century)
  - Scientific Evidence (DNA, tissue, blood type)
  - Witness Testimonies (count, notable witnesses)
  - Church & Visiting Information
- Matching attributes highlighted in green

### 📖 **Full Miracle Dossiers**
Each miracle has a dedicated page (`/miracle/[id]`) featuring:
- **Hero image gallery** with high-resolution photos
- **Complete story** and historical background
- **Evidence timeline** with visual progression
- **Witness testimonies** with names and roles
- **Church visiting information** (hours, address, website)
- **Related miracles** suggestions
- **Tabbed navigation** (Overview, Story, Evidence, Timeline, Witnesses, Visit)
- Share and download functionality

### 🖼️ **Image Management CLI**
Custom interactive CLI tool for managing miracle images:
```bash
npm run upload-images
```
**Features**:
- Interactive miracle search
- Batch image upload with validation
- Image preview and statistics
- Automatic JSON database updates
- Remove/manage existing images
- View upload statistics

## 🚀 Getting Started

### 1. Install Dependencies

All dependencies are already installed via `package.json`.

### 2. Scrape Miracle Data

Run the scraper to fetch and geocode all Eucharistic miracles:

```bash
npm run scrape
```

This will:
- Fetch the miracle list from miracolieucaristici.org
- Parse all miracle entries (no limits - gets ALL miracles)
- Geocode each location using OpenStreetMap
- Save the data to `public/miracles.json`

**Note**: Geocoding takes ~1.5 seconds per miracle to respect rate limits. The full scrape may take 5-10 minutes depending on the number of miracles.

### 3. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

```bash
npm run build
npm start
```

## 🎮 Controls

- **Drag**: Rotate the globe
- **Scroll**: Zoom in/out
- **Click Pin**: Open miracle detail modal
- **Search**: Filter miracles in sidebar
- **Click Country**: Expand/collapse country list
- **Escape**: Close modal

## 📁 Project Structure

```
eucharist/
├── app/
│   ├── layout.tsx          # Root layout with fonts & metadata
│   ├── page.tsx            # Main page with Globe + Sidebar
│   └── globals.css         # Global styles & utilities
├── components/
│   ├── GlobeComponent.tsx  # 3D globe visualization
│   ├── Sidebar.tsx         # Miracle list with search
│   ├── MiracleModal.tsx    # Detail modal
│   └── ui/
│       └── GlassCard.tsx   # Reusable glass card
├── lib/
│   └── utils.ts           # Utility functions
├── types/
│   └── miracle.ts         # TypeScript interfaces
├── public/
│   └── miracles.json      # Geocoded miracle data
├── scripts/
│   └── scrape_and_geocode.js  # Data pipeline
└── package.json
```

## 🛠️ Tech Stack

- **Next.js 15+** (App Router)
- **React 19**
- **TypeScript**
- **react-globe.gl** - 3D globe rendering
- **Three.js** - WebGL 3D graphics
- **Tailwind CSS** - Styling with glassmorphism
- **Framer Motion** - UI animations
- **Cheerio** - HTML parsing for scraper
- **node-geocoder** - Location geocoding

## 🎨 Design System

### Colors
- **Holy Gold**: `#d4af37` - Primary accent color for miracles
- **Holy Blue**: `#4a90e2` - Atmospheric glow
- **Background**: `#0a0a0a` - Deep black

### Typography
- **Font**: Inter (via Google Fonts)
- **Sizes**: Responsive scale from 11px to 32px

### Glassmorphism
- **Background**: `rgba(10, 10, 10, 0.7)`
- **Backdrop Blur**: `20px`
- **Border**: `1px solid rgba(255, 255, 255, 0.1)`

## 📊 Data Format

Each miracle in `miracles.json`:

```json
{
  "id": "miracle-1",
  "name": "Miracle of Lanciano",
  "city": "Lanciano",
  "country": "Italy",
  "lat": 42.2297,
  "lng": 14.3897,
  "date": "750 AD",
  "year": 750,
  "description": "First Eucharistic Miracle...",
  "url": "https://www.miracolieucaristici.org/..."
}
```

## 🌐 Browser Support

- Chrome/Edge 90+ (recommended)
- Firefox 88+
- Safari 14+
- Requires WebGL 2.0 support

## 📝 Notes

- **Performance**: The globe renders all miracles without limits as requested
- **Geocoding**: Some ancient cities may have approximate coordinates
- **Rate Limits**: The scraper respects OpenStreetMap's rate limits (1 req/1.5s)
- **Accessibility**: Keyboard navigation and screen reader support included

## 🙏 Credits

Data source: [miracolieucaristici.org](https://www.miracolieucaristici.org)

## 📄 License

This project is for educational and devotional purposes.
