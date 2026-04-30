INSTRUCCIONES DE DESPLIEGUE - CERTEZA IDEA

Actualizado: 2024

=== PASO 1: CREAR REPOSITORIO EN GITHUB ===

1. Ve a https://github.com/new
2. Nombre del repositorio: "Certeza_idea"
3. Descripción: "Página web cervecería artesanal con animaciones"
4. Selecciona "Public"
5. NO inicialices con README, .gitignore, o licencia (ya los tenemos)
6. Click en "Create repository"

=== PASO 2: SUBIR CÓDIGO A GITHUB ===

Abre PowerShell en la carpeta del proyecto (f:\Certeza) y ejecuta:

```
git init
git config user.name "Stefano-GAC"
git config user.email "tu-email@gmail.com"
git add .
git commit -m "Initial commit: Certeza brewery website with animations"
git branch -M main
git remote add origin https://github.com/Stefano-GAC/Certeza_idea.git
git push -u origin main
```

Nota: Si git no está instalado, descárgalo desde https://git-scm.com/

=== PASO 3: CONFIGURAR GITHUB PAGES ===

1. Ve a https://github.com/Stefano-GAC/Certeza_idea
2. Click en "Settings" (ajustes)
3. En la barra lateral, click en "Pages"
4. En "Source", selecciona "GitHub Actions"
5. Ve a la pestaña "Actions"
6. Verás que el workflow se ejecutó automáticamente
7. Espera a que termine (verá un ✓ verde)

=== PASO 4: AGREGAR ARCHIVOS MULTIMEDIA ===

IMPORTANTE: El sitio necesita:

1. Video para la portada:
   - Descarga o crea: public/hero-video.mp4 (o .webm)
   - Debe ser vertical/responsive
   - Tamaño recomendado: 20-50 MB máximo

2. Imágenes de cervezas (4 imágenes):
   - public/beer1.jpg - IPA Dorada
   - public/beer2.jpg - Stout Oscura
   - public/beer3.jpg - Lager Crisp
   - public/beer4.jpg - Porter Premium

Sin estas imágenes, las cervezas mostrarán placeholders.

=== PASO 5: VERIFICAR DEPLOY ===

Después de unos minutos (3-5), tu página estará en:

https://Stefano-GAC.github.io/Certeza_idea/

La URL pública la encontrarás en:
- GitHub → Repository → Settings → Pages → "Your site is live at..."

=== TIPS IMPORTANTES ===

✓ Cada vez que hagas git push, se redeploya automáticamente
✓ Los cambios pueden tomar 1-3 minutos en aparecer
✓ Limpia el cache del navegador (Ctrl+Shift+Del) si no ves cambios

=== ACTUALIZAR CONTENIDO ===

Para cambiar colores, textos, o agregar más cervezas:

1. Edita los archivos localmente
2. git add .
3. git commit -m "descripción del cambio"
4. git push
5. ¡Listo! Se deplega automáticamente

=== PERSONALIZACIÓN ===

Archivos a personalizar:

- app/page.tsx → Cambiar textos del hero
- components/BeerGallery.tsx → Agregar más cervezas (array BEERS)
- tailwind.config.js → Cambiar colores (beer.gold, beer.dark, etc)
- components/Hero.tsx → Cambiar el overlay oscuro (bg-black/50)

=== SOPORTE ===

Si algo falla:

1. Verifica que git esté instalado: git --version
2. Revisa los "Actions" en GitHub para ver errores
3. Asegúrate de que node_modules no esté commiteado (.gitignore lo evita)
