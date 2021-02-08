 Vue'yu  "vue" den  içe aktar ; içe App gelen "./App" ; içe { kütüphane } gelen "@ fortawesome / fontawesome-svg çekirdekli" ; { faUserSecret } öğesini "@ fortawesome / free-solid-svg-icons" dan içe aktarın ; içe { FontAwesomeIcon } gelen "@ fortawesome / vue-fontawesome" ;
   
     
     
     

kütüphane . add ( faUserSecret ) ;

Vue . bileşen ( "font-awesome-icon" ,  FontAwesomeIcon ) ;

Vue . config . productionTip  =  yanlış ;

/ * eslint-disable-new-no-new * / 
new  Vue ( { 
  el : "#app" , 
  bileşenler : { App } , 
  şablon : "<App />" , 
} ) ;
