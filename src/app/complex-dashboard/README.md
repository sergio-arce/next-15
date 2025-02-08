# Paralell routes

Permiten que una misma página tenga múltiples rutas que se renderizan de manera simultánea. Esto resulta útil cuando quieres dividir una página en diferentes secciones independientes, pero que se muestran al mismo tiempo.

## ¿Qué hacen las rutas paralelas?

Permiten que diferentes partes de una página se gestionen de manera independiente, lo que permite una carga y actualización más eficiente del contenido sin necesidad de recargar toda la página.

### Beneficios de las rutas paralelas:

1. **Carga asíncrona**: Cada sección o parte de la página se carga de manera independiente. Esto mejora el rendimiento ya que no es necesario recargar la página completa.
   
2. **Independencia de las secciones**: Puedes gestionar y actualizar cada sección de manera independiente. Por ejemplo, un panel de notificaciones puede actualizarse sin necesidad de recargar otras secciones, como la de usuarios o ingresos.

3. **Mejora de la experiencia del usuario**: Debido a que solo se actualizan las secciones que cambian, el usuario experimenta menos tiempos de espera y una interfaz más rápida y fluida.

## Conclusión

Las **rutas paralelas** en Next.js 15 permiten gestionar secciones independientes dentro de una misma página, mejorando tanto el rendimiento como la experiencia del usuario. Puedes actualizar o cargar secciones de manera asíncrona sin recargar toda la página, lo cual es especialmente útil en aplicaciones con contenido dinámico o actualizaciones frecuentes.
