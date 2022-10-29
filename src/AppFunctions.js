import { toast } from 'react-toastify';

  let CurBox=0;
  let CurRow=1;
  let guessword="APPLE";//temp
  var colorMap = new Map();

  // document.getElementById('A').focus();

  export function handleKeyDown(key){
    key=''+key.toUpperCase();
    // useEffect(() => {
    //   window.addEventListener('keypress', e => {
    //     console.log(e.key)
    //   });
    // }, []);
    console.log("--->"+key);
    //console.log(key.match(/^[A-Z]$/));
    if(key.match('ENTER')){
      submitclicked();
      return;
    }
    if(key.match('BACKSPACE')){
      delclicked();
      return;
    }
    if(key.match(/^[A-Z]$/)!=null){
      buttonclickedd(key);
      return;
    }

     
  }

  export function buttonclicked(e) {
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

  export function buttonclickedd(e) {
    if(CurBox<5){
      console.log(CurRow);
      const allWithClass = Array.from(
        document.getElementsByClassName('line'+CurRow)
      );
      allWithClass[CurBox].innerHTML=e;
      CurBox++;
    }
  }

  export function changeKeyColor(key, color) {
    console.log("Key, Color",key, ", "+ color);
    var r = document.querySelector(':root');
    var theme=document.documentElement.getAttribute("data-theme");
    if(theme==='dark'){
        r= document.querySelector('[data-theme=dark]');
    }
    
    var rs = getComputedStyle(r);
    const keyDiv=document.getElementById(key);
    console.log("keyDiv",keyDiv.style.backgroundColor);
    
    

    if(colorMap.has(key)){
      if(color==='--color-correct'){
        colorMap.set(key,color);
        console.log("map",colorMap);
        keyDiv.style.backgroundColor=rs.getPropertyValue(color);
      }
    }else{
      colorMap.set(key,color);
      console.log("map",colorMap);
      keyDiv.style.backgroundColor=rs.getPropertyValue(color);
    }

    
  }

  export function submitclicked() {
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
      let temptype=typeWord;
      var r = document.querySelector(':root');
        var theme=document.documentElement.getAttribute("data-theme");
        if(theme==='dark'){
            r= document.querySelector('[data-theme=dark]');
        }
      var rs = getComputedStyle(r);
      for(let i=0;i<5;i++){
        if(typeWord.charAt(i)===guessword.charAt(i)){
          allWithClass[i].style.backgroundColor = rs.getPropertyValue('--color-correct');
          //tempGuess.charAt(i)=" ";
          tempGuess = tempGuess.split('');
          tempGuess[i] = ' ';
          tempGuess = tempGuess.join('');
          temptype = temptype.split('');
          temptype[i] = ' ';
          temptype = temptype.join('');
          console.log("m tempGuess",tempGuess);
          console.log("m temptype:",temptype);
          changeKeyColor(typeWord.charAt(i), "--color-correct");
        }
        
      }
      for(let i=0;i<5;i++){
        
        if(temptype.charAt(i)!==' ') {
          if(tempGuess.indexOf(typeWord.charAt(i))>-1){
            let indx=tempGuess.indexOf(typeWord.charAt(i));
            allWithClass[i].style.backgroundColor = rs.getPropertyValue('--color-present');
            tempGuess = tempGuess.split('');
            tempGuess[indx] = ' ';
            tempGuess = tempGuess.join('');
            temptype = temptype.split('');
            temptype[i] = ' ';
            temptype = temptype.join('');
            changeKeyColor(typeWord.charAt(i), "--color-present");
          }else{
            
              temptype = temptype.split('');
              temptype[i] = '-';
              temptype = temptype.join('');
             
            
          }
          console.log("tempGuess:",tempGuess);
          console.log("temptype:",temptype);
        }
      }
      for(let i=0;i<5;i++){
        if(temptype.charAt(i)==='-'){
          changeKeyColor(typeWord.charAt(i), "--color-absent");
          allWithClass[i].style.backgroundColor = rs.getPropertyValue('--color-absent');
        }
      }

      CurBox=0;
      CurRow=CurRow+1;
      
    }
    
  }
  
  export function delclicked() {
    // let typeWord=getTypedWord();
    // console.log(typeWord.substring(0,CurBox-1));
    if(CurBox>0){
      const allWithClass = Array.from(
        document.getElementsByClassName('line'+CurRow)
      );
      allWithClass[CurBox-1].innerHTML="";
      CurBox--;
    }    
  }

  export function getTypedWord() {
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

  export function themeButton() {
    const theme=sessionStorage.getItem("theme");
    if(theme==="dark"){
        sessionStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
    }else{
        sessionStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
    }   
    

    
  }

  export function colorBlindButton() {
    const colorBlind=sessionStorage.getItem("color-blind");
    if(colorBlind==="no"){
        sessionStorage.setItem("color-blind", "yes");
        document.documentElement.setAttribute("color-blind", "yes");
        // var r = document.querySelector(':root');
        // var rs = getComputedStyle(r);
        // rs.setProperty('--color-correct', ' #f5793a');
        let root = document.documentElement;
        root.style.setProperty('--color-correct', ' #f5793a');
    }else{
        sessionStorage.setItem("color-blind", "no");
        document.documentElement.setAttribute("color-blind", "no");
    }   
    
  }

  