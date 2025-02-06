"use client"

export default function ErrorBoundary({ error }: { error: Error }) {

  return <div style={{ color: 'red', fontSize: 50 }}>{error.message}</div>;
}
