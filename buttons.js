$(document).ready(function(){
const app = require('electron').remote.app;
const { remote } = require('electron');

$('#close-btn').click(function() {
    remote.BrowserWindow.getFocusedWindow().close();
});
$('#mini-btn').click(function() {
    remote.BrowserWindow.getFocusedWindow().minimize();
});

});