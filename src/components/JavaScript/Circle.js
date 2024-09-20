// Code goes here

(function($){
  
    var circleSingletonClass =(function(){
      var instance;
      
      function init(){
        var _aCircle =[],
            _stage = $('#fx');
            
            function _position(circle,top,left){
               circle.css('top',top);
               circle.css('left',left);
            }
            
            function create(top,left){
               var circle=$('<div class="circle"></div>');
               _position(circle,top,left)
               return circle;
            }
            
            function add(circle){
              _stage.append(circle);
              _aCircle.push(circle);
            }
        return {
          create:create,
          add:add
          
        }
      }
      
      return {
        getInstance:function(){
          if(!instance){
            instance = init()
          }
          return instance;
        }
        
      }
      
    })();
    
    
    
    
    $(function(){
    $('#fx').click(function(e){
      var cg =circleSingletonClass.getInstance();
      var circle =cg.create(e.pageY-10,e.pageX-10)
      cg.add(circle)
    })
  })
  })(jQuery)