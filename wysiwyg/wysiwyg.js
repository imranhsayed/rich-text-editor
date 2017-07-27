function iFrameOn(){
	richTextField.document.designMode = 'On';
}
function iBold(){
	richTextField.document.execCommand('bold',false,null);
}
function iUnderline(){
	richTextField.document.execCommand('underline',false,null);
}
function iItalic(){
	richTextField.document.execCommand('italic',false,null);
}
function iFontSize(){
	// prompt function gives option to chose the font-size. Left param is what is prompted and right param '' holds the value user enters which is stored in size
	var size = prompt('Enter a size 1 - 7', '');
	richTextField.document.execCommand('FontSize',false,size);
}
function iForeColor(){
	var color = prompt('Define a basic color or apply a hexadecimal color code for advanced colors:', '');
	richTextField.document.execCommand('ForeColor',false,color);
}
function iHorizontalRule(){
	richTextField.document.execCommand('inserthorizontalrule',false,null);
}
function iUnorderedList(){
	richTextField.document.execCommand("InsertOrderedList", false,"newOL");
}
function iOrderedList(){
	richTextField.document.execCommand("InsertUnorderedList", false,"newUL");
}
function iLink(){
	var linkURL = prompt("Enter the URL for this link:", "http://");
	richTextField.document.execCommand("CreateLink", false, linkURL);
}
function iUnLink(){
	richTextField.document.execCommand("Unlink", false, null);
}
function iImage(){
	var imgSrc = prompt('Enter image location', '');
	if(imgSrc != null){
		richTextField.document.execCommand('insertimage', false, imgSrc);
	}
}
function submit_form(){
	var theForm = document.getElementById( 'myform' );

	// Assigning the content of the iFrame equal to the textarea of the form.
	theForm.elements["myTextArea"].value = window.frames['richTextField'].document.body.innerHTML;
	theForm.submit();
}

