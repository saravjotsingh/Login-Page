
  

function display(){
  
  document.getElementById('id01').style.display = "block";
  document.getElementsByTagName('h2')[0].style.display = "none";
  document.getElementById('topbutton').style.display = "none";
  // $(h2).hide();
  // $("#topbutton").hide();
};

function displaynone(){
  document.getElementsByTagName('h2')[0].style.display = "block";
  document.getElementById('topbutton').style.display = "block";
  document.getElementById('id01').style.display = "none";
};
