# Codex Update Prompt für umgelagerte Kopie ohne Submodule

Aktualisiere den Codex Ticket Workflow in diesem Projekt, obwohl die bestehende Installation kein Git-Submodule ist.

Ausgangslage:
- Das Repository wurde früher über einen Zwischenordner geklont.
- Danach wurde der Inhalt in den Zielordner umgelagert/kopiert.
- Dadurch ist der Zielordner kein Submodule und möglicherweise kein eigenes Git-Repository mehr.

Ziel:
- Übernimm den aktuellen Stand aus https://github.com/Frxnklyn/Codex-Ticket-Workflow.git vollständig in den bestehenden Zielordner.
- Dafür musst du das Repository zuerst frisch in einen temporären Ordner klonen.
- Danach musst du den Inhalt des frisch geklonten Repositorys in den bestehenden Zielordner umlagern/kopieren.

Zielpfad:
.agents/skills/ticket-workflow/

ACHTUNG:
- Dieser Update-Weg darf den bestehenden Inhalt im Zielordner überschreiben.
- Eigene Änderungen werden dadurch ersetzt.
- Wenn etwas nicht überschrieben werden soll, nenne ich es ausdrücklich unter "Nicht überschreiben".
- Wenn keine Ausnahmen genannt sind, soll der aktuelle Stand aus dem Repository vollständig übernommen werden.

Nicht überschreiben:
- Keine Ausnahmen.

Vorgehen:
1. Prüfe zuerst, ob der Zielpfad existiert.
2. Klone https://github.com/Frxnklyn/Codex-Ticket-Workflow.git in einen temporären Ordner außerhalb des Zielpfads.
3. Kopiere/umlagere den Inhalt des frisch geklonten Repositorys in den Zielpfad.
4. Entferne im Zielpfad den inneren `.git/`-Ordner, damit daraus nicht versehentlich ein Submodule/Subrepo wird.
5. Lege keinen zusätzlichen Zwischenordner innerhalb des Zielpfads an.
6. Führe keinen Commit und keinen Push aus.
7. Prüfe danach `git status` im Hauptprojekt und fasse zusammen, welche Dateien geändert wurden.
