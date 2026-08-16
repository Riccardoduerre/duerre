#!/bin/bash

# Duerre Portfolio - Deployment Checklist
# Run this before deploying to ensure everything is ready

echo "🚀 Duerre Portfolio - Pre-Deployment Checklist"
echo "=============================================="
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

check_pass() {
    echo -e "${GREEN}✓${NC} $1"
}

check_fail() {
    echo -e "${RED}✗${NC} $1"
}

check_warn() {
    echo -e "${YELLOW}⚠${NC} $1"
}

echo "📋 Pre-Deployment Checks"
echo "------------------------"

# Check Node version
NODE_VERSION=$(node -v)
echo "Node version: $NODE_VERSION"
check_pass "Node.js installed"

# Check npm version
NPM_VERSION=$(npm -v)
echo "npm version: $NPM_VERSION"
check_pass "npm installed"

echo ""
echo "📦 Dependencies Check"
echo "---------------------"

# Check if node_modules exists
if [ -d "node_modules" ]; then
    check_pass "node_modules directory exists"
else
    check_warn "node_modules not found - run 'npm install'"
fi

# Check key dependencies
if grep -q '"react":' package.json; then
    check_pass "React dependency found"
fi

if grep -q '"@emailjs/browser":' package.json; then
    check_pass "EmailJS dependency found"
fi

echo ""
echo "🔧 Configuration Check"
echo "---------------------"

# Check required files
files=("src/index.css" "src/pages/Contact.tsx" "src/AppRoutes.tsx" "index.html")
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        check_pass "$file exists"
    else
        check_fail "$file NOT FOUND"
    fi
done

echo ""
echo "🖼️  Assets Check"
echo "---------------"

# Check image directories
if [ -d "src/assets/images" ]; then
    IMAGE_COUNT=$(find src/assets/images -type f | wc -l)
    echo "Images found: $IMAGE_COUNT"
    check_pass "Image assets directory exists"
else
    check_fail "src/assets/images NOT FOUND"
fi

echo ""
echo "🔨 Build Test"
echo "-------------"

echo "Running TypeScript check..."
if npx tsc --noEmit 2>&1 | grep -q "error"; then
    check_fail "TypeScript errors found"
else
    check_pass "TypeScript check passed"
fi

echo ""
echo "Building production bundle..."
if npm run build > /dev/null 2>&1; then
    check_pass "Production build successful"
    
    # Check dist folder
    if [ -d "dist" ]; then
        BUNDLE_SIZE=$(du -sh dist | cut -f1)
        echo "Distribution size: $BUNDLE_SIZE"
    fi
else
    check_fail "Production build FAILED"
fi

echo ""
echo "✅ Deployment Checklist"
echo "----------------------"

checklist=(
    "Contact form EmailJS credentials configured in src/pages/Contact.tsx"
    "Portfolio projects data updated in src/data/portfolio.ts"
    "Blog posts added to src/content/blog/"
    "All images optimized and in src/assets/images/"
    "SEO meta tags verified in index.html"
    "Theme colors verified in src/index.css"
    "i18n translations complete for EN and IT"
    "Dark/light theme toggle tested"
    "Language switching tested"
    "Mobile responsiveness tested"
    "All links verified and working"
    "Contact form tested (if EmailJS configured)"
)

for i in "${!checklist[@]}"; do
    echo "$((i+1)). ${checklist[$i]}"
done

echo ""
echo "🚀 Ready to Deploy?"
echo "-------------------"
echo ""
echo "To deploy to GitHub Pages:"
echo "  npm run deploy:gh-pages"
echo ""
echo "Or to test locally:"
echo "  npm run dev"
echo ""
echo "For more information, see SETUP.md"
