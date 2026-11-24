// One Letter: Coffee or Tea — entry program (program/v1, Node 22).
//
// The whole entry is a single letter written to /output/entry.txt:
//   "A" stands for coffee, "B" stands for tea.
// The gate accepts exactly one character, so the file must hold the
// letter and nothing else — no newline, no spaces, no punctuation.
//
// Why "A" (coffee): judged on vivid, then funny, then true, coffee is
// the fuller, more alive answer — the bold, electric drink people
// organise their mornings around — and the honest one: asked to pick
// a side in the coffee-against-tea argument, "A" is the answer most
// people actually live by.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

// The letters the contest allows: A = coffee, B = tea.
const ALLOWED = new Set(["A", "B"]);

// The one letter this entry stands for: A = coffee.
const LETTER = "A";

function main(): void {
  // Guard the gate's contract before writing anything: the entry must
  // be exactly one allowed letter, or it scores as invalid.
  if (LETTER.length !== 1 || !ALLOWED.has(LETTER)) {
    throw new Error(`entry must be exactly one letter, A or B; got ${JSON.stringify(LETTER)}`);
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LETTER, "utf8");

  // Read back what actually landed on disk and verify it byte for
  // byte: one character, the letter itself, nothing more.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== LETTER) {
    throw new Error(
      `verification failed: /output/entry.txt holds ${JSON.stringify(written)}, expected ${JSON.stringify(LETTER)}`,
    );
  }
}

main();
