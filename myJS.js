$(document).ready(function() {
  $("img").addClass("animated shake");
  $("button").click(function(){
    window.open('https://mail.google.com/mail/');
});
   function sendMail() {
   window.open('https://mail.google.com/mail/');
    var link = 'mailto:5h1dabhi@gmail.com?subject=Message from '
             +document.getElementById('senderEmail').value
             +'&body='+document.getElementById('message').value;
    window.location.href = link;
}

});
