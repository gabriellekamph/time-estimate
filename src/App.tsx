import './App.css';
import Form from './components/Form';

  // Function to handle when new estimated is saved (after button click)

  function handleSaveEstimate() {
    console.log("Estimate (not yet) saved! (but it's supposed to when this function is done :))");
  }

function App() {
  return (
    <div className="App">
      <h1>Hello!</h1>
      <Form estimate={1} handleSaveEstimate={handleSaveEstimate} />
    </div>
  );
}

export default App;
