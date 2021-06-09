String.prototype.capitalize = function(){
  return this.charAt(0).toUpperCase() + this.slice(1);
}

// returns true if str is a valid URL, otherwise false
function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

// put object into string for display

function objectDisplay(obj,indent=0){
  var str = "";
  var ind =""; for(let i = 0;i<indent;i++)ind+= '&nbsp';
  for (j in obj){
    let r=null;
    if(Array.isArray(obj[j])) r='[]';
    else if(typeof obj[j] === "object" && obj[j] != null) r='{}';

    if(r)
       str += ind + j.capitalize() + ' : '+ r[0]+ '<br>' + objectDisplay(obj[j], indent+j.length+1)+
       ind+r[1]+'<br>';
    else{
      if (typeof obj[j] === "string" && validURL(obj[j]))
        str += ind + j.capitalize() +' : <a href="'+ obj[j]+'" style="color:blue">' + obj[j]+ '</a><br>';
      else
        str += ind + j.capitalize() +' : <span style="color:blue">' + obj[j]+'</span><br>';
    }
  }
  return str;
}
