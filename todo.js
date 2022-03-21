const add = document.querySelector(".add");
const inp = document.querySelector(".inp");
inp.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    document.querySelector(".add").click();
  }
});
function createTheElement() {
  let ele = `
        <div class="text">
    <input class="textt" contenteditable="false" value="${inp.value}"  /> 
   <button class="btn"><svg  version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="50px" height="100px" viewBox="0 0 494.936 494.936" style="enable-background:new 0 0 50 100;"
	 xml:space="preserve">
<g>
	<g>
		<path d="M389.844,182.85c-6.743,0-12.21,5.467-12.21,12.21v222.968c0,23.562-19.174,42.735-42.736,42.735H67.157
			c-23.562,0-42.736-19.174-42.736-42.735V150.285c0-23.562,19.174-42.735,42.736-42.735h267.741c6.743,0,12.21-5.467,12.21-12.21
			s-5.467-12.21-12.21-12.21H67.157C30.126,83.13,0,113.255,0,150.285v267.743c0,37.029,30.126,67.155,67.157,67.155h267.741
			c37.03,0,67.156-30.126,67.156-67.155V195.061C402.054,188.318,396.587,182.85,389.844,182.85z"/>
		<path d="M483.876,20.791c-14.72-14.72-38.669-14.714-53.377,0L221.352,229.944c-0.28,0.28-3.434,3.559-4.251,5.396l-28.963,65.069
			c-2.057,4.619-1.056,10.027,2.521,13.6c2.337,2.336,5.461,3.576,8.639,3.576c1.675,0,3.362-0.346,4.96-1.057l65.07-28.963
			c1.83-0.815,5.114-3.97,5.396-4.25L483.876,74.169c7.131-7.131,11.06-16.61,11.06-26.692
			C494.936,37.396,491.007,27.915,483.876,20.791z M466.61,56.897L257.457,266.05c-0.035,0.036-0.055,0.078-0.089,0.107
			l-33.989,15.131L238.51,247.3c0.03-0.036,0.071-0.055,0.107-0.09L447.765,38.058c5.038-5.039,13.819-5.033,18.846,0.005
			c2.518,2.51,3.905,5.855,3.905,9.414C470.516,51.036,469.127,54.38,466.61,56.897z"/>
	</g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
<g>
</g>
</svg>edit</button>
    <div class="clear" style= "margin-left: auto;">
    <button>🗑️</button></div>
    <div class="success"><button>✔️</button></div>
  </div>
    `;
  return ele;
}

add.addEventListener("click", () => {
  const inp = document.querySelector(".inp");
  const sc = document.querySelector(".sc");
  if (inp.value.length > 5) {
    sc.innerHTML += createTheElement().trim();
  } else {
    alert("En Az 5 Harf Girmelisiniz!");
  }
  inp.value = "";
  inp.focus();
  removeBtn();
  success();
  edits();
});
function removeBtn(e) {
  let btn = document.querySelectorAll(".clear");
  btn.forEach((buttom) => {
    buttom.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentNode.parentNode.remove();
    });
  });
}
function success() {
  let success = document.querySelectorAll(".success");
  success.forEach((buttom) => {
    buttom.addEventListener("click", (e) => {
      const element = e.target.parentNode.parentNode;
      element.classList.toggle("tg");
    });
  });
}
function edits() {
  const x = document.querySelectorAll(".btn");
  x.forEach((update) => {
    update.addEventListener("click", (e) => {
      const y = e.target.previousElementSibling;
      if (y.contentEditable == "false") {
        y.contentEditable = "true";
      } 
      else {
        y.contentEditable = "false";
        y.focus();
      }
    });
  });
}

function enter() {
  const text = document.querySelector(".textt");
  text.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
      document.querySelector(".btn").click();
    }
  });
}

