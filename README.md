# Portafolio profesional de Jhojan Estiven Salas Dorado

Portafolio web personal desarrollado con React y TypeScript. Presenta información profesional, habilidades, proyectos destacados y enlaces de contacto.

## Tecnologías utilizadas

- React
- TypeScript
- Vite
- CSS
- Lucide React

## Instalación

Clona o descarga el proyecto y abre la carpeta en Visual Studio Code.

Después, instala las dependencias:

```bash
npm install
```

## Ejecutar el proyecto

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

Luego abre en el navegador la dirección que aparecerá en la terminal, normalmente:

```text
http://localhost:5173
```

## Crear la versión de producción

```bash
npm run build
```

El resultado se genera en la carpeta `dist`.

## Publicar en GitHub Pages

El proyecto incluye el workflow `.github/workflows/deploy.yml` para publicar automáticamente el portafolio.

1. Sube todo el proyecto a un repositorio de GitHub en la rama `main`.
2. En GitHub, entra a **Settings > Pages**.
3. En **Build and deployment**, selecciona **GitHub Actions**.
4. Ve a la pestaña **Actions** y espera a que termine el workflow **Deploy portfolio to GitHub Pages**.

El sitio se publicará en una dirección similar a:

```text
https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/
```

## Secciones del portafolio

- Inicio
- Sobre mí
- Habilidades
- Proyectos destacados
- Contacto

Cada tarjeta de proyecto puede abrirse para mostrar una descripción más completa de la experiencia y las tecnologías utilizadas.

## Recursos

Las imágenes utilizadas se encuentran en:

```text
public/assets
```

## Contacto

- Correo: [golds90-13@gmail.com](mailto:golds90-13@gmail.com)
- GitHub: [StivenDorado](https://github.com/StivenDorado)
- LinkedIn: [Jhojan Stiven Salas Dorado](https://www.linkedin.com/in/jhojan-stiven-salas-dorado-3a9b0b351)

## Personalización

La información principal se encuentra en `src/App.tsx` y los estilos visuales en `src/styles.css`. Las imágenes pueden reemplazarse dentro de `public/assets`.
