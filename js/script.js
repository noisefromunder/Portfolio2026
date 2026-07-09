

const portfolioData = [
  {
    id: 'FFFACE',
    title: 'FFFACE Visual Identity',
    year: '2026',
    desc: 'FFFACE (FACEFACEFACE) is a conceptual fashion brand built around the idea of wearable statements. The visual identity explores a contemporary design language through expressive typography, minimalist aesthetics, and bold graphic elements, creating a distinctive brand presence that bridges fashion, culture, and personal expression. The project includes logo development, typography, color system, graphic assets, and brand identity applications.',
    thumbnail: 'img/Mo_4.gif',
    images: [
      'img/FFFACE/Artboard 1.png',
      'img/FFFACE/Artboard 2.png',
      'img/FFFACE/Artboard 3.png',
      'img/FFFACE/Artboard 4.png',
      'img/FFFACE/Artboard 5.png',
      'img/FFFACE/Artboard 6.png',
      'img/FFFACE/Artboard 7.png',
      'img/FFFACE/Artboard 8.png',
      'img/FFFACE/Artboard 9.png',
      'img/FFFACE/Artboard 10.png',
    ]
  },
  {
    id: 'WISED',
    title: 'WISED VISUAL IDENTITY',
    year: '2025',
    desc: "WISED Visual Identity is a branding project developed for a contemporary streetwear label. The identity system combines bold typography, dynamic graphic compositions, and a brutalist-inspired visual language to express the brand's energetic, exploratory, and youth-driven character. The project covers logo development, typography, color system, visual assets, and comprehensive brand guidelines to ensure a consistent identity across digital and physical touchpoints.",
    thumbnail: 'img/WISED-T.png',
    images: [
      'img/WISED/Page-4.png',
      'img/WISED/Page-5.png',
      'img/WISED/Page-6.png',
      'img/WISED/Page-7.png',
      'img/WISED/Page-8.png',
      'img/WISED/Page-9.png',
      'img/WISED/Page-10.png',
      'img/WISED/Page-11.png',
      'img/WISED/Page-12.png',
      'img/WISED/Page-13.png',
      'img/WISED/Page-14.png',
      'img/WISED/Page-15.png',
      'img/WISED/Page-16.png',
      'img/WISED/Page-17.png',
      'img/WISED/Page-18.png',
      'img/WISED/Page-19.png'
    ]
  },
  {
    id: 'DELASOLxUH',
    title: 'Unitedhart X Maison De La Sol',
    year: '2025',
    desc: "MAISON DE LA SOL × UNITEDHART is a collaborative apparel collection that merges the visual identities of both brands into a cohesive product experience. As the Product Designer, I was responsible for designing the collection across multiple categories, including work jackets, T-shirts, and supporting accessories, while also developing key promotional visuals such as event posters. The project focused on translating the collaboration's creative direction into wearable products and a consistent visual campaign.",
    thumbnail: 'img/DELASOL-UH.png',
    images: [
      'img/DELASOLxUH/1.png',
      'img/DELASOLxUH/2.png'
    ]
  },
  {
    id: 'Grafis Niaga',
    title: "Grafis Niaga Key Visual",
    year: '2025',
    desc: 'The Grafis Niaga Key Visual project explores the development of impactful campaign visuals that communicate messages with clarity and strong visual appeal. Through a combination of expressive layouts, typography, and graphic elements, the project delivers a flexible key visual system designed for use across both digital and print media.',
    thumbnail: 'img/GN.png',
    images: [
      'img/GN/Page-31.png',
      'img/GN/Page-32.png',
      'img/GN/Page-33.png',
      'img/GN/Page-34.png',
      'img/GN/Page-35.png',
      'img/GN/Page-36.png',
    ]
  },
  {
    id: 'Thee Marloes',
    title: "Thee Marloes, Di Hotel Malibu Sticker Pack",
    year: '2026',
    desc: "The Marloes, Di Hotel Malibu Sticker Pack Edition is a merchandise design project created to celebrate the band's visual identity through a collectible sticker pack. I developed a series of illustrations and graphic compositions that capture the spirit of the release while maintaining a cohesive visual language. The project focuses on translating music, storytelling, and brand aesthetics into engaging physical merchandise.",
    thumbnail: 'img/TM.gif',
    images: [
      'img/Thee Marloes/TM1.png',
    ]
  },
  {
    id: 'Unitedhart',
    title: "Unitedhart, Selected Graphic",
    year: '2025',
    desc: "As part of the in-house creative team at UNITEDHART, I contributed to the development of seasonal apparel graphics across multiple collections. My role involved translating collection concepts into wearable graphic designs, ensuring consistency with the brand's identity while delivering fresh visual directions for each season. This project features a curated selection of graphics and seasonal outputs created for commercial production.",
    thumbnail: 'img/UHT.gif',
    images: [
      'img/UH/UH1.png',
      'img/UH/UH2.png',
      'img/UH/UH3.png',
      'img/UH/UH4.png',
    ]
  },
  {
    id: 'STD',
    title: "STD 125 KIRIAN",
    year: '2023',
    desc: "STD 125 KIRIAN is a 14-page editorial zine that examines the visual culture of Indonesia's CVT motorcycle modification scene. Developed as a personal project, the publication transforms research into a structured editorial experience through thoughtful typography, layout design, and image composition. The project demonstrates my approach to publication design, visual storytelling, and information hierarchy.",
    thumbnail: 'img/STD.png',
    images: [
      'img/STD/STD1.png',
      'img/STD/STD2.png',
      'img/STD/STD3.png',
      'img/STD/STD4.png',
      'img/STD/STD5.png',
      'img/STD/STD6.png',
      'img/STD/STD7.png',
    ]
  },
  {
    id: 'RADSS',
    title: "RADSS LOGO DESIGN",
    year: '2026',
    desc: "Designed the visual identity and logo system for RADSS, an independent production house. Developed an expressive and contemporary identity through concept exploration, typography, and brand applications, resulting in a flexible visual system suitable for both digital and physical platforms.",
    thumbnail: 'img/RADSS.gif',
    images: [
      'img/RADSS/1.png',
      'img/RADSS/1B.gif',
      'img/RADSS/2.png',
      'img/RADSS/3.png',
      'img/RADSS/4.png',
      'img/RADSS/4B.gif',
      'img/RADSS/5.png',

    ]
  }
];

