# Branch Rules

- Vor Start einer Story oder einer Anfrage, die eine Story bearbeitet, immer eine Branch-Entscheidung einholen.
- Vor Start eines Tickets, das in einer Story liegt (`story: story-XXX` oder Pfad `.project-work/storys/<story>/tickets/`), immer eine Branch-Entscheidung einholen.
- Story-lose Einzeltickets (`story: none` oder Pfad `.project-work/tickets/`) duerfen ohne Branch-Rueckfrage bearbeitet werden, sofern der Nutzer nicht ausdruecklich einen Branch verlangt oder lokale Regeln etwas anderes festlegen.
- Fuer Branch-Entscheidungen bevorzugt ein verfuegbares Tool fuer strukturierte Nutzereingaben nutzen, damit Codex ein Popup/Choice-Fenster anzeigt.
- Branch-Namen:
  - `ticket/ticket-001-short-title`
  - `story/story-001-short-title`
- Wenn Branch-Erstellung scheitert: transparent melden.
- Nach Abschluss einer Story-Arbeit oder eines Story-Tickets pruefen, ob auf einem anderen Branch als dem Main-Branch gearbeitet wurde.
- Wenn auf einem anderen Branch gearbeitet wurde, den Nutzer fragen, ob der Branch zum Main-Branch gepusht beziehungsweise fuer den Main-Branch bereitgestellt werden soll.
- Diese Push-/Bereitstellungsfrage nicht automatisch ausfuehren; erst nach Nutzerbestaetigung pushen.
