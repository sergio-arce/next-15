# 🚀 `loading.tsx` en Next.js 15

## 📌 ¿Qué es?  
El archivo `loading.tsx` se usa en el **App Router** (`app/`) para mostrar una pantalla de carga mientras la página obtiene datos de forma asíncrona. Se activa automáticamente si la página tarda en renderizar.

## 🔄 Flujo de ejecución  
1. El usuario navega a una ruta, por ejemplo, `/blog`.  
2. Si la página necesita cargar datos antes de renderizar, Next.js muestra `loading.tsx`.  
3. Cuando la carga finaliza, `loading.tsx` desaparece y se muestra el contenido de la página.  

## 📂 Ubicación del archivo  
El archivo `loading.tsx` debe estar dentro de la misma carpeta de la ruta en la que se quiere mostrar la pantalla de carga.  

## 🛠️ Cuándo usarlo  
- Para evitar que el usuario vea una pantalla en blanco mientras se cargan datos.  
- Para mejorar la experiencia del usuario con indicadores de carga.  
- Se activa automáticamente en rutas dentro de `app/` cuando la página usa `await`.  

## 🎯 Diferencias con otras estrategias  
- **`loading.tsx`**: Se usa a nivel de ruta y es automático.  
- **`useEffect` y `useState`**: Se usa en componentes cliente para manejar estados de carga manualmente.  
- **`Suspense`**: Se usa para manejar la carga de componentes dentro de una página.  

## 🚀 Conclusión  
`loading.tsx` es una forma sencilla y automática de mejorar la experiencia del usuario en páginas con carga asíncrona dentro del **App Router** de Next.js 15.  
