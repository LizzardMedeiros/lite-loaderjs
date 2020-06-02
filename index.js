const style = '#_spinner{position:absolute;left:calc(50vw - 30px);top:calc(50vh - 30px);width:60px;height:60px;z-index:11;border:8px solid #f3f3f3;border-radius:50%;border-top:8px solid;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}#_loader{position:fixed;top:0;left:0;z-index:10;background-color:rgba(.51,.51,.51,.8);width:100vw;height:100vh}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}._animate-bottom{position:relative;-webkit-animation-name:_animatebottom;-webkit-animation-duration:1s;animation-name:_animatebottom;animation-duration:1s}@-webkit-keyframes _animatebottom{from{bottom:-100px;opacity:0}to{bottom:0;opacity:1}}@keyframes _animatebottom{from{bottom:-100px;opacity:0}to{bottom:0;opacity:1}}';

export default function() {
  let wheelColor = '#e53935';
  let cOverflow = "auto";
  const body = document.querySelector("BODY");

  function init() {
    this.overflow = body.style.overflow || "auto";
    if(!document.querySelector('#_style')) {
      document.querySelector('HEAD').appendChild(document.createElement('style')).innerText = style;
    }
  }

  function start() {
    body.style.overflow = "hidden";
    if(!document.querySelector('#_loader')) {
      let el = body.insertBefore(document.createElement('div'), body.firstChild);
      el.id = '_loader';
      el = el.appendChild(document.createElement('div'));
      el.id = '_spinner';
      el.style.borderTopColor = wheelColor;
    }
  }

  function stop() {
    body.style.overflow = cOverflow;
    if(document.querySelector('#_loader')) {
      body.removeChild(document.querySelector('#_loader'));
    }
  }

  return {
    init,
    start,
    stop
  }
}

