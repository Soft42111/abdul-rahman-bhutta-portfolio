# Abdul Rahman Bhutta - Portfolio

A high-performance, accessible portfolio website showcasing community management expertise in the Web3 ecosystem.

## 🚀 Live Demo

Visit [https://abdulrahman.dev](https://abdulrahman.dev) to see the portfolio in action.

## ✨ Features

- **Performance Optimized**: Lazy loading, code splitting, and optimized animations
- **Fully Accessible**: WCAG AA compliant with skip navigation and keyboard support
- **SEO Enhanced**: Complete meta tags, JSON-LD, sitemap, and robots.txt
- **Dark Mode**: Persisted theme toggle with system preference detection
- **Smooth Animations**: Lenis smooth scrolling with reduced motion support
- **Contact Form**: Supabase integration with validation and success states
- **Responsive Design**: Mobile-first approach with optimized images

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Animations**: Framer Motion, Lenis
- **Backend**: Supabase (Database, Authentication)
- **Build Tool**: Vite
- **UI Components**: Radix UI with shadcn/ui
- **Deployment**: Lovable Platform

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Supabase account for backend features

### Development Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd abdul-rahman-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Environment Variables**
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_PROJECT_ID="your-project-id"
VITE_SUPABASE_PUBLISHABLE_KEY="your-anon-key"
VITE_SUPABASE_URL="your-project-url"
```

4. **Start development server**
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
npm run preview  # Preview the build locally
```

## 📂 Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # Reusable UI components (shadcn/ui)
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── experience-section.tsx
│   ├── skills-section.tsx
│   ├── contact-section.tsx
│   └── ...
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
├── integrations/       # Third-party integrations
│   └── supabase/       # Supabase client and types
└── index.css          # Global styles and design system
```

## 🎨 Customization

### Design System

The project uses a comprehensive design system defined in `src/index.css`:

- **Colors**: HSL-based semantic color tokens
- **Typography**: Inter font with responsive scales  
- **Shadows**: Premium shadow system
- **Animations**: Performance-optimized keyframes

### Content Updates

1. **Personal Information**: Update contact details in `src/components/contact-section.tsx`
2. **Experience**: Modify experiences array in `src/components/experience-section.tsx` 
3. **Skills**: Update skills in `src/components/skills-section.tsx`
4. **About**: Edit content in `src/components/about-section.tsx`

### Images

Place images in `src/assets/` and import them as ES6 modules:
```tsx
import heroImage from "@/assets/hero-image.jpg"
```

## 🗄️ Database Setup

The project uses Supabase for contact form submissions:

### Contact Messages Table

```sql
CREATE TABLE contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,  
  subject TEXT NOT NULL,
  message TEXT NOT NULL
);

-- Enable RLS
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policies
CREATE POLICY "Allow public contact form submissions" 
  ON contact_messages FOR INSERT 
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to view contact messages"
  ON contact_messages FOR SELECT 
  USING (true);
```

## 📈 Performance & SEO

### Implemented Optimizations

- **Lazy Loading**: Non-critical sections load on scroll
- **Image Optimization**: Responsive images with proper alt tags
- **Code Splitting**: Dynamic imports for better bundle sizes
- **Preload Critical Resources**: Hero image and fonts
- **Reduced Motion**: Respects user accessibility preferences

### SEO Features

- **Meta Tags**: Complete title, description, and social sharing
- **JSON-LD**: Person schema markup for rich snippets  
- **Sitemap**: `/sitemap.xml` for search engine crawling
- **Robots.txt**: `/robots.txt` with sitemap reference
- **Canonical URLs**: Prevent duplicate content issues

## ♿ Accessibility

- **WCAG AA Compliance**: Color contrast and semantic HTML
- **Skip Navigation**: Bypass repetitive navigation links
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Readers**: Proper ARIA labels and landmarks
- **Focus Management**: Visible focus indicators

## 🚀 Deployment

### Lovable Platform (Recommended)

1. Push changes to your connected repository
2. Click "Publish" in Lovable dashboard  
3. Your site deploys automatically with CDN and optimizations

### Manual Deployment

1. **Build the project**
```bash
npm run build
```

2. **Deploy the `dist/` folder** to your hosting provider

### Environment Variables for Production

Ensure these are set in your deployment environment:
- `VITE_SUPABASE_PROJECT_ID`
- `VITE_SUPABASE_PUBLISHABLE_KEY` 
- `VITE_SUPABASE_URL`

## 📊 Analytics & Monitoring

Contact form submissions are stored in Supabase and can be viewed:

1. **Supabase Dashboard**: Navigate to your project's Table Editor
2. **SQL Queries**: Use the SQL Editor for custom reports
3. **Export Data**: Download submissions as CSV from Supabase

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production  
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)  
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

Abdul Rahman Bhutta
- Email: aliabdulibrahim52@gmail.com
- LinkedIn: [abdul-rehman-194588337](https://www.linkedin.com/in/abdul-rehman-194588337)
- X/Twitter: [@aluubukharaa](https://x.com/aluubukharaa)