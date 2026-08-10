# Shinobiz

Cronología de referencia del universo de **Naruto** en una sola página HTML: del Sabio de los Seis Caminos al Séptimo Hokage. Mil años de historia en una línea de tiempo interactiva, con personajes y una guía de qué episodios son canon y cuáles relleno.

## Características

- **Línea de tiempo** — Era por era, con color propio, hitos, guerras, bandos y protagonistas. Buscador, filtros por aldea/afiliación, era y tipo, y comparación de personajes y episodios por era.
- **Personajes** — Fichas por afiliación (aldeas, clanes, Akatsuki, bijū…), con retrato, rol, etapas y proto-personajes.
- **Canon vs. relleno** — Los 720 episodios clasificados episodio por episodio (canon / mixto / relleno / canon de anime), bloques de relleno explicados y una ruta sin relleno copiable.
- **Tema claro / oscuro** — Con persistencia en `localStorage`.

## Cómo correrlo

`index.html` + `css/style.css` + `js/script.js`. Abrilo directo en el navegador o servilo:

```bash
python3 -m http.server 8000
# → http://localhost:8000/
```

Todas las fuentes de datos son constantes en JS dentro de `js/script.js`:

| Constante | Qué es |
| --- | --- |
| `V` | Afiliaciones / aldeas (nombre, kanji, color, descripción) |
| `ERAS` | Eras de la línea de tiempo (título, kanji, período) |
| `KINDS` | Tipos de hito (hito, fundación, guerra, muerte…) |
| `T` | Hitos de la línea de tiempo (era, tipo, año, afiliaciones, episodios, descripción) |
| `CHARS` | Personajes (nombre, afiliaciones, rol, etapas) |
| `PROTA` | Set de protagonistas |
| `SERIES`, `ERA_EPISODES` | Clasificación canon / mixto / relleno por serie y era |

Los retratos se cargan desde `img/<id>.png` con canal alpha; si el archivo no existe, se muestra el kanji de la afiliación.

## Imágenes

```
img/          Retratos de personajes (512×512, PNG transparente, nombre = id)
aldeas/       Emblema opcional por era: aldeas/<id-era>.png
logo/         logo.png (sidebar) y Naruto_logo.svg (favicon)
css/          style.css
js/           script.js (datos + lógica)
```

Los encabezados de era intentan cargar `aldeas/<id-era>.png`; si la imagen existe reemplaza el kanji de la era, si no, se muestra el kanji.

## Fuente

La clasificación canon / mixto / relleno sigue el registro episodio por episodio de [animefillerlist.com](https://www.animefillerlist.com). Las fechas son relativas al inicio de la Parte I (Año 0).

Shinobiz es una referencia no oficial hecha por fans. No está afiliada con los titulares de los derechos de Naruto.
