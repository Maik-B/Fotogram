const arrayImg1=["IMG_0134.JPG",
    "IMG_0164.JPG",
    "IMG_0168.JPG",
    "IMG_0174.JPG",
    "IMG_0192.JPG",
    "IMG_0237.JPG",
    "IMG_0254.JPG",
    "IMG_0258.JPG",
    "IMG_0265.JPG",
    "IMG_0285.JPG"];

const arrayImg2=["IMG_0329.JPG",
        "IMG_0345.JPG",
        "IMG_0403.JPG",
        "IMG_0419.JPG",
        "IMG_0425.JPG",
        "IMG_0444.JPG",
        "IMG_0467.JPG",
        "IMG_0471.JPG",
        "IMG_0490.JPG",
        "IMG_0498.JPG"
        ];
const arrayImg3=["IMG_0505.JPG",
        "IMG_0514.JPG",
        "IMG_0519.JPG",
        "IMG_0524.JPG",
        "IMG_0532.JPG",
        "IMG_0534.JPG",
        "IMG_0552.JPG",
        "IMG_0565.JPG",
        "IMG_0569.JPG",
        "IMG_0571.JPG"
        ];
const arrayImg4 = ["IMG_0597.JPG",
        "IMG_0599.JPG",
        "IMG_0611.JPG",
        "IMG_0615.JPG",
        "IMG_0638.JPG",
        "IMG_0665.JPG",
        "IMG_0669.JPG",
        "IMG_0694.JPG",
        "IMG_0699.JPG",
        "IMG_0706.JPG"];
const arrayImg5 = ["IMG_0709.JPG",
        "IMG_0724.JPG",
        "IMG_0737.JPG",
        "IMG_0747.JPG",
        "IMG_0750.JPG",
        "IMG_0859.JPG",
        "IMG_0860.JPG",
        "IMG_0861.JPG",
        "IMG_0903.JPG",
        "IMG_0904.JPG"];
const arrayImg6 = ["IMG_1031.JPG",
        "IMG_1034.JPG",
        "IMG_1040.JPG",
        "IMG_1042.JPG",
        "IMG_1046.JPG",
        "IMG_1063.JPG",
        "IMG_1067.JPG",
        "IMG_1068.JPG",
        "IMG_1081.JPG",
        "IMG_1123.JPG"];
const arrayImg7 = ["IMG_1144.JPG",
        "IMG_1146.JPG",
        "IMG_1150.JPG",
        "IMG_1151.JPG",
        "IMG_1171.JPG",
        "IMG_1190.JPG",
        "IMG_1197.JPG",
        "IMG_1223.JPG",
        "IMG_1224.JPG",
        "IMG_1250.JPG"
        ];
const arrayImg8 = ["IMG_1255.JPG",
        "IMG_1259.JPG",
        "IMG_1261.JPG",
        "IMG_1264.JPG",
        "IMG_1271.JPG",
        "IMG_1309.JPG",
        "IMG_1316.JPG",
        "IMG_1407.JPG",
        "IMG_1444.JPG",
        "IMG_1457.JPG",
        ];
const arrayImg9 = ["IMG_1530.JPG",
        "IMG_1537.JPG",
        "IMG_1600.JPG",
        "IMG_1715.JPG",
        "IMG_1733.JPG",
        "IMG_1747.JPG",
        "IMG_1802.JPG",
        "IMG_1843.JPG",
        "IMG_1849.JPG",
        "IMG_1850.JPG",
        ];
const arrayImg10 = ["IMG_1859.JPG",
        "IMG_1899.JPG",
        "IMG_1915.JPG",
        "IMG_1923.JPG",
        "IMG_1924.JPG",
        "IMG_1979.JPG",
        "IMG_1987.JPG",
        "IMG_3016.JPG",
        "IMG_9099.JPG",
        "IMG_9148.JPG",
        ];
const arrayImg11 = ["IMG_9315.JPG",
        "IMG_9565.JPG",
        "IMG_9774.JPG",
        "IMG_9857.JPG",
        "IMG_9886.JPG",
        "IMG_9941.JPG"];

function renderFiltered(index){
    if (index == 1) {
        render(arrayImg1);
    }    if (index == 2) {
        render(arrayImg2);
    }    if (index == 3) {
        render(arrayImg3);
    }    if (index == 4) {
        render(arrayImg4);
    }    if (index == 5) {
        render(arrayImg5);
    }    if (index == 6) {
        render(arrayImg6);
    }    if (index == 7) {
        render(arrayImg7);
    }    if (index == 8) {
        render(arrayImg8);
    }    if (index == 9) {
        render(arrayImg9);
    }    if (index == 10) {
        render(arrayImg10);
    }    if (index == 11) {
        render(arrayImg11);
    }
        
}

function render(arrayImg){
    const photoRef = document.getElementById('photos');
    photoRef.innerHTML = "";
    for (x=0; x<arrayImg.length;x++)
    {
        photoRef.innerHTML += getPicturesHTML(x, arrayImg);
    }
}

function getPicturesHTML(x, arrayImg){
    return `<div class="single_element">
                                    <img onClick = toggleOverlay("${arrayImg[x]}") src="./img/${arrayImg[x]}" alt="${arrayImg[x]}" />
                                </div>`;
    
}

function toggleOverlay(index){
    let overlayRef = document.getElementById(`overlay`);
    let img_html= `<img src="./img/${index}" alt="${index}" />`;
    document.getElementById(`dialog_body`).innerHTML = img_html;
    //document.getElementById(`dialog_title`).innerHTML = index;
    overlayRef.classList.toggle(`d_none`);
}