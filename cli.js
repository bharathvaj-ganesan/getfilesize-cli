#!/usr/bin/env node
'use strict';
const meow = require('meow'),
        getFileSize = require('getfilesize');
        
const cli = meow(`
	Usage
	  $ getfilesize <filepath>
	
`);
console.log(getFileSize(cli.input[0]));
