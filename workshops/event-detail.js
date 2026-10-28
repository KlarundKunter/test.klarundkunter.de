const events = {
  "mosaik-flaschenlampe": { name: "Mosaik-Flaschen-Lampe", description: "Gestalte aus einer Flasche, buntem Mosaik und einem kleinen Lampenschirm Deine eigene Lampe – auch als persönliche Weihnachtsgeschenkidee.", image: "workshop-mosaik-flaschenlampe-atelier.jpg", startDate: "2026-12-11T16:30:00+01:00", endDate: "2026-12-11T19:00:00+01:00", bookingDateLabel: "11. Dezember 2026, 16:30–19:00 Uhr", price: "49", sessions: [{ startDate: "2026-10-30T16:30:00+01:00", endDate: "2026-10-30T19:00:00+01:00", availability: "https://schema.org/SoldOut" }, { startDate: "2026-12-11T16:30:00+01:00", endDate: "2026-12-11T19:00:00+01:00", availability: "https://schema.org/InStock" }] },
  "perlenschmuck": { name: "Schmuck-Boutique", description: "Kreiere festlichen Schmuck für die Vorweihnachtszeit oder als persönliche Geschenkidee.", image: "workshop-paperpearls-1200.jpg", startDate: "2026-11-06T16:30:00+01:00", endDate: "2026-11-06T19:00:00+01:00", price: "49" },
  "adventskranz": { name: "Adventskranz gestalten", description: "Binde und gestalte Deinen persönlichen Adventskranz aus Tannengrün und Naturmaterialien.", image: "assets/workshop-adventskranz-4-kerzen.jpg", startDate: "2026-11-13T19:00:00+01:00", endDate: "2026-11-13T21:00:00+01:00", bookingDateLabel: "13. November 2026, 19:00–21:00 Uhr", price: "69", sessions: [{ startDate: "2026-11-13T16:30:00+01:00", endDate: "2026-11-13T19:00:00+01:00", availability: "https://schema.org/SoldOut" }, { startDate: "2026-11-13T19:00:00+01:00", endDate: "2026-11-13T21:00:00+01:00", availability: "https://schema.org/InStock" }] },
  "weihnachtliche-tuerkraenze-gestecke": { name: "Weihnachtliche Türkränze oder Gestecke", description: "Gestalte einen persönlichen weihnachtlichen Türkranz oder ein festliches Gesteck aus winterlichem Grün und Naturmaterialien.", image: "assets/workshop-weihnachtskranz-gesteck.jpg", startDate: "2026-12-03T16:30:00+01:00", endDate: "2026-12-03T19:00:00+01:00", price: "69" },
  "tassen-duftkerzen": { name: "Tassen-Duftkerzen als Geschenkidee", description: "Gieße zwei Duftkerzen in Vintage-Tassen als Weihnachtsgeschenk oder für Dich selbst.", image: "workshop-duftkerzen-atelier.jpg", startDate: "2026-12-04T16:30:00+01:00", endDate: "2026-12-04T19:00:00+01:00", price: "39" },
  "makramee-weihnachtsfeier": { name: "Weihnachtsfeier mit Makramee und Glühwein", description: "Kreativer Jahresabschluss mit Makramee, Plätzchen, Glühwein und einer kleinen Überraschung.", image: "workshop-makramee-atelier.jpg", startDate: "2026-11-20T16:30:00+01:00", endDate: "2026-11-20T20:00:00+01:00", price: "59" },
  "retreat-ulrichshusen": { name: "Bloom & Balance Retreat", description: "Drei Tage mit Bewegung, Körperwahrnehmung, Kreativität und Erholung auf Schloss Ulrichshusen.", image: "retreat-flowers-lake-1400.jpg", startDate: "2027-04-02T12:00:00+02:00", endDate: "2027-04-04T16:00:00+02:00", retreat: true, offers: [{ name: "Einzelzimmer", price: "1499" }, { name: "Doppelzimmer pro Person", price: "1299" }] }
};

const slug = document.body.dataset.event;
const event = events[slug];

document.querySelectorAll('video[data-playback-rate]').forEach((video) => {
  const rate = Number(video.dataset.playbackRate);
  if (!Number.isFinite(rate) || rate <= 0) return;

  const applyPlaybackRate = () => {
    video.defaultPlaybackRate = rate;
    video.playbackRate = rate;
  };

  applyPlaybackRate();
  video.addEventListener('loadedmetadata', applyPlaybackRate, { once: true });
});

