A simple template for wordpress. 
=================================
Base on http://underscores.me/, it include gulp and sass. It also include a light Bootstrap 3.0 (mainly for the grid style) and FontAwesome 4.5.0. 

With this template you can code your style with sass in the local folder "src". A task create two local css files, one style.css which is a classic css file and a style.min.css file that is upload on the server by vinyl-ftp. Only style.min.css is used by the theme. 

So you can code your site with sass in local and see in live on the server.

You just have to put your FTP param in the gulpfile.js

### Uses

* [Underscore.me starter theme](http://underscores.me/),
* [Bootstrap (light) v3.3.3](http://getbootstrap.com/),
* [FontAwesome 4.5.0](https://fortawesome.github.io/Font-Awesome/),
* [Modernizr 2.6.2](https://modernizr.com/),
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
