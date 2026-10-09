# mictadiello.github.io

Personal site, built with [Astro](https://astro.build).

    npm install
    npm run dev      # http://localhost:4321
    npm run build    # output in dist/

Pushing to `main` deploys via `.github/workflows/deploy.yml`
(repo Settings → Pages → Source must be **GitHub Actions**).

Pages live in `src/pages/`, shared chrome in `src/layouts/Base.astro`,
colours and type in `src/styles/global.css`, translations in `src/scripts/i18n.js`.
