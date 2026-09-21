# An Le – portfolio (React, TypeScript, Tailwind CSS)

A single-page portfolio built with Vite, React 19, TypeScript and Tailwind CSS 4. It builds to plain static files, so any static host can serve it.

## Run it

You need Node.js 20 or newer.

```bash
npm install
npm run dev        # local site with hot reload, at http://localhost:5173
npm run build      # type-checks, then writes the site to dist/
npm run preview    # serves the built site locally
```

## Where things are

```
src/data/content.ts      all the words: projects, experience, education, skills
src/data/types.ts        the shapes of that data
src/components/          Header, Hero, Ticker, Projects, Timeline, Skills, Contact, Art
src/hooks/               scroll reveal and the nav highlight
src/index.css            Tailwind theme: colours, fonts and animations
```

To change text, edit `src/data/content.ts`. To change the colours, edit the `--color-*` lines at the top of `src/index.css`. The accent colour is `--color-accent`.

## Deploy (all free)

**Vercel**
1. Put this folder in a GitHub repository.
2. On vercel.com choose Add New, then Project, and import the repository.
3. It detects Vite on its own. Select Deploy.

**Netlify**
1. Put the folder in a GitHub repository, then choose Add new site, then Import an existing project.
2. Set the build command to `npm run build` and the publish directory to `dist`.
3. Or run `npm run build` and drag the `dist` folder onto app.netlify.com/drop.

**GitHub Pages**
1. In `vite.config.ts`, set `base: '/YOUR-REPOSITORY/'`.
2. Run `npm run build`, then publish the contents of `dist` (for example with the `gh-pages` package, or a GitHub Actions workflow).

Once it's live, put the link in your CV header and cover letter.

## Things to fill in

- **Repo links:** in `content.ts`, remove the `//` before `repo:` on the Meal Tracker and Personal Finance Manager projects and add the real addresses.
- **Restaurant placement:** copy one entry in the `experience` list and change the text and dates.
- **LinkedIn:** add a link in `src/components/Contact.tsx`, next to the GitHub button.
- **Photo:** put `photo.jpg` in `public/` and add `<img src="/photo.jpg" alt="An Le" width="160" height="160" />` in `Hero.tsx`.
- **Real screenshots:** the project cards use small drawings. In `Projects.tsx`, replace `<Art kind={project.art} />` with an `<img>` of a screenshot.
- **Contact form:** it opens the visitor's email app with the message filled in. To receive messages without that, create a free form at formspree.io and post the form to it.
- **Work-permit line:** it's in the `checks` list in `content.ts`. Delete it if you'd rather not show it publicly.
# portfolio
