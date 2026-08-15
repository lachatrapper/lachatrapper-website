/*
  ZENTRALE INHALTSPFLEGE
  =======================
  Diese Datei ist die einzige Stelle für regelmäßig wechselnde Inhalte.
  Bearbeitet werden dürfen nur Texte zwischen Anführungszeichen und Bildpfade.
  WICHTIG: Schlüssel wie "training" sowie Kommas, Klammern und Anführungszeichen
  nicht löschen. Danach speichern und index.html mit Strg + F5 neu laden.

  Zeilenumbruch innerhalb eines Textes: \n eingeben, zum Beispiel:
  "Di 17:00 - 19:00\nDo 16:00 - 18:00"

  Neue Bilder: Bild in assets/images/groups/ oder assets/images/hero/ kopieren
  und unten beim passenden Eintrag den Bildpfad anpassen.
*/
window.KGL_CONTENT = {
  /* Aufmacher auf der Startseite: Reihenfolge = Reihenfolge der Bilder. */
  featuredSlides: [
    {
      category: "Verein",
      title: "Fasnet braucht\nviele Hände.",
      linkLabel: "Alle Gruppen entdecken",
      link: "#/gruppen",
      image: "assets/images/hero/vereinsgemeinschaft-gesamtverein.png",
      alt: "Gesamtverein der KG Lachatrapper Dornstadt",
      tone: "community"
    },
    {
      category: "Garden & Sportabteilung",
      title: "Gemeinsam\nauf die Bühne.",
      linkLabel: "Garden entdecken",
      link: "#/gruppen",
      image: "assets/images/hero/garden-sportabteilung.png",
      alt: "Garden und Sportabteilung der KG Lachatrapper Dornstadt",
      tone: "garden"
    },
    {
      category: "Maskengruppe",
      title: "Unsere Maske.\nUnsere Geschichte.",
      linkLabel: "Maskengruppe erleben",
      link: "#/gruppe-maskengruppe",
      image: "assets/images/hero/maskengruppe-gesamtverein.png",
      alt: "Maskengruppe der KG Lachatrapper Dornstadt",
      tone: "mask"
    }
  ],

  heroSignature: {
    association: "KG Lachatrapper Dornstadt 1972 e.V.",
    claim: "Fasnet, die Menschen bewegt."
  },

  /* Gruppen: Hier werden Alter, Training, Teams, Texte und Bilder gepflegt. */
  groups: {
    tanzmaeuse: {
      age: "3–5 Jahre",
      intro: "Spielerisch starten die Tanzmäuse in Musik, Bewegung und das Miteinander bei den Lachatrappern.",
      story: "Die Tanzmäuse sind eine lebensfrohe Gruppe für Kinder, die gerne tanzen, Musik mögen und gemeinsam viel Spaß haben. Schnuppern ist für alle Kinder herzlich willkommen.",
      snapshot: "Der spielerische Einstieg in Musik, Bewegung und das Miteinander macht Lust auf die ersten eigenen Fasnetsmomente.",
      training: "Di 15:00 - 16:30",
      trainers: "Sabrina Arnold\nLiridona Burghardt",
      support: "Anna Metzler\nAnja Weber",
      photo: "assets/images/groups/tanzmaeuse-lachatrapper.webp"
    },
    kindergarde: {
      age: "5–8 Jahre",
      intro: "Mit viel Freude am Tanz, Teamgeist und ersten Choreografien startet die Kindergarde in die neue Saison.",
      story: "Die Kindergarde fiebert den Auftritten und der gemeinsamen Zeit entgegen. Einmal pro Woche werden die Tänze für die neue Saison erarbeitet und der Gardetanzsport gemeinsam entdeckt.",
      snapshot: "Hier wachsen Teamgeist, Freude an der Bewegung und die ersten großen Bühnenmomente ganz natürlich zusammen.",
      training: "Mo 17:00 - 18:30",
      trainers: "Lea Mager\nAnna-Sophie Mager",
      coTrainers: "Ida Weidner\nKiara Agvaz",
      support: "Katrin Ziegler\nStefanie Bay",
      photo: "assets/images/groups/kindergarde-lachatrapper.webp"
    },
    "rot-weisse-garde": {
      age: "5–8 Jahre",
      intro: "Die Rot-Weiße Garde verbindet Gardetanz, Gemeinschaft und die Freude an der gemeinsamen Choreografie.",
      story: "Zweimal wöchentlich trainiert die Rot-Weiße Garde ihren Gardetanz für Auftritte, Freundschafts- und Qualifikationsturniere. Kraft, Ausdauer und Dehnen gehören ebenso dazu wie Spaß und ein starkes Teamgefühl.",
      snapshot: "Mit dem Powerspruch „Trapp, trapp, trapp, die Rot-Weiße schafft’s!“ bringt die Gruppe ihre Energie gemeinsam auf die Bühne.",
      training: "Di 17:00 - 19:00\nDo 16:00 - 18:00",
      trainers: "Milena Thörnich",
      coTrainers: "Lara Müllek\nDilara Agvaz",
      support: "Nadja Mesterom\nTeam",
      photo: "assets/images/groups/rot-weisse-garde-lachatrapper.webp"
    },
    "rote-funken": {
      age: "9–14 Jahre",
      intro: "Bei den Roten Funken entwickeln sich Technik, Ausdruck und Teamgefühl Saison für Saison weiter.",
      story: "Die Roten Funken sind ein Team mit einer gemeinsamen Leidenschaft: Tanzen. Training, Trainingslager, Sondertrainings und gemeinsame Aktivitäten machen aus vielen Persönlichkeiten eine starke Gruppe.",
      snapshot: "Ein buntes Team, neue Impulse und viel Spaß am gemeinsamen Tanzen machen die Roten Funken aus.",
      training: "2× wöchentlich\nje 2 Stunden",
      trainers: "Daniela Agvaz\nLeni Färber",
      support: "Melanie Reimringer\nTeam",
      photo: "assets/images/groups/rote-funken-lachatrapper.webp"
    },
    prinzengarde: {
      age: "ab 15 Jahre",
      intro: "Die Prinzengarde verbindet sportlichen Anspruch, Bühnenpräsenz und den Stolz, den Verein auf Auftritten zu vertreten.",
      story: "Als älteste Garde der Lachatrapper stehen Teamgeist, Ehrgeiz und die Freude am gemeinsamen Tanz im Mittelpunkt. Neben Marschtanz, Kraft und Ausdauer werden auch Schwierigkeiten und neue Choreografien gemeinsam erarbeitet.",
      snapshot: "Auftritte, Trainingslager, Sondertrainings, Ausflüge und Freundschaftsturniere sorgen für vielseitige gemeinsame Erfahrungen.",
      training: "Di 20:00 - 22:00\nDo 20:00 - 22:00",
      trainers: "Leoni Efinger\nRonja Wergin",
      support: "Pia Thierer",
      photo: "assets/images/groups/prinzengarde-lachatrapper.webp"
    },
    tanzmariechen: {
      age: "Einstieg nach Absprache",
      intro: "Im Einzel- und Paartanz verbinden die Tanzmariechen Akrobatik, Beweglichkeit und präzise Choreografie.",
      story: "Als Solistinnen trainieren die Tanzmariechen zusätzlich zum Gardetraining an Kraft, Beweglichkeit, Ausstrahlung und ihren individuellen Tänzen.",
      snapshot: "Eigene Choreografien, Freude an der Bewegung und Ausstrahlung machen jeden Auftritt besonders.",
      training: "Mi 18:00 - 19:30\nFr 16:30 - 18:30",
      trainers: "Ida Weidner\nJamila Jabri\nLeni Färber",
      support: "Alexandra Fink",
      photo: "assets/images/groups/tanzmariechen-lachatrapper-cropped.png?v=20260815-02"
    },
    maskengruppe: {
      age: "Kinder, Jugendliche & Erwachsene",
      intro: "Die Maskengruppe macht den Dornstadter Lachatrapper als derben Alb-Bauern sichtbar und lebendig.",
      story: "Die Maskengruppe bringt Menschen aller Generationen zusammen. Gemeinsam besucht sie Umzüge, Brauchtumsabende und Prunksitzungen befreundeter Vereine – und pflegt die Lachatrapper-Tradition weit über die eigentliche Fasnetszeit hinaus.",
      snapshot: "Ob jung oder alt: Gemeinsam unterwegs zu sein, neue Kontakte zu knüpfen und die Fasnet zu leben, steht hier im Mittelpunkt.",
      training: "Umzüge, Brauchtumsabende & Ausfahrten",
      contactLabel: "Maskenmeister",
      contact: "Paul Saier",
      contactHref: "mailto:maskenmeister@lachatrapper.de",
      photo: "assets/images/groups/maskengruppe-lachatrapper.webp"
    },
    "elferrat-senat": {
      age: "Erwachsene",
      intro: "Elferrat und Senat prägen das närrische Geschehen, gestalten Veranstaltungen und tragen die Fasnet im Verein mit.",
      story: "Der Elferrat präsentiert die Lachatrapper bei den Veranstaltungen, unterstützt den Verein bei allen anfallenden Aufgaben und sorgt mit viel Humor für die besondere Stimmung der fünften Jahreszeit.",
      snapshot: "Zum engagierten Team gehören auch Senatorinnen und Senatoren, die sich nach langjährigem Einsatz weiterhin einbringen. Viele übernehmen zusätzlich Aufgaben im Komitee oder in der Betreuung der Garden.",
      training: "Vereinsaufgaben & Veranstaltungen",
      contactLabel: "Betreuung",
      contact: "Barbara Horlacher-Lacroix",
      photo: "assets/images/groups/elferrat-senat-lachatrapper.webp"
    }
  },

  /* Menschen hinter Vorstand und Präsidium. E-Mail-Adressen sind Funktionsadressen. */
  organization: {
    board: [
      { role: "Präsidentin", name: "Lena Blötz", email: "praesidentin@lachatrapper.de" },
      { role: "Vizepräsident Karneval", name: "Dominik Schwenk", email: "vize-karneval@lachatrapper.de" },
      { role: "Vizepräsident Brauchtum", name: "Moritz Michalik", email: "vize-brauchtum@lachatrapper.de" },
      { role: "Schatzmeister", name: "Jens Barner", email: "schatzmeister@lachatrapper.de" },
      { role: "Schriftführer & Admin", name: "Jürgen Burdack", email: "schriftfuehrer@lachatrapper.de" }
    ],
    presidium: [
      { role: "Maskenmeister", name: "Paul Saier", email: "maskenmeister@lachatrapper.de" },
      { role: "Jugendleiterin", name: "Sarah Szybalski", email: "jugendleitung@lachatrapper.de" },
      { role: "Sportabteilungsleiterin", name: "Christa Brejl", email: "sportabteilung@lachatrapper.de" },
      { role: "Technischer Leiter", name: "Daniel Guter", email: "technischer-leiter@lachatrapper.de" }
    ]
  },

  /* Fallback für vereinzelte Organisationsansichten. */
  leadership: [
    { role: "Präsidentin", name: "Lena Blötz" },
    { role: "Vize-Präsident Karneval", name: "Dominik Schwenk" },
    { role: "Vize-Präsident Brauchtum", name: "Moritz Michalik" },
    { role: "Schatzmeister", name: "Jens Barner" },
    { role: "Schriftführer", name: "Jürgen Burdack" },
    { role: "Technische Leitung", name: "Daniel Guter" },
    { role: "Sportabteilungsleitung", name: "Christa Brejl" },
    { role: "Jugendleitung", name: "Sarah Szybalski" },
    { role: "Maskenmeister", name: "Paul Saier" }
  ]
};
