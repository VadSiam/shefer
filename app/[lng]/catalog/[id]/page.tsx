
const ItemPage: React.FC<{ params: { lng: string, id: string } }> = ({ params: {
  lng,
  id,
} }) => {
  const cleanedId = cleanupId(id);
  
  return (
    <div>
      <h1>Item Page: {cleanedId}</h1>
    </div>
  )
}


export default ItemPage

const cleanupId = (dirtyId: string): string => {
  // Decode URI component and then remove the leading colon if present
  return decodeURIComponent(dirtyId).replace(/^:/, '');
};