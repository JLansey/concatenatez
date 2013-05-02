<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>It Concatenatez</title>
<meta name="description" content="Concatenatez is a combination of two cats" />

<?php	
//Get the particular cat number:
$catNum = $_GET["cat"];
if ($catNum==null){ // we need to select a random cat
  $catNum = rand(1,3);
}

$nextCat = rand(1,4);
while($nextCat==$catNum){
  $nextCat=rand(1,4);
}


?>
	
<link rel="stylesheet" type='text/css' href="style.php?cat=<?php echo $catNum; ?>";" />
<link href='http://fonts.googleapis.com/css?family=Oswald|Open+Sans' rel='stylesheet' type='text/css' />

</head>

<body>

<?php 


//$database="db467997228";
//$con = mysql_connect('db2110.perfora.net',$username,$password);
//$con = mysql_connect('db467997228.db.1and1.com',$username,$password);

//mysql_select_db($database, $con); 

//if (!$con) 
//{ 
  //die('Could not connect: ' . mysql_error()); 
//} 

$permLink = "http://www.concatenatez.com?cat=".$catNum;
$nextLink = "http://www.concatenatez.com?cat=".$nextCat;

$catText = "i am in ur serverz concatenating ur cats&nbsp;";

$photoSourceName = "netzanette2";
$photoSourceURL = "http://www.flickr.com/photos/netzanette/page173";

if ($catNum==5){
  $photoSourceName = "Jacob Barss-Bailey";  
  $photoSourceURL = "http://jacob.barss-bailey.org";
}


if ($catNum>5){
  $photoSourceName = "courtesy Wisconsin Department of Natural Resources";  
  $photoSourceURL = "http://www.flickr.com/photos/widnr/8538679543/sizes/l/in/photostream/";
  $catText = "Error 404: we haz not a cat for u";
}



?>

<span class="big"><?php echo $catText ?></span><br />
<span class="permalink"><img src="images/permLink.png"><a href="<?php echo $permLink; ?>"><?php echo $permLink; ?></a></span>
<br />
<span class="permalink"><a href="<?php echo $nextLink; ?>" class="morecats">Show me more cats → </a></span>
<br />


<p class="credits">
<span class="small"> <a href="http://www.jonathan.lansey.net">jonathan lansey</a>&nbsp;</span>
<br/>
<span class="small">inspired by <a href="http://www.procatinator.com">
procatinator</a>, photos by <a id="photoSource" href="<?php echo $photoSourceURL; ?>">
<?php echo $photoSourceName; ?></a>, <a href="http://creativecommons.org/">CC</a> &nbsp;</span>
</p>


&nbsp;<!-- Start of StatCounter Code for Default Guide --><script type="text/javascript">
var sc_project=8846297; 
var sc_invisible=1; 
var sc_security="2e009d6c"; 
var scJsHost = (("https:" == document.location.protocol) ?
"https://secure." : "http://www.");
document.write("<sc"+"ript type='text/javascript' src='" +
scJsHost+
"statcounter.com/counter/counter.js'></"+"script>");
</script><noscript><div class="statcounter"><a title="hit counter"
href="http://statcounter.com/free-hit-counter/"
target="_blank"><img class="statcounter"
src="http://c.statcounter.com/8846297/0/2e009d6c/1/"
alt="hit counter"/></a></div></noscript><!-- End of StatCounter Code for Default Guide -->


</body>

</html>
