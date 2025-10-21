# HNGi13 Frontend Stage 0 & 1 - Profile Card with Contact & About Pages

A modern, accessible, and responsive multi-page web application built with semantic HTML, vanilla CSS, and JavaScript. This project showcases a profile card (Stage 0), a contact form with validation (Stage 1), and a reflective About Me page (Stage 1).

## 🌐 Live Demo

**[View Live Demo](https://www.profile-card-r2.netlify.app)** 

## 📋 Features

### Stage 0 - Profile Card
- **Semantic HTML** - Uses proper HTML5 semantic tags (article, figure, section, nav, etc.)
- **Fully Accessible** - WCAG compliant with proper ARIA labels, alt text, and keyboard navigation
- **Responsive Design** - Mobile-first approach, optimized for mobile, tablet, and desktop screens
- **Modern Styling** - Gradient backgrounds, smooth transitions, and hover effects
- **Test-Ready** - All elements include `data-testid` attributes for automated testing
- **Real-time Clock** - Displays current time in milliseconds

### Stage 1 - Contact Us & About Me Pages
- **Validated Contact Form** - Client-side validation with accessible error messages
- **Reflective About Page** - Personal goals, confidence areas, and future notes
- **Form Accessibility** - Proper labels, ARIA associations, and keyboard navigation
- **Success Feedback** - Clear confirmation messages on form submission
- **Consistent Design** - Maintains visual coherence across all pages

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, gradients, media queries
- **Vanilla JavaScript** - Form validation and DOM manipulation
- **No frameworks or dependencies**

## 📁 Project Structure

```
hngi13-frontend/
├── index.html              # Profile Card (Stage 0)
├── contact.html            # Contact Us Page (Stage 1)
├── about.html              # About Me Page (Stage 1)
├── styles.css              # Global stylesheet
├── index.js                # Profile card logic
├── contact.js              # Form validation logic
├── avatar.png              # Profile avatar image
├── twitter-icon.svg        # Social media icons
├── linkedin-icon.svg
├── github-icon.svg
├── favicon.ico             # Favicon
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation & Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/trenchesprogrammer/hngi13-frontend.git
   cd hngi13-frontend
   ```

2. **Open in your browser**
   - **Option A:** Double-click `index.html` to open directly
   - **Option B:** Use a local server (recommended)
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Navigate to `http://localhost:8000`

## 📄 Pages Overview

### 1. Profile Card (index.html)
Your main landing page featuring:
- Profile avatar with hover effects
- Name and bio
- Real-time clock in milliseconds
- Social media links (Twitter, LinkedIn, GitHub)
- Hobbies and dislikes sections

### 2. Contact Us (contact.html)
A fully validated contact form with:
- Full name field (required)
- Email field (required, email validation)
- Subject field (required)
- Message field (required, minimum 10 characters)
- Real-time validation feedback
- Success confirmation message

### 3. About Me (about.html)
A reflective page containing:
- Personal bio
- Goals in the HNG program
- Areas of low confidence
- Note to future self
- Extra thoughts and reflections

## ✅ Stage 0 Requirements Checklist

- [x] Profile card root container (`test-profile-card`)
- [x] User name element (`test-user-name`)
- [x] Bio paragraph (`test-user-bio`)
- [x] Current time in milliseconds (`test-user-time`)
- [x] Avatar image with alt text (`test-user-avatar`)
- [x] Social links list (`test-user-social-links`)
- [x] Individual social link testids (`test-user-social-twitter`, `test-user-social-linkedin`, `test-user-social-github`)
- [x] Hobbies list (`test-user-hobbies`)
- [x] Dislikes list (`test-user-dislikes`)
- [x] Semantic HTML tags
- [x] Responsive design (mobile/tablet/desktop)
- [x] Keyboard navigation support
- [x] Visible focus indicators

## ✅ Stage 1 Requirements Checklist

### Contact Us Page
- [x] Full name field (`test-contact-name`)
- [x] Email field (`test-contact-email`)
- [x] Subject field (`test-contact-subject`)
- [x] Message field (`test-contact-message`)
- [x] Submit button (`test-contact-submit`)
- [x] Error messages (`test-contact-error-name`, `test-contact-error-email`, etc.)
- [x] Success message (`test-contact-success`)
- [x] All fields have proper `<label>` elements
- [x] Error messages linked with `aria-describedby`
- [x] Email validation (name@example.com format)
- [x] Message minimum 10 characters validation
- [x] Keyboard accessible form

### About Me Page
- [x] Main container (`test-about-page`)
- [x] Bio section (`test-about-bio`)
- [x] Goals section (`test-about-goals`)
- [x] Low confidence areas (`test-about-confidence`)
- [x] Future note section (`test-about-future-note`)
- [x] Extra thoughts section (`test-about-extra`)
- [x] Semantic HTML structure (main, section, h2, h3)
- [x] Proper heading hierarchy

## ♿ Accessibility Features

✓ Semantic HTML structure throughout all pages  
✓ Descriptive alt text for all images  
✓ Keyboard-navigable forms and links with visible focus states  
✓ Proper heading hierarchy (h1 → h3)  
✓ Form labels linked with `for` attribute  
✓ ARIA attributes for error messages (`aria-describedby`, `aria-invalid`)  
✓ Color contrast meets WCAG AA standards  
✓ All interactive elements are keyboard accessible  
✓ `rel="noopener noreferrer"` on external links  

## 📱 Responsive Breakpoints

- **Mobile**: < 520px - Stacked vertical layout
- **Tablet**: 521px - 768px - Optimized layout
- **Desktop**: > 768px - Full-width layout with side-by-side sections

## 🧪 Testing

All elements include `data-testid` attributes for automated testing:

### Profile Card Tests
```javascript
const profileCard = document.querySelector('[data-testid="test-profile-card"]');
const userName = document.querySelector('[data-testid="test-user-name"]');
const userBio = document.querySelector('[data-testid="test-user-bio"]');
const currentTime = document.querySelector('[data-testid="test-user-time"]');
const avatar = document.querySelector('[data-testid="test-user-avatar"]');
const socialLinks = document.querySelector('[data-testid="test-user-social-links"]');
const hobbies = document.querySelector('[data-testid="test-user-hobbies"]');
const dislikes = document.querySelector('[data-testid="test-user-dislikes"]');
```

### Contact Form Tests
```javascript
const contactName = document.querySelector('[data-testid="test-contact-name"]');
const contactEmail = document.querySelector('[data-testid="test-contact-email"]');
const contactSubject = document.querySelector('[data-testid="test-contact-subject"]');
const contactMessage = document.querySelector('[data-testid="test-contact-message"]');
const contactSubmit = document.querySelector('[data-testid="test-contact-submit"]');
const contactSuccess = document.querySelector('[data-testid="test-contact-success"]');
```

### About Page Tests
```javascript
const aboutPage = document.querySelector('[data-testid="test-about-page"]');
const aboutBio = document.querySelector('[data-testid="test-about-bio"]');
const aboutGoals = document.querySelector('[data-testid="test-about-goals"]');
const aboutConfidence = document.querySelector('[data-testid="test-about-confidence"]');
const aboutFutureNote = document.querySelector('[data-testid="test-about-future-note"]');
const aboutExtra = document.querySelector('[data-testid="test-about-extra"]');
```

## 🌐 Deployment

### Deploy to Netlify (Recommended)

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Leave build settings empty (static site)
6. Click "Deploy"
7. Your site will be live at `https://your-site-name.netlify.app`

### Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "main" branch as source
4. Select root folder
5. Click Save
6. Your site will be live at `https://your-username.github.io/hngi13-frontend`

### Deploy to Vercel

1. Go to [Vercel](https://vercel.com)
2. Import your GitHub repository
3. Click "Deploy"
4. Your site will be live at `https://your-project.vercel.app`

## 🎯 HNG Internship

This project was built as part of the [HNG Internship](https://hng.tech/internship) program - Stage 0 and Stage 1 tasks.

**Learn more:**
- [HNG Internship](https://hng.tech/internship)
- [Hire HNG Developers](https://hng.tech/hire)

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ajadi Ireanuoluwa**  
Frontend Developer | Blockchain Enthusiast

- Twitter: [@herit_ge](https://x.com/herit_ge)
- LinkedIn: [Ireanuoluwa Heritage](https://www.linkedin.com/in/ireanuoluwa-heritage-b250331b6/)
- GitHub: [@trenchesprogrammer](https://github.com/trenchesprogrammer)

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs via GitHub Issues
- Submit pull requests with improvements
- Suggest new features

## 📞 Support

Have questions? Create an issue in the repository or reach out on social media.