if (event) {
  document.body.classList.add("event-page");

  const homeUrl = event.retreat ? "../" : "../../";
  const assetsUrl = `${homeUrl}assets/`;
  const canonicalUrl = document.querySelector('link[rel="canonical"]')?.href || window.location.href;
  const imageUrl = event.image.includes("/")
    ? `https://klarundkunter.de/${event.image}`
    : `https://klarundkunter.de/KuK%20Bilder/optimized/${event.image}`;
  const instagramUrl = "https://www.instagram.com/klar_und_kunter_workshops/";
  const baseWhatsapp = "https://wa.me/491749845286";
  const dateLabel = [...document.querySelectorAll(".facts dt")].find((label) => ["Termin", "Termine"].includes(label.textContent.trim()));
  const dateValue = event.bookingDateLabel || dateLabel?.parentElement?.querySelector("dd")?.textContent.trim() || "";
  const message = [event.retreat ? "Hallo Jeannette, ich möchte gern dieses Retreat anfragen:" : "Hallo Jeannette, ich möchte gern diesen Workshop anfragen:", "", event.name, dateValue ? `Termin: ${dateValue}` : ""].filter(Boolean).join("\n");
  const whatsappUrl = `${baseWhatsapp}?text=${encodeURIComponent(message)}`;

  const header = document.querySelector(".site-header");
  if (header) {
    header.dataset.header = "";
    header.innerHTML = `
      <a class="brand" href="${homeUrl}" aria-label="Klar & Kunter – Startseite"><img src="${assetsUrl}logo.png" alt="Klar & Kunter"></a>
      <nav id="main-nav" class="main-nav" aria-label="Hauptnavigation">
        <a href="${homeUrl}#workshops">Workshops</a>
        <a href="${homeUrl}#retreat">Retreat</a>
        <a href="${homeUrl}#impressionen">Impressionen</a>
        <a href="${homeUrl}#about">Über mich</a>
        <a class="nav-cta" href="#anfragen">Platz anfragen</a>
      </nav>
      <div class="header-tools" aria-label="Direktkontakt">
        <a class="header-social header-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" aria-label="${event.retreat ? "Retreat" : event.name} per WhatsApp anfragen"><img src="${assetsUrl}icons/whatsapp.svg" alt=""></a>
        <a class="header-social header-instagram" href="${instagramUrl}" target="_blank" rel="noopener noreferrer" aria-label="Klar & Kunter auf Instagram öffnen"><img src="${assetsUrl}icons/instagram.svg" alt=""></a>
        <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-nav"><span></span><span></span><span></span><span class="sr-only">Menü öffnen</span></button>
      </div>`;
    if (event.soldOut) {
      const navCta = header.querySelector(".nav-cta");
      if (navCta) {
        navCta.href = `${homeUrl}#workshops`;
        navCta.textContent = "Weitere Workshops";
      }
    }
  }

  const updateHeader = () => header?.classList.toggle("scrolled", window.scrollY > 18);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const menuButton = document.querySelector(".menu-toggle");
  const menuLabel = menuButton?.querySelector(".sr-only");
  const nav = document.querySelector(".main-nav");
  const closeMenu = () => {
    menuButton?.setAttribute("aria-expanded", "false");
    if (menuLabel) menuLabel.textContent = "Menü öffnen";
    nav?.classList.remove("open");
    document.body.style.overflow = "";
  };

  menuButton?.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    if (menuLabel) menuLabel.textContent = open ? "Menü öffnen" : "Menü schließen";
    nav?.classList.toggle("open", !open);
    document.body.style.overflow = open ? "" : "hidden";
  });
  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

  const venueLabel = [...document.querySelectorAll(".facts dt")].find((label) => label.textContent.trim() === "Ort");
  const venueValue = venueLabel?.parentElement?.querySelector("dd");
  if (venueValue && !event.retreat) {
    const link = document.createElement("a");
    link.className = "venue-link";
    link.href = "https://interkulturanstalten.de/";
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = venueValue.textContent;
    venueValue.replaceChildren(link);
  }

  const bookingButton = document.querySelector('.event-copy > .button[href^="mailto:"]');
  const emailUrl = bookingButton?.href || "mailto:klarundkunter@gmail.com";

  if (bookingButton && !event.soldOut) {
    const actions = document.createElement("div");
    actions.className = "event-actions";
    actions.innerHTML = `<a class="button button-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"><img src="${assetsUrl}icons/whatsapp.svg" alt="">${event.retreat ? "Retreat anfragen" : "Per WhatsApp anfragen"}</a>`;
    bookingButton.classList.add("button-secondary");
    bookingButton.textContent = "Per E-Mail anfragen";
    bookingButton.parentElement.insertBefore(actions, bookingButton);
    actions.appendChild(bookingButton);
  }

  const layout = document.querySelector(".event-layout");
  if (layout) {
    layout.classList.add("reveal");
    const ticker = document.createElement("div");
    ticker.className = "ticker";
    ticker.setAttribute("aria-label", "Angebotsmerkmale");
    const items = event.retreat
      ? "<span>Zeit zum Auftanken</span><i></i><span>Bewegung & Kreativität</span><i></i><span>Persönlich begleitet</span><i></i><span>Ohne Vorkenntnisse</span><i></i>"
      : "<span>Come as you are</span><i></i><span>Ohne Vorkenntnisse</span><i></i><span>Alle Materialien inklusive</span><i></i><span>Maximal 10 Personen</span><i></i>";
    ticker.innerHTML = `<div class="ticker-track">${items}${items}</div>`;
    layout.insertAdjacentElement("afterend", ticker);
  }

  const details = document.querySelector(".event-details");
  if (details) {
    details.classList.add("reveal");
    const closing = document.createElement("section");
    closing.id = "anfragen";
    closing.className = "closing-cta reveal";
    closing.innerHTML = event.soldOut
      ? `<div><p class="eyebrow">Dieser Termin ist ausgebucht</p><h2>Entdecke die nächsten kreativen Abende.</h2><p>Schau Dir die weiteren Workshops an – vielleicht ist dort Dein nächster Lieblingsabend dabei.</p></div><div class="closing-actions"><a class="button button-neon" href="${homeUrl}#workshops">Weitere Workshops</a></div>`
      : `<div><p class="eyebrow">Dein Platz am Tisch</p><h2>${event.retreat ? "Bereit für drei Tage nur für Dich?" : "Lust, einfach mal wieder zu machen?"}</h2><p>${event.retreat ? "Schreib mir kurz – ich beantworte Deine Fragen persönlich und unverbindlich." : "Schreib mir kurz, ob dieser Termin zu Dir passt. Ich melde mich persönlich bei Dir."}</p></div>
      <div class="closing-actions"><a class="button button-neon" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"><img src="${assetsUrl}icons/whatsapp.svg" alt="">WhatsApp öffnen</a><a class="button button-outline" href="${emailUrl}">E-Mail schreiben</a></div>`;
    details.insertAdjacentElement("afterend", closing);
  }

  const mobileBar = document.createElement("nav");
  mobileBar.className = "mobile-contact-bar";
  mobileBar.setAttribute("aria-label", "Schnellkontakt");
  mobileBar.innerHTML = `<a class="mobile-contact-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer"><img src="${assetsUrl}icons/whatsapp.svg" alt=""><span>${event.retreat ? "Retreat anfragen" : "Platz anfragen"}</span></a><a class="mobile-contact-instagram" href="${instagramUrl}" target="_blank" rel="noopener noreferrer"><img src="${assetsUrl}icons/instagram.svg" alt=""><span>Instagram</span></a>`;
  document.body.appendChild(mobileBar);

  const footer = document.querySelector(".site-footer");
  if (footer) {
    footer.innerHTML = `<a class="footer-brand" href="${homeUrl}" aria-label="Klar & Kunter – Startseite"><img src="${assetsUrl}logo.png" alt="Klar & Kunter"></a><p>Kreative Workshops in Berlin-Charlottenburg.</p><div><a href="${homeUrl}#workshops">Workshops</a><a href="${homeUrl}wissen/kreativitaet-stress-reduzieren/">Kreativität & Stress</a><a href="${homeUrl}impressum/">Impressum</a><a href="${homeUrl}datenschutz/">Datenschutz</a></div><small>© 2026 Klar & Kunter · Jeannette Sachse</small>`;
  }

  const location = event.retreat
    ? { "@type": "Place", name: "Schloss & Gut Ulrichshusen", address: { "@type": "PostalAddress", streetAddress: "Seestraße 14", postalCode: "17194", addressLocality: "Ulrichshusen", addressCountry: "DE" } }
    : { "@type": "Place", name: "Ulme 35", url: "https://interkulturanstalten.de/", address: { "@type": "PostalAddress", streetAddress: "Ulmenallee 35", postalCode: "14050", addressLocality: "Berlin", addressCountry: "DE" } };
  const makeOffers = (availability = "https://schema.org/InStock") => event.offers ? event.offers.map((offer) => ({ "@type": "Offer", name: offer.name, url: canonicalUrl, price: offer.price, priceCurrency: "EUR", availability })) : event.price ? { "@type": "Offer", url: canonicalUrl, price: event.price, priceCurrency: "EUR", availability } : undefined;
  const makeStructuredEvent = (startDate, endDate, availability) => {
    const item = { "@context": "https://schema.org", "@type": "Event", name: event.name, description: event.description, image: imageUrl, url: canonicalUrl, startDate, endDate, eventStatus: "https://schema.org/EventScheduled", eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode", location, organizer: { "@type": "Organization", name: "Klar & Kunter", url: "https://klarundkunter.de/", sameAs: instagramUrl } };
    const offers = makeOffers(availability);
    if (offers) item.offers = offers;
    return item;
  };
  const structuredData = event.sessions
    ? event.sessions.map((session) => makeStructuredEvent(session.startDate, session.endDate, session.availability))
    : makeStructuredEvent(event.startDate, event.endDate, event.soldOut ? "https://schema.org/SoldOut" : "https://schema.org/InStock");
  const structuredDataScript = document.createElement("script");
  structuredDataScript.type = "application/ld+json";
  structuredDataScript.textContent = JSON.stringify(structuredData);
  document.head.appendChild(structuredDataScript);

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/svg+xml";
  favicon.href = "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 64 64%22><rect width=%2264%22 height=%2264%22 rx=%2232%22 fill=%22%23B7FF00%22/><path d=%22M21 18v28M43 18 22 33l22 13%22 fill=%22none%22 stroke=%22%230A0A0A%22 stroke-width=%225%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22/></svg>";
  document.head.appendChild(favicon);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}
