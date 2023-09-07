let para = document.querySelector("#count-displayer");
let btn = document.querySelector("#add-count-btn");
let count = 0;

function myAddCount() {
  btn.addEventListener("click", () => {
    count++;
    para.innerHTML=count;
  });
}

myAddCount();
