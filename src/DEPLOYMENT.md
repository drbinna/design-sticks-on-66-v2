# Deployment Guide - Sticks on 66

This guide will help you push your code to GitHub and deploy to a custom Namecheap domain.

## Step 1: Push to GitHub

### Option A: Using Command Line (Recommended)

1. **Open your terminal** in the project root directory

2. **Initialize Git repository:**
```bash
git init
```

3. **Add all files to Git:**
```bash
git add .
```

4. **Create your first commit:**
```bash
git commit -m "Initial commit: Sticks on 66 website"
```

5. **Create a new repository on GitHub:**
   - Go to https://github.com/new
   - Repository name: `sticks-on-66`
   - Description: "America's First National Golf Trail - 66 public golf courses along historic Route 66"
   - Keep it **Private** (or Public if you prefer)
   - **DO NOT** initialize with README (we already have one)
   - Click "Create repository"

6. **Connect your local repo to GitHub:**
```bash
# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/sticks-on-66.git

# Or if using SSH:
git remote add origin git@github.com:YOUR-USERNAME/sticks-on-66.git
```

7. **Push your code:**
```bash
git branch -M main
git push -u origin main
```

### Option B: Using GitHub Desktop

1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click "Add an Existing Repository from your Hard Drive"
4. Browse to your project folder
5. Click "Create Repository" (if prompted)
6. Click "Publish Repository" button
7. Enter repository name: `sticks-on-66`
8. Add description and choose public/private
9. Click "Publish Repository"

---

## Step 2: Deploy to Vercel

### Quick Setup (5 minutes)

1. **Sign up for Vercel:**
   - Go to https://vercel.com/signup
   - Sign up with your GitHub account
   - Authorize Vercel to access your repositories

2. **Import your project:**
   - Click "Add New Project"
   - Select `sticks-on-66` from your GitHub repos
   - Click "Import"

3. **Configure project:**
   - Framework Preset: **Vite** (should auto-detect)
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - You'll get a URL like: `sticks-on-66.vercel.app`

---

## Step 3: Connect Namecheap Domain

### In Vercel Dashboard:

1. Go to your project's **Settings** → **Domains**
2. Add your domain (e.g., `stickson66.com`)
3. Also add `www.stickson66.com`
4. Vercel will show you DNS configuration instructions

### In Namecheap:

1. **Log into Namecheap**
2. Go to **Domain List** → Click **Manage** on your domain
3. Go to **Advanced DNS** tab

4. **Add these DNS records:**

**For root domain (stickson66.com):**
```
Type: A Record
Host: @
Value: 76.76.21.21
TTL: Automatic
```

**For www subdomain:**
```
Type: CNAME Record
Host: www
Value: cname.vercel-dns.com
TTL: Automatic
```

5. **Remove conflicting records:**
   - Delete any existing A records pointing to Namecheap parking
   - Delete any conflicting CNAME records

6. **Save changes**

### Verification:

- DNS propagation takes **15 minutes to 48 hours** (usually 1-2 hours)
- Vercel will automatically provision SSL certificate
- Check status in Vercel's Domains settings
- Once verified, your site will be live at your custom domain!

---

## Step 4: Configure Environment (Optional)

If you add Supabase or other services later:

### Create `.env` file locally:
```bash
# Don't commit this file - it's in .gitignore
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Add to Vercel:
1. Project Settings → Environment Variables
2. Add each variable (name and value)
3. Redeploy for changes to take effect

---

## Continuous Deployment

Once connected, every push to GitHub automatically deploys:

```bash
# Make changes to your code
git add .
git commit -m "Update homepage hero section"
git push

# Vercel automatically builds and deploys!
```

---

## Useful Commands

### Update your repository:
```bash
git add .
git commit -m "Your commit message"
git push
```

### Create a new branch:
```bash
git checkout -b feature/new-feature
git push -u origin feature/new-feature
```

### Check repository status:
```bash
git status
git log --oneline
```

---

## Troubleshooting

### Issue: "Permission denied" when pushing

**Solution:** Set up SSH keys or use HTTPS with personal access token
```bash
# Switch to HTTPS
git remote set-url origin https://github.com/YOUR-USERNAME/sticks-on-66.git
```

### Issue: DNS not resolving after 24 hours

**Solution:**
- Check DNS with: https://dnschecker.org
- Verify A record points to: `76.76.21.21`
- Verify CNAME points to: `cname.vercel-dns.com`
- Contact Namecheap support if issues persist

### Issue: Build fails on Vercel

**Solution:**
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`
- Check for TypeScript errors: `npm run lint`

---

## Production Checklist

Before launch:

- [ ] Code pushed to GitHub
- [ ] Deployed to Vercel
- [ ] Custom domain configured
- [ ] SSL certificate active (automatic via Vercel)
- [ ] Test on mobile devices
- [ ] Test all page routes
- [ ] Check performance (Lighthouse score)
- [ ] Analytics setup (Google Analytics, etc.)
- [ ] SEO meta tags configured
- [ ] Favicon and social sharing images added

---

## Support

- **Vercel Docs:** https://vercel.com/docs
- **GitHub Help:** https://docs.github.com
- **Namecheap Support:** https://www.namecheap.com/support/

---

**Ready to launch America's Golf Trail! 🏌️‍♂️🚗**
