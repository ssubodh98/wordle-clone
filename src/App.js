import './App.css';
import { AiFillSetting } from "react-icons/ai";
import { BsBarChartLineFill } from "react-icons/bs";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsBackspace } from "react-icons/bs"
import { AiOutlineEnter } from "react-icons/ai";
 import { AiOutlineClose } from "react-icons/ai";
import { GiBee } from "react-icons/gi";
import { GiShare } from "react-icons/gi";
import { GoThreeBars } from "react-icons/go";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as myfn from './AppFunctions.js';


function App() {
  document.documentElement.setAttribute("data-theme", "light");
  sessionStorage.setItem("theme", "light");
  document.documentElement.setAttribute("color-blind", "no");
  sessionStorage.setItem("color-blind", "no");

  return (
    
    <div className="App" tabIndex="0" onKeyDown={(e: KeyboardEvent<HTMLDivElement>) => myfn.handleKeyDown(e.key)}>
      
      <div className="game-header">
        {/* <header> */}
          <nav className="navbar navbar-light fixed-top">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                {/* <span className="navbar-toggler-icon"></span> */}
                <GoThreeBars/>
              </button>
              <a className="navbar-brand" href="#">Wordle</a>
              <div className="side-buttons">
                <button className="side-buttons-icons" type="button" data-bs-toggle="modal" data-bs-target="#how-modal">
                  <BsFillQuestionCircleFill size={30}/>
                </button>
                <button className="side-buttons-icons px-3" type="button" data-bs-toggle="modal" data-bs-target="#statistics-modal">
                  <BsBarChartLineFill size={30}/>
                </button>
                <button className="side-buttons-icons" type="button" data-bs-toggle="modal" data-bs-target="#settings-modal">
                  <AiFillSetting size={30}/>
                </button>
              </div>
              <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Games</h5>
                  <button type="button" className="dismiss-button" data-bs-dismiss="offcanvas" aria-label="Close">
                    <AiOutlineClose/>
                  </button>
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-start flex-grow-1 pe-3">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Archive</a>
                    </li>
                  
                  </ul>
                  
                </div>
                <div className="offcanvas-footer">
                  <small className="copyright text-center">
                    Made with ❤️ | Website developed by S Subodh
                  </small><br></br>
                  <small>
                    This website is developed only for Educational purpose
                  </small>
                </div>
              </div>
            </div>
          </nav> 

      </div>

      {/* Settings Modal */}
      <div className="modal" id="settings-modal" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <div className="flex-div"></div>
              <h5 className="modal-title" id="exampleModalLabel">SETTINGS</h5>
              <div className="flex-div"></div>
              <button type="button" className="dismiss-button" data-bs-dismiss="modal" aria-label="Close"><AiOutlineClose/></button>
              {/* <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close">
                <AiOutlineClose/>
              </button> */}
            </div>
            <div className="modal-body">
              <div className="settings-options">
                <div className="settings-options-texts">
                  <div>
                    Hard Mode
                  </div>
                  <div>
                    <small>
                      Any revealed hints must be used in subsequent guesses
                    </small>
                  </div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
                </div>
              </div>

              <div className="settings-options">
                <div className="settings-options-texts">
                  <div>
                    Dark Theme
                  </div>
                  <div>
                   
                  </div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" onClick={myfn.themeButton} id="flexSwitchCheckDefault"/>
                </div>
              </div>

              <div className="settings-options">
                <div className="settings-options-texts">
                  <div>
                    High Contrast Mode
                  </div>
                  <div>
                    <small>
                      For improved color vision
                    </small>
                  </div>
                </div>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" onClick={myfn.colorBlindButton} id="flexSwitchCheckDefault"/>
                </div>
              </div>

              <div className="settings-options">
                <div className="settings-options-texts">
                  <div>
                    Feedback
                  </div>
                </div>
                <div className="settings-options-side">
                    Email
                </div>
              </div>

              <div className="settings-options">
                <div className="settings-options-texts">
                  <div>
                    Community

                  </div>
                </div>
                <div className="settings-options-side">
                    Twitter
                </div>
              </div>

              <div className="settings-options">
                <div className="settings-options-texts">
                  <div>
                    Questions?
                  </div>
                </div>
                <div className="settings-options-side">
                    FAQ
                </div>
              </div>
              <div>
                <small>
                Made with ❤️ | Website developed by S Subodh
                </small>
              </div>
              

            </div>
            {/* <div className="modal-footer">
              <small className="copyright text-center">
                  Made with ❤️ | Website developed by S Subodh
              </small>
              <small>
                This website is developed only for Educational purpose
              </small>
            </div> */}
          </div>
        </div>
      </div>

      {/* How to play Modal */}
      <div className="modal" id="how-modal" tabIndex="-3" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header pb-0">
              <div className="flex-div"></div>
              <button type="button" className="dismiss-button" data-bs-dismiss="modal" aria-label="Close">
                <AiOutlineClose/>
              </button>
            </div>
            <div className="modal-body">
              <div className="how-options">
                <h3>How To Play</h3>
                
                <h5>Guess the Wordle in 6 tries.</h5>

                <div className="bullets">
                  <ul>
                    <li>Each guess must be a valid 5-letter word.</li>
                    <li>The color of the tiles will change to show how close your guess was to the word.</li>
                  </ul>
                </div>
                <div className="examples  mb-3">
                  <div>Examples</div>
                  <div className="how-row">
                    <div className="cube exm correct col-2">W</div>
                    <div className="cube exm col-2">E</div>
                    <div className="cube exm col-2">A</div>
                    <div className="cube exm col-2">R</div>
                    <div className="cube exm col-2">Y</div>
                  </div>
                  <div>W is in the word and in the correct spot.</div>
                </div>
                <div className="examples mb-3">
                  <div className="how-row">
                    <div className="cube exm col-2">P</div>
                    <div className="cube exm present col-2">I</div>
                    <div className="cube exm col-2">L</div>
                    <div className="cube exm col-2">L</div>
                    <div className="cube exm col-2">S</div>
                  </div>
                  <div>I is in the word but in the wrong spot.</div>
                </div>
                <div className="examples mb-3">
                  <div className="how-row">
                    <div className="cube exm col-2">V</div>
                    <div className="cube exm col-2">A</div>
                    <div className="cube exm col-2">G</div>
                    <div className="cube exm absent col-2">U</div>
                    <div className="cube exm col-2">E</div>
                  </div>
                  <div>U is not in the word in any spot.</div>
                </div>
              
              </div>

              <div>
                <div className="how-footer">
                  A new puzzle is released daily at midnight. If you haven’t already, you can <a href = "#">sign up</a> for our daily reminder email.
                </div>
                <div className="how-footer">
                  Have feedback? Email us at <a href = "#">xyz@xyz.com</a>.
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Statistics Modal */}
      <div className="modal" id="statistics-modal" tabIndex="-2" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header pb-0">
              <div className="flex-div"></div>
              
              <button type="button" className="dismiss-button" data-bs-dismiss="modal" aria-label="Close"><AiOutlineClose/></button>
            </div>
            <div className="modal-body pt-0">
              <div className="statistics-options">

                <div>
                  <h5 className="modal-title" id="exampleModalLabel">STATISTICS</h5>
                </div>
                <div className="stats-boxes">
                  <div className="stats-box">
                    <div className="stats-num">
                      1
                    </div>
                    <div className="stats-text">
                      Played
                    </div>
                  </div>

                  <div className="stats-box">
                    <div className="stats-num">
                      100
                    </div>
                    <div className="stats-text">
                      Win %
                    </div>
                  </div>

                  <div className="stats-box">
                    <div className="stats-num">
                      1
                    </div>
                    <div className="stats-text">
                      Current Streak
                    </div>
                  </div>

                  <div className="stats-box">
                    <div className="stats-num">
                      1
                    </div>
                    <div className="stats-text">
                      Max Streak
                    </div>
                  </div>

                </div>

                <div className="mt-2 mb-1">
                  <h6 className="modal-title" id="exampleModalLabel">GUESS DISTRIBUTION</h6>
                  <div className="noData">
                    <p className="text-center">No Data</p>  
                  </div>
                  <div>

                  </div>
                                    
                </div>

              </div>
              
              <div className="mt-1">
                NEXT WORDLE IN 22:13:04
              </div>
              <div className="mt-1 stats-footer">
                    <button className="button spellingBeeYellow" type="button">Play Spelling Bee <GiBee/></button>
                    <button className="button share correct" type="button">Share <GiShare/></button>
                  
              </div>
              

            </div>
          </div>
        </div>
      </div>
      
      <div className="game-body">
        
          <div className="Board-module">
            <div className="Board-module-board">
              <div className="board-row">
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
                <div className="cube line1 col-2"></div>
              </div>
              <div className="board-row">
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
                <div className="cube line2 col-2"></div>
              </div>
              <div className="board-row">
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
                <div className="cube line3 col-2"></div>
              </div>
              <div className="board-row">
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
                <div className="cube line4 col-2"></div>
              </div>
              <div className="board-row">
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
                <div className="cube  line5 col-2"></div>
              </div>
              <div className="board-row">
                <div className="cube line6 col-2"></div>
                <div className="cube line6 col-2"></div>
                <div className="cube line6 col-2"></div>
                <div className="cube line6 col-2"></div>
                <div className="cube line6 col-2"></div>
              </div>
            </div>
            
          </div>
          <div className="Keyboard-module">
            <div id="keyboard-cont">
                <div className="first-row">
                    <button className="keyboard-button" value="Q" id="Q"  onClick={myfn.buttonclicked}>q</button>
                    <button className="keyboard-button" value="W" id="W"  onClick={myfn.buttonclicked}>w</button>
                    <button className="keyboard-button" value="E" id="E"  onClick={myfn.buttonclicked}>e</button>
                    <button className="keyboard-button" value="R" id="R"  onClick={myfn.buttonclicked}>r</button>
                    <button className="keyboard-button" value="T" id="T"  onClick={myfn.buttonclicked}>t</button>
                    <button className="keyboard-button" value="Y" id="Y"  onClick={myfn.buttonclicked}>y</button>
                    <button className="keyboard-button" value="U" id="U"  onClick={myfn.buttonclicked}>u</button>
                    <button className="keyboard-button" value="I" id="I"  onClick={myfn.buttonclicked}>i</button>
                    <button className="keyboard-button" value="O" id="O"  onClick={myfn.buttonclicked}>o</button>
                    <button className="keyboard-button" value="P" id="P"  onClick={myfn.buttonclicked}>p</button>
                  </div>
                <div className="second-row">
                  <div className="flex-div"></div>
                  <button className="keyboard-button" value="A" id="A" onClick={myfn.buttonclicked}>a</button>
                  <button className="keyboard-button" value="S" id="S" onClick={myfn.buttonclicked}>s</button>
                  <button className="keyboard-button" value="D" id="D" onClick={myfn.buttonclicked}>d</button>
                  <button className="keyboard-button" value="F" id="F" onClick={myfn.buttonclicked}>f</button>
                  <button className="keyboard-button" value="G" id="G" onClick={myfn.buttonclicked}>g</button>
                  <button className="keyboard-button" value="H" id="H" onClick={myfn.buttonclicked}>h</button>
                  <button className="keyboard-button" value="J" id="J" onClick={myfn.buttonclicked}>j</button>
                  <button className="keyboard-button" value="K" id="K" onClick={myfn.buttonclicked}>k</button>
                  <button className="keyboard-button" value="L" id="L" onClick={myfn.buttonclicked}>l</button>
                  <div className="flex-div"></div>
                </div>
              <div className="third-row">
                  <button className="keyboard-button" value="Enter" onClick={myfn.submitclicked}><AiOutlineEnter/></button>
                  <button className="keyboard-button" value="Z" id="Z" onClick={myfn.buttonclicked}>z</button>
                  <button className="keyboard-button" value="X" id="X" onClick={myfn.buttonclicked}>x</button>
                  <button className="keyboard-button" value="C" id="C" onClick={myfn.buttonclicked}>c</button>
                  <button className="keyboard-button" value="V" id="V" onClick={myfn.buttonclicked}>v</button>
                  <button className="keyboard-button" value="B" id="B" onClick={myfn.buttonclicked}>b</button>
                  <button className="keyboard-button" value="N" id="N" onClick={myfn.buttonclicked}>n</button>
                  <button className="keyboard-button" value="M" id="M" onClick={myfn.buttonclicked}>m</button>
                  <button className="keyboard-button" value="Del" onClick={myfn.delclicked}><BsBackspace/></button>
              </div>
            </div>
          </div>
          
          <ToastContainer/>

          

       
      </div>
     



    </div>
  );
}

export default App;
