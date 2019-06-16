# Personal-Website
NodeJS version of my personal website. This is a redacted version and is not the live version of the site.

# Get started
- Install node js on your machine
- cd to root directory, type "npm install" for dependencies
- type "node app.js" to start the server
- Go to http://localhost:3000

## Main server file
app.js


## HTML Pages
All html pages are in the /views/ directory. These are ejs files which
call partials in ejs to include html in other pages.

## Static Files (CSS, Javascript)
/styles
/scripts

When an html page links to a stylesheet or some script, express serves the Static
files from either the /styles or /scripts. 

For example:

/views/index.ejs     has a stylesheet href="styles/stylesheet.css"

Since express serves our static files for us it actually grabs the css from

/styles

This makes it easy to use relative addresses in hrefs of html files, so long
as you continue this directory structure of placing static files in /static
directory and the html in the /views directory and the reusable html
in the /views/partials/ directory
