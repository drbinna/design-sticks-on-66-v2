# 🚀 Push to GitHub - Step by Step

## Quick Methods

### Option 1: Use Deployment Script (Easiest)

**Mac/Linux:**
```bash
chmod +x deploy.sh
./deploy.sh
```

**Windows:**
```bash
deploy.bat
```

---

### Option 2: Manual Git Commands

Run these commands in your terminal (one at a time):

```bash
# 1. Initialize Git (if not already done)
git init

# 2. Add remote repository
git remote add origin https://github.com/drbinna/design_sticks_on_66.git

# Or if remote already exists, update it:
git remote set-url origin https://github.com/drbinna/design_sticks_on_66.git

# 3. Create/switch to main branch
git checkout -b main

# 4. Stage all files
git add .

# 5. Commit changes
git commit -m "Production deployment: Fixed routing and added build configuration"

# 6. Push to GitHub
git push -u origin main
```

---

## First Time Setup

If this is your first time using Git on this computer:

```bash
# Set your name
git config --global user.name "Your Name"

# Set your email (use GitHub email)
git config --global user.email "your-email@example.com"

# Store credentials (optional, for convenience)
git config --global credential.helper store
```

---

## Authentication

### If Git asks for credentials:

**Username:** Your GitHub username (e.g., `drbinna`)

**Password:** 
- ⚠️ Do NOT use your GitHub password!
- Use a **Personal Access Token** instead

### Create a Personal Access Token:

1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. Give it a name: `Sticks on 66 Deployment`
4. Select scopes: 
   - ✅ **repo** (full control of private repositories)
5. Click **"Generate token"**
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when Git prompts

---

## Verify Push Success

After pushing, verify at:
https://github.com/drbinna/design_sticks_on_66

You should see:
- ✅ All your files
- ✅ Latest commit message
- ✅ Updated "last commit" timestamp

---

## What Gets Pushed?

### ✅ Included (all source code):
- All `.tsx` files (React components)
- All `.ts` files (TypeScript)
- Configuration files (package.json, tsconfig.json, etc.)
- Documentation (*.md files)
- Public assets (robots.txt, sitemap.xml, etc.)

### ⛔ Excluded (in .gitignore):
- `node_modules/` - Dependencies (too large)
- `dist/` - Build output (regenerated on deploy)
- `.env` - Secrets (never commit!)
- `.vite/` - Cache files
- Editor files (`.vscode/`, `.idea/`)

---

## Troubleshooting

### ❌ "fatal: remote origin already exists"

**Fix:**
```bash
git remote set-url origin https://github.com/drbinna/design_sticks_on_66.git
```

### ❌ "error: src refspec main does not match any"

**Fix:**
```bash
git checkout -b main
git add .
git commit -m "Initial commit"
git push -u origin main
```

### ❌ "error: failed to push some refs"

**Fix (if remote has different history):**
```bash
git pull origin main --allow-unrelated-histories
git push -u origin main
```

**Or force push (careful - overwrites remote):**
```bash
git push -u origin main --force
```

### ❌ "Permission denied (publickey)"

**Fix - Use HTTPS instead of SSH:**
```bash
git remote set-url origin https://github.com/drbinna/design_sticks_on_66.git
```

### ❌ "Support for password authentication was removed"

**Fix - Use Personal Access Token:**
- See "Authentication" section above
- Create a token at: https://github.com/settings/tokens
- Use token instead of password

---

## After Successful Push

### 1. Verify on GitHub
Visit: https://github.com/drbinna/design_sticks_on_66

### 2. Deploy to Vercel

**Option A - Vercel Dashboard:**
1. Go to: https://vercel.com/new
2. Import repository: `drbinna/design_sticks_on_66`
3. Click "Deploy"
4. Done! Gets URL like: `design-sticks-on-66.vercel.app`

**Option B - Vercel CLI:**
```bash
npm i -g vercel
vercel
```

### 3. Connect Custom Domain

**In Vercel:**
- Project Settings → Domains
- Add: `stickson66.com`
- Add: `www.stickson66.com`

**In Namecheap:**
- Advanced DNS
- Add A Record: `@` → `76.76.21.21`
- Add CNAME Record: `www` → `cname.vercel-dns.com`

See `DEPLOYMENT.md` for detailed instructions.

---

## Future Updates

After initial push, updating is easy:

```bash
# Make changes to your code
# Then:

git add .
git commit -m "Describe your changes"
git push

# Vercel auto-deploys in ~2 minutes!
```

---

## Summary of Files Changed

This deployment includes:

### 🆕 New Configuration Files:
- `index.html` - Entry point
- `src/main.tsx` - React entry
- `vite.config.ts` - Build config
- `tsconfig.json` - TypeScript config
- `vercel.json` - SPA routing
- `.gitignore` - Git ignore rules
- `.env.example` - Env template
- `public/robots.txt` - SEO
- `public/sitemap.xml` - SEO

### 🔄 Updated Files:
- `App.tsx` - Fixed routing (HashRouter → BrowserRouter, added catch-all)
- `package.json` - Added react-router-dom, @types/node
- `.env.example` - Manually edited by user

### 📚 New Documentation:
- `BUILD_CONFIG.md` - Build configuration guide
- `DEPLOYMENT_SUMMARY.md` - Config overview
- `QUICK_START.md` - 10-minute deploy guide
- `PUSH_TO_GITHUB.md` - This file
- `deploy.sh` - Auto-deploy script (Unix)
- `deploy.bat` - Auto-deploy script (Windows)

---

## Need Help?

- **Git Help:** https://git-scm.com/doc
- **GitHub Help:** https://docs.github.com
- **Vercel Help:** https://vercel.com/docs

---

**🏌️‍♂️ Ready to launch America's Golf Trail!**
