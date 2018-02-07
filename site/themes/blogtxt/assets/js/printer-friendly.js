// Select a printer friendly css version
// Change link accordly to enable or disable printer-friendly style

var locate = window.location.search;

function get_printer_friendly(str) {
    point = str.lastIndexOf("=");
    argv = str.substring(point+1,str.length);
    idx = argv.indexOf("printer_friendly");
    return(idx >= 0);
}

$( document ).ready(switch_printer_friendly ( get_printer_friendly(locate)));

function switch_printer_friendly ( show_printer_friendly ) {
   var i, a;

   for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
     if(a.getAttribute("rel").indexOf("style") != -1
        && a.getAttribute("title")) {
       if(a.getAttribute("title") == "printer-friendly") {
           a.disabled = !show_printer_friendly;

           // Change link to enable/disable printer friendly
           x = document.getElementById("printer_friendly_link");
           if (show_printer_friendly) {
              x.setAttribute('onclick','switch_printer_friendly( false ); return false;');
              x.setAttribute("title", "Vista Normal");
              x.innerHTML = `<img class="theme-icon" src="/assets/images/normal-view-icon.png" alt="Vista Normal" />`;
           } else {
              x.setAttribute('onclick','switch_printer_friendly( true ); return false;');
              x.innerHTML = `<img class="theme-icon" src="/assets/images/print-icon.png" alt="Imprimir" />`;
           }

       }
     }
   }
}
