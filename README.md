# Profile Card Component

A modern, accessible, and responsive profile card built with semantic HTML, vanilla CSS, and JavaScript. This component showcases a user profile with avatar, bio, social links, hobbies, and dislikes.

## 🌐 Live Demo

**[View Live Demo](#)** *(Add your deployed URL here)*

## 📋 Features

- **Semantic HTML** - Uses proper HTML5 semantic tags (article, figure, section, nav, etc.)
- **Fully Accessible** - WCAG compliant with proper ARIA labels, alt text, and keyboard navigation
- **Responsive Design** - Mobile-first approach, optimized for mobile, tablet, and desktop screens
- **Modern Styling** - Gradient backgrounds, smooth transitions, and hover effects
- **Test-Ready** - All elements include `data-testid` attributes for automated testing
- **Keyboard Navigation** - Full focus management with visible focus indicators

## 🛠️ Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Flexbox, gradients, media queries
- **Vanilla JavaScript** - No frameworks or dependencies

## 📁 Project Structure

```
stage-0/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── index.js            # JavaScript logic
├── avatar.png          # Profile avatar image
├── twitter-icon.svg    # Social media icons
├── linkedin-icon.svg
├── github-icon.svg
├── favicon.ico         # Favicon
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation & Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/profile-card.git
   cd profile-card
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

## 📝 Customization

### Update Profile Information

Edit `index.html` to customize:

```html
<h2 data-testid="test-user-name">Your Name</h2>
<h3>Your Title</h3>
<p data-testid="test-user-bio">Your bio here...</p>
```

### Add/Edit Hobbies and Dislikes

```html
<ul data-testid="test-user-hobbies">
  <li>Your Hobby 1</li>
  <li>Your Hobby 2</li>
  <li>Your Hobby 3</li>
</ul>
```

### Update Social Links

```html
<li data-testid="test-user-social-twitter">
  <a rel="noopener noreferrer" target="_blank" href="your-link">
    <img class="icon" src="./twitter-icon.svg" alt="twitter-icon" />
  </a>
</li>
```

### Modify Styling

All styles are in `styles.css`. Key customization points:

- **Colors**: Update gradient colors in `.main` and `.hobbies` classes
- **Avatar Size**: Adjust `.image-bg` height/width
- **Card Width**: Modify `.main` width property
- **Breakpoints**: Update media query at `520px` for different screen sizes

## ♿ Accessibility Features

✓ Semantic HTML structure  
✓ Descriptive alt text for images  
✓ Keyboard-navigable links with visible focus states  
✓ Proper heading hierarchy (h1 → h3)  
✓ Color contrast meets WCAG AA standards  
✓ All interactive elements are keyboard accessible  
✓ `rel="noopener noreferrer"` on external links  

## ✅ Requirements Checklist

- [x] Profile card root container (`test-profile-card`)
- [x] User name element (`test-user-name`)
- [x] Bio paragraph (`test-user-bio`)
- [x] Current time in milliseconds (`test-user-time`)
- [x] Avatar image with alt text (`test-user-avatar`)
- [x] Social links list (`test-user-social-links`)
- [x] Individual social link testids (`test-user-social-*`)
- [x] Hobbies list (`test-user-hobbies`)
- [x] Dislikes list (`test-user-dislikes`)
- [x] Semantic HTML tags
- [x] Responsive design (mobile/tablet/desktop)
- [x] Keyboard navigation support
- [x] Visible focus indicators

## 📱 Responsive Breakpoints

- **Mobile**: < 520px - Stacked vertical layout
- **Tablet/Desktop**: ≥ 520px - Side-by-side layout with avatar on left

## 🧪 Testing

All elements include `data-testid` attributes for automated testing:

```javascript
// Example test queries
const profileCard = document.querySelector('[data-testid="test-profile-card"]');
const userName = document.querySelector('[data-testid="test-user-name"]');
const userBio = document.querySelector('[data-testid="test-user-bio"]');
const currentTime = document.querySelector('[data-testid="test-user-time"]');
const avatar = document.querySelector('[data-testid="test-user-avatar"]');
const socialLinks = document.querySelector('[data-testid="test-user-social-links"]');
const hobbies = document.querySelector('[data-testid="test-user-hobbies"]');
const dislikes = document.querySelector('[data-testid="test-user-dislikes"]');
```

## 🌐 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Click "Deploy"

### Deploy to GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select "main" branch as source
4. Your site will be live at `https://your-username.github.io/profile-card`

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

---

**Happy coding! 🚀**