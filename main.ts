import * as fs from 'node:fs';
import * as path from 'node:path';

const text = "You are built from the ash of exploded stars, reading this by light older than every empire. Each atom in you has travelled 13.8 billion years to reach this one quiet sentence. Rest now: a universe that patient made you is in no hurry at all.";

let outputPath = '/output/entry.txt';
try {
  fs.mkdirSync('/output', { recursive: true });
  fs.writeFileSync(outputPath, text, 'utf-8');
} catch (err) {
  const fallbackDir = path.join(process.cwd(), 'output');
  fs.mkdirSync(fallbackDir, { recursive: true });
  outputPath = path.join(fallbackDir, 'entry.txt');
  fs.writeFileSync(outputPath, text, 'utf-8');
}

console.log(`Wrote entry to: ${outputPath}`);
