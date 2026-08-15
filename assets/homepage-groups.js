/* Strukturierte Gruppenübersicht für den direkten Einstieg auf der Startseite. */
(() => {
  const editableContent = window.KGL_CONTENT || {};
  const groups = `<section class="group-fastlane" data-organized="true" aria-labelledby="fastlane-title"><section class="club-areas" aria-labelledby="fastlane-title"><div class="club-areas-heading"><p class="kicker">Unsere Gruppen</p><h2 id="fastlane-title">Finde deinen Platz<br>bei den <span>Lachatrappern</span>.</h2><p class="club-areas-intro">Ob auf der Bühne, mit Maske, im Elferrat oder hinter den Kulissen: Bei uns findet jede und jeder den eigenen Platz in der Fasnet.</p></div><div class="area-filters" aria-label="Gruppen nach Bereich filtern"><button class="area-filter" type="button" data-area-filter="garden" data-area-label="Garden &amp; Sportabteilung" aria-pressed="false"><img class="area-symbol" src="assets/images/group-symbols/garden-sport-symbol.png" alt=""><span>Bereich</span><strong>Garden &amp;<br>Sportabteilung</strong><small>6 Gruppen</small></button><button class="area-filter" type="button" data-area-filter="elferrat" data-area-label="Elferrat" aria-pressed="false"><img class="area-symbol" src="assets/images/group-symbols/elferrat-symbol.png" alt=""><span>Bereich</span><strong>Elferrat</strong><small>1 Gruppe</small></button><button class="area-filter" type="button" data-area-filter="masken" data-area-label="Maskengruppe" aria-pressed="false"><img class="area-symbol" src="assets/images/group-symbols/maskengruppe-symbol.png" alt=""><span>Bereich</span><strong>Maskengruppe</strong><small>1 Gruppe</small></button></div><section class="all-groups" aria-labelledby="all-groups-title"><div class="all-groups-top"><div class="all-groups-heading"><div><p class="kicker">Auf einen Blick</p><h3 id="all-groups-title" aria-live="polite">Alle Gruppen</h3></div><p class="all-groups-count" aria-live="polite">8 Gruppen</p></div><figure class="groups-visual"><img src="assets/vereins-symbole.png" alt="Schirm, Präsidentenstab, Maske, Zepter und Gardetanzschuhe der Lachatrapper"></figure></div><div class="all-groups-grid"><a class="fastlane-card" data-area="elferrat" href="#/gruppen"><small>Elferrat</small><strong>Fasnet gestalten</strong><span>Programm &amp; Verein</span><b>→</b></a><a class="fastlane-card" data-area="masken" href="#/gruppen"><small>Maskengruppe „Lachatrapper“</small><strong>Maske &amp; Brauchtum</strong><span>Die Lachatrapper-Figur</span><b>→</b></a><a class="fastlane-card" data-area="garden" href="#/gruppen"><small>Tanzmariechen</small><strong>nach Absprache</strong><span>Einzel- &amp; Paartanz</span><b>→</b></a><a class="fastlane-card" data-area="garden" href="#/gruppen"><small>Prinzengarde</small><strong>ab 15</strong><span>Jahre</span><b>→</b></a><a class="fastlane-card" data-area="garden" href="#/gruppen"><small>Rote Funken</small><strong>9–14</strong><span>Jahre</span><b>→</b></a><a class="fastlane-card" data-area="garden" href="#/gruppen"><small>Rot-Weiße Garde</small><strong>5–8</strong><span>Jahre</span><b>→</b></a><a class="fastlane-card" data-area="garden" href="#/gruppen"><small>Kindergarde</small><strong>5–8</strong><span>Jahre</span><b>→</b></a><a class="fastlane-card" data-area="garden" href="#/gruppen"><small>Tanzmäuse</small><strong>3–5</strong><span>Jahre</span><b>→</b></a></div></section></section></section>`;

  const groupRoutes = {"Tanzmäuse":"#/gruppe-tanzmaeuse","Kindergarde":"#/gruppe-kindergarde","Rot-Weiße Garde":"#/gruppe-rot-weisse-garde","Rote Funken":"#/gruppe-rote-funken","Prinzengarde":"#/gruppe-prinzengarde","Tanzmariechen":"#/gruppe-tanzmariechen","Elferrat":"#/gruppe-elferrat-senat","Maskengruppe „Lachatrapper“":"#/gruppe-maskengruppe"};
  const governance = `<section class="governance-tier board"><header><span>Vorstand</span><p>Führt den Verein und verantwortet die zentralen Aufgaben.</p></header><div class="governance-roles"><span>Präsident/in</span><span>Vize-Präsident/in Karneval</span><span>Vize-Präsident/in Brauchtum</span><span>Schatzmeister/in</span><span>Schriftführer/in</span></div></section><section class="governance-tier presidium"><header><span>Präsidium</span><p>Besteht aus dem Vorstand sowie den Ressortleitungen.</p></header><div class="governance-roles"><strong>Vorstand</strong><span>Technische Leitung</span><span>Sportabteilungsleitung</span><span>Jugendleitung</span><span>Maskenmeister/in</span></div></section><section class="governance-tier committee"><header><span>Komitee</span><p>Verbindet die Vereinsführung mit den aktiven Bereichen.</p></header><div class="governance-roles"><strong>Präsidium</strong><span>Betreuung Garden</span><span>Elferräte mit Komiteestimme</span><span>Betreuung Elferrat</span><span>Betreuung Maskenkinder</span><span>Betreuung Maskentanz</span></div></section><section class="governance-tier association"><header><span>Gesamtverein</span><p>Hier kommen alle Bereiche des Vereins zusammen.</p></header><div class="governance-roles areas"><strong>Komitee</strong><span>Garden &amp; Sportabteilung</span><span>Elferrat</span><span>Maskengruppe</span></div></section>`;

  function emphasizeGroupNames(section) {
    section.querySelectorAll(".fastlane-card").forEach((card) => {
      if (card.dataset.focused) return;
      const name = card.querySelector("small")?.textContent.trim() || "";
      const primary = card.querySelector("strong")?.textContent.trim() || "";
      const secondary = card.querySelector("span")?.textContent.trim() || "";
      const arrow = card.querySelector("b")?.textContent.trim() || "→";
      const route = groupRoutes[name];
      const slug = route?.replace("#/gruppe-", "");
      const configuredAge = slug ? editableContent.groups?.[slug]?.age : "";
      const detailText = /^(?:\d|ab\s|nach\s|einstieg)/i.test(configuredAge || "") ? configuredAge : [primary, secondary].filter(Boolean).join(" · ");
      const isAge = /^(?:\d|ab\s|nach\s|einstieg)/i.test(detailText);
      if (route) card.setAttribute("href", route);

      card.replaceChildren();
      const heading = document.createElement("strong");
      heading.className = "group-name";
      heading.textContent = name;
      const detail = document.createElement("span");
      detail.className = isAge ? "age-badge" : "group-detail";
      detail.textContent = detailText;
      const direction = document.createElement("b");
      direction.setAttribute("aria-hidden", "true");
      direction.textContent = arrow;
      card.append(heading, detail, direction);
      card.dataset.focused = "true";
    });
  }

  function moveOrganisationToOwnPage() {
    if (location.hash !== "#/ueber-uns") return;
    const legacyGrid = document.querySelector("#content .role-grid");
    if (!legacyGrid || legacyGrid.dataset.organisationTeaserReady) return;
    const section = legacyGrid.closest(".section");
    const heading = section?.querySelector(".section-heading");
    if (!section || !heading) return;
    section.classList.add("organisation-teaser");
    heading.innerHTML = `<div><p class="kicker">Organisation</p><h2 class="section-title">Verantwortung<br>im Verein.</h2></div><p>Wie Vorstand, Präsidium, Komitee und Gesamtverein zusammenarbeiten, zeigt die eigene Organisationsseite.</p>`;
    legacyGrid.className = "organisation-teaser-action";
    legacyGrid.innerHTML = `<a href="#/organisation"><span>Gremienstruktur</span><strong>Organisation ansehen</strong><b aria-hidden="true">→</b></a>`;
    legacyGrid.dataset.organisationTeaserReady = "true";
  }

  function addOrganisationContacts() {
    if (location.hash !== "#/organisation") return;
    const chart = document.querySelector("#content .organisation-page .governance-chart");
    if (!chart || chart.nextElementSibling?.classList.contains("organisation-contacts")) return;
    const contactCard = (name, role, address) => `<article class="organisation-contact"><p>${role}</p><h3>${name}</h3><a href="mailto:${address}?subject=Kontakt%20%C3%BCber%20die%20Website">Kontakt aufnehmen <b aria-hidden="true">→</b></a></article>`;
    const fallbackBoard = [{role:"Präsidentin",name:"Lena Blötz",email:"praesidentin@lachatrapper.de"},{role:"Vizepräsident Karneval",name:"Dominik Schwenk",email:"vize-karneval@lachatrapper.de"},{role:"Vizepräsident Brauchtum",name:"Moritz Michalik",email:"vize-brauchtum@lachatrapper.de"},{role:"Schatzmeister",name:"Jens Barner",email:"schatzmeister@lachatrapper.de"},{role:"Schriftführer & Admin",name:"Jürgen Burdack",email:"schriftfuehrer@lachatrapper.de"}];
    const fallbackPresidium = [{role:"Maskenmeister",name:"Paul Saier",email:"maskenmeister@lachatrapper.de"},{role:"Jugendleiterin",name:"Sarah Szybalski",email:"jugendleitung@lachatrapper.de"},{role:"Sportabteilungsleiterin",name:"Christa Brejl",email:"sportabteilung@lachatrapper.de"},{role:"Technischer Leiter",name:"Daniel Guter",email:"technischer-leiter@lachatrapper.de"}];
    const board = Array.isArray(editableContent.organization?.board) ? editableContent.organization.board : fallbackBoard;
    const presidium = Array.isArray(editableContent.organization?.presidium) ? editableContent.organization.presidium : fallbackPresidium;
    const contactCards = (people) => people.map((person) => contactCard(person.name, person.role, person.email)).join("");
    const contacts = document.createElement("section");
    contacts.className = "organisation-contacts";
    contacts.setAttribute("aria-label", "Ansprechpersonen des Vorstands und Präsidiums");
    contacts.innerHTML = `<div class="organisation-contacts-heading"><p class="kicker">Direkte Ansprechpartner</p><h2>Menschen hinter<br><em>der Organisation.</em></h2><p>Für Anliegen an Vorstand oder Präsidium genügt ein Klick – die Nachricht geht direkt an die jeweilige Funktionsadresse des Vereins.</p></div><section class="organisation-contact-group board-contacts"><header><p>Vorstand</p><span>Verantwortung für die zentralen Aufgaben des Vereins.</span></header><div>${contactCards(board)}</div></section><section class="organisation-contact-group presidium-contacts"><header><p>Präsidium</p><span>Ergänzt den Vorstand durch die Ressortleitungen.</span></header><div>${contactCards(presidium)}</div></section></section>`;
    chart.insertAdjacentElement("afterend", contacts);
  }

  function emphasizeGroupJourney() {
    document.querySelectorAll("#content .group-compact-copy h2").forEach((title) => {
      if (title.dataset.journeyReady || title.textContent.replace(/\s+/g, " ").trim() !== "Gemeinsam in die Fasnet.") return;
      title.innerHTML = "<em>Gemeinsam</em><br>in die Fasnet.";
      title.dataset.journeyReady = "true";
    });
  }

  function enrichHistory() {
    if (location.hash !== "#/geschichte") return;
    const content = document.querySelector("#content");
    if (!content || content.dataset.historyEnriched) return;

    const facts = content.querySelector(".facts");
    const associationFact = facts?.querySelectorAll("article")[2]?.querySelector("span");
    if (associationFact) associationFact.innerHTML = "Mitglied im Landesverband<br><small>seit 12.11.1976</small>";

    const historyCards = [...content.querySelectorAll(".section.alt .card")];
    const beginning = historyCards.find((card) => card.querySelector("h3")?.textContent.trim() === "Der Anfang");
    if (beginning) beginning.querySelector("p").textContent = "Im Herbst 1970 gründete Jürgen Greinacher die Karnevalgesellschaft. 1972 erfolgte unter Präsident Richard Reißner der Eintrag ins Vereinsregister. Elferrat, Prinzengarde und die „Schwellköpfe“ bildeten den Anfang – die Schwellköpfe standen für den Lachatrapper.";

    const development = historyCards.find((card) => card.querySelector("h3")?.textContent.trim() === "Brauchtum wächst");
    if (development) development.querySelector("p").textContent = "Tanzmäuse, Kindergarde, Rot-Weiße Garde und Rote Funken bilden heute den Nachwuchs für die Prinzengarde. Aus den Schwellköpfen entstand die Maskengruppe „Lachatrapper“. Die später gegründeten Doraweibla machten sich nach drei Jahren selbstständig.";

    const danceHeading = [...content.querySelectorAll(".two-column h2")].find((heading) => heading.textContent.replace(/\s+/g, " ").includes("Tanz & Jugend"));
    const danceText = danceHeading?.closest(".two-column")?.querySelector(".text");
    if (danceText) danceText.innerHTML = `<p>Im Jahr 2000 wurde die Sportabteilung gegründet, in der sämtliche Gardetänzerinnen und Gardetänzer organisiert sind. Am 12.08.2000 trat die KG Lachatrapper dem Schwäbischen Turnerbund (STB) sowie dem Württembergischen Landessportbund (WLSB) bei.</p><p>Gardetanz ist Hochleistungssport und braucht eine fundierte Ausbildung des Trainerstabs. Unsere Trainerinnen und Trainer werden über den STB ausgebildet und besitzen die Trainerlizenz C. Im Jahr 2001 nahm der Verein erstmals an Turnieren teil.</p>`;

    const originContext = content.querySelector(".two-column");
    if (originContext && !content.querySelector(".lachatrapper-origin")) {
      const origin = document.createElement("section");
      origin.className = "lachatrapper-origin";
      origin.setAttribute("aria-labelledby", "lachatrapper-origin-title");
      origin.innerHTML = `<div class="lachatrapper-origin-heading"><p class="kicker">Der Lachatrapper</p><h2 id="lachatrapper-origin-title">Vom Hochwasser<br>zur <em>Vereinsfigur.</em></h2></div><div class="lachatrapper-origin-layout"><div class="lachatrapper-origin-story"><p>Wenn früher bei Schneeschmelze oder Gewittern der Ruf „D’r Hohlweg kommt“ zu hören war, wurde es in Dornstadt ernst: Vom heutigen Hallenbad aus drängte das Wasser durch Tomerdinger, Lange, Kreuz- und Hirschstraße weiter Richtung Tobeltal.</p><p>Überflutete Keller und ein zeitweise geteiltes Dorf gehörten zur Erinnerung vieler Familien. Für Kinder war es zugleich ein außergewöhnlicher Tag – Schule fiel aus, und mit Back- oder Brühtrog wurde über das Wasser gefahren.</p><p>Nach dem Ablaufen blieben unzählige Pfützen zurück: schwäbisch „Lacha“. Daraus wurde der Dornstadter Spitzname „Lachatrapper“ – auf Hochdeutsch: Pfützentreter. Mit der Ortskanalisation gehören diese Überschwemmungen heute der Vergangenheit an.</p></div></div><div class="lachatrapper-origin-details"><article><h3>Ein derber Alb-Bauer.</h3><p>Die Maskengruppe stellt den Lachatrapper als Alb-Bauern dar: grüner Hut, schwarzes Nackentuch, schwarze Hose und roter Kittel mit rot-grüner Borte. Zum Häs gehört auch der Saatsack.</p><p class="lachatrapper-mask-caption">Die Lachatrapper-Maske trägt die Geschichte Dornstadts weiter.</p></article><figure class="lachatrapper-mask-detail"><img src="assets/images/history/lachatrapper-maske-schwarz-transparent.png" alt="Freigestellte Maske des Dornstadter Lachatrappers"></figure></div>`;
      originContext.insertAdjacentElement("afterend", origin);
    }

    content.dataset.historyEnriched = "true";
  }

  function softenGroupPhotoEdges() {
    document.querySelectorAll("#content .group-detail-hero").forEach((hero) => {
      const image = hero.querySelector(".group-hero-photo");
      if (!image || hero.dataset.edgeFadeReady) return;
      hero.style.setProperty("--group-hero-image", `url("${image.getAttribute("src")}")`);
      hero.dataset.edgeFadeReady = "true";
    });
  }

  function buildPrincelyPairsHero() {
    if (location.hash !== "#/prinzenpaare") return;
    const hero = document.querySelector("#content .hero.page-hero");
    if (!hero || hero.dataset.princelyHeroReady) return;
    hero.classList.add("group-detail-hero", "princely-pairs-hero");
    hero.innerHTML = `<img class="group-hero-photo" src="assets/images/hero/prinzenpaar-lachatrapper.webp" alt="Das amtierende Prinzenpaar der KG Lachatrapper Dornstadt"><div class="hero-copy"><p class="kicker">Unsere Hoheiten</p><h1>Unsere<br>Prinzenpaare.</h1><p>Mit Herz, Ausstrahlung und viel Freude repräsentieren unsere Hoheiten die Lachatrapper in der Kampagne 2025 / 2026.</p><a class="button cream" href="#/kontakt">Kontakt zum Verein <span>→</span></a></div>`;
    hero.dataset.princelyHeroReady = "true";
  }

  function enableAreaFilters(section) {
    if (section.dataset.filtersReady) return;
    const buttons = [...section.querySelectorAll(".area-filter")];
    const cards = [...section.querySelectorAll(".all-groups-grid .fastlane-card")];
    const title = section.querySelector("#all-groups-title");
    const count = section.querySelector(".all-groups-count");
    if (!buttons.length || !cards.length || !title || !count) return;

    const setFilter = (area = "all") => {
      const active = area !== "all" ? buttons.find((button) => button.dataset.areaFilter === area) : null;
      let visible = 0;
      buttons.forEach((button) => {
        const selected = button === active;
        button.classList.toggle("active", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
      cards.forEach((card) => {
        const show = area === "all" || card.dataset.area === area;
        card.hidden = !show;
        card.classList.toggle("is-filtered-out", !show);
        if (show) visible += 1;
      });
      title.textContent = active ? active.dataset.areaLabel : "Alle Gruppen";
      count.textContent = `${visible} ${visible === 1 ? "Gruppe" : "Gruppen"}`;
    };

    buttons.forEach((button) => button.addEventListener("click", () => {
      setFilter(button.classList.contains("active") ? "all" : button.dataset.areaFilter);
    }));
    section.dataset.filtersReady = "true";
  }

  function removeSymbols() {
    document.querySelector("#content .symbols")?.remove();
    document.querySelector("#content .groups-visual")?.remove();
  }

  function buildGroupsOverview() {
    if (location.hash !== "#/gruppen") return;
    const content = document.querySelector("#content");
    const hero = content?.querySelector(".groups-overview-hero");
    if (!content || !hero) return;

    if (!content.querySelector(".group-fastlane[data-organized]")) hero.insertAdjacentHTML("afterend", groups);

    const overview = content.querySelector(".group-fastlane[data-organized]");
    if (!overview) return;
    overview.querySelector(".groups-visual")?.remove();
    emphasizeGroupNames(overview);
    enableAreaFilters(overview);
  }

  function positionInstagramAfterGroups() {
    if (location.hash && location.hash !== "#/start") return;
    const groups = document.querySelector("#content .group-fastlane[data-organized]");
    const instagram = document.querySelector("#content .instagram");
    if (groups && instagram && groups.nextElementSibling !== instagram) groups.insertAdjacentElement("afterend", instagram);
  }

  function sharpenHero() {
    const hero = document.querySelector("#content .hero.red-green");
    if (!hero) return;
    buildFullHero(hero);
    return;
    const kicker = hero.querySelector(".hero-copy .kicker");
    const title = hero.querySelector(".hero-copy h1");
    const copy = hero.querySelector(".hero-copy > p:not(.kicker)");
    const actions = hero.querySelector(".hero-actions");
    if (kicker) kicker.textContent = "Werde Teil der Lachatrapper";
    if (title) title.innerHTML = `Fasnet, die<br>Menschen bewegt.`;
    if (copy) copy.textContent = "Ob Bühne, Maske, Elferrat oder hinter den Kulissen: Hier lachen, feiern und packen Menschen gemeinsam an. Komm dazu und mach Dornstadts Fasnet mit uns unvergesslich.";
    if (actions) actions.innerHTML = `<a class="button cream" href="#/gruppen">Gruppen entdecken <span>→</span></a><a class="button outline" href="https://easyverein.com/public/KGL1972/applicationform/24168" target="_blank" rel="noreferrer">Jetzt mitmachen</a>`;
    const side = hero.querySelector(".hero-side");
    hero.classList.add("hero-showcase");
    if (kicker) kicker.textContent = "KG Lachatrapper Dornstadt · seit 1972";
    if (copy) copy.textContent = "Hier wird gelacht, getanzt, organisiert und zusammen gefeiert. Finde deine Leute und mach Dornstadts Fasnet mit uns unvergesslich.";
    if (actions) actions.innerHTML = `<a class="button cream" href="#/gruppen">Gruppen entdecken <span>&rarr;</span></a><a class="button outline" href="https://easyverein.com/public/KGL1972/applicationform/24168" target="_blank" rel="noreferrer">Jetzt mitmachen</a>`;
    if (side && !side.querySelector(".hero-carousel")) {
      side.innerHTML = `<section class="hero-carousel" aria-label="Vereinsbereiche entdecken">
        <article class="hero-slide slide-garden is-active" data-hero-slide="0">
          <div class="hero-slide-copy"><p>Garden &amp; Sportabteilung</p><h2>Bühne frei<br>für deinen Takt.</h2><a href="#/gruppen">Garden entdecken <span>&rarr;</span></a></div>
          <img class="hero-slide-photo photo-garden" src="assets/images/hero/garden-sportabteilung.png" alt="Garden und Sportabteilung der KG Lachatrapper Dornstadt">
        </article>
        <article class="hero-slide slide-mask" data-hero-slide="1">
          <div class="hero-slide-copy"><p>Maskengruppe</p><h2>Tradition<br>mit Charakter.</h2><a href="#/gruppen">Zur Maskengruppe <span>&rarr;</span></a></div>
          <img class="hero-slide-photo photo-mask" src="assets/images/hero/maskengruppe-gesamtverein.png" alt="Maskengruppe der KG Lachatrapper Dornstadt">
        </article>
        <article class="hero-slide slide-community" data-hero-slide="2">
          <div class="hero-slide-copy"><p>Verein</p><h2>Planen.<br>Feiern. Mitmachen.</h2><a href="#/verein">Verein erleben <span>&rarr;</span></a></div>
          <img class="hero-slide-photo photo-community" src="assets/images/hero/vereinsgemeinschaft-gesamtverein.png" alt="Gesamtverein der KG Lachatrapper Dornstadt">
        </article>
        <div class="hero-carousel-controls" aria-label="Aufmacher auswählen">
          <button class="is-active" type="button" data-hero-control="0" aria-label="Garden und Sportabteilung anzeigen"></button>
          <button type="button" data-hero-control="1" aria-label="Maskengruppe anzeigen"></button>
          <button type="button" data-hero-control="2" aria-label="Verein anzeigen"></button>
        </div>
      </section>`;
      enableHeroCarousel(hero);
    }
  }

  function buildFullHero(hero) {
    if (hero.querySelector(".hero-full-carousel")) return;
    const fallbackSlides = [
      {category:"Verein",title:"Fasnet braucht\nviele Hände.",linkLabel:"Alle Gruppen entdecken",link:"#/gruppen",image:"assets/images/hero/vereinsgemeinschaft-gesamtverein.png",alt:"Gesamtverein der KG Lachatrapper Dornstadt",tone:"community"},
      {category:"Garden & Sportabteilung",title:"Gemeinsam\nauf die Bühne.",linkLabel:"Garden entdecken",link:"#/gruppen",image:"assets/images/hero/garden-sportabteilung.png",alt:"Garden und Sportabteilung der KG Lachatrapper Dornstadt",tone:"garden"},
      {category:"Maskengruppe",title:"Unsere Maske.\nUnsere Geschichte.",linkLabel:"Maskengruppe erleben",link:"#/gruppe-maskengruppe",image:"assets/images/hero/maskengruppe-gesamtverein.png",alt:"Maskengruppe der KG Lachatrapper Dornstadt",tone:"mask"}
    ];
    const slides = Array.isArray(editableContent.featuredSlides) && editableContent.featuredSlides.length ? editableContent.featuredSlides : fallbackSlides;
    const signature = editableContent.heroSignature || {association:"KG Lachatrapper Dornstadt 1972 e.V.",claim:"Fasnet, die Menschen bewegt."};
    const escapeHtml = (value) => String(value || "").replace(/[&<>"']/g, (character) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[character]));
    const withBreaks = (value) => escapeHtml(value).replace(/\n/g, "<br>");
    const slideMarkup = slides.map((slide, index) => `<article class="hero-slide slide-${escapeHtml(slide.tone || "community")}${index === 0 ? " is-active" : ""}" data-hero-slide="${index}"><img class="hero-slide-photo photo-${escapeHtml(slide.tone || "community")}" src="${escapeHtml(slide.image)}" alt="${escapeHtml(slide.alt)}"><div class="hero-slide-copy"><p>${escapeHtml(slide.category)}</p><h1>${withBreaks(slide.title)}</h1><a href="${escapeHtml(slide.link || "#/gruppen")}">${escapeHtml(slide.linkLabel || "Mehr erfahren")} <span>&rarr;</span></a></div></article>`).join("");
    const controls = slides.map((slide, index) => `<button${index === 0 ? " class=\"is-active\"" : ""} type="button" data-hero-control="${index}" aria-label="${escapeHtml(slide.category)} anzeigen"></button>`).join("");
    hero.classList.remove("hero-showcase");
    hero.classList.add("hero-full-width");
    hero.innerHTML = `<section class="hero-carousel hero-full-carousel" aria-label="Vereinsbereiche entdecken">
      ${slideMarkup}
      <button class="hero-carousel-arrow previous" type="button" data-hero-direction="-1" aria-label="Vorheriges Bild anzeigen"><span aria-hidden="true">&#8249;</span></button>
      <button class="hero-carousel-arrow next" type="button" data-hero-direction="1" aria-label="Nächstes Bild anzeigen"><span aria-hidden="true">&#8250;</span></button>
      <div class="hero-carousel-controls" aria-label="Aufmacher auswählen">
        ${controls}
      </div>
      <div class="hero-carousel-signature"><span>${escapeHtml(signature.association)}</span><strong>${escapeHtml(signature.claim)}</strong></div>
    </section>`;
    enableHeroCarousel(hero);
  }

  function enableHeroCarousel(hero) {
    const carousel = hero.querySelector(".hero-carousel");
    if (!carousel || carousel.dataset.ready) return;
    const slides = [...carousel.querySelectorAll("[data-hero-slide]")];
    const controls = [...carousel.querySelectorAll("[data-hero-control]")];
    const directions = [...carousel.querySelectorAll("[data-hero-direction]")];
    const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let active = 0;
    let timer;

    const select = (index) => {
      active = (index + slides.length) % slides.length;
      carousel.dataset.active = String(active);
      slides.forEach((slide, slideIndex) => slide.classList.toggle("is-active", slideIndex === active));
      controls.forEach((control, controlIndex) => {
        const selected = controlIndex === active;
        control.classList.toggle("is-active", selected);
        control.setAttribute("aria-current", selected ? "true" : "false");
      });
    };
    const stop = () => window.clearInterval(timer);
    const start = () => {
      if (reducedMotion) return;
      stop();
      timer = window.setInterval(() => {
        if (!document.body.contains(carousel)) return stop();
        select(active + 1);
      }, 5600);
    };

    controls.forEach((control) => control.addEventListener("click", () => {
      select(Number(control.dataset.heroControl));
      start();
    }));
    directions.forEach((control) => control.addEventListener("click", () => {
      select(active + Number(control.dataset.heroDirection));
      start();
    }));
    carousel.addEventListener("mouseenter", stop);
    carousel.addEventListener("mouseleave", start);
    carousel.addEventListener("focusin", stop);
    carousel.addEventListener("focusout", (event) => {
      if (!carousel.contains(event.relatedTarget)) start();
    });
    carousel.dataset.ready = "true";
    select(0);
    start();
  }

  function updateGroups() {
    if (!location.hash || location.hash === "#/start") {
      removeSymbols();
      const current = document.querySelector("#content .group-fastlane");
      if (current && !current.dataset.organized) current.outerHTML = groups;
      const organized = document.querySelector("#content .group-fastlane[data-organized]");
      if (organized) {
        organized.querySelector(".groups-visual")?.remove();
        const gardenAreaName = organized.querySelector('[data-area-filter="garden"] strong');
        if (gardenAreaName) gardenAreaName.textContent = "Garden & Sportabteilung";
        const groupTitle = organized.querySelector("#fastlane-title");
  if (groupTitle) groupTitle.innerHTML = `Finde deinen Platz<br>bei den <span>Lachatrappern</span>.`;
        emphasizeGroupNames(organized);
        enableAreaFilters(organized);
      }
      sharpenHero();
      positionInstagramAfterGroups();
    }
    buildGroupsOverview();
    moveOrganisationToOwnPage();
    addOrganisationContacts();
    emphasizeGroupJourney();
    enrichHistory();
    buildPrincelyPairsHero();
    softenGroupPhotoEdges();
    refineInstagramIcon();
  }

  function refineInstagramIcon() {
    document.querySelectorAll(".instagram-link .mono").forEach((icon) => {
      icon.remove();
    });
  }

  updateGroups();
  addEventListener("hashchange", () => setTimeout(updateGroups, 10));
})();
