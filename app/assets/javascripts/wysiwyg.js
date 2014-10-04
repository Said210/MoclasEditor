// This is a javascript file named wysiwyg.js
function iFrameOn(){
	
	//$('toolbar').load("parts/TopBar.html");
	richTextField.document.designMode = 'On';
	$("#richTextField").css("display","block");
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
function SetSize(a){
	richTextField.document.execCommand('FontSize',false,a);
}
function iForeColor(){
	//var color = prompt('Define a basic color or apply a hexadecimal color code for advanced colors:', '');
	var color=document.getElementById("ColorPicker").value;
	richTextField.document.execCommand('ForeColor',false,color);
}
function iBackColor(){
	//var color = prompt('Define a basic color or apply a hexadecimal color code for advanced colors:', '');
	var color=document.getElementById("ColorPicker2").value;
	richTextField.document.execCommand('BackColor',false,color);
}
function Center(){
	richTextField.document.execCommand('justifyCenter',false,null)
}
function Left(){
	richTextField.document.execCommand('justifyLeft',false,null)
}
function Right(){
	richTextField.document.execCommand('justifyRight',false,null)
}
function iHorizontalRule(){
	richTextField.document.execCommand('inserthorizontalrule',false,null);
}
function iUnorderedList(){
	richTextField.document.execCommand("InsertUnorderedList", false,"newOL");
}
function iOrderedList(){
	richTextField.document.execCommand("InsertOrderedList", false,"newUL");
}
function iLink(){
	var linkURL = prompt("Enter the URL for this link:", "http://"); 
	richTextField.document.execCommand("CreateLink", false, linkURL);
}
function iUnLink(){
	richTextField.document.execCommand("Unlink", false, null);
}
function undo(){
	richTextField.document.execCommand('undo',false,null)
}
function redo(){
	richTextField.document.execCommand('redo',false,null)
}
function iImage(){
	var imgSrc = prompt('Enter image location', '');
    if(imgSrc != null){
        richTextField.document.execCommand('insertimage', false, imgSrc); 
    }
}
function submit_form(){
	var theForm = document.getElementById("myform");
	theForm.elements["myTextArea"].value = window.frames['richTextField'].document.body.innerHTML;
	theForm.submit();
}

rteName = "richTextField";
function rteInsertHTML(html) {
if (document.all) {
var oRng = document.getElementById(rteName).contentWindow.document.selection.createRange();
oRng.pasteHTML(html);
oRng.collapse(false);
oRng.select();
} else {
	var text="<span class='"+html+"'>"+SafeHTML()+"</span>";
document.getElementById(rteName).contentWindow.document.execCommand('insertHTML', false, text);
}
};

function MakeCode(html) {
if (document.all) {
var oRng = document.getElementById(rteName).contentWindow.document.selection.createRange();
oRng.pasteHTML(html);
oRng.collapse(false);
oRng.select();
} else {
	var text="<div class='Code'>"+SafeHTML()+"</div>";
document.getElementById(rteName).contentWindow.document.execCommand('insertHTML', false, text);
}
};

function printDoc() {
  var oPrntWin = window.open("","_blank","width=450,height=470,left=400,top=100,menubar=no,toolbar=no,location=no,scrollbars=yes");
  oPrntWin.document.open();
  oPrntWin.document.write("<!doctype html><html><head><link type=\"text\/css\" href=\"http://fonts.googleapis.com/css?family=Roboto:100,200,300,400\" rel=\"stylesheet\"><link type=\"text/css\" href=\"Res\/css/depend.css\" rel=\"stylesheet\"><title>"+title.value+"<\/title><\/head><body onload=\"print();\">" + richTextField.document.body.innerHTML + "<\/body><\/html>");
  oPrntWin.document.close();
}

function addVid(){
		var url=prompt("Paste Youtube URL","");
		var a=url.split("v=");
		//alert(a[1]);
		var embed='<iframe width="420" height="315" src="http://www.youtube.com/embed/%var%?rel=0" frameborder="0" allowfullscreen></iframe>';
		var ready=embed.replace("%var%",a[1].toString());
		document.getElementById(rteName).contentWindow.document.execCommand('insertHTML', false, ready);
	}

function getSelectionText() {
    var text = "";
    if (richTextField.getSelection) {
        text = richTextField.getSelection().toString();
    } else if (richTextF.ielddocument.richTextFieldselection && richTextField.document.selection.type != "Control") {
        text = richTextField.document.selection.createRange().text;
    }
    return text;
}

function SafeHTML(){
	var pre=getSelectionText();

	pre=pre.replace(/</g,"&lt;");
	pre=pre.replace(/>/g,"&gt;");
	return pre;
}
function createTable(){
		var row=prompt("Row number");
		var col=prompt("Col number");
		var Code= Math.floor((Math.random() * 100) + 65); 
		Code=Code+String.fromCharCode( Math.floor((Math.random() * 88) + 66) );
		Code=Code+ Math.floor((Math.random() * 10) + 1); 
		var output='<span class="table-options-main" style="width:auto"><table cellspacing="0" id="UITable'+Code+'" width="auto">';

		for(var i=0; i<col; i++){
		output=output+"<tr>";
			for (var u=0;u<row;u++) {
				output=output+"<td>Lorem</td>";
			};
		output=output+"</tr>";
		};
		output=output+'<span class="OptionsTable"><span class="UI-TableButton" id="addCol" onclick="AddCol(\''+Code+'\',false)">Add Column</span> | <span class="UI-TableButton" id="addRow" onclick="AddRow(\''+Code+'\',true)">Add Row</span></span></span>';
		document.getElementById(rteName).contentWindow.document.execCommand('insertHTML', false, output);
	}
function createTableWithHeader(){
	var row=prompt("Row number");
		var col=prompt("Col number");
		var Code= Math.floor((Math.random() * 100) + 65); 
		Code=Code+String.fromCharCode( Math.floor((Math.random() * 88) + 66) );
		Code=Code+ Math.floor((Math.random() * 10) + 1); 
		var output='<span class="table-options-main" style="width:auto"><table cellspacing="0" id="UITable'+Code+'" width="auto">';

		for(var i=0; i<col; i++){
		output=output+"<tr>";
		if(i!=0){
			for (var u=0;u<row;u++) {
				output=output+"<td>Lorem</td>";
			};
		}else{
			output=output+"<td colspan='"+row+"' id='Header"+Code+"' align='center'>lorem</td>"
		}
		output=output+"</tr>";
		};
		output=output+'<span class="OptionsTable"><span class="UI-TableButton" id="addCol" onclick="AddCol(\''+Code+'\',true)">Add Column</span> | <span class="UI-TableButton" id="addRow" onclick="AddRow(\''+Code+'\',true)">Add Row</span></span></span>';
	document.getElementById(rteName).contentWindow.document.execCommand('insertHTML', false, output);
}



//------EXTRA CODE-------------//
function AddRow(a,header){
		var output='<tr>';
		if(header){
			var con = document.getElementById('UITable'+a).rows[1].cells.length;
		}else{
			var con = document.getElementById('UITable'+a).rows[0].cells.length;
		}
		for(var i=0;i<con;i++){
			output+='<td>Lorem</td>';
		}
		output+='</tr>';
		var TAp='#UITable'+a;
		$(TAp).append(output);
	}

	function AddCol (a,h) {
		var TAp='UITable'+a;
		var table = document.getElementById(TAp);
		var rowLength = table.rows.length;
		for(var i=0; i<rowLength; i+=1){
		  var row = table.rows[i];
		  if(!h){
		  	$(row).append('<td>Lorem</td>');
		  }else{
		  	if(i!=0){
		  		$(row).append('<td>Lorem</td>');
		  	}else{
		  		//alert("is 1");
		  		var colValue=$("#Header"+a).attr('colspan');
		  		//alert(colValue);
		  		$("#Header"+a).attr('colspan',parseInt(colValue)+1);
		  	}
		  }
		  var cellLength = row.cells.length;
		  for(var y=0; y<cellLength; y+=1){
		    var cell = row.cells[y];
		  }
		}
	}