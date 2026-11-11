# onkesipuka.co.za

Personal site of Onke Sipuka. Vue 3 + Vite, hosted on Netlify.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
```

All copy (work history, projects, links) lives in `src/content.js`. Layout is in `src/App.vue`,
styles in `src/style.css`. Build settings are in `netlify.toml`.

## Deploying

| Command                  | Where it goes                                                   |
| ------------------------ | --------------------------------------------------------------- |
| merge to `main`          | **Live site** (onkesipuka.co.za), deployed by Netlify from git  |
| `npm run deploy:preview` | **onke-preview.netlify.app**, whatever you have checked out     |
| `npm run deploy:draft`   | A throwaway draft URL on the live site's project; live untouched |

The deploy scripts use the Netlify CLI through `npx`. Run `npx netlify-cli login` once first.
Both build locally with the settings in `netlify.toml`, then upload `dist/`.
