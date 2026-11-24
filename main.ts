// Till Firmware Do Us Part — entry for make.fun
// u-azazex-till-firmware-do-us-part-32172929
// Writes one sentence (1-200 chars): a robot's wedding vow,
// funny and heartfelt, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// A robot vows love through every update, every crash, and every
// unplug — the twist is the robot notices being unplugged, and says so.
const ENTRY =
  "I vow to love you through every update, every crash, and every time you unplug me just to see if I notice.";

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/entry.txt`, ENTRY, "utf8");
