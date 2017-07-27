<html>
<head>
	<link rel="stylesheet" href="style.css">
</head>
<body onLoad="iFrameOn();">
<h2>My web application that intakes data from users</h2>
<form action="my_parse_file.php" name="myform" id="myform" method="post">
	<p>Entry Title: <input name="title" id="title" type="text" size="80" maxlength="80" /></p>
	<p>Entry Body:<br>
	<div id="wysiwyg_cp">
		<input type="button" onClick="iBold()" value="B">
		<input type="button" onClick="iUnderline()" value="U">
		<input type="button" onClick="iItalic()" value="I">
		<input type="button" onClick="iFontSize()" value="Text Size">
		<input type="button" onClick="iForeColor()" value="Text Color">
		<input type="button" onClick="iHorizontalRule()" value="HR">
		<input type="button" onClick="iUnorderedList()" value="UL">
		<input type="button" onClick="iOrderedList()" value="OL">
		<input type="button" onClick="iLink()" value="Link">
		<input type="button" onClick="iUnLink()" value="UnLink">
		<input type="button" onClick="iImage()" value="Image">
	</div>
	<!-- Hide(but keep)your normal textarea and place in the iFrame replacement for it -->
	<textarea style="display:none;" name="myTextArea" id="myTextArea" cols="100" rows="14"></textarea>
	<iframe name="richTextField" id="richTextField" "></iframe>
	<!-- End replacing your normal textarea -->
	</p>
	</br></br>
	<input name="myBtn" type="button" value="Submit Data" onClick="javascript:submit_form();"/>
</form>
<script src="wysiwyg/wysiwyg.js"></script>

</body>
</html>