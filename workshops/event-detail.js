const events = {
  "herbstblumenkranz": {
    name: "Herbstblumenkränze",
    description: "Binde Deinen eigenen Herbstblumenkranz mit Blüten, Farben und Naturmaterialien.",
    image: "workshop-midsommar-1200.jpg",
    startDate: "2026-09-25T16:30:00+02:00",
    endDate: "2026-09-25T19:00:00+02:00",
    price: "49"
  },
  "herbstschalen-teil-1": {
    name: "Herbstschalen aus Ton inklusive Brennen – Teil 1",
    description: "Forme Deine eigene Herbstschale aus Ton. Materialien und Brennen sind inklusive.",
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
    name: "Bemalen der Herbstschalen inklusive Brennen – Teil 2",
    description: "Bemale Deine Herbstschale mit eigenen Motiven. Materialien und Brennen sind inklusive.",
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
    startDate: "2026-10-09T12:00:00+02:00",
    endDate: "2026-10-11T16:00:00+02:00",
    retreat: true,
    offers: [
      { name: "Einzelzimmer", price: "1499" },
      { name: "Doppelzimmer pro Person", price: "1299" }
    ]
  }
};

const slug = document.body.dataset.event;
const event = events[slug];

if (event) {
  const canonicalUrl = document.querySelector('link[rel="canonical"]').href;
  const imageUrl = `https://klarundkunter.de/KuK%20Bilder/optimized/${event.image}`;
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

  const venueLabel = [...document.querySelectorAll(".facts dt")]
    .find((label) => label.textContent.trim() === "Ort");
  const venueValue = venueLabel?.parentElement?.querySelector("dd");

  if (venueValue && !event.retreat) {
    const venueLink = document.createElement("a");
    venueLink.className = "venue-link";
    venueLink.href = "https://interkulturanstalten.de/";
    venueLink.textContent = venueValue.textContent;
    venueValue.replaceChildren(venueLink);
  }

  const footerLinks = document.querySelector(".site-footer-inner");
  if (footerLinks) {
    const instagramLink = document.createElement("a");
    instagramLink.href = "https://www.instagram.com/klar_und_kunter_workshops/";
    instagramLink.textContent = "Instagram";
    footerLinks.insertBefore(instagramLink, footerLinks.lastElementChild);
  }
}
