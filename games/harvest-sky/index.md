---
layout: page
title: Harvest Sky (Prototype)
permalink: /games/harvest-sky/
comments: true
---
<small>Disclaimer: Following game is a prototype made in 27 hours</small>

Plant crops, collect them and drop them into the yellow bin. Gather money and spend it on your trailer to expand your tiles!

<small>Controls: Arrow keys to move, spacebar to plant/harvest crops and to expand your tiles.</small>

<canvas id="canvas" width="100%" height="100%"></canvas>
<script type="text/javascript" src="game.min.js"></script>
<script type="text/javascript">
window.onkeydown = function(e) { 
    return !(e.keyCode == 32);
};

window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
</script>
