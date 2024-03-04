import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    fs.mkdirSync(dest, { recursive: true });
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const docsPath = path.resolve(
  fileURLToPath(new URL("../docs/", import.meta.url))
);
const distPath = path.resolve(
  fileURLToPath(new URL("./dist/", import.meta.url))
);

fs.rmSync(docsPath, { recursive: true, force: true });
fs.mkdirSync(docsPath, { recursive: true });

fs.readdirSync(distPath).forEach((file) => {
  const src = path.join(distPath, file);
  const dest = path.join(docsPath, file);
  copyRecursiveSync(src, dest);
});

console.log("Build files have been copied to ../docs");
