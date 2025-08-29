# Portfolio
🚀 Project Overview
This project uses Vite, React, TypeScript, shadcn-ui, and Tailwind CSS for a modern, scalable front-end experience.

🛠️ Technology Stack
Technology	Purpose
⚡ Vite	Fast build tool & dev server
⚛️ React	UI library
🟦 TypeScript	Static typing
🧩 shadcn-ui	Prebuilt UI components
🌬️ Tailwind CSS	Utility-first CSS framework
📁 File Structure

File/Folder	Description
index.html	HTML entry point
vite.config.ts	Vite configuration
tailwind.config.js	Tailwind CSS config
package.json	NPM dependencies & scripts
src/app.tsx	Root component
src/main.tsx	Project entry point
src/index.css	Global CSS
src/pages/Index.tsx	Home page logic
@/components/ui	shadcn-ui components (pre-downloaded)
🧩 Components & Styling
All shadcn-ui components are located at @/components/ui.

Use Tailwind CSS classes to style components efficiently.

Add or adjust global styles in src/index.css or create new CSS files.

💻 Development Guidelines
Import components in React code like:

tsx
import { Button } from "@/components/ui/Button";
Customize the UI by editing the Tailwind configuration.

The @/ alias points to the src/ directory for easy imports.

Don’t re-export types already being imported in TypeScript.

📝 Commands
Command	Description
pnpm i	📦 Install dependencies
pnpm add some_new_dependency	➕ Add a new dependency
pnpm run dev	🚀 Start development preview
pnpm run build	🛠️ Build for production
📢 Notes
All shadcn/ui components are already downloaded for immediate use.

Follow best practices in TypeScript and Tailwind for reliable, maintainable code.

