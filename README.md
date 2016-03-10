[![Build Status](https://travis-ci.org/Automattic/_s.svg?branch=master)](https://travis-ci.org/Automattic/_s)

A simple template for wordpress. 
=================================
Base on http://underscores.me/, it include gulp and sass. It also include Bootstrap and FontAwesome. 

With this template you can code your style with sass in the local folder "src". A task create two css files, one style.css which is a classic css file and a style.min.css file that is upload on the server by vinyl-ftp. Only style.min.css is used by wordpress. 

So you can code your site in live on the server.

You just have to put your FTP param in the gulpfile.js
