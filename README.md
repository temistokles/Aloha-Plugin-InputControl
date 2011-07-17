InputMask plugin for alohaEditor

Control which character is added to editable.

Settings example
```
Aloha.settings= {
	// {...} your settings
	"plugins": {
		"inputcontrol": {
			"editables": {
				"selector": {
					"disableEnter": true, // single line input feature
					"enableFilter": true, // enable character filter
					"allowchars": new RegExp('[0-9\.]'), // filter for each char, if char don't match, dont insert
					"enableMask": true, // enable input type check
					"type": Number  // Type of input expected
				}
			}
		}
	}
}
```


TODO :

multiple possible behaviours:
 
* Don't allow any line breaks
* Allow only br's
* Allow p's and br's and text outside of p's
* Allow only p's (no text outside) and br's only inside p's

editablelength check