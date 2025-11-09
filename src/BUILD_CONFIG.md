# Build & Deployment Configuration

## ✅ Required Files Created

### Core Configuration
- ✅ `index.html` - Entry HTML file
- ✅ `vite.config.ts` - Vite build configuration
- ✅ `tsconfig.json` - TypeScript configuration
- ✅ `tsconfig.node.json` - TypeScript config for Node
- ✅ `vercel.json` - Vercel deployment config (SPA routing)
- ✅ `.gitignore` - Git ignore rules
- ✅ `.env.example` - Environment variables template
- ✅ `src/main.tsx` - Application entry point

### Router Update
- ✅ Changed from `HashRouter` to `BrowserRouter` for clean URLs

---

## 📦 Build Settings

### Vercel Configuration

**Framework Preset:** Vite
**Build Command:** `npm run build`
**Output Directory:** `dist`
**Install Command:** `npm install`
**Node Version:** 18.x (automatic)

### Build Output
- Production bundle: `dist/`
- Assets optimized with code splitting
- Vendor chunks for better caching:
  - `react-vendor` (React, ReactDOM, Router)
  - `ui-vendor` (Motion, Lucide)
  - `chart-vendor` (Recharts)

---

## 🔐 Environment Variables

### Currently Required: NONE ✅

Your app is **100% frontend** - no environment variables needed for basic deployment!

### Optional (Future Enhancement)

If you add these features later, you'll need:

#### Contact Form Integration
```bash
# Using FormSpree
VITE_FORMSPREE_ID=your-formspree-id

# OR using EmailJS
VITE_EMAILJS_SERVICE_ID=your-service-id
VITE_EMAILJS_TEMPLATE_ID=your-template-id
VITE_EMAILJS_PUBLIC_KEY=your-public-key
```

#### Analytics
```bash
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
VITE_GTM_ID=GTM-XXXXXXX
```

#### Payment Processing
```bash
VITE_STRIPE_PUBLIC_KEY=pk_live_xxxxx
```

#### Backend API
```bash
VITE_API_URL=https://api.stickson66.com
```

#### Supabase (if added)
```bash
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### How to Add Environment Variables

**Local Development:**
1. Copy `.env.example` to `.env`
2. Fill in your values
3. Restart dev server

**Vercel Production:**
1. Go to Project Settings → Environment Variables
2. Add each variable (name + value)
3. Redeploy to apply changes

---

## 🚀 Deployment Commands

### Build Locally (Testing)
```bash
npm run build
npm run preview
```

### Deploy to Vercel

**First Time:**
```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel
```

**Or use Vercel Dashboard:**
1. Import from GitHub
2. Auto-detects Vite
3. Click "Deploy"

**Subsequent Deployments:**
- Just push to GitHub - auto-deploys! ✨

---

## 🌐 Domain Configuration

### Vercel DNS Records (Already in DEPLOYMENT.md)

**Add to Namecheap Advanced DNS:**

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | Automatic |
| CNAME | www | cname.vercel-dns.com | Automatic |

### SSL Certificate
- ✅ Automatically provisioned by Vercel
- ✅ Auto-renews (Let's Encrypt)
- ✅ Forces HTTPS

---

## 📊 Performance Optimization

### Enabled Optimizations

1. **Code Splitting**
   - Vendor chunks separated
   - Lazy loading ready

2. **Asset Optimization**
   - Images optimized
   - CSS minified
   - JS compressed (Terser)

3. **Caching Strategy**
   - Static assets cached 1 year
   - Immutable headers

4. **Bundle Analysis**
```bash
# Install analyzer
npm i -D rollup-plugin-visualizer

# Build and analyze
npm run build
```

### Expected Performance
- **Lighthouse Score:** 95+ (desktop)
- **First Contentful Paint:** <1.5s
- **Time to Interactive:** <3s
- **Bundle Size:** ~500KB (initial)

---

## 🔍 SEO Configuration

### Meta Tags (in index.html)
- ✅ Title, description, keywords
- ✅ Open Graph (Facebook/LinkedIn)
- ✅ Twitter Card
- ✅ Theme color

### Recommended Additions

**Add to `public/` folder:**
1. `favicon.ico` - 32x32 icon
2. `apple-touch-icon.png` - 180x180
3. `og-image.jpg` - 1200x630 (Open Graph)
4. `twitter-image.jpg` - 1200x675 (Twitter)
5. `robots.txt` - Search engine rules
6. `sitemap.xml` - Site structure

**robots.txt example:**
```txt
User-agent: *
Allow: /

Sitemap: https://stickson66.com/sitemap.xml
```

---

## 🧪 Testing Checklist

### Before Deployment
- [ ] `npm run build` succeeds
- [ ] `npm run preview` works locally
- [ ] All routes load correctly
- [ ] Images display properly
- [ ] Animations work smoothly
- [ ] Mobile responsive
- [ ] No console errors

### After Deployment
- [ ] Homepage loads
- [ ] All navigation links work
- [ ] Clean URLs (no #)
- [ ] SSL certificate active
- [ ] Mobile view works
- [ ] Fast loading (<3s)
- [ ] Analytics tracking (if added)

---

## 🐛 Common Issues & Fixes

### Issue: "404 Not Found" on routes
**Fix:** `vercel.json` rewrites all routes to `index.html` ✅ Already configured

### Issue: Images not loading
**Fix:** Check image paths - use `/` for public folder or relative imports

### Issue: Large bundle size
**Fix:** Enable code splitting (already configured in vite.config.ts)

### Issue: Slow build times
**Fix:** 
```bash
# Clear cache
rm -rf node_modules dist .vite
npm install
npm run build
```

### Issue: TypeScript errors on build
**Fix:**
```bash
# Check for errors
npm run lint

# Fix auto-fixable issues
npx eslint . --fix
```

---

## 📈 Monitoring & Analytics

### Recommended Tools

1. **Vercel Analytics** (Built-in)
   - Enable in Vercel dashboard
   - Real-time performance metrics
   - Web vitals tracking

2. **Google Analytics 4**
   - Add tracking ID to env vars
   - Install GA script in index.html

3. **Google Search Console**
   - Verify domain ownership
   - Submit sitemap
   - Monitor SEO performance

4. **Sentry** (Error Tracking)
   - Catch production errors
   - User session replay

---

## 🔄 Continuous Integration

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Vercel
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run build
      - run: npm test # if you add tests
```

---

## 📝 Summary

### Current Status: ✅ Ready to Deploy

**No environment variables required for basic deployment!**

Your app will work immediately after:
1. Pushing to GitHub
2. Importing to Vercel
3. Configuring domain

Everything else (analytics, contact forms, payments) can be added later as needed.

---

**Questions? Check DEPLOYMENT.md for step-by-step instructions!**
