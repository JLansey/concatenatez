<?php
    header("Content-type: text/css; charset: UTF-8");
	
	$catNum = $_GET["cat"];
	
	if ($catNum>5){
	$catNum=100;
}
?>

html,body{
        background-color:black;
		background: url(images/cats_<?php echo $catNum; ?>.jpg) no-repeat center center fixed;
        -webkit-background-size: cover; /*for webKit*/
        -moz-background-size: cover; /*Mozilla*/
        -o-background-size: cover; /*opera*/
        background-size: cover; /*generic*/
		color:white;
		
		
		font-family: 'Oswald', sans-serif;
}

a{
color:white;
}
a.morecats{
color:#fff02a;
font-weight: bold;
}

span{
background-color:black;
margin:6px;
border-radius: 3px;
-webkit-border-radius: 3px;
-moz-border-radius: 3px;
display:inline-block;
}

p.credits{
position: absolute; 
    bottom: 0px; 
}

span.big{
font-size:22px;
padding:8px;
}

span.permalink{
font-size:15px;
padding:6px;
font-family: 'Open Sans', serif;
}

span.small{
font-size:11px;
padding:6px;
margin-bottom:0px;
font-family: 'Open Sans', serif;
}
