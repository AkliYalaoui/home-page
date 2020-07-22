/*global document*/
var display_menu = false;

function slideMenu() {
    'use strict';
    document.getElementById('navList').style.display = display_menu ? 'flex' : 'none';
    display_menu = !display_menu;
}
