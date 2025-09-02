const filterA = document.getElementById("blur");
const filterB = document.getElementById("contrast");
const filterC = document.getElementById("hue-rotate");
const filterD = document.getElementById("sepia");
const filterE = document.getElementById("brightness");  
const filterF = document.getElementById("saturation"); 

const noFlipBtn = document.getElementById("no-flip");
const flipXBtn = document.getElementById("flip-x");
const flipYBtn = document.getElementById("flip-y");

const uploadBtn = document.getElementById("upload-button");
const img = document.getElementById("Image");
const downloadButton = document.getElementById("download-button");
const resetBtn = document.getElementById("reset-button"); 


function resetFilter() {
    filterA.value = "0";   
    filterB.value = "100";
    filterC.value = "0";   
    filterD.value = "0";   
    filterE.value = "100"; 
    filterF.value = "100"; 

    noFlipBtn.checked = true;

    addFilter();
    flipImage();
    showRangeValue();
}

uploadBtn.onchange = () => {
    resetFilter();
    document.querySelector(".Image-container").style.display = "block";
    const reader = new FileReader();
    reader.readAsDataURL(uploadBtn.files[0]);
    reader.onload = () => {
        img.setAttribute("src", reader.result);
    };
};

const sliders = document.querySelectorAll(".filter input[type='range']");
sliders.forEach((slider) => {
    slider.addEventListener("input", addFilter);
    slider.addEventListener("input", showRangeValue);
});


function addFilter() {
    img.style.filter = `
        blur(${filterA.value}px) 
        contrast(${filterB.value}%)
        hue-rotate(${filterC.value}deg)
        sepia(${filterD.value}%)
        brightness(${filterE.value}%)
        saturate(${filterF.value}%)
    `;
}


function showRangeValue() {
    const rangeValues = document.querySelectorAll(".range-value");
    sliders.forEach((slider, index) => {
        rangeValues[index].textContent = `${slider.value}%`;
    });
}

const radioBtns = document.querySelectorAll(".flip-option input[type='radio']");
radioBtns.forEach((radioBtn) => {
    radioBtn.addEventListener("click", flipImage);
});

function flipImage() {
    if (flipXBtn.checked) {
        img.style.transform = "scaleX(-1)";
    } else if (flipYBtn.checked) {
        img.style.transform = "scaleY(-1)";
    } else {
        img.style.transform = "scale(1,1)";
    }
}

downloadButton.onclick = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const image = new Image();
    image.src = img.src;
    image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        ctx.filter = img.style.filter;
        ctx.translate(canvas.width / 2, canvas.height / 2);
        if (flipXBtn.checked) {
            ctx.scale(-1, 1);
        } else if (flipYBtn.checked) {
            ctx.scale(1, -1);
        }
        ctx.drawImage(image, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
        const link = document.createElement("a");
        link.download = "edited-image.png";
        link.href = canvas.toDataURL();
        link.click();
    };
};


resetBtn.onclick = resetFilter;


resetFilter();
