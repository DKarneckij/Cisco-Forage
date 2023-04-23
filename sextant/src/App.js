import './App.css';

function App() {
  const title = document.title;

  return (
    <div className="App">
      <Header title={title} />
      <div className="wrapper">
        Test
      </div>
    </div>
  );
}

function Header(props) {
  return <h1 className="App-header"
    >{props.title}
    </h1>;
}

export default App;
