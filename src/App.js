import './App.css';
import { AiFillSetting } from "react-icons/ai";
import { BsBarChartLineFill } from "react-icons/bs";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import { BsBackspace } from "react-icons/bs"
import { AiOutlineEnter } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  let CurBox=0;
  let CurRow=1;
  let guessword="APPLE";//temp

  function buttonclicked(e) {
    if(CurBox<5){
      console.log(CurRow);
      const allWithClass = Array.from(
        document.getElementsByClassName('line'+CurRow)
      );

      allWithClass[CurBox].innerHTML=e.target.value;
      // var r = document.querySelector(':root');
      // var rs = getComputedStyle(r);
      // allWithClass[CurBox].style.backgroundColor = rs.getPropertyValue('--key-bg');
      // console.log(allWithClass[0].value);
      //document.getElementById("fir").innerHTML=e.target.value;
      CurBox++;
    }
  }

  function submitclicked() {
    let typeWord=getTypedWord();
    const allWithClass = Array.from(
      document.getElementsByClassName('line'+CurRow)
    );

    if(CurBox<5){
      toast.warn('Not Enough Letters!', {
        position: "top-center",
        autoClose: 400,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }else{
      console.log(typeWord);
      if(typeWord===guessword){
        console.log("correct");
      }else{
        console.log("wrong");
      }

      let tempGuess=guessword;
      var r = document.querySelector(':root');
      var rs = getComputedStyle(r);
      for(let i=0;i<5;i++){
        if(typeWord.charAt(i)===guessword.charAt(i)){
          allWithClass[i].style.backgroundColor = rs.getPropertyValue('--color-correct');
          //tempGuess.charAt(i)=" ";
          tempGuess = tempGuess.split('');
          tempGuess[i] = ' ';
          tempGuess = tempGuess.join('');
          console.log("tempGuess",tempGuess);
        }else if(tempGuess.indexOf(typeWord.charAt(i))>-1){
          allWithClass[i].style.backgroundColor = rs.getPropertyValue('--color-present');
        }else{
          allWithClass[i].style.backgroundColor = rs.getPropertyValue('--color-absent');
        }
        
      }
      
    }
    CurBox=0;
    CurRow=CurRow+1;
  }
  
  function delclicked() {
    // let typeWord=getTypedWord();
    // console.log(typeWord.substring(0,CurBox-1));
    const allWithClass = Array.from(
      document.getElementsByClassName('line'+CurRow)
    );
    allWithClass[CurBox-1].innerHTML="";
    CurBox--;
  }

  function getTypedWord() {
    let typeWord="";
    const allWithClass = Array.from(
      document.getElementsByClassName('line'+CurRow)
    );
    for(let i=0;i<CurBox;i++){
      typeWord+=allWithClass[i].innerHTML;
    }
    //console.log(typeWord);
    return typeWord;
  }

  return (
    
    <div className="App">
      
      <div className="game-header">
        {/* <header> */}
          <nav className="navbar navbar-dark fixed-top">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar">
                <span className="navbar-toggler-icon"></span>
              </button>
              <a className="navbar-brand" href="#">Wordle</a>
              <div className="side-buttons">
                <button className="side-buttons-icons" type="button" data-bs-toggle="modal" data-bs-target="#settings-modal">
                  <BsFillQuestionCircleFill size={30}/>
                </button>
                <button className="side-buttons-icons px-3" type="button" data-bs-toggle="modal" data-bs-target="#settings-modal">
                  <BsBarChartLineFill size={30}/>
                </button>
                <button className="side-buttons-icons" type="button" data-bs-toggle="modal" data-bs-target="#settings-modal">
                  <AiFillSetting size={30}/>
                </button>
              </div>
              <div className="offcanvas offcanvas-start text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Games</h5>
                  <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
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
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
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
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
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
                  <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault"/>
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
                    <button className="keyboard-button" value="Q"  onClick={buttonclicked}>q</button>
                    <button className="keyboard-button" value="W"  onClick={buttonclicked}>w</button>
                    <button className="keyboard-button" value="E"  onClick={buttonclicked}>e</button>
                    <button className="keyboard-button" value="R"  onClick={buttonclicked}>r</button>
                    <button className="keyboard-button" value="T"  onClick={buttonclicked}>t</button>
                    <button className="keyboard-button" value="Y"  onClick={buttonclicked}>y</button>
                    <button className="keyboard-button" value="U"  onClick={buttonclicked}>u</button>
                    <button className="keyboard-button" value="I"  onClick={buttonclicked}>i</button>
                    <button className="keyboard-button" value="O"  onClick={buttonclicked}>o</button>
                    <button className="keyboard-button" value="P"  onClick={buttonclicked}>p</button>
                  </div>
                <div className="second-row">
                  <div className="flex-div"></div>
                  <button className="keyboard-button" value="A" onClick={buttonclicked}>a</button>
                  <button className="keyboard-button" value="S" onClick={buttonclicked}>s</button>
                  <button className="keyboard-button" value="D" onClick={buttonclicked}>d</button>
                  <button className="keyboard-button" value="F" onClick={buttonclicked}>f</button>
                  <button className="keyboard-button" value="G" onClick={buttonclicked}>g</button>
                  <button className="keyboard-button" value="H" onClick={buttonclicked}>h</button>
                  <button className="keyboard-button" value="J" onClick={buttonclicked}>j</button>
                  <button className="keyboard-button" value="K" onClick={buttonclicked}>k</button>
                  <button className="keyboard-button" value="L" onClick={buttonclicked}>l</button>
                  <div className="flex-div"></div>
                </div>
              <div className="third-row">
                  <button className="keyboard-button" value="Enter" onClick={submitclicked}><AiOutlineEnter/></button>
                  <button className="keyboard-button" value="Z" onClick={buttonclicked}>z</button>
                  <button className="keyboard-button" value="X" onClick={buttonclicked}>x</button>
                  <button className="keyboard-button" value="C" onClick={buttonclicked}>c</button>
                  <button className="keyboard-button" value="V" onClick={buttonclicked}>v</button>
                  <button className="keyboard-button" value="B" onClick={buttonclicked}>b</button>
                  <button className="keyboard-button" value="N" onClick={buttonclicked}>n</button>
                  <button className="keyboard-button" value="M" onClick={buttonclicked}>m</button>
                  <button className="keyboard-button" value="Del" onClick={delclicked}><BsBackspace/></button>
              </div>
            </div>
          </div>
          
          <ToastContainer/>

          

       
      </div>
     



    </div>
  );
}

export default App;
