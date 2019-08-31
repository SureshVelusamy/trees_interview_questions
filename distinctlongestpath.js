let a ={key :1, left:{ key: 2, left:{key: 3 , left:{key:4}}}, right:{ key: 4,left:{key: 8}, right:{key:5}}}

 const output = function(a)
 {
   let path=[];
   var route ='';
   function inner(b, route){
    
     if( route.indexOf(b.key) > -1)
     {
      path.push(route);
      return;
     }
     else{
     route =route + b.key;
     }
     if(b.left)
     { 
       inner(b.left, route)
     }
     if(b.right)
     { 
       inner(b.right, route)
     }
     if(! b.left  && !b.right)
       path.push(route)
   }
   inner( a, '')
   return path.reduce(function (a, b) { return a.length > b.length ? a : b; }).length
   
 }

 console.log(output(a))
