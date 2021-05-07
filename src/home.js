export default initialPageLoad
const contentContainer = document.getElementById('content');

function Row(heading,description,image) {
    this.heading = heading;
    this.description = description;
    this.image = image;
}

Row.prototype.createRow = function() {
    const rowContainer = document.createElement('div');
    rowContainer.className = 'row';

    const descriptionContainer = document.createElement('div');
    descriptionContainer.className = 'col-sm align-self-center text-center'

    const descriptionHeading = document.createElement('h3');
    descriptionHeading.innerHTML = this.heading
    const descriptionParagraph = document.createElement('p');
    descriptionParagraph.innerHTML = this.description

    const imageContainer = document.createElement('div');
    imageContainer.className = 'col-sm align-self-center'
    
    const newImage = document.createElement('img');
    newImage.className = 'img-fluid';
    newImage.src = this.image

    descriptionContainer.appendChild(descriptionHeading);
    descriptionContainer.appendChild(descriptionParagraph)

    imageContainer.appendChild(newImage);

    rowContainer.appendChild(descriptionContainer);
    rowContainer.appendChild(imageContainer)

    contentContainer.appendChild(rowContainer);
}

Row.prototype.addToArr = function() {
    const rows = [];
    
    rows.push(this);
}

function initialPageLoad() {
    const cateringRow = new Row('catering','Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate excepturi distinctio asperiores quibusdam dolores fuga repellendus incidunt eligendi accusantium aspernatur modi, aut cumque alias assumenda? Blanditiis ex voluptatibus eligendi!','images/lily-banse--YHSwy6uqvk-unsplash.jpg');
    const organicRow = new Row('organic','Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate excepturi distinctio asperiores quibusdam dolores fuga repellendus incidunt eligendi accusantium aspernatur modi, aut cumque alias assumenda? Blanditiis ex voluptatibus eligendi!', 'images/brooke-lark-kXQ3J7_2fpc-unsplash.jpg');
    const delicousRow = new Row('delicous','Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt cupiditate excepturi distinctio asperiores quibusdam dolores fuga repellendus incidunt eligendi accusantium aspernatur modi, aut cumque alias assumenda? Blanditiis ex voluptatibus eligendi!','images/anna-pelzer-IGfIGP5ONV0-unsplash.jpg');

    const heading = document.createElement('h2');
    heading.innerText = 'our services';

    contentContainer.appendChild(heading);
    cateringRow.createRow();
    cateringRow.addToArr();
    organicRow.createRow();
    organicRow.addToArr();
    delicousRow.createRow();
    delicousRow.addToArr();
    contentContainer.children[2].children[0].classList.add('order-sm-2');
    contentContainer.children[2].children[1].classList.add('order-sm-1');
}