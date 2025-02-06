# 🚀 Manejo de errores en Next.js 15 (`error.tsx`)  

## 📌 Contexto  
Se ha creado un archivo `error.tsx` en la ruta `app/product/[productId]/review/[reviewId]/error.tsx`. Este archivo captura y maneja errores específicos de la página.  

## 🔄 Flujo cuando `reviewId` es `10`  
Si el usuario accede a `/product/123/review/10`, se lanza un error y `error.tsx` se encarga de mostrar un mensaje de error.  

## 🛠️ Comportamiento en diferentes entornos  

### 🔍 **En desarrollo (`pnpm run dev`)**  
- Next.js **muestra el error en pantalla** con una interfaz de error en el navegador.  
- La interfaz incluye un **stack trace**, lo que facilita la depuración.  
![alt text](/public/image.png)


### 🚀 **En producción (`pnpm run build` + `pnpm run start`)**  
- **No se muestra el stack trace** al usuario por seguridad.  
- Next.js **renderiza `error.tsx` automáticamente** cuando ocurre un error.  
- Se puede capturar el error y mostrar un mensaje personalizado.  
![alt text](/public/image-1.png)
