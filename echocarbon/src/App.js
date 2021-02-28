import './App.css';
import "bulma/css/bulma.css"
import DropDown from './components/Calculator'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p class = "is-size-1">EchoCarbon</p>
        <div class="container is-widescreen">
          <div class="notification is-success">
            Carbon Footprint Calculator
            <progress class="progress" value="60" max="100">60%</progress>
              <article class="message is-success">
                <div class="message-body">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
                </div>
              </article>
              <DropDown />
              <input class="input is-success" type="text" placeholder="Type here!"></input>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
