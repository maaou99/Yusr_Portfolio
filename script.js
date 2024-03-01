window.onload = function () {

    let collection = document.querySelectorAll('.cta');
    let extra = document.querySelectorAll('.cta-extra');
  
    for (var i=0; i<collection.length; i++) {
        collection[i].addEventListener('click', showCollection);
    }

    for (var i=0; i<extra.length; i++) {
        extra[i].addEventListener('click', showExtra);
    }
    

function showExtra(){

      // Get the clicked category
  let extra = this.id;
console.log(extra);
 

  // Find the corresponding image path in the array
  let imagePath;
  let moodboardPath;
  let presentationPath
  switch (extra) {
      case 'couture':
          console.log('Couture')
          break;
      case 'arts visuals':
        alert('hii')
          break;
      case 'photo album':
        alert('hii')
          break;
      default:
          // Default case, do something if needed
          break;
  }



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
  