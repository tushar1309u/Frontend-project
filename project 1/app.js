const container=document.querySelector("#keyContainer");
container.innerHTML=generateHTML("-","-","-");
addEventListener("keydown",(evnt)=>{
    container.innerHTML=generateHTML(evnt.key,evnt.code,evnt.key.charCodeAt(0));
});
function generateHTML(key,code,keyCode){

    return `<div class="key-container">
            <h4 >Key</h4>
            <div class="key-content ">${key===" "? "space":key}
            </div>
         </div>
         <div class="key-container">
            <h4 >Code</h4>
            <div class="key-content ">${code}
            </div>
         </div>
         <div class="key-container">
            <h4 >Key Code</h4>
            <div class="key-content ">${keyCode}
            </div>
         </div>
         
    
    `;
}