$(document).ready(function() {
  $("img").addClass("animated fadeIn");
   function sendMail() {
    var link = 'mailto:5h1dabhi@gmail.com?subject=Message from '
             +document.getElementById('senderEmail').value
             +'&body='+document.getElementById('message').value;
    window.location.href = link;
}
});
