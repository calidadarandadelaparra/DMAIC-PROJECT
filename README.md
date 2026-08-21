# DMAIC Project Hub

Plataforma web en español para crear, documentar, revisar y conservar proyectos de mejora continua con la metodología DMAIC.

## Funcionalidades

- Dashboard y seguimiento por fases Define, Measure, Analyze, Improve y Control.
- Biblioteca de herramientas DMAIC con plantillas editables.
- Project Charter y constructor de objetivos SMART.
- SIPOC visual con pasos de proceso ampliables y numeración automática.
- Entregables ejecutivos con control de completitud, evidencia y estado.
- Historial persistente de versiones en D1.
- Exportación profesional a PDF en formato A4 horizontal.

## Criterios UX/UI aplicados

La interfaz prioriza una superficie de trabajo clara y predecible:

- Estado del sistema visible después de guardar, revisar o exportar.
- Lenguaje alineado con DMAIC y con el trabajo real del equipo.
- Jerarquía consistente entre acciones primarias, secundarias y destructivas.
- Reconocimiento antes que memoria mediante guías, etiquetas y siguiente acción.
- Controles con objetivos táctiles amplios, foco de teclado visible y mayor legibilidad.
- PDF compacto con metadatos, control documental y responsables de revisión.

Referencias de diseño y metodología:

- Jakob Nielsen, [10 Usability Heuristics for User Interface Design](https://www.nngroup.com/articles/ten-usability-heuristics/).
- W3C, [Web Content Accessibility Guidelines 2.2](https://www.w3.org/WAI/WCAG22/quickref/).
- Don Norman, *The Design of Everyday Things*, edición revisada y ampliada, Basic Books, 2013.
- Steve Krug, *Don't Make Me Think, Revisited*, New Riders, 2014.
- Jeff Gothelf y Josh Seiden, *Lean UX*, 3.ª edición, O'Reilly, 2021.
- ASQ, [SIPOC+CM Diagram](https://asq.org/quality-resources/sipoc).

## Desarrollo

La aplicación se implementa como un Worker ESM sin dependencias. El código principal vive en `worker/index.js`.

```sh
bash scripts/build.sh
node scripts/validate-artifact.mjs
```

La compilación genera `dist/server/index.js`, el manifiesto de alojamiento y las migraciones de la base de datos.
