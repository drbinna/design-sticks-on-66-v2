# 🚀 Quick Start - Deploy in 10 Minutes

## Step 1: Push to GitHub (3 minutes)

```bash
# In your terminal, navigate to project folder, then:

git init
git add .
git commit -m "Initial commit: Sticks on 66 website"

# Create new repo at: https://github.com/new
# Name: sticks-on-66

# Then connect and push (replace YOUR-USERNAME):
git remote add origin https://github.com/YOUR-USERNAME/sticks-on-66.git
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel (3 minutes)

1. **Go to:** https://vercel.com/signup
2. **Sign in** with GitHub
3. Click **"Add New Project"**
4. Select **`sticks-on-66`** from your repos
5. Click **"Deploy"** (uses auto-detected settings)

✅ **You'll get a URL:** `sticks-on-66.vercel.app`

---

## Step 3: Connect Your Domain (4 minutes)

### In Vercel:
1. Project Settings → **Domains**
2. Add: `stickson66.com`
3. Add: `www.stickson66.com`

### In Namecheap:
1. **Advanced DNS** tab
2. **Add these records:**

```
Type: A Record
Host: @
Value: 76.76.21.21

Type: CNAME Record  
Host: www
Value: cname.vercel-dns.com
```

3. **Delete** old parking page records
4. **Wait** 1-2 hours for DNS

---

## ✅ That's It!

Your site will be live at your custom domain with:
- ✅ Clean URLs (no #)
- ✅ SSL/HTTPS automatic
- ✅ Auto-deploy on Git push
- ✅ Fast global CDN

---

## 📋 Configuration Summary

### Build Settings (Auto-Detected by Vercel)
- **Framework:** Vite ✅
- **Build Command:** `npm run build` ✅
- **Output Directory:** `dist` ✅
- **Install Command:** `npm install` ✅
- **Node Version:** 18.x ✅

### Environment Variables
**Required:** NONE ✅

Your app is 100% frontend - works immediately!

Optional variables (add later if needed):
- Contact forms
- Analytics
- Payment processing
- Backend APIs

See `BUILD_CONFIG.md` for full list.

---

## 🔄 Future Updates

Make changes and deploy automatically:

```bash
# Edit your code
git add .
git commit -m "Update homepage hero"
git push

# Vercel auto-deploys in ~2 minutes! ✨
```

---

## 📚 Full Documentation

- **Step-by-step guide:** `DEPLOYMENT.md`
- **Build configuration:** `BUILD_CONFIG.md`
- **Project overview:** `README.md`

---

## ❓ Need Help?

**Common Issues:**

- **Routes show 404:** `vercel.json` fixes this ✅ (already configured)
- **DNS not working:** Wait 2-4 hours, check https://dnschecker.org
- **Build fails:** Run `npm install` and `npm run build` locally first

**Resources:**
- Vercel Support: https://vercel.com/support
- GitHub Help: https://docs.github.com
- Namecheap DNS: https://www.namecheap.com/support/knowledgebase/article.aspx/319/2237/

---

**🏌️‍♂️ Ready to launch America's Golf Trail!**
