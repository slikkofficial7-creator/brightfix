# BrightFix Electrical Services Website — Part 3

## Project overview

BrightFix Electrical Services is a fictional electrical-services business created for the WED505 website project. The website contains five connected pages: Home, About Us, Services, Enquiry and Contact. The implementation uses semantic HTML, a shared external CSS file and vanilla JavaScript. The README provides setup and usage information in line with GitHub’s guidance for repository documentation (GitHub Docs, n.d.-a).

## How to run the website

1. Extract the ZIP file to a folder on your computer.
2. Open the extracted `BrightFix_Part3_Improved` folder in Visual Studio Code.
3. Check that `css/style.css`, `js/script.js` and the files inside `images/` are present.
4. Open `index.html` with Live Server or another local web server. A local server is recommended for testing the map and scripts.
5. Navigate through all five pages and test the items listed below.

The site uses the Leaflet library and OpenStreetMap map tiles from online URLs. An internet connection is required for the map (Leaflet, n.d.). OpenStreetMap attribution is included and its tile usage policy should be followed (OpenStreetMap Foundation, n.d.). The project does not include a backend. The enquiry and contact forms perform browser-side validation only and do not send or store messages.

## Functionality implemented for Part 3

- **Accordion:** The home page includes an accessible FAQ accordion. Buttons update `aria-expanded` and show or hide the relevant answer.
- **Service cards:** `js/script.js` dynamically renders the service cards from a JavaScript data array.
- **Search, filter and sort:** The Services page filters services by search term and category and sorts names A–Z or Z–A.
- **Image lightbox:** Select a gallery thumbnail to open a larger image in a native HTML dialog. The dialog can be closed with the Close control or Escape.
- **Interactive map:** The Contact page uses Leaflet to show approximate city-centre markers for Johannesburg and Pretoria (Leaflet, n.d.). These are not confirmed business addresses and must be replaced with verified locations before publication. OpenStreetMap attribution is displayed and its tile usage policy must be followed (OpenStreetMap Foundation, n.d.).
- **Form validation:** The Enquiry and Contact forms use required fields, input types, length constraints and JavaScript validation for telephone numbers. Client-side validation provides immediate feedback but must be supplemented by server-side checks on a live system (MDN Web Docs, n.d.-a). A message explains that the forms are demo-only.
- **CSS transitions:** Link, button and image hover states use subtle transitions. Reduced-motion settings are respected (MDN Web Docs, n.d.-c).
- **SEO basics:** Each page has a unique descriptive title, meta description, semantic headings, descriptive links and useful image alternative text. Clear, page-specific titles and descriptions help describe page content in search results, but they do not guarantee search ranking (Google Search Central, n.d.).
- **Responsive design:** Breakpoints adjust the hero layout, card grids, navigation, form fields, typography and gallery for tablet and phone widths. Media queries are used to apply layout rules at appropriate viewport sizes (MDN Web Docs, n.d.-b; MDN Web Docs, n.d.-e).

## Part 2 feedback addressed

| Feedback from score sheet | Correction in this version | What to verify |
|---|---|---|
| External CSS was not implemented correctly on all pages | All five pages link to `css/style.css`; the file is in that folder | Open each page and confirm the monochrome layout appears |
| Default styles were incomplete or inconsistent | Added a shared reset, box-sizing, base font, line-height, body colour and background | Compare typography and spacing across all pages |
| Typography needed improvement | Added consistent heading levels, responsive heading sizes and readable line height | Check desktop and mobile headings |
| Layout needed better alignment and spacing | Used shared containers, CSS Grid and Flexbox for hero, cards and forms | Check at desktop, tablet and phone widths |
| Decoration/colour inconsistent | Kept a consistent black, white and grey palette, borders, card treatments and buttons | Review visual consistency page to page |
| Pseudo-classes insufficient or incorrectly applied | Added `:hover`, `:active`, `:focus-visible`, form validity styling and keyboard-visible focus | Tab through links, buttons and forms |
| Responsive media queries incomplete | Added 960px, 680px and 400px breakpoints, plus reduced-motion support | Test around each breakpoint in DevTools |
| Navigation did not adapt | Navigation wraps on tablets and becomes a two-column/one-column grid on small screens | Resize the browser and check all links remain accessible |
| Image adjustments incomplete | Added `max-width: 100%`, auto height, object-fit, lazy loading, and valid 480w/960w `srcset` options with `sizes` hints | Check images load, appropriate `srcset` choices are available, and images do not overflow narrow screens |
| Changelog lacked detail | This README records the feedback item and the corresponding correction | Keep this section updated when you make further edits |
| References were missing or incomplete | Added traceable, named sources and URLs at the end of this README | Ensure the assignment report also cites sources in text |
| Few descriptive commits | Suggested commit messages are included below; create the commits in your own Git repository | Confirm the commit history on GitHub after pushing |

## Changelog

### 29 October 2026 — Part 3 improvements and Part 2 corrections

