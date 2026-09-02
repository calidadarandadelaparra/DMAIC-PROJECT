# DMAIC Project Hub

Plataforma web guiada para desarrollar proyectos DMAIC, completar herramientas Lean y generar entregables visuales listos para revisión o PDF.

## Demo pública

La aplicación está preparada para publicarse en GitHub Pages desde la raíz de la rama `main`.

Incluye Project Charter, constructor de objetivos SMART, biblioteca de herramientas editables, SIPOC visual, versiones locales por proyecto e impresión a PDF.

## Fuente del servidor

Use this starter for a static microsite, click counter, or simple internal UI whose state is browser-scoped. It has no dependencies and needs no install.

Edit `worker/index.js`. Use the Sites checkpoint when a coherent milestone is ready to inspect or share; the remote builder then runs the checked-in build and validation scripts. Do not run them as a normal pre-checkpoint step.

The build copies only `worker/index.js` and `.openai/hosting.json`. Do not add standalone asset files. Embed any essential raster bytes in `worker/index.js` and serve or reference them as a data URL.

For targeted diagnosis after a remote build failure, the same commands are available in the Sites Linux environment:

```sh
bash scripts/build.sh
node scripts/validate-artifact.mjs
```

The deterministic build produces:

```text
dist/
├── .openai/
│   └── hosting.json
└── server/
    └── index.js
```

`dist/server/index.js` is an ES module with a default export containing `fetch(request, env, ctx)`. Edit `worker/index.js`, not the generated file under `dist/`.
