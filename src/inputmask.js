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
				//filtering is enabled, watching keystrokes
					//editable.obj.unbind('keydown'); // unbinding aloha preprocess
					editable.obj.keypress(function(event){ // listen for keypress (then get the unicode char)
						var 
							k = event.which, char,
							result = true;
						char = String.fromCharCode(k);
						if (edConfig.allowchars instanceof RegExp){
							Aloha.Log.debug(Aloha, "Keycode : [" + k + "] char : '" + char + "'");
							result = result && edConfig.allowchars.test(char);
						}
						return result;
					});
				}
			});
		}
	
	}))();
})(window);
