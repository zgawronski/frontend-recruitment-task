const alertButton=document.querySelector("#alertButton"),alertPopup=document.querySelector("#alertPopup");alertButton.addEventListener("click",()=>{"function"==typeof alertPopup.showModal&&alertPopup.showModal();var t=localStorage.getItem("myClicks")?parseInt(localStorage.getItem("myClicks")):0;localStorage.setItem("myClicks",t+1)}),alertPopup.addEventListener("click",t=>{var e=alertPopup.getBoundingClientRect();e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width||alertPopup.close()});