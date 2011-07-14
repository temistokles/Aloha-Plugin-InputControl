/*!
* Aloha Editor
* Author & Copyright (c) 2010 Gentics Software GmbH
* aloha-sales@gentics.com
* Licensed unter the terms of http://www.aloha-editor.com/license.html
*/

// Start Closure
(function(window, undefined) {
	"use strict";
	var
		jQuery = window.alohaQuery, $ = jQuery,
		GENTICS = window.GENTICS,
		Aloha = window.Aloha;

	/**
	 * register the plugin with unique name
	 */
	Aloha.InputMask = new (Aloha.Plugin.extend({
		_constructor: function(){
			this._super('inputmask');
		},
		/**
		 * Initialize the plugin and set initialize flag on true
		 */
		init: function () {	
			var inputmask = this;
			
			inputmask.bindEvents();
		},
		
		config: {
			"enableFilter": false,
			"allowchars": new RegExp('.') // allows any character (default)
		},
		bindEvents: function() {
			var inputmask = this;
			Aloha.bind('aloha-editable-created', function(event, editable){
				var edConfig = inputmask.getEditableConfig(editable.obj);
				if (edConfig.enableFilter) {
					editable.obj.unbind('keydown'); // unbinding aloha preprocess
					editable.obj.keydown(function(event){ // and replace by our own
						var preprocess = Aloha.Markup.preProcessKeyStrokes(event), // grab aloha original event handling
						k = event.which, char;
						if (preprocess) {
							char = String.fromCharCode(k);
							return edConfig.allowchars.test(char);
						} else {
							return false;
						}
					});
				}
			});
		}
	
	}))();
})(window);
