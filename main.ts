// Funniest Autocorrect Fail — entry program.
//
// Writes exactly one line to /output/entry.txt: a text message as it was
// actually sent, where autocorrect swapped one ordinary word for a far
// worse one. The line is 74 characters, inside the 1-199 gate, and it is
// the whole entry: no framing, no explanation, just the message itself.
//
// The slip: "prostate" became "prostitute". The sentence still reads as a
// cheerful health update, which is what makes the wrong word land.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Just got back from my prostitute exam, doctor says everything looks great!";

// The gate: /output/entry.txt must hold UTF-8 text of 1 to 199 characters,
// not only white space. Refuse to write anything outside it.
if (LINE.length < 1 || LINE.length > 199 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters, outside the 1-199 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${target}`);