function renderMediaHtml(src, alt, lazy = true) {
  const ext = src.split('.').pop().toLowerCase();
  if (['mp4', 'webm'].includes(ext)) {
    return `<video src="${src}" autoplay loop muted playsinline aria-label="${alt}"></video>`;
  } else {
    return `<img src="${src}" alt="${alt}" ${lazy ? 'loading="lazy"' : ''}>`;
  }
}

document.addEventListener("DOMContentLoaded", () => {

  if (window !== window.top) {
    const bg = document.querySelector('.bg-about, .bg-index');
    if (bg) {
      bg.style.display = 'none';
    }
  }

  fetchArenaChannel();
  initArenaScroll();

  function updateDateTime() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const dateEl = document.getElementById("date");
    const timeEl = document.getElementById("time");

    if (dateEl && timeEl) {
      dateEl.textContent = now.toLocaleDateString('en-US', options);
      timeEl.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
  }

  if (document.getElementById("date") && document.getElementById("time")) {
    setInterval(updateDateTime, 1000);
    updateDateTime();
  }

  renderProjects();

  const desktopLayout = document.querySelector('.desktop-layout');
  if (desktopLayout) {
    initWorkPage();
  }

  initProjectUI();

  const lightboxOverlay = document.getElementById('lightbox-overlay');
  if (lightboxOverlay) {
    initLightbox();
  }
});

const title = document.querySelector(".exhibition .toggle-title");
const wrapper = document.querySelector(".exhibition .content-wrapper");

if (title && wrapper) {
  title.addEventListener("click", () => {
    wrapper.classList.toggle("open");
    title.textContent = wrapper.classList.contains("open") ? "LESS" : "MORE";
  });
}

