'use client';  // Esto indica que el archivo es un componente del cliente, necesario para manejar la interfaz de usuario y los eventos en el navegador.

import { useEffect } from 'react';  // Importamos useEffect de React para ejecutar efectos secundarios.

export default function Error({
    error,
    reset,
}: {
  error: Error & { digest?: string };  // El prop `error` es una instancia del objeto de Error nativo de JavaScript con una posible propiedad `digest`.
  reset: () => void;  // El prop `reset` es una función que se utiliza para resetear el límite de error y reintentar renderizar el segmento de la ruta.
}) {
    useEffect(() => {
    // Opcionalmente, registra el error en un servicio de reporte de errores.
        console.error(error);
    }, [error]);  // El efecto se ejecuta cada vez que el valor de `error` cambia.

return (
    <main className="flex h-full flex-col items-center justify-center">  
      <h2 className="text-center">Something went wrong!</h2> 
        <button
            className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
            onClick={
            // Intenta recuperar el error re-renderizando la ruta de facturas.
            () => reset()
            }
        >
        Try again  
        </button>
    </main>
    );
}
