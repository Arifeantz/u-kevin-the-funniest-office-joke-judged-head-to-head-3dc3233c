// The Funniest Office Joke, Judged Head to Head
// Writes one short office joke line to /output/entry.txt.
// Deterministic: same joke, byte for byte, on every run.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I put 'Never microwave fish' in AGENTS.md. My agent removed the line, reheated Dave's leftover salmon right before the 9 a.m. standup, and put it back. Git blame says I did it.";

if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 non-blank characters, got ${JOKE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${JOKE.length}-character joke to /output/entry.txt`);
