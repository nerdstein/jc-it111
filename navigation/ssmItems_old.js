<!--

/*
Configure menu styles below
NOTE: To edit the link colors, go to the STYLE tags and edit the ssm2Items colors
*/
YOffset=150; // no quotes!!
XOffset=0;
staticYOffset=30; // no quotes!!
slideSpeed=20 // no quotes!!
waitTime=100; // no quotes!! this sets the time the menu stays out for after the mouse goes off it.
menuBGColor="black";
menuIsStatic="yes"; //this sets whether menu should stay static on the screen
menuWidth=150; // Must be a multiple of 10! no quotes!!
menuCols=2;
hdrFontFamily="verdana";
hdrFontSize="2";
hdrFontColor="white";
hdrBGColor="#170088";
hdrAlign="left";
hdrVAlign="center";
hdrHeight="15";
linkFontFamily="Verdana";
linkFontSize="2";
linkBGColor="white";
linkOverBGColor="#FFFF99";
linkTarget="_top";
linkAlign="Left";
barBGColor="#444444";
barFontFamily="Verdana";
barFontSize="2";
barFontColor="white";
barVAlign="center";
barWidth=20; // no quotes!!
barText="IT110 Interactive"; // <IMG> tag supported. Put exact html for an image to show.

///////////////////////////

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["Menu"] //create header
ssmItems[1]=["Comments on Lecture", "http://faculty.juniata.edu/pelkey/write/annotate.php", "_new"]
ssmItems[2]=["Blackboard", "http://blackboard.juniata.edu/", "_new"]
ssmItems[3]=["Juniata Main Page", "http://www.juniata.edu", "_new"]
ssmItems[4]=["Pelkey Home", "http://faculty.juniata.edu/pelkey/", "target=_blank"]
ssmItems[5]=["Library Databases", "http://services.juniata.edu/library/databases/database.html", "target=_blank"]

ssmItems[6]=["Helpdesk", "http://help.juniata.edu", "_new", 1, "no"] //create two column row
ssmItems[7]=["Email", "mailto:pelkey@juniata.edu", "",1]

ssmItems[8]=["31 Flavors", "", ""] //create header
ssmItems[9]=["Bio Types", "http://www.wsabstract.com", "_new"]
ssmItems[10]=["Business", "http://www.freewarejava.com", "_new"]
ssmItems[11]=["Enviro's", "http://absolutegb.com/maximus/", "_new"]

buildMenu();

//-->
