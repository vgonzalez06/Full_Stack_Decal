# Content guide

All the site content was filled in from Viktor's resume on Oct 14, 2026. There are no placeholders left. This guide covers what came from where, what's worth personalizing later, how to swap images, and the requirements checklist for checkoff.

## 1. Where the content came from

| Page | Section | Source |
|---|---|---|
| All pages | Name, footer links | Resume header (email, LinkedIn) and the GitHub account `vgonzalez06` from this repo |
| `index.html` | Intro, tagline, bio | Resume: education, experience summary, outside interests |
| `index.html` | Interests | Resume: coursework, experience and projects |
| `index.html` | Hobbies | Resume "Outside Interests": rock climbing, salsa dancing, biking (table tennis is mentioned in the bio) |
| `projects.html` | Projects 1–2 | Resume "Projects" section |
| `projects.html` | Project 3 | This website |
| `resume.html` | Education, experience, skills | Resume, lightly reworded for the web |
| `assets/resume.pdf` | Download | Copy of the resume with the **phone number removed** (the repo is public), and the blank second page dropped |

The phone number isn't anywhere on the site.

## 2. Worth personalizing later (optional)

These were written in a general way because the resume doesn't cover them. Edit them anytime:

- **Career goals** (`index.html`, "Where I'm headed" box, line 80): inferred from the resume. Make sure it matches what you actually want.
- **Hobby descriptions** (`index.html`, lines 99, 106, 113): general descriptions of each activity. Adding a personal detail (where you climb, how long you've danced) makes them stronger.
- **Project links** (`projects.html`): projects 1 and 2 have no links because their repos aren't known. If you publish them, add a link where each card says `<!-- Add GitHub or demo links here ... -->`, copying the `<p class="card-links">` block from project 3.
- **Project 3's GitHub link** points to `github.com/vgonzalez06/Full_Stack_Decal/tree/main/personal-website`. It only works after you push.

## 3. Images

All 7 images are illustrations in `images/`, made to match the site's colors. Swap in real photos whenever you like.

| File | Appears on | Line | Recommended aspect ratio |
|---|---|---|---|
| `profile.svg` (VG monogram) | index.html, intro | 51 | 4:5 portrait (e.g. 800 × 1000) |
| `hobby-1.svg` (climbing wall) | index.html, hobby card 1 | 96 | 4:3 landscape (e.g. 800 × 600) |
| `hobby-2.svg` (salsa) | index.html, hobby card 2 | 103 | 4:3 landscape |
| `hobby-3.svg` (bicycle) | index.html, hobby card 3 | 110 | 4:3 landscape |
| `project-1.svg` (candlestick chart) | projects.html, project 1 | 48 | 16:10 landscape (e.g. 1200 × 750) |
| `project-2.svg` (QB regression plot) | projects.html, project 2 | 64 | 16:10 landscape |
| `project-3.svg` (this website) | projects.html, project 3 | 80 | 16:10 landscape |

**To swap in your own photo** (using the profile photo as the example):

1. Put the photo in `images/`, e.g. `images/profile.jpg`.
2. In `index.html` line 51, change `src="images/profile.svg"` to `src="images/profile.jpg"`.
3. Update the `alt` text on the same line to describe the photo, e.g. "Viktor smiling on campus".
4. Optionally update `width` and `height` on that line to the photo's real size. The CSS crops card photos to fill their box, so a photo that isn't exactly the recommended shape still looks fine.
5. Delete the old `.svg` once nothing uses it.

Keep file names lowercase with no spaces, and keep each photo under ~500 KB.

> **Keep at least 5 images on the site.** The course requires 5, and the site has 7.

## 4. Resume PDF

The "Download resume (PDF)" button (`resume.html` line 42) links to `assets/resume.pdf`. To update it, export a new PDF and save it over that file. Leave your phone number off if the repo stays public.

## 5. Requirements checklist (for checkoff)

### HTML (40%)

| Requirement | Where it's met |
|---|---|
| Introduction section | `index.html`, intro (`<section class="hero">`, line 37) |
| Hobbies section | `index.html`, Hobbies (`<section id="hobbies">`, line 88) |
| Projects section | `projects.html`, project list (`<section>`, line 44) |
| At least 2 linked pages | 3 pages: `index.html`, `projects.html`, `resume.html`. Shared nav at line 24 of each, plus the buttons in the home intro |
| At least 5 images | 7 total: profile + 3 hobby images (`index.html`), 3 project images (`projects.html`) |
| A basic form | `index.html`, Contact (`<form id="contact-form">`, line 130): name, email and message, each with a `<label>` and `required`; email uses `type="email"` |
| Bulleted list with `<ul>`/`<li>` | `index.html` interests (line 72), `resume.html` experience bullets (lines 70, 80, 90, 100) and skills (lines 117–161), project tags, nav, footer |
| Semantic tags for structure | Every page: `<header>` (21), `<nav>` (24), `<main>` (35), `<section>`s, `<footer>`. Also `<article>` cards, `<figure>`, `<aside>`, and `<h1>`–`<h3>` / `<p>` |
| Meta tags + unique title | Lines 4–8 of every page: `charset`, `viewport`, `description`, `author`, and a different `<title>` per page |

### CSS (30%)

| Requirement | Where it's met |
|---|---|
| Polished, consistent look across pages | One shared `css/style.css` linked from all 3 pages: same header, footer, buttons, cards and colors |
| (Extras) | Light/dark color variables, responsive grid/flexbox down to phone width, hover/focus states |

### JavaScript (10%)

| Requirement | Where it's met |
|---|---|
| At least one working feature | `js/main.js`: **theme toggle** (`initThemeToggle`, button in every nav) and **contact form validation** (`initContactForm`, `index.html`) |
