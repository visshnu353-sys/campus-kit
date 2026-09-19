let rowCount=0;
function addRow(){
 rowCount++;
 const d=document.createElement('div'); d.className='subject';
 d.innerHTML=`<input type="number" min="0" placeholder="Credits"><input type="number" min="0" max="10" step=".1" placeholder="Grade / 10">`;
 document.getElementById('rows').appendChild(d);
}
addRow();addRow();addRow();
function calcCGPA(){
 const rows=[...document.querySelectorAll('.subject')];let credits=0,points=0;
 rows.forEach(r=>{let c=parseFloat(r.children[0].value)||0,g=parseFloat(r.children[1].value)||0;credits+=c;points+=c*g});
 document.getElementById('cgpaResult').textContent=credits?(points/credits).toFixed(2):'Enter credits and grades';
}
function percentage(){
 let p=parseFloat(document.getElementById('part').value),t=parseFloat(document.getElementById('total').value);
 document.getElementById('percentResult').textContent=(t>0?((p/t)*100).toFixed(2)+'%':'Enter valid marks');
}
let seconds=1500,interval;
function render(){let m=Math.floor(seconds/60),s=seconds%60;document.getElementById('timer').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`}
function startTimer(){clearInterval(interval);interval=setInterval(()=>{if(seconds<=0){clearInterval(interval);alert('Focus session complete! Take a 5-minute break.');return}seconds--;render()},1000)}
function resetTimer(){clearInterval(interval);seconds=1500;render()}
function affiliate(e){e.preventDefault();alert('Replace this button with your approved affiliate URL.');return false}
