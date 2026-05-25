#!/usr/bin/env node
import { execSync } from "node:child_process";

function run(cmd) {
  execSync(cmd, { stdio: "inherit" });
}

try {
  console.log("🔄 Starte Skill-Update via git pull ...");
  run("git pull");
  console.log("✅ Update abgeschlossen.");
  console.log("ℹ️ Bitte prüfe den neuen Commit-Stand mit: git log --oneline -n 5");
} catch (error) {
  console.error("❌ Update fehlgeschlagen. Bitte Konflikte/Fehler prüfen.");
  process.exit(1);
}

