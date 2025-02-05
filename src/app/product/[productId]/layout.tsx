export default function layoutProductsDetail({ children }: { children: React.ReactNode }) {
  return (<>
    { children }
  <div style={{ color: 'red' }}>
    <h2>Products ....</h2>
    <p>Lrem ipsum...</p>
  </div>
  </>);
}
