const alertButton=document.querySelector("#alertButton"),alertPopup=document.querySelector(".alertPopup"),alertText=document.querySelector("#alertText"),closeButton=document.querySelector(".closeButton"),resetButton=document.querySelector(".resetButton"),table=document.querySelector("#textTable"),headders=document.querySelectorAll("#tableHeader"),cell=document.querySelectorAll("#tableCell"),progressBar=document.querySelector("progress"),countReset=(alertButton.addEventListener("click",()=>{"function"==typeof alertPopup.showModal&&alertPopup.showModal();var e=(localStorage.getItem("myClicks")?parseInt(localStorage.getItem("myClicks")):0)+1;localStorage.setItem("myClicks",e),alertText.innerHTML="You have clicked <strong>"+e+" times</strong> to related button.",5<=e&&countReset(e)}),()=>{resetButton.style.display="block",resetButton.onclick=()=>{localStorage.setItem("myClicks",0),alertText.innerHTML="You have clicked <strong>0 times</strong> to related button.",resetButton.style.display="none"}}),tableApi=(alertPopup.addEventListener("click",e=>{var t=alertPopup.getBoundingClientRect();t.top<=e.clientY&&e.clientY<=t.top+t.height&&t.left<=e.clientX&&e.clientX<=t.left+t.width||alertPopup.close()}),closeButton.onclick=()=>{alertPopup.close()},async()=>{const e=await fetch("https://jsonplaceholder.typicode.com/users");if(e.ok)return await e.json();throw new Error("HTTP error! status: "+e.status)}),getData=async()=>{try{progressBar.style.display="block";let e=await tableApi(),s=document.querySelector("#tBody");e.forEach((e,t)=>{let o=document.createElement("tr"),l=document.createElement("td"),r=document.createElement("td"),a=document.createElement("td"),n=document.createElement("td"),c=document.createElement("td"),d=document.createElement("td");l.appendChild(document.createTextNode(t+1)),r.appendChild(document.createTextNode(e?.name)),a.appendChild(document.createTextNode(e?.email)),n.appendChild(document.createTextNode(e?.address.city+", "+e?.address.street+", "+e?.address.suite)),c.appendChild(document.createTextNode(e?.phone)),d.appendChild(document.createTextNode(e?.company.name)),s.appendChild(o),o.appendChild(l),o.appendChild(r),o.appendChild(a),o.appendChild(n),o.appendChild(c),o.appendChild(d)})}finally{progressBar.style.display="none"}};getData();