function renderProjects() {
  const leftCol = document.getElementById('col-left-inner');
  const rightCol = document.getElementById('col-right-inner');
  const mobileCol = document.getElementById('mobile-projects');

  if (!leftCol && !rightCol && !mobileCol) return;

  if (leftCol) leftCol.innerHTML = '';
  if (rightCol) rightCol.innerHTML = '';
  if (mobileCol) mobileCol.innerHTML = '';

  portfolioData.forEach((proj, idx) => {

    const desktopHtml = `
      <article class="project-card" data-project="${proj.id}">
        <a href="#" class="project-link">
          <div class="project-img">
            ${renderMediaHtml(proj.thumbnail, proj.title, true)}
          </div>
        </a>
        <div class="project-info">
          <a href="#" class="project-link" style="text-decoration:none;">
            <div class="project-title-row">
              <span class="project-name">${proj.title}</span>
              <span class="project-year">${proj.year}</span>
            </div>
          </a>
          <button class="project-toggle" aria-label="Toggle details">+</button>
          <div class="project-details">
            <p class="project-desc">${proj.desc}</p>
          </div>
        </div>
        <hr class="card-divider">
      </article>
    `;

    if (idx % 2 === 0) {
      if (leftCol) leftCol.innerHTML += desktopHtml;
    } else {
      if (rightCol) rightCol.innerHTML += desktopHtml;
    }

    const mobileHtml = `
      <article class="mobile-card" data-project="${proj.id}">
        <a href="#" class="mobile-card-link">
          <div class="mobile-card-img">
            ${renderMediaHtml(proj.thumbnail, proj.title, true)}
          </div>
        </a>
        <div class="mobile-card-info project-info">
          <div class="mobile-title-row">
            <a href="#" class="project-name">${proj.title}</a>
            <span class="project-year">${proj.year}</span>
          </div>
          <button class="project-toggle" aria-label="Toggle details">+</button>
          <div class="project-details">
            <p>${proj.desc}</p>
          </div>
        </div>
        <hr class="card-divider">
      </article>
    `;
    if (mobileCol) mobileCol.innerHTML += mobileHtml;
  });
}

function initWorkPage() {
  const colLeft = document.getElementById('col-left');
  const colRight = document.getElementById('col-right');
  const colLeftInner = document.getElementById('col-left-inner');
  const colRightInner = document.getElementById('col-right-inner');

  if (!colLeft || !colRight || !colLeftInner || !colRightInner) return;

  cloneForInfinite(colLeftInner);
  cloneForInfinite(colRightInner);

  const speedLeft = 1.0;
  const speedRight = 1.0;

  let posLeft = 0;
  let posRight = 0;
  let animId = null;
  let isPaused = false;

  let leftOriginalHeight = colLeftInner.scrollHeight / 2;
  let rightOriginalHeight = colRightInner.scrollHeight / 2;

  const resizeObserver = new ResizeObserver(() => {
    if (colLeftInner.scrollHeight > 0) {
      leftOriginalHeight = colLeftInner.scrollHeight / 2;
    }
    if (colRightInner.scrollHeight > 0) {
      rightOriginalHeight = colRightInner.scrollHeight / 2;
    }
  });
  resizeObserver.observe(colLeftInner);
  resizeObserver.observe(colRightInner);

  posRight = -rightOriginalHeight;

  function animate() {
    if (!isPaused) {
      posLeft -= speedLeft;
      if (Math.abs(posLeft) >= leftOriginalHeight) {
        posLeft += leftOriginalHeight;
      }

      posRight += speedRight;
      if (posRight >= 0) {
        posRight -= rightOriginalHeight;
      }

      colLeftInner.style.transform = `translateY(${posLeft}px)`;
      colRightInner.style.transform = `translateY(${posRight}px)`;
    }

    animId = requestAnimationFrame(animate);
  }

  animate();

  const allCards = document.querySelectorAll('.desktop-layout .project-card');
  allCards.forEach(card => {
    card.addEventListener('mouseenter', () => { isPaused = true; });
    card.addEventListener('mouseleave', () => { isPaused = false; });
  });

  document.addEventListener('wheel', (e) => {
    if (window.innerWidth <= 900) return;

    const lightbox = document.getElementById('lightbox-overlay');
    if (lightbox && lightbox.classList.contains('open')) return;

    e.preventDefault();

    const delta = e.deltaY * 1.5;
    posLeft -= delta;
    posRight += delta;

    if (Math.abs(posLeft) >= leftOriginalHeight) {
      posLeft = posLeft % leftOriginalHeight;
    }
    if (posLeft > 0) {
      posLeft -= leftOriginalHeight;
    }

    if (posRight >= 0) {
      posRight -= rightOriginalHeight;
    }
    if (Math.abs(posRight) >= rightOriginalHeight * 2) {
      posRight += rightOriginalHeight;
    }

    colLeftInner.style.transform = `translateY(${posLeft}px)`;
    colRightInner.style.transform = `translateY(${posRight}px)`;
  }, { passive: false });
}

