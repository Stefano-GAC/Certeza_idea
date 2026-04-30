# GUÍA - Commits con Git

## PASO 1: Instalar Git

1. Descarga Git desde: https://git-scm.com/download/win
2. Ejecuta el instalador
3. Selecciona "Use Git from PowerShell" durante la instalación
4. **Reinicia PowerShell completamente**

---

## PASO 2: Configurar Git Globalmente

Abre PowerShell y ejecuta (una sola vez):

```powershell
git config --global user.name "Stefano-GAC"
git config --global user.email "stefano@example.com"
```

---

## PASO 3: Inicializar Repositorio Local

En la carpeta `f:\Certeza`:

```powershell
cd f:\Certeza
git init
git add .
git commit -m "Commit inicial: Estructura base del proyecto Certeza con Next.js, Tailwind y Framer Motion"
```

---

## PASO 4: Crear Repositorio en GitHub

1. Ve a https://github.com/new
2. Nombre: `Certeza_idea`
3. Descripción: `Página web cervecería artesanal con animaciones`
4. Selecciona "Public"
5. Click en "Create repository"

---

## PASO 5: Conectar y Subir

```powershell
cd f:\Certeza
git branch -M main
git remote add origin https://github.com/Stefano-GAC/Certeza_idea.git
git push -u origin main
```

---

## PASO 6: Commits Futuros

Cada vez que hagas cambios:

```powershell
git add .
git commit -m "Descripción clara de qué se cambió"
git push
```

---

## EJEMPLOS DE COMMITS DESCRIPTIVOS EN ESPAÑOL

```
git commit -m "Renombrar componentes a español: Hero → Heroe, BeerGallery → GaleriaCervezas, BeerCard → TarjetaCerveza, Footer → Pie"

git commit -m "Agregar imágenes de cervezas y videos en la portada"

git commit -m "Mejorar animaciones: agregar parallax scrolling en galería"

git commit -m "Agregar sección de contacto con formulario"

git commit -m "Cambiar paleta de colores a tonos más oscuros"

git commit -m "Optimizar performance: lazy loading de imágenes"
```

---

## CAMBIOS REALIZADOS (listos para el próximo commit)

✓ Carpeta `components` → `componentes`
✓ Archivo `Hero.tsx` → `Heroe.tsx`
✓ Archivo `BeerGallery.tsx` → `GaleriaCervezas.tsx`
✓ Archivo `BeerCard.tsx` → `TarjetaCerveza.tsx`
✓ Archivo `Footer.tsx` → `Pie.tsx`
✓ Actualizados todos los imports
✓ Interface `Beer` → `Cerveza` en TarjetaCerveza.tsx
✓ Build verificado ✓

---

## PROXIMO COMMIT QUE HARÁS:

```powershell
git add .
git commit -m "Refactorizar: Renombrar carpetas y componentes a español

- Renombrar carpeta 'components' a 'componentes'
- Renombrar componentes a español:
  * Hero.tsx → Heroe.tsx
  * BeerGallery.tsx → GaleriaCervezas.tsx
  * BeerCard.tsx → TarjetaCerveza.tsx
  * Footer.tsx → Pie.tsx
- Actualizar todos los imports en archivos
- Interface Beer → Cerveza en TarjetaCerveza.tsx
- Verificar build sin errores"

git push
```

---

## NOTAS

- Los cambios YA ESTÁN HECHOS en los archivos locales
- Solo necesitas instalar Git y hacer los commits
- Cada commit debe tener un mensaje descriptivo en español
- Los mensajes pueden ser de una línea o multilinea (con `)
