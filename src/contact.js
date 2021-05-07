export default loadContact
const contentContainer = document.querySelector('#content')

function Contact(contact,image) {
    this.contact = contact
    this.image = image
}

function Location(street,city,zip,contact,image) {
    Contact.call(this,contact,image)
    this.street = street
    this.city = city
    this.zip = zip
}

function Time(weekDays,weekHours,weekendDays,weekendHours,contact,image) {
    Contact.call(this,contact,image)
    this.weekDays = weekDays
    this.weekHours = weekHours
    this.weekendDays = weekendDays
    this.weekendHours = weekendHours
}

function Telephone(number,contact,image) {
    Contact.call(this,contact,image)
    this.number = number
}

function Email(email,contact,image) {
    Contact.call(this,contact,image)
    this.email = email
}

Contact.prototype.createContact = function(row,info1,info2) {
    const contactContainer = document.createElement('div');
    contactContainer.className = 'mt-3 col-sm-6'
    const contactMethod = document.createElement('h4')

    const vectorImage = document.createElement('img');
    vectorImage.src = this.image
    const contactName = document.createElement('span');
    contactName.innerText = this.contact

    const contactInfo1 = document.createElement('div');
    contactInfo1.innerText = info1
    const contactInfo2 = document.createElement('div');
    contactInfo2.innerText = info2


    row.appendChild(contactContainer);
    contactContainer.appendChild(contactMethod)
    contactContainer.appendChild(contactInfo1);
    contactContainer.appendChild(contactInfo2);
    contactMethod.appendChild(vectorImage);
    contactMethod.appendChild(contactName);
} 

Location.prototype = Object.create(Contact.prototype);
Time.prototype = Object.create(Contact.prototype);
Telephone.prototype = Object.create(Contact.prototype);
Email.prototype = Object.create(Contact.prototype);

function loadContact() {
    const locate = new Location('555 lorem ipsum street','new york, NY','10452','location','images/geo-alt-fill.svg')
    const telephone = new Telephone('(555)-555-5555','telephone','images/telephone-fill.svg');
    const time = new Time('monday - friday','7:00AM - 7:00PM','saturday - sunday','8:00AM - 9:00PM','time','images/clock-fill.svg');
    const email = new Email('lorem1ipsum@gmail.com','email','images/envelope-fill.svg');

    const contactRow = document.createElement('div');
    contactRow.className = 'row contact';
    const heading = document.createElement('h2');
    heading.innerText = 'Contact';    

    contentContainer.appendChild(heading);
    contentContainer.appendChild(contactRow);
    locate.createContact(contactRow,`${locate.street}`,`${locate.city} ${locate.zip}`);
    time.createContact(contactRow,`${time.weekDays}: ${time.weekHours}`,`${time.weekendDays}: ${time.weekendHours}`);
    telephone.createContact(contactRow,telephone.number,null);
    email.createContact(contactRow,email.email,null);
}