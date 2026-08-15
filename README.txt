KG Lachatrapper Dornstadt 1972 e.V. – lokale Website

START
1. Den gesamten Ordner „Lachatrapper-Website-lokal“ in das Fileshare kopieren.
2. Die Datei „index.html“ per Doppelklick im Browser öffnen.
3. Den Ordner „assets“ nie umbenennen oder verschieben.

EINFACHE PFLEGE – NUR EINE DATEI
Alle regelmäßig wechselnden Angaben stehen in:

assets\inhalt-bearbeiten.js

Diese Datei mit Editor oder Notepad öffnen. Es müssen nur die Texte zwischen
Anführungszeichen sowie Bildpfade geändert werden. Keine Klammern, Kommas oder
Schlüssel wie „training“ und „trainers“ löschen.

WAS DORT GEPFLEGT WIRD
- Aufmacher der Startseite: Bilder, Texte, Links und Reihenfolge
- Gruppen: Alter, Trainingszeiten, Trainer, Co-Trainer, Betreuung, Gruppentexte
  und Gruppenbilder
- Organisation: Namen, Funktionen und Funktions-E-Mail-Adressen von Vorstand
  und Präsidium

TRAININGSZEIT, TRAINER ODER BETREUUNG ÄNDERN
1. In „inhalt-bearbeiten.js“ nach dem Gruppennamen suchen, z. B. „kindergarde“.
2. Den Text bei „training“, „trainers“, „coTrainers“ oder „support“ ersetzen.
3. Für mehrere Zeilen \n verwenden, zum Beispiel:
   "Di 17:00 - 19:00\nDo 16:00 - 18:00"
4. Datei speichern und „index.html“ neu laden (Strg + F5).

GRUPPENFOTO ÄNDERN
1. Neues Foto in „assets\images\groups“ kopieren.
2. In „inhalt-bearbeiten.js“ bei der Gruppe den Wert bei „photo“ anpassen,
   zum Beispiel:
   "assets/images/groups/mein-neues-foto.webp"
3. Für die großen Bilder auf der Startseite entsprechend „featuredSlides“
   bearbeiten und die Bilder in „assets\images\hero“ ablegen.
4. Datei speichern und „index.html“ mit Strg + F5 neu laden.

VORSTAND ODER PRÄSIDIUM ÄNDERN
1. In „inhalt-bearbeiten.js“ zum Bereich „organization“ gehen.
2. Name, Funktion und Funktions-E-Mail-Adresse beim passenden Eintrag ändern.
3. Datei speichern und Seite neu laden. Die Organisationsseite übernimmt die
   neuen Daten automatisch.

SICHER ARBEITEN
- Vor jeder größeren Änderung den gesamten Website-Ordner als Kopie sichern.
- Nach Änderungen stets „index.html“ öffnen und die geänderte Seite prüfen.
- Falls etwas nicht stimmt: die zuletzt gesicherte Datei
  „inhalt-bearbeiten.js“ zurückkopieren.
- Die Layout-Dateien (CSS) und „app.js“ nicht für normale Inhaltsänderungen
  bearbeiten; das Design bleibt dadurch zuverlässig erhalten.

INTERNET
Die Website selbst läuft lokal. Erst bei einem Klick auf externe Angebote wie
EasyVerein, Social Media oder ein offizielles PDF wird eine Internetverbindung
benötigt.
