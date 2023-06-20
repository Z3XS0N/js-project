document.getElementById().onclick=function(){
    var random = Math.floor(Math.random() * (max - min + 1)) + min;
  if(random == 1){
    adam = "Arkadaş";
    console.log("Hoş Geldin Arkadaş Seni Beklüyürdük");
  }else if(random == 1){
    adam = "Düşman";
    console.log("Bu Düşmanlarımızdan birisi. 'Sikdir git amına...'");
  }
};
