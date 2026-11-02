/* BrightFix Part 3 JavaScript: filtering, accessible interactions, and demo form validation. */
(() => {
    'use strict';

    // Keep the copyright year current without requiring an edit each year.
    document.querySelectorAll('[data-current-year]').forEach((element) => {
        element.textContent = String(new Date().getFullYear());
    });

    // Dynamically render the services list and support search, category filter, and sorting.
    const services = [
        {
            name: 'Electrical Installation',
            category: 'installation',
            categoryLabel: 'Installation',
            image: 'images/installation.jpg',
            srcset: 'images/installation-480.jpg 480w, images/installation.jpg 960w',
            alt: 'Electrical installation work in a building',
            description: 'Installation of lighting, switches, outlets and electrical systems for homes and small businesses.'
        },
        {
            name: 'Electrical Repairs',
            category: 'repair',
            categoryLabel: 'Repair',
            image: 'images/repair.jpg',
            srcset: 'images/repair-480.jpg 480w, images/repair.jpg 960w',
            alt: 'Electrician repairing electrical equipment',
            description: 'Help with electrical faults, damaged switches, sockets, lighting and other electrical problems.'
        },
        {
            name: 'Electrical Maintenance',
            category: 'maintenance',
            categoryLabel: 'Maintenance',
            image: 'images/maintenance.jpg',
            srcset: 'images/maintenance-480.jpg 480w, images/maintenance.jpg 960w',
            alt: 'Electrical maintenance work',
            description: 'Routine checks to help identify potential problems and keep electrical systems reliable.'
        },
        {
            name: 'Electrical Safety Inspections',
            category: 'safety',
            categoryLabel: 'Safety',
            image: 'images/electrical-safety.jpg',
            srcset: 'images/electrical-safety-480.jpg 480w, images/electrical-safety.jpg 960w',
            alt: 'Electrical safety inspection',
            description: 'An inspection-focused service to identify possible hazards and areas that need professional attention.'
        },
        {
            name: 'Commercial Electrical Services',
            category: 'commercial',
            categoryLabel: 'Commercial',
            image: '',
            alt: '',
            description: 'Electrical support for small companies, offices and retail premises, including fault finding and maintenance.'
        }
    ];

    const serviceGrid = document.querySelector('#services-grid');
    const searchInput = document.querySelector('#service-search');
    const categoryFilter = document.querySelector('#service-category');
    const sortSelect = document.querySelector('#service-sort');
    const resultsCount = document.querySelector('#service-results-count');

    if (serviceGrid && searchInput && categoryFilter && sortSelect && resultsCount) {
        const renderServices = () => {
            const query = searchInput.value.trim().toLowerCase();
            const category = categoryFilter.value;
            const sort = sortSelect.value;

            let filtered = services.filter((service) => {
                const matchesText = `${service.name} ${service.description} ${service.categoryLabel}`.toLowerCase().includes(query);
                const matchesCategory = !category || service.category === category;
                return matchesText && matchesCategory;
            });

            if (sort === 'name-asc') filtered.sort((a, b) => a.name.localeCompare(b.name));
            if (sort === 'name-desc') filtered.sort((a, b) => b.name.localeCompare(a.name));

            serviceGrid.replaceChildren();
            filtered.forEach((service) => {
                const card = document.createElement('article');
                card.className = 'service-card';

                if (service.image) {
                    const image = document.createElement('img');
                    image.src = service.image;
                    image.srcset = service.srcset;
                    image.sizes = '(max-width: 680px) 100vw, (max-width: 960px) 45vw, 360px';
                    image.alt = service.alt;
                    image.loading = 'lazy';
                    card.append(image);
                }

                const categoryText = document.createElement('p');
                categoryText.className = 'eyebrow';
                categoryText.textContent = service.categoryLabel;
                card.append(categoryText);

                const heading = document.createElement('h2');
                heading.textContent = service.name;
                card.append(heading);

                const description = document.createElement('p');
                description.textContent = service.description;
                card.append(description);

                const link = document.createElement('a');
                link.className = 'button';
                link.href = `enquiry.html?service=${encodeURIComponent(service.category)}`;
                link.textContent = 'Enquire about this service';
                card.append(link);
                serviceGrid.append(card);
            });

            resultsCount.textContent = `${filtered.length} service${filtered.length === 1 ? '' : 's'} shown`;
            if (filtered.length === 0) {
                const empty = document.createElement('p');
                empty.className = 'empty-state';
                empty.textContent = 'No services match your search. Try a different word or category.';
                empty.setAttribute('role', 'status');
                serviceGrid.append(empty);
            }
        };

        searchInput.addEventListener('input', renderServices);
        categoryFilter.addEventListener('change', renderServices);
        sortSelect.addEventListener('change', renderServices);
        renderServices();
    }

    // Accessible accordion: buttons announce expanded/collapsed state to assistive technology.
    document.querySelectorAll('[data-accordion-trigger]').forEach((button) => {
        button.addEventListener('click', () => {
            const panelId = button.getAttribute('aria-controls');
            const panel = panelId ? document.getElementById(panelId) : null;
            if (!panel) return;
            const expanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', String(!expanded));
            panel.hidden = expanded;
            const icon = button.querySelector('[data-accordion-icon]');
            if (icon) icon.textContent = expanded ? '+' : '−';
        });
    });

    // Accessible lightbox for gallery buttons and standalone images.
    let lightbox = document.querySelector('#image-lightbox');
    let lightboxImage = document.querySelector('#lightbox-image');
    let lightboxCaption = document.querySelector('#lightbox-caption');
    let lightboxClose = document.querySelector('[data-lightbox-close]');
    const lightboxTriggers = document.querySelectorAll('[data-lightbox-src], img[data-lightbox]');

    if (lightboxTriggers.length > 0 && (!lightbox || !lightboxImage || !lightboxCaption)) {
        lightbox = document.createElement('dialog');
        lightbox.className = 'lightbox';
        lightbox.id = 'image-lightbox';
        lightbox.setAttribute('aria-labelledby', 'lightbox-caption');

        const header = document.createElement('div');
        header.className = 'lightbox-head';
        lightboxCaption = document.createElement('h2');
        lightboxCaption.id = 'lightbox-caption';
        lightboxCaption.textContent = 'Service image';
        lightboxClose = document.createElement('button');
        lightboxClose.className = 'lightbox-close';
        lightboxClose.type = 'button';
        lightboxClose.dataset.lightboxClose = '';
        lightboxClose.setAttribute('aria-label', 'Close image viewer');
        lightboxClose.textContent = 'Close';
        header.append(lightboxCaption, lightboxClose);

        lightboxImage = document.createElement('img');
        lightboxImage.id = 'lightbox-image';
        lightboxImage.alt = '';
        const instruction = document.createElement('p');
        instruction.textContent = 'Press Escape or use the Close button to return to the page.';
        lightbox.append(header, lightboxImage, instruction);
        document.body.append(lightbox);
    }

    if (lightbox && lightboxImage && lightboxCaption) {
        const closeLightbox = () => {
            if (typeof lightbox.close === 'function') lightbox.close();
            else lightbox.removeAttribute('open');
        };

        lightboxTriggers.forEach((trigger) => {
            if (trigger.matches('img[data-lightbox]')) {
                trigger.tabIndex = 0;
                trigger.setAttribute('role', 'button');
                trigger.setAttribute('aria-label', `View larger image: ${trigger.alt}`);
                trigger.addEventListener('keydown', (event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        trigger.click();
                    }
                });
            }

            trigger.addEventListener('click', () => {
                const isImage = trigger.matches('img[data-lightbox]');
                const source = isImage ? trigger.currentSrc || trigger.src : trigger.dataset.lightboxSrc;
                const alt = isImage ? trigger.alt : trigger.dataset.lightboxAlt;
                const caption = isImage ? trigger.alt : trigger.dataset.lightboxCaption;
                lightboxImage.src = source || '';
                lightboxImage.alt = alt || '';
                lightboxCaption.textContent = caption || 'BrightFix service image';
                if (typeof lightbox.showModal === 'function') lightbox.showModal();
                else lightbox.setAttribute('open', '');
            });
        });

        if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (event) => {
            if (event.target === lightbox) closeLightbox();
        });
    }

    // Front-end form validation. This demo does not send data to a server or store it.
    document.querySelectorAll('[data-demo-form]').forEach((form) => {
        const phone = form.querySelector('input[type="tel"]');
        const status = form.querySelector('[data-form-status]');
        
        if (phone) {
            phone.addEventListener('input', () => {
                phone.setCustomValidity('');
                const value = phone.value.trim();
                if (value && !/^[0-9+()\s-]{7,20}$/.test(value)) {
                    phone.setCustomValidity('Enter a telephone number using digits, spaces, +, brackets or hyphens (7–20 characters).');
                }
            });
        }

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            if (phone) phone.dispatchEvent(new Event('input', { bubbles: true }));
            if (!form.reportValidity()) return;

          
            if (status) {
                status.textContent = 'Your form passed the browser validation test. This student demo does not send or save messages yet; connect a secure form service or backend before using it for real enquiries.';
                status.hidden = false;
                status.focus();
            }
            form.reset();
        });
    });

    // Leaflet map on the Contact page. Coordinates are city-centre approximations, not office addresses.
    const mapElement = document.querySelector('#map');
    if (mapElement && window.L) {
        const map = L.map(mapElement).setView([-26.0, 28.1], 8);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-26.2041, 28.0473]).addTo(map)
            .bindPopup('<strong>Johannesburg</strong><br>Approximate city-centre marker. Replace with the real office address before publication.');
        L.marker([-25.7479, 28.2293]).addTo(map)
            .bindPopup('<strong>Pretoria</strong><br>Approximate city-centre marker. Replace with the real office address before publication.');
    } else if (mapElement) {
        mapElement.textContent = 'The interactive map could not load. Check your internet connection or the Leaflet CDN links.';
        mapElement.setAttribute('role', 'status');
    }

    // Prefill the enquiry service when the visitor follows a service-specific CTA.
    const serviceSelect = document.querySelector('#service-required');
    if (serviceSelect) {
        const requestedService = new URLSearchParams(window.location.search).get('service');
        const allowedValues = new Set(['installation', 'repair', 'maintenance', 'safety', 'commercial']);
        if (requestedService && allowedValues.has(requestedService)) serviceSelect.value = requestedService;
    }
})();
