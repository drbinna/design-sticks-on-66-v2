#!/bin/bash

# Sticks on 66 - Git Deployment Script
# This script will push your changes to GitHub

echo "🏌️ Sticks on 66 - Deployment Script"
echo "======================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    echo "✅ Git initialized"
    echo ""
fi

# Check current git remote
CURRENT_REMOTE=$(git remote get-url origin 2>/dev/null)

if [ -z "$CURRENT_REMOTE" ]; then
    echo "🔗 Adding remote repository..."
    git remote add origin https://github.com/drbinna/design_sticks_on_66.git
    echo "✅ Remote added: https://github.com/drbinna/design_sticks_on_66.git"
    echo ""
elif [ "$CURRENT_REMOTE" != "https://github.com/drbinna/design_sticks_on_66.git" ]; then
    echo "⚠️  Current remote: $CURRENT_REMOTE"
    echo "🔗 Updating remote to: https://github.com/drbinna/design_sticks_on_66.git"
    git remote set-url origin https://github.com/drbinna/design_sticks_on_66.git
    echo "✅ Remote updated"
    echo ""
else
    echo "✅ Remote already configured correctly"
    echo ""
fi

# Check current branch
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD 2>/dev/null)

if [ -z "$CURRENT_BRANCH" ]; then
    echo "🌿 Creating main branch..."
    git checkout -b main
    echo "✅ Main branch created"
    echo ""
elif [ "$CURRENT_BRANCH" != "main" ]; then
    echo "🌿 Switching to main branch..."
    git checkout -b main 2>/dev/null || git checkout main
    echo "✅ On main branch"
    echo ""
fi

# Show status
echo "📊 Current status:"
git status --short
echo ""

# Stage all changes
echo "📝 Staging all changes..."
git add .
echo "✅ Changes staged"
echo ""

# Commit with message
COMMIT_MSG="Production deployment: Fixed routing and added build configuration"
echo "💾 Committing changes..."
echo "   Message: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"
echo "✅ Changes committed"
echo ""

# Push to remote
echo "🚀 Pushing to GitHub..."
echo "   Repository: https://github.com/drbinna/design_sticks_on_66.git"
echo "   Branch: main"
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo ""
    echo "🎉 Next steps:"
    echo "   1. Visit: https://github.com/drbinna/design_sticks_on_66"
    echo "   2. Verify your files are uploaded"
    echo "   3. Deploy to Vercel: https://vercel.com/new"
    echo ""
    echo "📚 Documentation:"
    echo "   • QUICK_START.md - 10-minute deployment guide"
    echo "   • DEPLOYMENT.md - Full deployment instructions"
    echo "   • BUILD_CONFIG.md - Build configuration details"
    echo ""
else
    echo ""
    echo "❌ Push failed. Common issues:"
    echo "   1. Not authenticated - run: git config --global credential.helper store"
    echo "   2. No permission - check you have write access to the repo"
    echo "   3. Network issue - check your internet connection"
    echo ""
    echo "Manual push command:"
    echo "   git push -u origin main"
    echo ""
fi
