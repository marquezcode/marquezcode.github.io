// Functions for each action-command.

function help(){

  return "<h2><span style=\"color:#eb926d;\">Help:</span></h2><table>\
  <tr>\
    <td>all</td>\
    <td>Give me the complete picture</td>\
  </tr>\
  <tr>\
    <td>about</td>\
    <td>Everything you ever wanted to know about Gerard Marquez</td>\
  </tr>\
  <tr>\
    <td>contact</td>\
    <td>How to get in touch with Gerard Marquez</td>\
  </tr>\
  <tr>\
    <td>links</td>\
    <td>See what links Gerard Marquez wants you to click on</td>\
  </tr>\
  <tr>\
    <td>skills</td>\
    <td>Get to know how good Gerard Marquez is at stuff</td>\
  </tr>\
  <tr>\
    <td>video</td>\
    <td>Get to see my past self presenting a web project in may 2021!</td>\
  </tr>\
  <tr>\
    <td>cv</td>\
    <td>Download Gerard Marquez's CV</td>\
  </tr></table>";
}

function contact(){
  return "<h2><span style=\"color:#cc6666;\">Contact:</span></h2><table>\
  <tr>\
    <td>Email</td>\
    <td><a href=\"mailto:gerardmarquez96@gmail.com\">gerardmarquez96@gmail.com</a></td>\
  </tr>\
  <tr>\
    <td>Telephone</td>\
    <td><a href=\"tel:+34-605-945-154\">+34-605-945-154</a></td>\
  </tr>\
  <tr>\
    <td>Address</td>\
    <td>Gerard Marquez</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Isabel la Católica 12</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>08291</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>Ripollet</td>\
  </tr>\
  <tr>\
    <td> </td>\
    <td>ESP</td>\
  </tr></table>";
}

function skills(){
  return "<h2><span style=\"color:#81a2be;\">Skills:</span></h2><table>\
  <tr>\
    <td>HTML & CSS</td>\
    <td>▰▰▰▰▰▰▱▱▱▱ 60%</td>\
  </tr>\
  <tr>\
    <td>HTML</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 50%</td>\
  </tr>\
  <tr>\
    <td>PHP</td>\
    <td>▰▰▰▰▰▱▱▱▱▱ 80%</td>\
  </tr></table>";
}

function about(){
  return "<p>Web programmer and IT technician currently working and studying Computer Engineering.</p>";
}

function cv(){
  return "<span style=\"color:#8abeb7;\"><h2>CV:</h2></span><p>\tDownload from <a href=\"src/cv.pdf\" target=\"_blank\" style=\"text-decoration: underline;\">here</a>.</p>";
}

function credits(){
  return "<p>Built by <a href=\"https://www.github.com/marquezcode\" target=\"_blank\"><i class=\"fab fa-github\"></i> MarquezCode</a></p>";
}

function links(){
  return "<span style=\"color: #b5bd68;\"><h2>Links:</h2></span><ul>\
  <li><a href=\"https://www.linkedin.com/in/gerardmarquez\" target=\"_blank\"><i class=\"fab fa-linkedin\"></i> LinkedIn</a></li>\
  <li><a href=\"https://www.github.com\" target=\"_blank\"><i class=\"fab fa-github\"></i> Github</a></li>\
  <li><a href=\"https://www.twitter.com\" target=\"_blank\"><i class=\"fab fa-twitter\"></i> Twitter</a></li>\
  </ul>";
}

function video(){
  return "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/81j27fEOmUg\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>";
}

// Main Function
function commandProcessor(e){

  //Check if the enter key is pressed
  if(e.keyCode == 13){

    //Clear the area where info will be printed
    document.getElementById('injected').innerHTML= "";

    //Get user input
    var txtInput = document.getElementById('txtBox').value;

    //Select what info to print according to command
    if(txtInput == "help"){
      document.getElementById('injected').innerHTML=help();
    }else if (txtInput=="all") {
      document.getElementById('injected').innerHTML=about() + "\n\n\n" + skills() + "\n\n\n" + links() + "\n\n\n" + contact() + "\n\n\n" + cv() + "\n\n\n" + video();
    }else if (txtInput == "about") {
      document.getElementById('injected').innerHTML=about();
    }else if (txtInput == "contact") {
      document.getElementById('injected').innerHTML=contact();
    }else if (txtInput == "cv") {
      document.getElementById('injected').innerHTML=cv();
    }else if (txtInput=="skills") {
      document.getElementById('injected').innerHTML=skills();
    }else if (txtInput=="links") {
      document.getElementById('injected').innerHTML=links();
    }else if (txtInput == "credits") {
      document.getElementById('injected').innerHTML=credits();
    }else if (txtInput == "video") {
      document.getElementById('injected').innerHTML=video();
    }else{
      document.getElementById('injected').innerHTML = help();
    }

    //Clear input text box
    document.getElementById('txtBox').value= "";
  }
}