function cloneForInfinite(container) {
  const children = Array.from(container.children);
  children.forEach(child => {
    const clone = child.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    container.appendChild(clone);
  });
}

function initProjectUI() {
  const toggleBtns = document.querySelectorAll('.project-toggle');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const details = btn.parentElement.querySelector('.project-details');
      if (details) {
        details.classList.toggle('open');
        btn.classList.toggle('open');
        btn.textContent = details.classList.contains('open') ? '\u00d7' : '+';
      }
    });
  });

  const header = document.getElementById('mobile-header');
  const bio = document.querySelector('.mobile-bio');
  if (header && bio) {
    window.addEventListener('scroll', () => {
      const bioBottom = bio.getBoundingClientRect().bottom;
      if (bioBottom < 0) {
        header.classList.add('visible');
      } else {
        header.classList.remove('visible');
      }
    }, { passive: true });
  }
}

function initLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  const backdrop = document.getElementById('lightbox-backdrop');
  const closeBtn = document.getElementById('lightbox-close');
  const slidesContainer = document.getElementById('lightbox-slides');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const titleEl = document.getElementById('lightbox-title');
  const descEl = document.getElementById('lightbox-desc');
  const descToggleBtn = document.getElementById('lightbox-desc-toggle');
  const counterEl = document.getElementById('lightbox-counter');

  let currentSlide = 0;
  let totalSlides = 0;

  document.addEventListener('click', (e) => {
    const link = e.target.closest('.project-link, .mobile-card-link, .mobile-title-row .project-name');
    console.log("[DIAG] Click detected! link =", link);
    if (!link) return;

    e.preventDefault();
    e.stopPropagation();

    const card = link.closest('[data-project]') || link.closest('.mobile-card');
    console.log("[DIAG] card =", card);
    if (!card) return;

    const projectKey = card.dataset ? card.dataset.project : null;
    console.log("[DIAG] projectKey =", projectKey);
    if (!projectKey) return;

    const project = portfolioData.find(p => p.id === projectKey);
    console.log("[DIAG] project =", project);
    if (project) {
      console.log("[DIAG] Calling openLightbox...");
      openLightbox(project);
    }
  });

  function openLightbox(project) {
    console.log("[DIAG] Inside openLightbox. project:", project);
    currentSlide = 0;
    totalSlides = project.images.length;

    if (titleEl) titleEl.textContent = project.title + '  \u2014  ' + project.year;
    if (descEl) {
      descEl.textContent = project.desc;
      descEl.classList.remove('hidden');
    }
    if (descToggleBtn) descToggleBtn.textContent = 'HIDE INFO';

    console.log("[DIAG] Building slides. images:", project.images);
    slidesContainer.innerHTML = '';
    project.images.forEach((src, i) => {
      const slide = document.createElement('div');
      slide.className = 'lightbox-slide';

      const ext = src.split('.').pop().toLowerCase();
      if (['mp4', 'webm'].includes(ext)) {
        const vid = document.createElement('video');
        vid.src = src;
        vid.autoplay = true;
        vid.loop = true;
        vid.muted = true;
        vid.playsInline = true;
        vid.setAttribute('aria-label', `Slide ${i + 1}`);
        slide.appendChild(vid);
      } else {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Slide ${i + 1}`;
        img.loading = 'lazy';
        slide.appendChild(img);
      }
      slidesContainer.appendChild(slide);
    });

    console.log("[DIAG] Updating counter and arrows...");
    updateCounter();
    updateArrows();

    console.log("[DIAG] Adding .open class to overlay:", overlay);
    overlay.classList.add('open');

    slidesContainer.style.transform = `translateX(0px)`;
    console.log("[DIAG] openLightbox complete!");
  }

  function closeLightbox() {
    overlay.classList.remove('open');
  }

  function goToSlide(index) {
    if (index < 0 || index >= totalSlides) return;
    currentSlide = index;

    const carousel = document.getElementById('lightbox-carousel');
    const slides = slidesContainer.querySelectorAll('.lightbox-slide');
    if (slides.length === 0 || !carousel) return;

    let offset = 0;
    for (let i = 0; i < currentSlide; i++) {
      offset += slides[i].offsetWidth + 16;
    }
    const containerWidth = carousel.offsetWidth;
    const slideWidth = slides[currentSlide] ? slides[currentSlide].offsetWidth : 0;
    const centerOffset = (containerWidth - slideWidth) / 2;

    slidesContainer.style.transform = `translateX(${-offset + centerOffset}px)`;

    updateCounter();
    updateArrows();
  }

  function updateCounter() {
    if (counterEl) {
      counterEl.textContent = (currentSlide + 1) + ' / ' + totalSlides;
    }
  }

  function updateArrows() {
    if (prevBtn) prevBtn.disabled = (currentSlide <= 0);
    if (nextBtn) nextBtn.disabled = (currentSlide >= totalSlides - 1);
  }

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (backdrop) backdrop.addEventListener('click', closeLightbox);

  if (prevBtn) prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

  if (descToggleBtn && descEl) {
    descToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      descEl.classList.toggle('hidden');
      descToggleBtn.textContent = descEl.classList.contains('hidden') ? 'SHOW INFO' : 'HIDE INFO';
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!overlay.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToSlide(currentSlide - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToSlide(currentSlide + 1);
    }
  });
}

let arenaPage = 1;
let isArenaLoading = false;
let hasMoreArena = true;

async function fetchArenaChannel() {
  const grid = document.getElementById('arena-grid');
  if (!grid || isArenaLoading || !hasMoreArena) return;

  isArenaLoading = true;

  const channelSlug = 'design-thoughts-du2sofvhggo';

  const loadingEl = document.getElementById('arena-loading');
  if (loadingEl) {
    loadingEl.style.display = 'block';
    loadingEl.textContent = 'Loading inspiration...';
  }

  try {
    const cacheKey = `arenaCache_v4_${channelSlug}_page_${arenaPage}`;
    const cacheTimeKey = `arenaCacheTime_v4_${channelSlug}_page_${arenaPage}`;
    const cachedData = localStorage.getItem(cacheKey);
    const cachedTime = localStorage.getItem(cacheTimeKey);

    const ONE_DAY = 24 * 60 * 60 * 1000;
    let data;

    if (cachedData && cachedTime && (Date.now() - parseInt(cachedTime)) < ONE_DAY) {
      data = JSON.parse(cachedData);
    } else {

      const res = await fetch(`https://api.are.na/v2/channels/${channelSlug}/contents?per=100&page=${arenaPage}`);
      data = await res.json();

      localStorage.setItem(cacheKey, JSON.stringify(data));
      localStorage.setItem(cacheTimeKey, Date.now().toString());
    }

    if (!data.contents || data.contents.length === 0) {
      hasMoreArena = false;
      if (loadingEl) loadingEl.style.display = 'none';
      isArenaLoading = false;
      return;
    }

    data.contents.forEach(item => {
      if (item.class === 'Image' || (item.class === 'Link' && item.image) || (item.class === 'Attachment' && item.image)) {

        const projectId = `arena-${item.id}-${Math.random().toString(36).substring(7)}`;

        portfolioData.push({
          id: projectId,
          title: item.title || 'Inspiration',
          year: new Date(item.created_at).getFullYear().toString(),
          desc: item.description_html ? item.description_html.replace(/<[^>]+>/g, '') : (item.description || 'Sourced from Are.na'),
          images: [item.image.original.url]
        });

        const block = document.createElement('div');
        block.className = 'arena-block project-link';
        block.dataset.project = projectId;

        const img = document.createElement('img');
        img.src = item.image.display.url;
        img.alt = item.title || 'Are.na Image';
        img.loading = 'lazy';

        block.appendChild(img);
        grid.insertBefore(block, loadingEl);
      }
    });

    arenaPage++;
    isArenaLoading = false;

    if (data.contents.length < 100) {
      hasMoreArena = false;
      if (loadingEl) loadingEl.style.display = 'none';
    }

  } catch (err) {
    if (loadingEl) loadingEl.textContent = 'Failed to load Are.na channel.';
    console.error('Are.na fetch error:', err);
    isArenaLoading = false;
  }
}

function initArenaScroll() {
  const grid = document.getElementById('arena-grid');
  if (!grid) return;

  window.addEventListener('scroll', () => {

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      fetchArenaChannel();
    }
  });
}