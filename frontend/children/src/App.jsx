function App() {
  return (
    <>
      <Card children={<div>Hi There</div>} />
      <Card children={<div style={{color: "cyan"}}>Hi there from card Component</div> } /> 
      <Card>Wassgud homeboys now we chilling</Card>
    </>
  );
}

function Card({ children }) {
  return (
  <div style={{background: "black", borderRadius: "10", color: "white"}}>
    {children}
  </div>
  )
}

export default App;
