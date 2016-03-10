A simple responsive template for wordpress. 
=================================
Base on http://underscores.me/, it include gulp and sass. It also include a light Bootstrap 3.0 (mainly for the grid style),  FontAwesome 4.5.0 and a slide from left responsive menu.

With this template you can code your style with sass in the local folder "src". A task create two local css files, one style.css which is a classic css file and a style.min.css file that is upload on the server by vinyl-ftp. Only style.min.css is used by the theme. 

So you can code your site with sass in local and see in live on the server.

You just have to put your FTP param in the gulpfile.js

### Uses

* [Underscore.me starter theme](http://underscores.me/),
* [Bootstrap (light) v3.3.3](http://getbootstrap.com/),
* [FontAwesome 4.5.0](https://fortawesome.github.io/Font-Awesome/),
* [Modernizr 2.6.2](https://modernizr.com/),
* [Responsive off canvas menu by David Bushell] (https://github.com/dbushell/Responsive-Off-Canvas-Menu),
* [gulp](http://gulpjs.com/)

### Includes

* Distinct **src** and **css** folders
* Gulp Dependencies:

	```shell
	gulp
	gulp-sass
	gulp-csscomb
	gulp-cssbeautify
	gulp-autoprefixer
	gulp-rename
	gulp-csso
	gulp-cssimport
	gulp-watch
	gulp-livereload
	vinyl-ftp
	```
### How to use

* Install node.js
* In terminal tape "cd /mypath-to-my-local-folder"
* Then tape npm init

1. Install [node.js](http://nodejs.org/)
2. In **terminal** install Gulp dependencies in your local folder

	```shell
	cd /my_local_folder/website
	npm install
	```

3. Edit the gulpfile.js and change the FTP access to your server

4. Launch the default tasks

	```shell
	gulp
	```

5. Code your scss and gulp will minify and create two files that will be upload on server. Refresh your brother and that's good :)
