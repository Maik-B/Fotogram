const arrayImg_Collection = ["IMG_0134.JPG",
    "IMG_0164.JPG",
    "IMG_0168.JPG",
    "IMG_0174.JPG",
    "IMG_0192.JPG",
    "IMG_0237.JPG",
    "IMG_0254.JPG",
    "IMG_0258.JPG",
    "IMG_0265.JPG",
    "IMG_0285.JPG",
    "IMG_0329.JPG",
        "IMG_0345.JPG",
        "IMG_0403.JPG",
        "IMG_0419.JPG",
        "IMG_0425.JPG",
        "IMG_0444.JPG",
        "IMG_0467.JPG",
        "IMG_0471.JPG",
        "IMG_0490.JPG",
        "IMG_0498.JPG",
        "IMG_0505.JPG",
        "IMG_0514.JPG",
        "IMG_0519.JPG",
        "IMG_0524.JPG",
        "IMG_0532.JPG",
        "IMG_0534.JPG",
        "IMG_0552.JPG",
        "IMG_0565.JPG",
        "IMG_0569.JPG",
        "IMG_0571.JPG",
        "IMG_0597.JPG",
        "IMG_0599.JPG",
        "IMG_0611.JPG",
        "IMG_0615.JPG",
        "IMG_0638.JPG",
        "IMG_0665.JPG",
        "IMG_0669.JPG",
        "IMG_0694.JPG",
        "IMG_0699.JPG",
        "IMG_0706.JPG",
        "IMG_0709.JPG",
        "IMG_0724.JPG",
        "IMG_0737.JPG",
        "IMG_0747.JPG",
        "IMG_0750.JPG",
        "IMG_0859.JPG",
        "IMG_0860.JPG",
        "IMG_0861.JPG",
        "IMG_0903.JPG",
        "IMG_0904.JPG",
        "IMG_1031.JPG",
        "IMG_1034.JPG",
        "IMG_1040.JPG",
        "IMG_1042.JPG",
        "IMG_1046.JPG",
        "IMG_1063.JPG",
        "IMG_1067.JPG",
        "IMG_1068.JPG",
        "IMG_1081.JPG",
        "IMG_1123.JPG",
        "IMG_1144.JPG",
        "IMG_1146.JPG",
        "IMG_1150.JPG",
        "IMG_1151.JPG",
        "IMG_1171.JPG",
        "IMG_1190.JPG",
        "IMG_1197.JPG",
        "IMG_1223.JPG",
        "IMG_1224.JPG",
        "IMG_1250.JPG",
        "IMG_1255.JPG",
        "IMG_1259.JPG",
        "IMG_1261.JPG",
        "IMG_1264.JPG",
        "IMG_1271.JPG",
        "IMG_1309.JPG",
        "IMG_1316.JPG",
        "IMG_1407.JPG",
        "IMG_1444.JPG",
        "IMG_1457.JPG",
        "IMG_1530.JPG",
        "IMG_1537.JPG",
        "IMG_1600.JPG",
        "IMG_1715.JPG",
        "IMG_1733.JPG",
        "IMG_1747.JPG",
        "IMG_1802.JPG",
        "IMG_1843.JPG",
        "IMG_1849.JPG",
        "IMG_1850.JPG",
        "IMG_1859.JPG",
        "IMG_1899.JPG",
        "IMG_1915.JPG",
        "IMG_1923.JPG",
        "IMG_1924.JPG",
        "IMG_1979.JPG",
        "IMG_1987.JPG",
        "IMG_3016.JPG",
        "IMG_9099.JPG",
        "IMG_9148.JPG",
        "IMG_9315.JPG",
        "IMG_9565.JPG",
        "IMG_9774.JPG",
        "IMG_9857.JPG",
        "IMG_9886.JPG",
        "IMG_9941.JPG"];



function renderFiltered(index){
    if (index == 1) {
        render(0);
    }    if (index == 2) {
        render(10);
    }    if (index == 3) {
        render(20);
    }    if (index == 4) {
        render(30);
    }    if (index == 5) {
        render(40);
    }    if (index == 6) {
        render(50);
    }    if (index == 7) {
        render(60);
    }    if (index == 8) {
        render(70);
    }    if (index == 9) {
        render(80);
    }    if (index == 10) {
        render(90);
    }    if (index == 11) {
        render(100);
    }
        
}

function render(positionIndicator){
    const photoRef = document.getElementById('photos');
    photoRef.innerHTML = "";
    
    for (x=0+positionIndicator; x<10+positionIndicator;x++)
    {
        if(x<arrayImg_Collection.length){

            photoRef.innerHTML += getPicturesHTML(x, arrayImg_Collection);
        }
        else
        {
            break;
        }
    }
}

function getPicturesHTML(x, arrayImg){
    let number = x+1;
    return `<div class="single_element">
                                    <img onClick ="toggleOverlay('${arrayImg[x]}', '${number}')" src="./img/${arrayImg[x]}" alt="${arrayImg[x]}" />
                                </div>`;
    
}

function toggleOverlay(index, arrayPosition){
    let overlayRef = document.getElementById(`overlay`);
    let img_Dialog = document.getElementById(`img_dialog`);
    let img_html= `<img src="./img/${index}" alt="${index}" />`;
    let footer_html= `          <button onclick = "switchImage(${arrayPosition-1},-1)">&#8592</button>
          <span id="dialog_from_of"></span>
          <button onclick = "switchImage(${arrayPosition-1},1)">&#8594</button>`;
    document.getElementById('dialog_footer').innerHTML = footer_html;
    document.getElementById(`dialog_body`).innerHTML = img_html;
    document.getElementById(`dialog_title`).innerHTML = index;
    document.getElementById(`dialog_from_of`).innerHTML = arrayPosition + "/" + arrayImg_Collection.length;
    document.getElementById(`index_id`).classList.toggle(`no_scroll`);
    overlayRef.classList.toggle(`d_none`);
    img_Dialog.classList.toggle(`d_none`);
}

function switchImage(arrayPosition, direction){
    console.log("test 1: "+arrayPosition + " " + direction);

    let newArrayPosition = arrayPosition + direction;

    console.log("test 2: " + newArrayPosition);
    
    if(newArrayPosition+1 > arrayImg_Collection.length){
        newArrayPosition = 0;
        console.log("test omega: " + newArrayPosition);
    } else if (newArrayPosition < 0) {
        newArrayPosition = arrayImg_Collection.length-1;
        console.log("test alpha: " + newArrayPosition);
    }

    let newImage = arrayImg_Collection[newArrayPosition];
    let img_html= `<img src="./img/${newImage}" alt="${newImage}" />`
    document.getElementById('dialog_body').innerHTML = img_html;
    document.getElementById('dialog_title').innerHTML = newImage;
    let footer_html= `          <button onclick = "switchImage(${newArrayPosition},-1)">&#8592</button>
    <span id="dialog_from_of"></span>
    <button onclick = "switchImage(${newArrayPosition},1)">&#8594</button>`;
    document.getElementById('dialog_footer').innerHTML = footer_html;
    document.getElementById('dialog_from_of').innerHTML = newArrayPosition+1 + "/" + arrayImg_Collection.length;
}