import "./App.css";
import data from './data';
import Navbar from './components/Navbar/Navbar';
import Card from './components/Card/Card'

console.log(data);

function App() {
    return (
    <div className="App">
        <Navbar />
        {data.map(item => {
            return <Card 
                key={item.id}
                card={item}
            />
        })}
    </div>
    );
}

export default App;
