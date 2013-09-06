/**
 * boxout.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

function init() {
	SXE.initElementDialog('boxout');
	if (SXE.currentAction == "update") {
		SXE.showRemoveButton();
	}
}

function insertboxout() {
	SXE.insertElement('boxout');
	tinyMCEPopup.close();
}

function removeboxout() {
	SXE.removeElement('boxout');
	tinyMCEPopup.close();
}

tinyMCEPopup.onInit.add(init);