- **Repository structure and shared CSS:** Moved the stylesheet into `css/style.css` and corrected the stylesheet link on all five HTML pages. The uploaded version linked to `css/style.css` while the file was at the project root, so styling would not load from the submitted folder structure.
- **Image paths and responsive sources:** Moved the five supplied image assets to `images/` and updated their paths. Renamed `Electrical safety.jpg` to `electrical-safety.jpg`. Generated 480-pixel-wide derivatives from the supplied images and added `srcset` and `sizes` hints that reference the real 480w and 960w files. Removed references to nonexistent `safety-small.jpg`, `safety-medium.jpg` and `safety-large.jpg`, which would have produced broken image requests.
- **Base styling and typography:** Standardised box-sizing, page fonts, line height, responsive headings, spacing, link and button appearance, card borders and monochrome colour palette.
- **Desktop layout:** Used reusable containers and CSS Grid/Flexbox to improve hero alignment, service cards, location panels, image gallery and form layout.
- **Responsive behaviour:** Added tablet and mobile breakpoints that reflow the hero, cards, navigation, filters, forms and gallery. Added a small-screen breakpoint and reduced-motion styling. Generated 480px image derivatives and added real srcset/sizes options for responsive image selection.
- **Navigation and keyboard accessibility:** Added a skip link, navigation landmark label, current-page indicator and visible keyboard focus. Improved button sizes and hover/active/focus states.
- **Dynamic service content:** Added a JavaScript service dataset and dynamic card rendering on the Services page. Added search, category filtering, sorting and a live result count, including a helpful empty-results message.
- **Interactive FAQ:** Added an accessible accordion with button state updates and show/hide panels.
- **Image lightbox:** Added an image gallery and dialog-based lightbox with captions, alternative text, a close button and Escape-key support through the native dialog element.
- **Interactive map:** Added Leaflet and OpenStreetMap tiles on the Contact page, with markers for approximate Johannesburg and Pretoria city centres and an explicit note that these are not verified office addresses.
- **Form validation:** Improved the Enquiry and Contact forms with required fields, semantic input types, length constraints and a JavaScript telephone-number check. The UI clearly states that the current forms do not transmit or store user information.
- **SEO:** Added unique page titles, meta descriptions, a robots directive, semantic page structure and improved alternative text for images.
- **Project documentation and references:** Replaced generic README placeholders with setup instructions, implementation notes, a feedback-to-fix table, this detailed changelog, testing guidance and named reference entries.

### Part 2 corrections to retain

When continuing development, record any additional corrections to CSS, responsive layout, navigation, images, documentation or accessibility as dated entries. Describe both the changed file and the reason for the change; do not only write “fixed website”.

## Suggested Git commit history

Run these commands from the project folder after reviewing/testing the code:

```bash
git init
git add .
git commit -m "Fix stylesheet and image asset paths"
git add .
git commit -m "Improve responsive layout and navigation"
git add .
git commit -m "Add dynamic service search and sorting"
git add .
git commit -m "Implement FAQ accordion and gallery lightbox"
git add .
git commit -m "Add client-side form validation and contact map"
git add .
git commit -m "Document feedback fixes and SEO improvements"
```

These are suggested messages, not a record of commits already made. If you created the repository previously, do not run `git init` again; commit the changes in the existing repository and push them to GitHub.

## Deployment on GitHub Pages

GitHub Pages can publish static HTML, CSS and JavaScript from a selected branch and folder (GitHub Docs, n.d.-b). After pushing your files, open the repository **Settings → Pages**, choose **Deploy from a branch**, select your branch and the root folder, then save. Confirm the published URL and test all five pages before adding that URL to the README. The public site must not contain private information.

## Testing checklist

- [ ] Home, About Us, Services, Enquiry and Contact links all work.
- [ ] The shared stylesheet loads on all five pages.
- [ ] All five supplied images load with no missing-file errors.
- [ ] Search, category filter, A–Z sort, Z–A sort and empty search results work.
- [ ] FAQ accordion expands and collapses with keyboard and mouse.
- [ ] Gallery opens the correct larger image and closes with the button and Escape.
- [ ] Form required-field, email and telephone validation behave correctly.
- [ ] The post-validation note makes it clear that no message has been transmitted.
- [ ] The map and its attribution load when the computer is connected to the internet.
- [ ] Layout and navigation work at desktop, tablet and phone widths (for example 1440px, 768px and 390px).
- [ ] Browser console has no missing asset or JavaScript errors.
- [ ] Capture your own screenshots of desktop, tablet and mobile views and add them to your assignment evidence if required.
- [ ] Deploy the project to the platform required by the brief, then add the public URL here.

## Image provenance note

The uploaded image files did not contain creator, source URL or licence metadata. This package does not invent an image creator or claim that the files are public-domain. Before publishing publicly, verify permission for each supplied image or replace it with a clearly licensed asset and record its title, creator, source URL and licence in the assignment image-attribution table.

## References

GitHub Docs (n.d.-a) *About the repository README file*. Available at: https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes (Accessed: 29 October 2026).

GitHub Docs (n.d.-b) *Creating a GitHub Pages site*. Available at: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site (Accessed: 29 October 2026).

Google Search Central (n.d.) *SEO Starter Guide: The Basics*. Available at: https://developers.google.com/search/docs/fundamentals/seo-starter-guide (Accessed: 29 October 2026).

Leaflet (n.d.) *Quick Start Guide*. Available at: https://leafletjs.com/examples/quick-start/ (Accessed: 29 October 2026).

MDN Web Docs (n.d.-a) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Forms/Form_validation (Accessed: 29 October 2026).

MDN Web Docs (n.d.-b) *CSS media queries*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries (Accessed: 29 October 2026).

MDN Web Docs (n.d.-c) *CSS transitions*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Transitions (Accessed: 29 October 2026).

MDN Web Docs (n.d.-d) *DOM events*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events (Accessed: 29 October 2026).

MDN Web Docs (n.d.-e) *Responsive web design*. Available at: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design (Accessed: 29 October 2026).

OpenStreetMap Foundation (n.d.) *Tile Usage Policy*. Available at: https://operations.osmfoundation.org/policies/tiles/ (Accessed: 29 October 2026).
