function openMailAddr(elem){
 var mailaddr = elem.dataset.name +"@"+ elem.dataset.domain +"."+ elem.dataset.tld;
 window.location.href = "mailto:"+ mailaddr;
 return;
}