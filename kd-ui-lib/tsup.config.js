import { defineConfig } from "tsup";

// 👉 Ye config tumhari JS/TS library ko npm ke liye ready package (production build) me convert karta hai.
export default defineConfig({
  entry: ["src/index.js"],
  format: ["esm", "cjs"],
  dts: false,
  clean: true,
  external: ["react"]
});


// Ye tsup config basically ek library bundler setup hai — jiska kaam hota hai tumhare source code (src/index.js) ko build karke production-ready package (npm library) banana.


// 1. tsup starts
//       ↓
// 2. entry file read: src/index.js
//       ↓
// 3. dependency graph build hota hai
//       ↓
// 4. React detect hota hai → external ban jata hai
//       ↓
// 5. code bundle hota hai
//       ↓
// 6. output formats generate:
//       → ESM build
//       → CJS build
//       ↓
// 7. dist/ folder clean hota hai (old files removed)
//       ↓
// 8. final output ready for npm publish 🚀