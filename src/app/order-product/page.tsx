'use client'

import { useRouter } from "next/navigation"

export default function OrderProduct() {
  
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
    // router.back() -> Va a la página anterior en el historial  
    // router.forward() -> Va a la siguiente página en el historial  
    // router.prefetch('/') -> Precarga la ruta '/' para una navegación más rápida  
    // router.push('/') -> Navega a '/' y agrega al historial  
    // router.refresh() -> Recarga la página actual sin perder el estado  
    // router.replace('/') -> Reemplaza la URL actual por '/' sin agregar al historial  
  }

  return <>
    <h1>Order Product</h1>

    <button onClick={handleClick}>go to home</button>

  </>
}