function openTab(evt, tab) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tab).style.display = "block";
  evt.currentTarget.className += " active";
}
function More(){
	var Text = document.getElementById("more");
	var showmore= document.getElementById("showmore");
	showmore.style.display = "none";
	Text.style.display = "inline";
}

const editBtn = document.getElementById('editProfileButton');
editBtn.addEventListener('click', (event) => {
  event.preventDefault();
  window.location.href = '/EditProfile'; // Redirect to EditProfile page
});