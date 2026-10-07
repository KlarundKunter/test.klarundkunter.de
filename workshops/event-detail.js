const events = {
  "herbstschalen-teil-1": {
    name: "Schalen aus Ton inklusive Brennen – Teil 1",
    description: "Teil 1 des zweiteiligen Tonkurses am 2. und 23. Oktober. Beide Termine werden gemeinsam gebucht, dazwischen liegt der erste Brand.",
    image: "workshop-ton1-1200.jpg",
    startDate: "2026-10-02T16:30:00+02:00",
    endDate: "2026-10-02T19:00:00+02:00",
    price: "34"
  },
  "kerzenhalter-omas-fundus": {
    name: "Kerzenhalter aus Omas Fundus",
    description: "Kombiniere Vintage-Gläser zu einem individuellen Kerzenhalter für eine Stabkerze.",
    image: "workshop-kerzenhalter-glaeser-atelier.jpg",
    startDate: "2026-10-16T16:30:00+02:00",
    endDate: "2026-10-16T19:00:00+02:00",
    price: "39"
  },
  "herbstschalen-teil-2": {
    name: "Bemalen der Tonschalen inklusive Brennen – Teil 2",
    description: "Teil 2 des zweiteiligen Tonkurses am 2. und 23. Oktober. Beide Termine werden gemeinsam gebucht, da die Schale zwischen den Terminen gebrannt wird.",
    image: "workshop-ton2-1200.jpg",
    startDate: "2026-10-23T16:30:00+02:00",
    endDate: "2026-10-23T19:00:00+02:00",
    price: "34"
  },
  "mosaik-flaschenlampe": {
    name: "Mosaik-Flaschen-Lampe",
    description: "Gestalte aus einer Flasche, buntem Mosaik und einem kleinen Lampenschirm Deine eigene Lampe.",
    image: "workshop-mosaik-flaschenlampe-atelier.jpg",
    startDate: "2026-10-30T16:30:00+01:00",
    endDate: "2026-10-30T19:00:00+01:00",
    price: "45"
  },
  "wunschthema": {
    name: "Wunschthema der Teilnehmerinnen und Teilnehmer",
    description: "Die Gruppe bestimmt das DIY-Thema des gemeinsamen kreativen Abends.",
    image: "workshop-wunschthema-atelier.jpg",
    startDate: "2026-11-06T16:30:00+01:00",
    endDate: "2026-11-06T19:00:00+01:00"
  },
  "adventskranz": {
    name: "Adventskranz gestalten",
    description: "Binde und gestalte Deinen persönlichen Adventskranz aus Tannengrün und Naturmaterialien.",
    image: "workshop-adventskranz-atelier.jpg",
    startDate: "2026-11-13T16:30:00+01:00",
    endDate: "2026-11-13T19:00:00+01:00",
    price: "69"
  },
  "weihnachtskarten": {
    name: "Weihnachtskarten mit Stanzen",
    description: "Gestalte individuelle Weihnachtskarten mit Stanzen, Papier und vorbereiteten Materialien.",
    image: "workshop-weihnachtskarten-atelier.jpg",
    startDate: "2026-11-20T16:30:00+01:00",
    endDate: "2026-11-20T19:00:00+01:00",
    price: "29"
  },
  "tassen-duftkerzen": {
    name: "Tassen-Duftkerzen als Geschenkidee",
    description: "Gieße zwei Duftkerzen in Vintage-Tassen als Weihnachtsgeschenk oder für Dich selbst.",
    image: "workshop-duftkerzen-atelier.jpg",
    startDate: "2026-12-04T16:30:00+01:00",
    endDate: "2026-12-04T19:00:00+01:00",
    price: "39"
  },
  "makramee-weihnachtsfeier": {
    name: "Weihnachtsfeier mit Makramee und Glühwein",
    description: "Kreativer Jahresabschluss mit Makramee, Plätzchen, Glühwein und einer kleinen Überraschung.",
    image: "workshop-makramee-atelier.jpg",
    startDate: "2026-12-11T16:30:00+01:00",
    endDate: "2026-12-11T20:00:00+01:00",
    price: "59"
  },
  "retreat-ulrichshusen": {
    name: "Bloom & Balance Retreat",
    description: "Drei Tage mit Bewegung, Körperwahrnehmung, Kreativität und Erholung auf Schloss Ulrichshusen.",
    image: "retreat-flowers-lake-1400.jpg",
    startDate: "2027-04-02T12:00:00+02:00",
    endDate: "2027-04-04T16:00:00+02:00",
    retreat: true,
    offers: [
      { name: "Einzelzimmer", price: "1499" },
      { name: "Doppelzimmer pro Person", price: "1299" }
    ]
  }
};

const whatsappIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.4-4.7A8.5 8.5 0 1 1 20.5 11.7Z"></path><path d="M8.2 7.9c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.6.7c.8 1.7 2.1 3 3.8 3.7l.7-.8c.2-.2.4-.3.7-.2l1.8.8c.3.1.4.3.4.6v.5c0 .4-.2.7-.5.9-.6.4-1.3.6-2 .5-3.8-.5-6.8-3.5-7.3-7.3-.1-.6.1-1.3.5-1.8Z"></path></svg>';
const instagramIcon = '<svg viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>';

const slug = document.body.dataset.event;
const event = events[slug];

if (event) {
  const homeUrl = event.retreat ? "../" : "../../";
  const canonicalUrl = document.querySelector('link[rel="canonical"]').href;
  const imageUrl = `https://klarundkunter.de/KuK%20Bilder/optimized/${event.image}`;
  const header = document.querySelector(".site-header");

  if (header) {
    header.innerHTML = `
      <div class="header-inner">
        <a class="brand" href="${homeUrl}" aria-label="Klar und Kunter Startseite">
          <span class="brand-mark" aria-hidden="true">K&amp;K</span>
          <span class="brand-copy"><strong>Klar &amp; Kunter</strong><small>Kreativ-Workshops Berlin</small></span>
        </a>
        <nav class="detail-nav" aria-label="Seitennavigation">
          <a href="${homeUrl}#workshops">Workshops</a>
          <a href="${homeUrl}#retreats">Retreats</a>
          <a class="nav-label-optional" href="${homeUrl}#about-me">Über mich</a>
          <a class="social-link whatsapp-link" href="https://wa.me/491749845286" target="_blank" rel="noopener" aria-label="WhatsApp-Chat mit Klar und Kunter öffnen">${whatsappIcon}<span>WhatsApp</span></a>
          <a class="social-link" href="https://www.instagram.com/klar_und_kunter_workshops/" target="_blank" rel="noopener" aria-label="Klar und Kunter auf Instagram öffnen">${instagramIcon}<span>Instagram</span></a>
        </nav>
      </div>`;
  }

  const location = event.retreat
    ? {
        "@type": "Place",
        name: "Schloss & Gut Ulrichshusen",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Seestraße 14",
          postalCode: "17194",
          addressLocality: "Ulrichshusen",
          addressCountry: "DE"
        }
      }
    : {
        "@type": "Place",
        name: "Ulme 35",
        url: "https://interkulturanstalten.de/",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Ulmenallee 35",
          postalCode: "14050",
          addressLocality: "Berlin",
          addressCountry: "DE"
        }
      };

  const offers = event.offers
    ? event.offers.map((offer) => ({
        "@type": "Offer",
        name: offer.name,
        url: canonicalUrl,
        price: offer.price,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock"
      }))
    : event.price
      ? {
          "@type": "Offer",
          url: canonicalUrl,
          price: event.price,
          priceCurrency: "EUR",
          availability: "https://schema.org/InStock"
        }
      : undefined;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.name,
    description: event.description,
    image: imageUrl,
    url: canonicalUrl,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location,
    organizer: {
      "@type": "Organization",
      name: "Klar & Kunter",
      url: "https://klarundkunter.de/",
      sameAs: "https://www.instagram.com/klar_und_kunter_workshops/"
    }
  };

  if (offers) structuredData.offers = offers;

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(structuredData);
  document.head.appendChild(script);

  const favicon = document.createElement("link");
  favicon.rel = "icon";
  favicon.type = "image/svg+xml";
  favicon.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='22' fill='%23f5deda'/%3E%3Ctext x='32' y='40' text-anchor='middle' font-family='Georgia' font-size='25' fill='%23955d59'%3EK%26K%3C/text%3E%3C/svg%3E";
  document.head.appendChild(favicon);

  const venueLabel = [...document.querySelectorAll(".facts dt")]
    .find((label) => label.textContent.trim() === "Ort");
  const venueValue = venueLabel?.parentElement?.querySelector("dd");

  if (venueValue && !event.retreat) {
    const venueLink = document.createElement("a");
    venueLink.className = "venue-link";
    venueLink.href = "https://interkulturanstalten.de/";
    venueLink.target = "_blank";
    venueLink.rel = "noopener";
    venueLink.textContent = venueValue.textContent;
    venueValue.replaceChildren(venueLink);
  }

  const dateLabel = [...document.querySelectorAll(".facts dt")]
    .find((label) => ["Termin", "Termine"].includes(label.textContent.trim()));
  const dateValue = dateLabel?.parentElement?.querySelector("dd")?.textContent.trim() || "";
  const message = [
    event.retreat ? "Hallo, ich möchte gern dieses Retreat anfragen:" : "Hallo, ich möchte gern diesen Workshop anfragen:",
    "",
    event.name,
    dateValue ? "Termin: " + dateValue : ""
  ].filter(Boolean).join("\n");
  const whatsappUrl = "https://wa.me/491749845286?text=" + encodeURIComponent(message);
  const bookingButton = document.querySelector('.event-copy > .button[href^="mailto:"]');
  const emailUrl = bookingButton?.href || "mailto:klarundkunter@gmail.com";

  if (bookingButton) {
    const actions = document.createElement("div");
    const whatsappButton = document.createElement("a");
    actions.className = "event-actions";
    whatsappButton.className = "button button-whatsapp";
    whatsappButton.href = whatsappUrl;
    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener";
    whatsappButton.textContent = event.retreat ? "Retreat per WhatsApp anfragen" : "Per WhatsApp anfragen";
    bookingButton.classList.add("button-secondary");
    bookingButton.textContent = "Per E-Mail anfragen";
    bookingButton.parentElement.insertBefore(actions, bookingButton);
    actions.append(whatsappButton, bookingButton);
  }

  const eventLayout = document.querySelector(".event-layout");
  if (eventLayout) {
    const trustStrip = document.createElement("section");
    trustStrip.className = "trust-strip";
    trustStrip.setAttribute("aria-label", "Das ist inklusive");
    trustStrip.innerHTML = event.retreat
      ? "<span>Ohne Vorkenntnisse</span><span>Persönlich begleitet</span><span>Kreativität & Bewegung</span><span>Zeit zum Auftanken</span>"
      : "<span>Ohne Vorkenntnisse</span><span>Alle Materialien inklusive</span><span>Maximal 10 Personen</span><span>Snacks & infused water</span>";
    eventLayout.insertAdjacentElement("afterend", trustStrip);
  }

  const details = document.querySelector(".event-details");
  if (details) {
    const closing = document.createElement("section");
    closing.className = "closing-cta";
    closing.innerHTML = `
      <div>
        <p class="eyebrow">Deine kreative Auszeit</p>
        <h2>${event.retreat ? "Bereit für drei Tage nur für Dich?" : "Möchtest Du Dir Deinen Platz sichern?"}</h2>
        <p>${event.retreat ? "Schreib mir kurz – ich beantworte Deine Fragen persönlich und unverbindlich." : "Schreib mir einfach per WhatsApp oder E-Mail. Ich melde mich persönlich bei Dir zurück."}</p>
      </div>
      <div class="closing-actions">
        <a class="button button-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener">WhatsApp öffnen</a>
        <a class="button button-secondary" href="${emailUrl}">E-Mail schreiben</a>
      </div>`;
    details.insertAdjacentElement("afterend", closing);
  }

  const floating = document.createElement("aside");
  floating.className = "floating-contact";
  floating.setAttribute("aria-label", "Schnellkontakt");
  floating.innerHTML = `
    <a class="floating-whatsapp" href="${whatsappUrl}" target="_blank" rel="noopener" aria-label="WhatsApp öffnen" title="WhatsApp öffnen">${whatsappIcon}</a>
    <a href="https://www.instagram.com/klar_und_kunter_workshops/" target="_blank" rel="noopener" aria-label="Instagram öffnen" title="Instagram öffnen">${instagramIcon}</a>`;
  document.body.appendChild(floating);

  const footer = document.querySelector(".site-footer-inner");
  if (footer) {
    footer.innerHTML = `
      <span>© Klar &amp; Kunter</span>
      <span class="footer-links">
        <a href="${homeUrl}#workshops">Alle Workshops</a>
        <a href="${homeUrl}#kontakt">Kontakt</a>
        <a href="${homeUrl}#impressum">Impressum</a>
        <a href="${homeUrl}#datenschutz">Datenschutz</a>
      </span>`;
  }
}
