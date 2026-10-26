# US Capital Lookup

A small web app for finding US state capitals. Type a state name or abbreviation and get its capital, population, area, political leaning, average salary and coordinates. Built with plain HTML, CSS and JavaScript.

## Features

- Search by state name or two-letter abbreviation
- Instant results as you type
- Detail cards for each state: capital, population, area, political leaning, average salary, latitude and longitude
- Custom CSS (no Bootstrap), with animated buttons and cards and a layered gradient background

## Project structure

```
Patriotic-US-capital-lookup/
├── index.html
├── styles.css
├── app.js
├── helpers.js
├── stars.js
├── state_capitals.json
├── LICENSE
└── README.md
```

## Running locally

The app loads `state_capitals.json` with `fetch`, so it must be served over HTTP. Opening `index.html` directly from the file system won't work.

- **VS Code:** install the Live Server extension, then right-click `index.html` and choose **Open with Live Server**.
- **Or with Python:** run `python -m http.server` in the project folder and open `http://localhost:8000`.

## Data sources

The values in `state_capitals.json` (population, area, political leaning, average salary) are **approximate and for demonstration only**. They have not been checked against official sources. For accurate figures, consult:

- Population and area: [US Census Bureau](https://www.census.gov/)
- Average salary: [US Bureau of Labor Statistics](https://www.bls.gov/)

"Political leaning" is a simplification. States can vote differently in presidential, congressional and state elections.

## Credits

Third-party assets are **not** covered by this project's MIT license. They remain under their original licenses.

- **Background photo:** "PHOTO TITLE" by [Ian Tuck](https://unsplash.com/de/@iantuck) on [Unsplash/Pexels](https://unsplash.com/de/fotos/weisses-haus-tYXDQ1G2jiw)
- **Icon:** [Capital City icon](https://icons8.com/icon/aRiu1GGi6Aoe/usa) by [Icons8](https://icons8.com)
- **Icons:** [Font Awesome](https://fontawesome.com) Free, loaded via CDN (see Font Awesome's license for details)

## License

The code in this project is released under the [MIT License](LICENSE).
