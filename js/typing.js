const content = `안녕하세요 성공회대학교 컴퓨터공학과 김호진입니다. `;

const text = document.querySelector(".text");

let index = 0;
 
function typing(){
  text.textContent += content[index++]
  if(index > content.length){
    text.textContent = ""
    index = 0;
  }
}
setInterval(typing, 200)