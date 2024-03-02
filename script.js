window.onload = function () {

    let collection = document.querySelectorAll('.cta');
    let extra = document.querySelectorAll('.cta-extra');
    let openCV = document.getElementById('openCV')
    for (var i=0; i<collection.length; i++) {
        collection[i].addEventListener('click', showCollection);
    }

    for (var i=0; i<extra.length; i++) {
        extra[i].addEventListener('click', showExtra);
    }

    openCV.addEventListener('click', showOpenCV);

function showOpenCV(){
     // Specify the path to your CV file
     var cvFilePath = 'assets/CV_Yusr_Leila_Aoune.pdf';  // Replace this with the actual path to your CV file

     // Open the CV file in a new tab
     window.open(cvFilePath, '_blank');
}
    

function showExtra(){

    let artsVisuels = ['assets/extras/arts_visuel/Portfolionumber1to number19_Page_13.jpg',
'assets/extras/arts_visuel/Portfolionumber1to number19_Page_14.jpg', 'assets/extras/arts_visuel/Portfolionumber1to number19_Page_16.jpg', 
 'assets/extras/arts_visuel/Portfolionumber1to number19_Page_17.jpg', 'assets/extras/arts_visuel/Portfolionumber1to number19_Page_18.jpg',
'assets/extras/arts_visuel/Portfolionumber1to number19_Page_19.jpg' ]

let couture = ['assets/extras/Couture/Portfolionumber1to number19_Page_01.jpg', 'assets/extras/Couture/Portfolionumber1to number19_Page_02.jpg',
'assets/extras/Couture/Portfolionumber1to number19_Page_03.jpg', 'assets/extras/Couture/Portfolionumber1to number19_Page_04.jpg', 'assets/extras/Couture/Portfolionumber1to number19_Page_05.jpg',
'assets/extras/Couture/Portfolionumber1to number19_Page_06.jpg', 'assets/extras/Couture/Portfolionumber1to number19_Page_07.jpg',
'assets/extras/Couture/Portfolionumber1to number19_Page_08.jpg', 'assets/extras/Couture/Portfolionumber1to number19_Page_09.jpg', 
'assets/extras/Couture/Portfolionumber1to number19_Page_10.jpg', 'assets/extras/Couture/Portfolionumber1to number19_Page_11.jpg',
'assets/extras/Couture/Portfolionumber1to number19_Page_12.jpg', 'assets/extras/Couture/Portfolionumber1to number19_Page_15.jpg' ]

let photoAlbum = ['assets/extras/Photo_Album/PhotoPortfolio_Page_01.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_02.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_03.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_04.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_05.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_06.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_07.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_08.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_09.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_10.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_11.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_12.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_13.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_14.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_15.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_16.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_17.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_18.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_19.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_20.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_21.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_22.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_23.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_24.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_25.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_26.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_27.jpg',
    'assets/extras/Photo_Album/PhotoPortfolio_Page_28.jpg']

      // Get the clicked category
  let extra = this.id;
 ;
 
 let imageArray;
 switch (extra) {
     case 'couture':
         imageArray = couture;
         break;
     case 'arts visuals':
         imageArray = artsVisuels;
         break;
     case 'photo album':
         imageArray = photoAlbum;
         break;
     default:
         // Default case, do something if needed
         break;
 }

 // Display the images
 if (imageArray) {
     
     let container = document.getElementById('extras');

     // Clear existing content
     container.innerHTML = '';

     // Append images to the container
     for (let i = 0; i < imageArray.length; i++) {
    
       
        let textNum = container.appendChild(document.createElement('h2'))
        textNum.innerHTML =    `${i}`
         let newImage = document.createElement('img');
         newImage.src = imageArray[i];
       
         container.appendChild(newImage);
     }
 }

 document.getElementById('button-extra').style.display= 'block'


}
    function showCollection(event){

        let DessinsTechniques = 
        ['assets/Dessin_Technique/Academia_Dessin_Technique.jpg',
        'assets/Dessin_Technique/Countryside_Dessin_Technique.jpg',
        'assets/Dessin_Technique/Ethereal_Dessin_Technique.jpg',
        'assets/Dessin_Technique/Rocco_Dessin_Technique.jpg',
        'assets/Dessin_Technique/Victorian_Dessin_Technique.jpg',
        'assets/Dessin_Technique/Whimsical_Dessin_Technique.jpg'
        
    ]
    
    let moodboard = ['assets/Moodboard/Academia.png',
    'assets/Moodboard/the_country.jpg',
    'assets/Moodboard/Ethereal.png',
    'assets/Moodboard/Rococo.png',
    'assets/Moodboard/Victorian.png',
    'assets/Moodboard/Whimsical.png',
    
    
    ]
    
    let presentation = ['assets/Presentation/Academia.jpg',
    "assets/Presentation/The_Country.jpg",
    "assets/Presentation/Ethereal.jpg",
    'assets/Presentation/Rococo.jpg',
    'assets/Presentation/Victorean.jpg',
    'assets/Presentation/Whimsical.jpg'
    
    ]
  // Get the clicked category
  let category = this.id;

 

  // Find the corresponding image path in the array
  let imagePath;
  let moodboardPath;
  let presentationPath
  switch (category) {
      case 'academia':
          imagePath = DessinsTechniques[0];
          moodboardPath = moodboard[0];
          presentationPath = presentation[0];
          break;
      case 'country':
          imagePath = DessinsTechniques[1];
          moodboardPath = moodboard[1];
          presentationPath = presentation[1];
          break;
      case 'ethereal':
          imagePath = DessinsTechniques[2];
          moodboardPath = moodboard[2];
          presentationPath = presentation[2];
          break;
      case 'rocco':
          imagePath = DessinsTechniques[3];
          moodboardPath = moodboard[3];
          presentationPath = presentation[3];
          break;
      case 'victorian':
          imagePath = DessinsTechniques[4];
          moodboardPath = moodboard[4];
          presentationPath = presentation[4];
          break;
      case 'whimsical':
          imagePath = DessinsTechniques[5];
          moodboardPath = moodboard[5];
          presentationPath = presentation[5];
          break;
      default:
          // Default case, do something if needed
          break;
  }

  // Update the src attribute of the mainImage
  document.getElementById('mainImage').src = imagePath;
  document.getElementById('moodboardImg').src = moodboardPath;
  document.getElementById('presentationImg').src = presentationPath;
  document.getElementById('main').style.display = 'block';
  document.getElementById('nav-1').style.display = 'block'
 
     // Remove underline from all categories
     removeUnderline();

     // Add underline to the clicked category
     underline(category);

  

 
}

function removeUnderline() {
    // Remove underline from all categories
    let categories = document.getElementsByClassName('cta');
    for (let i = 0; i < categories.length; i++) {
        categories[i].style.borderBottom = 'none';
    }
    underlined = false;
}

function underline(id) {
    // Add underline to the clicked category
    document.getElementById(id).style.borderBottom = '3px solid #000000';
    document.getElementById(id).style.paddingBottom = '5px';

    underlined = true;
}

}
  