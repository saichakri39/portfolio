# Peddinti Sai Chakri – Portfolio

Built with React, Vite, JavaScript and plain CSS.

## Run locally
```
npm install
npm run dev
```
Build for production: `npm run build`

## Things to update
- `src/data/portfolio.js` holds all the text, projects and links. Add a `github` link to any project when its repository is ready, and fill in `email` if you want it shown.
- Your resume is already in `public/Peddinti-Sai-Chakri-Resume.pdf`. Replace it whenever you update your resume.
- Check the text in the `journey` array so it matches your real timeline.

## Structure
App → Navbar, Hero, About, Education, Skills, Projects (ProjectCard), Internship, LearningJourney, Contact, Footer.
`useState` is used only in Navbar (mobile menu) and Projects (category filter).
