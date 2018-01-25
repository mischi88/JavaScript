$(document).ready(function() {	
   $.get("data.xml", function(data) {
      var myData = 
         data.getElementsByTagName('data')[0].firstChild.nodeValue;

      $("#einfuegen").click(function() {
         $('#data').append(myData).show('slow');
      });
   });
});