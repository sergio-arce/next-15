# Intercepting Routes (Referencias de rutas) en Next.js 15  

Se pueden usar símbolos especiales (`.`, `..`, `..(..)`, `...`) para hacer referencia a diferentes niveles dentro de la carpeta `app/`. Esto facilita la organización de archivos en proyectos con **App Router**.  

## 📌 ¿Qué significa cada uno?  

- **`.`** → Hace referencia al directorio actual.  
- **`..`** → Se mueve un nivel arriba en la estructura de carpetas.  
- **`()..)(..)`** → Se mueve dos niveles arriba.  
- **`(...)`** → Hace referencia directamente a la raíz de la carpeta `app/`, sin importar desde dónde se llame.  

## 📌 ¿Para qué sirve esto?  

Permite importar archivos y definir rutas de manera más clara y eficiente, sin necesidad de escribir rutas largas o confusas. Esto es útil en aplicaciones grandes donde los archivos están organizados en múltiples subcarpetas.  
