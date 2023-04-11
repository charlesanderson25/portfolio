const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

for (let i = 0; i < tabLinks.length; i++) {
  tabLinks[i].addEventListener('click', function() {
    for (let j = 0; j < tabContents.length; j++) {
      tabContents[j].classList.remove('active-tab');
    }
    // const id = this.getAttribute('id');
    // const content = document.querySelector(`.tab-contents:nth-of-type(${id.slice(-1)})`);
    // content.classList.add('active-tab');
  });
}

var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabnmae){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
}
