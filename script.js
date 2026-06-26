let picture = document.getElementsByClassName('img-button');

let allSmallImg = document.getElementById('main-img-wrapper')


let allPictures = [
    { img: '/IMG/Property 1=anime-8788959_1280.jpg.png', name: 'city-night-img' },
    { img: '/IMG/Property 1=atmosphere-8752835_1280.png.png', name: 'night-clouds-im' },
    { img: '/IMG/Property 1=blue-tit-8521052_1280.jpg.png', name: 'blue-bird-img' },
    { img: '/IMG/Property 1=hurricane-92968_1280.jpg.png', name: 'big-hurricane-img' },
    { img: '/IMG/Property 1=lake-2896379_1280.jpg.png', name: 'winter-lake-img' },
    { img: '/IMG/Property 1=moorente-8783210_1280.jpg.png', name: 'mooteente-img' },
    { img: '/IMG/Property 1=sea-2563389_1280.jpg.png', name: 'person-standing' },
    { img: '/IMG/Property 1=snow-bunting-6781122_1280.jpg.png', name: 'bird-rock-img' },
    { img: 'IMG/Property 1=snow-leopard-cubs-8039138_1280.jpg.png', name: 'leopard-img' },
    { img: '/IMG/Property 1=travel-8785493_1280.jpg.png', name: 'snow-landscape-img' },
    { img: '/IMG/Property 1=winter-1675197_1280.jpg.png', name: 'snow-tree-img' }
];

function viewBigImg(img, name) {


    let bigImg = document.getElementById('main-show-big-content');
    let pic = document.getElementById('pic');
    let allImgFirstRow = document.getElementById('main-img-first-line-id');
    let allImgSecondRow = document.getElementById('main-img-second-line-id');

    allSmallImg.classList.toggle('smallIMG');
/*     allImgSecondRow.classList.toggle('smallIMG');   //den beiden Bilderreihen von der main page werden hier Klassen hinzugefügt um das 
 */                                                    //Design zu verändern wenn eines der Bilder angeklickt wurde


    bigImg.innerHTML = `<div class="overlay-wrapper">
        <div id = "overlay-heading" class="overlay-heading">
            <h2>${name}</h2>
        </div>
        <div id = "overlay-main-content" class="overlay-main-content">
            <img id = "main-img" src="${img}" alt="">
        </div>


        <div class="overlax-klick-next">
            <button id = "previous-img" onclick = "showpreviousBigImg()">
                <img src="./IMG/Button (1).svg" alt="klick-next-button"> </button>
                <p></p>
               <button id = "nex-img"  onclick = "shownextBigImg()"> <img src="./IMG/Button.svg" alt="klick-next-button"></button>
           
        </div>
    </div>`;


} 


function shownextBigImg(x) {
    const newImgContainer = document.getElementById('overlay-main-content')
     const newOverlayHeading = document.getElementById('overlay-heading')
    const currentImg = document.getElementById('main-img')
    const srcCurrenImg = currentImg.src;

for (let index = 0; index < allPictures.length; index++) {  //Schleife geht das Array "allPictures" durch 

   let saubererBrowserPfad = decodeURIComponent(srcCurrenImg); //wandelt wieder in Leerzeichen um, 
//damit sie mit den Elementen aus dem Array verglichen werden können
    if (saubererBrowserPfad.includes(allPictures[index].img) ){ //Prüfung ob der src-pfad des aktuellen Bildes (currentImg) dem jeweiligen Pfad aus der Schleife beinhaltet
        
        let nextImgIndex = index + 1

         /* if (nextImgIndex >= allPictures.length){ //damit es zu index 0 springt wenn es beim letzten angekommen ist 
           nextImgIndex = 0 //auf null setzten da es am Ende angekommen ist 
            
         } */
         newImgContainer.innerHTML = `<img id = "main-img" src="${allPictures[nextImgIndex].img}" alt="">`   //neues Bild und Text ins HTML 
         newOverlayHeading.innerHTML = `  <h2>${allPictures[nextImgIndex].name}</h2>`
        break;  //Abbruch der Schleife. Könnte man allerdings auch weglassen (glaube ich)
    }
   
}
}


function showpreviousBigImg() {
    const newImgContainer = document.getElementById('overlay-main-content')
     const newOverlayHeading = document.getElementById('overlay-heading')
    const currentImg = document.getElementById('main-img')
    const srcCurrenImg = currentImg.src;

for (let index = 0; index < allPictures.length; index++) {  //Schleife geht das Array "allPictures" durch 

   let saubererBrowserPfad = decodeURIComponent(srcCurrenImg); //wandelt wieder in Leerzeichen um, 
//damit sie mit den Elementen aus dem Array verglichen werden können
    if (saubererBrowserPfad.includes(allPictures[index].img) ){ //Prüfung ob der src-pfad des aktuellen Bildes (currentImg) dem jeweiligen Pfad aus der Schleife beinhaltet
        
        let nextImgIndex = index - 1

         /* if (nextImgIndex >= allPictures.length){ //damit es zu index 0 springt wenn es beim letzten angekommen ist 
           nextImgIndex = 0 //auf null setzten da es am Ende angekommen ist 
            
         } */
         newImgContainer.innerHTML = `<img id = "main-img" src="${allPictures[nextImgIndex].img}" alt="">`   //neues Bild und Text ins HTML 
         newOverlayHeading.innerHTML = `  <h2>${allPictures[nextImgIndex].name}</h2>`
        break;  //Abbruch der Schleife. Könnte man allerdings auch weglassen (glaube ich)
    }
   
}
}

function loadIMG (){

    

    allPictures.forEach(element => { 
        


        allSmallImg.innerHTML += `  <button class="img-button" onclick = "viewBigImg('${element.img}','${element.name}')"><img id="pic"
                                src="${element.img}" alt="${element.name}"></button>`
        
    })



        
    }


    let laden =  loadIMG ();