import './App.css';
import { AiFillSetting } from "react-icons/ai";
import { BsBarChartLineFill } from "react-icons/bs";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsBackspace } from "react-icons/bs"



function App() {
  return (
    <div className="App">
      <div class="container game-header">
        {/* <header> */}
          <nav class="navbar navbar-dark fixed-top">
            <div class="container-fluid">
              <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span class="navbar-toggler-icon"></span>
              </button>
              <a class="navbar-brand" href="#">Wordle</a>
              <div class="side-buttons">
                <span class="side-buttons-icons"><BsFillQuestionCircleFill size={30}/></span>
                <span class="side-buttons-icons px-3"><BsBarChartLineFill size={30}/></span>
                <span class="side-buttons-icons"><AiFillSetting size={30}/></span>

              </div>
              
              <div class="offcanvas offcanvas-start text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Games</h5>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="navbar-nav justify-content-start flex-grow-1 pe-3">
                    <li class="nav-item">
                      <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Link</a>
                    </li>
                  
                  </ul>
                  
                </div>
              </div>
            </div>
          </nav> 

    
        {/* </header> */}
      </div>
      <div class="container game-body">
        
          <div class="Board-module">
            <div class="Board-module-board">
              <div class="row">
                <div class="cube col-2">A</div>
                <div class="cube col-2">P</div>
                <div class="cube col-2">P</div>
                <div class="cube col-2">L</div>
                <div class="cube col-2">E</div>
              </div>
              <div class="row">
                <div class="cube col-2">O</div>
                <div class="cube col-2"></div>
                <div class="cube col-2">1</div>
                <div class="cube col-2">2</div>
                <div class="cube col-2">1</div>
              </div>
              <div class="row">
                <div class="cube col-2">1</div>
                <div class="cube col-2">2</div>
                <div class="cube col-2">1</div>
                <div class="cube col-2">2</div>
                <div class="cube col-2">1</div>
              </div>
              <div class="row">
                <div class="cube col-2">1</div>
                <div class="cube col-2">2</div>
                <div class="cube col-2">1</div>
                <div class="cube col-2">2</div>
                <div class="cube col-2">1</div>
              </div>
              <div class="row">
                <div class="cube col-2">1</div>
                <div class="cube col-2">2</div>
                <div class="cube col-2">1</div>
                <div class="cube col-2">2</div>
                <div class="cube col-2">1</div>
              </div>
              <div class="row">
                <div class="cube col-2">1</div>
                <div class="cube col-2">2</div>
                <div class="cube col-2">1</div>
                <div class="cube col-2">2</div>
                <div class="cube col-2">1</div>
              </div>
            </div>
            
          </div>
          <div class="Keyboard-module">
            <div id="keyboard-cont">
                <div class="first-row">
                    <button class="keyboard-button">q</button>
                    <button class="keyboard-button">w</button>
                    <button class="keyboard-button">e</button>
                    <button class="keyboard-button">r</button>
                    <button class="keyboard-button">t</button>
                    <button class="keyboard-button">y</button>
                    <button class="keyboard-button">u</button>
                    <button class="keyboard-button">i</button>
                    <button class="keyboard-button">o</button>
                    <button class="keyboard-button">p</button>
                  </div>
                <div class="second-row">
                  <button class="keyboard-button">a</button>
                  <button class="keyboard-button">s</button>
                  <button class="keyboard-button">d</button>
                  <button class="keyboard-button">f</button>
                  <button class="keyboard-button">g</button>
                  <button class="keyboard-button">h</button>
                  <button class="keyboard-button">j</button>
                  <button class="keyboard-button">k</button>
                  <button class="keyboard-button">l</button>
                </div>
              <div class="third-row">
                  <button class="keyboard-button">Enter</button>
                  <button class="keyboard-button">z</button>
                  <button class="keyboard-button">x</button>
                  <button class="keyboard-button">c</button>
                  <button class="keyboard-button">v</button>
                  <button class="keyboard-button">b</button>
                  <button class="keyboard-button">n</button>
                  <button class="keyboard-button">m</button>
                  <button class="keyboard-button"><BsBackspace/></button>
              </div>
            </div>
          </div>
          


       
      </div>



    </div>
  );
}

export default App;
