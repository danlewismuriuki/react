import Button from "./components/Buttons";

function App() {
  const handleClick = () => {
    alert("Button clicked");
  };

  return (
    <div>
      <Button label="Click Me" onClick={handleClick} />
      <Button
        label="Submit"
        onClick={handleClick}
        type="submit"
        className="btn-primary"
      />
      <Button label="Disabled" onClick={handleClick} disabled={true} />
    </div>
  );
}
export default App;
