(() => {
  const app = document.querySelector("#content");
  const route = () => (location.hash.match(/^#\/(.+)$/) || [, "start"])[1];
  const fastlane = `<section class="group-fastlane" aria-labelledby="fastlane-title"><div class="fastlane-head"><div><p class="kicker">Direkt zum Einstieg</p><h2 id="fastlane-title">Welche Gruppe passt?</h2></div><p>Die wichtigsten Altersstufen auf einen Blick. Für Maskengruppe, Elferrat und Mariechen beraten wir persönlich.</p></div><div class="fastlane-grid"><a class="fastlane-card" href="#/gruppen"><small>Tanzmäuse</small><strong>3–5</strong><span>Jahre</span><b>→</b></a><a class="fastlane-card" href="#/gruppen"><small>Kindergarden</small><strong>5–8</strong><span>Jahre</span><b>→</b></a><a class="fastlane-card" href="#/gruppen"><small>Rote Funken</small><strong>9–14</strong><span>Jahre</span><b>→</b></a><a class="fastlane-card" href="#/gruppen"><small>Prinzengarde</small><strong>ab 15</strong><span>Jahre</span><b>→</b></a><a class="fastlane-card" href="#/gruppen"><small>Brauchtum</small><strong>Maske & Elferrat</strong><span>für Aktive</span><b>→</b></a></div></section>`;
  function removeMapReferences() {
    app.querySelectorAll("p").forEach((p) => {
      const t = p.textContent;
      if (t.includes("Die Altersangaben folgen")) p.textContent = "Die Altersangaben geben eine schnelle Orientierung. Den konkreten Einstieg und aktuelle Trainingszeiten stimmen wir individuell mit dem Betreuungsteam ab.";
      if (t.includes("Bei den Alterszuordnungen sind")) p.textContent = "Bei den Alterszuordnungen sind individuelle Einstiege nach Rücksprache möglich.";
      if (t.includes("Hinweise fürs Vereinsleben")) p.textContent = "Praktische Hinweise für das Vereinsleben werden vor der Saison und den jeweiligen Veranstaltungen direkt kommuniziert.";
      if (t.includes("Praktische Punkte aus") && t.includes("Gruppenspezifische Vorgaben")) p.textContent = "Praktische Punkte für Training, Auftritte und Umzüge. Gruppenspezifische Vorgaben kommen direkt vom Betreuungsteam.";
      if (t.includes("zahlen passive Mitglieder im Vereinsbus")) p.textContent = "Bei Busfahrten werden die jeweiligen Unkostenbeiträge vorab bekannt gegeben.";
      if (t.includes("REWE-Märkten der Familie Michalik")) p.textContent = "Bei REWE-Märkten der Familie Michalik kann der Verein 2 % des Einkaufswerts sammeln.";
    });
    app.querySelector(".source-note")?.remove();
  }
  function prioritizeHome() {
    if (route() !== "start") return;
    app.querySelector(".group-fastlane")?.remove();
    const hero = app.querySelector(".hero");
    const actions = hero?.querySelector(".hero-actions");
    const identity = hero?.querySelector(".identity-card");
    const intro = app.querySelector(".intro");
    if (actions) actions.innerHTML = `<a class="button cream" href="#/gruppen">Gruppen nach Alter <span>→</span></a><a class="button outline" href="https://easyverein.com/public/KGL1972/applicationform/24168" target="_blank" rel="noreferrer">Mitglied werden</a>`;
    identity?.remove();
    intro?.remove();
    app.querySelectorAll(".section-heading > p").forEach((paragraph) => {
      if (paragraph.textContent.trim() === "Jeder Bereich ist klar gegliedert und direkt erreichbar.") paragraph.remove();
    });
  }
  function clarifySymbols() {
    if (route() !== "start") return;
    const symbols = app.querySelector(".symbols");
    if (!symbols) return;
    const heading = symbols.querySelector("h2");
    const description = symbols.querySelector(".symbols-copy > p:not(.kicker)");
    const list = symbols.querySelector("ul");
    if (heading) heading.innerHTML = "Die Bereiche<br>unseres Vereins.";
    if (description) description.textContent = "Tanzschuhe, Maske, Hut und Zepter stehen für die Gruppen und Figuren, die die Lachatrapper ausmachen.";
    if (list) list.innerHTML = `<li><b>Sportabteilung & Garden</b><span>Gardetanzschuhe stehen für Training, Tanzsport und die Bühne.</span></li><li><b>Maskengruppe</b><span>Die Maske trägt die Lachatrapper-Figur und das Brauchtum weiter.</span></li><li><b>Elferrat</b><span>Der Hut steht für Programm, Haltung und närrische Tradition.</span></li><li><b>Prinz & Kinderprinz</b><span>Die Zepter stehen für die Repräsentation in der Kampagne.</span></li>`;
  }
  function addRotWeisseGarde() {
    if (route() !== "start") return;
    const grid = app.querySelector(".fastlane-grid");
    if (!grid || grid.dataset.rotWeisse) return;
    grid.dataset.rotWeisse = "true";
    const kindergarde = grid.children[1]?.querySelector("small");
    if (kindergarde) kindergarde.textContent = "Kindergarde";
    const before = grid.children[2];
    const card = `<a class="fastlane-card" href="#/gruppen"><small>Rot-Weiße Garde</small><strong>5–8</strong><span>Jahre</span><b>→</b></a>`;
    if (before) before.insertAdjacentHTML("beforebegin", card); else grid.insertAdjacentHTML("beforeend", card);
  }
  function refine() { removeMapReferences(); prioritizeHome(); addRotWeisseGarde(); clarifySymbols(); }
  refine();
  addEventListener("hashchange", () => setTimeout(refine, 0));
})();
