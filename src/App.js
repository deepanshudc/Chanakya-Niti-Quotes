import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Content from './components/Content';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
          <Content></Content>
        </Layout>
      </header>
    </div>
  );
}

export default App;
