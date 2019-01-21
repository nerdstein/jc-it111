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
barBGColor="#003366";
barFontFamily="Verdana";
barFontSize="2";
barFontColor="white";
barVAlign="center";
barWidth=20; // no quotes!!
barText="IT110 Interactive"; // <IMG> tag supported. Put exact html for an image to show.

///////////////////////////

// ssmItems[...]=[name, link, target, colspan, endrow?] - leave 'link' and 'target' blank to make a header
ssmItems[0]=["Menu"] //create header
ssmItems[1]=["Blackboard", "http://blackboard.juniata.edu", "_new"]
ssmItems[2]=["Segue", "http://projects.juniata.edu/segue","_new"]
ssmItems[3]=["IT110 email", "mailto:it110_help@juniata.edu", "_new"]
ssmItems[4]=["Burkhardt Home", "http://faculty.juniata.edu/burkhardt", "_new"]
ssmItems[5]=["Pelkey Home", "http://faculty.juniata.edu/pelkey/", "target=_blank"]
ssmItems[6]=["Johnson Home", "http://faculty.juniata.edu/johnson/", "target=_blank"]
ssmItems[7]=["Library Databases", "http://faculty.juniata.edu/library/databases/database.html", "target=_blank"]

ssmItems[8]=["The Flavors", "", ""] //create header
ssmItems[9]=["Bioinformatics", "../specific_flavors/bio_specific/introduction.htm", "_new"]
ssmItems[10]=["Business", "../specific_flavors/business_specific/introduction.htm", "_new"]
ssmItems[11]=["Enviro's", "../specific_flavors/enviro_specific/introduction.htm", "_new"]

buildMenu();

//-->
