
////////
//1}First we divided our project into three modules for cleaner code and data privacy.
//We made three seperate modules budgetController,UIController and controller. Controller will be the mediator between UIController and budgetController
//we used IIFE for data privacy in every controller and the concept of closures
var budgetController=(function(){
 
    
    
})();

var UIController=(function(){
    
    // 6}we created DOMstrings object so that we don't have to manually change the code again and again if we change the HTML class structure.
    //we just have to change the class names in this Dom object and pass it everywhere
     var DOMstrings={
             inputType:'.add__type',
             inputDescription:'.add__description',
             inputValue:'.add__value',
             inputbutton:'.add__btn'
         }
     
  return {
     getInput:function(){
        
         //5}Here we will read input values and store it in an object and return that object
         return{
             type:document.querySelector(DOMstrings.inputType).value,
             description:document.querySelector(DOMstrings.inputDescription).value,
             value:document.querySelector(DOMstrings.inputValue).value
         };
     },
      //7} Here we made the DOMStrings object public so that the entire code can access it throught this method
      getDOMstrings:function(){
      return DOMstrings;
  }
 };
    
    
})();



var controller=(function(budgetCtrl,UICtrl){
    // 8}we set up this function so that everything can be in one place instead of being scattered and now we need a public function to call this function
    var setupEventListeners=function(){
        
         var DOM=UICtrl.getDOMstrings();
         document.querySelector(DOM.inputbutton).addEventListener('click',cntrlAddItem);
     document.addEventListener('keypress',function(event){
        if(event.keyCode===13||event.which===13){
            
            cntrlAddItem();
        }
    });
        
    };
    //Here we store DOMSTRING object
  //  var DOM=UICtrl.getDOMstrings();
    // 4}we created this function so to apply thr DRY principle so that code doesn't repeat itself as this function is used for both click event and keypress.
    var cntrlAddItem=function(){
       //A. Get input Data
        var input=UICtrl.getInput();
        
        
    };
    /*
    //2} When the user hits the key we used event listner for click and what function it should do after that
  document.querySelector(DOM.inputbutton).addEventListener('click',cntrlAddItem);
    
    
    // 3}we also used a keypress eventlistener for users who will use enter instead of key and we used specific keycode attribute for that
     document.addEventListener('keypress',function(event){
        if(event.keyCode===13||event.which===13){
            
            cntrlAddItem();
        }
    })*/
    //9} we created an init public function that can be called from outside the controller so that all eventlistener can be executed
    return{
        init:function(){
            console.log('Application has started');
            setupEventListeners();
        }
    }
    
})(budgetController,UIController);

//10} Calling event listener in the controller
controller.init();