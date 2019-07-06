

I am trying to create multiple boxes along the top of the page using javascript. I have one box but cannot figure out how to get multiple along the top of the page. This is what I have so far:

    <html>
  <head>
    <title>Boxes on Boxes on Boxes</title>
    <link rel="stylesheet" type="text/css" href="boxes.css">
    <script language="JavaScript">
        el=document.getElementById("box1");
        width=window.innerWidth-50;
        height=window.innerHeight-50;
        el.style.left=width*Math.random();
        el.style.top=height*Math.random();

        el=document.getElementById("box2");
        width=window.innerWidth-50;
        height=window.innerHeight-50;
        el.style.right=width*Math.random();
        el.style.top=height*Math.random();

        el=document.getElementById("box3");
        width=window.innerWidth-50;
        height=window.innerHeight-50;
        el.style.middle=width*Math.random();
        el.style.top=height*Math.random();

    </script>
  </head>
  <body>
    <div id="box1">
      First box 
    </div>

    <div id="box2">
        Second box
    </div>

    <div id="box3">
        Third box
    </div>
  </body>
</html>
Here is the CSS that I have:

#box1{
    background-color:orange;
    padding:5px;
    width:50px;
    height:50px;
    position:absolute;
    left=100px;
    top=100px;
}
#box2{
    background-color:blue;
    padding:5px;
    width:50px;
    height:50px;
    position:absolute;
    left=100px;
    top=100px;
}
#box3{
    background-color:green;
    padding:5px;
    width:50px;
    height:50px;
    position:absolute;
    left=100px;
    top=100px;
}