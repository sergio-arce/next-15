"use client"

/**
 * ## Explicación de `startTransition` y `reset` en el `ErrorBoundary`
 * 
 * En Next.js 15, el código maneja errores con un `ErrorBoundary` que usa `startTransition` y `reset` para optimizar la recuperación.
 * 
 * ### 🔹 `startTransition`
 * - Marca la actualización como una transición para evitar bloqueos en la UI.
 * - Permite que la interfaz siga siendo interactiva mientras se ejecuta la navegación.
 * 
 * ### 🔹 `reset`
 * - Restablece el estado del `ErrorBoundary`.
 * - Permite que la aplicación intente renderizar nuevamente sin el error.
 * 
 * ### 🔹 Flujo del botón **"Reload"**
 * 1. Se ejecuta `startTransition` para optimizar la transición.
 * 2. `router.back()` navega a la página anterior.
 * 3. `reset()` limpia el estado del error para permitir un nuevo render.
 * 
 * Esto asegura que la recuperación del error sea más fluida y eficiente.
 */

import { useRouter } from "next/navigation"
import { startTransition } from "react"

export default function ErrorBoundary({ 
  error,
  reset 
}: { 
  error: Error,
  reset: () => void 
}) {

  const router = useRouter()

  const reload = () => {
    startTransition(() => {
      // router.refresh()
      router.back()
      reset()
    })
  }

  return (
    <div style={{ border: '1px solid black', padding: '1rem', margin: '1rem'}}>
      <p style={{ color: 'red', fontSize: 50 }}>{error.message}</p>
      <button onClick={reload}>Reload</button>
    </div>
  )
}
