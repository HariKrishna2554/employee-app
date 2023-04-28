import Employee from "./Employee";

function App() {
  const expense = [
    {name:'Manoj', age:28, phone:9870123453},
    {name:'Darwin', age:26, phone:9870123423},
    {name:'Kaveen', age:26, phone:9870134523},
  ];

  const shoot = () => {
    alert("Employee Details are Submitted!");
  }

  return (
    <form>
      <h1 className="heading">Employee Table</h1>
      <Employee items={expense}/>
      <button onClick={shoot} className="submit">Submit</button>
    </form>
  );
}

export default App;