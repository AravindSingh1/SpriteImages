const rowColumnData = { 1: "a", 2: "b", 3: "c", 4: "d", 5: "e", 6: "f" };

const rowInputEl = document.getElementById("row");
const columnInputEl = document.getElementById("column");
const outputImgEl = document.querySelector(".splittedImg");

document.onkeydown = function (ev) {
    if (ev.code == "Enter") {
        generateSplittedImage();
    }
}


// function renderImg() {
//     let row = rowInputEl.value;
//     let column = columnInputEl.value;
//     // console.log(row == "");
//     let imgId = "";

//     if (0 <= row <= 6 && 0 <= column <= 4) {
//         imgId += rowColumnData[row];
//         imgId += rowColumnData[column];
//         outputImgEl.id = imgId;
//     }

//     if (row == "" && 0 <= column <= 4) {
//         imgId = "column";
//         imgId += rowColumnData[column];
//         // console.log(imgId);
//         outputImgEl.id = imgId;
//     }

//     if(column == "" && 0<=row<=6){
//         imgId = "row";
//         imgId += rowColumnData[row];
//         outputImgEl.id = imgId;
//     }
// }


function generateSplittedImage(){
    let row = rowInputEl.value;
    let column = columnInputEl.value;
    if(0<row<=6 && 0<column<=4){
        outputImgEl.style.backgroundPosition = `${(column-1)*-241}px ${(row-1)*-165.9}px`;
    }else{
        outputImgEl.id = "all";
    }
}