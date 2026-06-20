# Premium Developer Portfolio | Bogala Akhilash Reddy

A world-class, premium, highly animated personal portfolio website built for **Bogala Akhilash Reddy** using a modern glassmorphic theme with a neon green glow. The website features dark/light mode toggles, interactive animations, custom cursor effects, and dynamic GitHub integration. Ready to deploy directly to Vercel.

---

## 🚀 Features

*   **Premium Visual Design**: High-end glassmorphic components, dark/light theme options, neon-green glows, and smooth transitions inspired by Apple, Stripe, and Vercel.
*   **Highly Animated Interaction**:
    *   Sleek loader with neon letter animations.
    *   Floating interactive technology cards.
    *   Particles network background (`particles.js`).
    *   Typed dynamic subtitle effect (`Typed.js`).
    *   Smooth entry fades, slide-ups, and triggers (`GSAP` + `ScrollTrigger` + `AOS`).
    *   Scroll progress indicator at the header.
    *   Dynamic back-to-top button with circular scroll progress ring.
*   **Dynamic GitHub Stats**: Integrates with the GitHub API to showcase user avatar, follow counts, repo counts, and featured repository cards along with a custom contribution heatmap grid.
*   **Formspree Form Integration**: Fully functional contact form with client-side status handling.
*   **Recruiter-friendly Layout**: Clean information hierarchy displaying certifications, timeline, education, and achievements.
*   **Perfect SEO & Speed**: Semantic markup, open graph details, and lightweight layout for fast loading times.

---

## 🛠️ Tech Stack & Dependencies

*   **Markup**: HTML5 (Semantic Structure)
*   **Styling**: CSS3 (Responsive CSS Grid & Flexbox, Custom CSS variables, Glassmorphism, Conic Gradients)
*   **Logic**: Vanilla ES6 JavaScript
*   **Libraries (Loaded via CDN)**:
    *   `GSAP` + `ScrollTrigger` (Custom counters, timeline reveals, scroll triggers)
    *   `Typed.js` (Hero subtitle rotation)
    *   `Particles.js` (Interlocking node network)
    *   `AOS (Animate On Scroll)` (Scroll reveals)
    *   `Font Awesome` (Icons)
    *   `Outfit` & `Inter` Google Fonts

---

## 📁 File Structure

```text
portfolio/
│
├── index.html       # Primary HTML file with layout, semantic tags, SEO markup
├── style.css        # Core styling containing tokens, light/dark themes, components
├── script.js        # Site logic, GSAP settings, particles config, GitHub AJAX API
│
├── assets/
│   ├── profile.jpg  # Generated professional profile image
│   ├── resume.pdf   # Minimalist valid PDF file placeholder
│   ├── favicon.png  # Website favicon logo
│
├── vercel.json      # Vercel deployment configuration
│
└── README.md        # Documentation and deployment guide
```

---

## ⚙️ Customization

### 1. Formspree Endpoint
The form is currently preconfigured to send messages. You can replace the Formspree URL inside `index.html` on **Line 466** with your own unique Formspree key:
```html
<form id="contact-form" action="https://formspree.io/f/YOUR-FORMSPREE-ID" method="POST" ...>
```

### 2. Resume & Profile Image
*   **Profile Image**: To swap the profile picture, replace the file at `./assets/profile.jpg` with your own image.
*   **Resume**: Replace the PDF file at `./assets/resume.pdf` with your actual CV.

### 3. GitHub Username
To link your own GitHub repository details, change the variable at the top of the GitHub section in `./script.js` on **Line 333**:
```javascript
const githubUser = 'YOUR-GITHUB-USERNAME';
```

---

## ☁️ Deployment on Vercel

### Option 1: Vercel CLI (Quickest)
Inside the root directory of the project, run:
```bash
npm i -g vercel
vercel
```
Follow the interactive CLI prompts to select your workspace, confirm deployment, and take the portfolio live!

### Option 2: Push to Git (GitHub/GitLab/Bitbucket)
1. Initialize git and push to a remote repository:
   ```bash
   git init
   git add .
   git commit -m "Initial Portfolio Commit"
   git branch -M main
   git remote add origin YOUR_REPOSITORY_URL
   git push -u origin main
   ```
2. Log in to your [Vercel Dashboard](https://vercel.com).
3. Click **Add New** -> **Project**.
4. Import your repository.
5. Click **Deploy**. Vercel will automatically link your project, deploy it, and trigger a rebuild every time you push to the `main` branch.

---

## 📝 License
Built for Bogala Akhilash Reddy. Optimized for speed and design excellence. Feel free to adapt for personal use!
