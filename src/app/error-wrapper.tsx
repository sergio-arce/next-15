'use client'
import { useState } from "react";
import "./global.css"

const ErrorSimulator = ({ 
  message = "An error occurred"
}: {
  message?: string
}) => {

  const [error, setError] = useState(false);
  
  if (error) throw new Error(message)

  return (
    <button
      title="Simulate Error"
      className="bg-red-950 text-red-500 rounded p-1 leading-none font-semibold"
      onClick={() => setError(true)}
    >
      Simulate Error
    </button>
  )
} 


interface WrapperProps {
  children: React.ReactNode
}
export function ErrorWrapper({ children }: WrapperProps) {
  return (
    <div className="flex flex-col rounded-lg mt-8 relative p-8 border border-gray-300 m-8">
      <div className="absolute top-0 left-8 -transate-y-1/2">
        <ErrorSimulator message="Simulated error in root layout" />
      </div>
      {children}
    </div>
  )
}
