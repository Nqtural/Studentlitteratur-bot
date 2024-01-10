<div align="center">
  <h1>Studentlitteratur-bot</h1>
  <p>This bot is designed to answer the text questions on studentlitteratur.se</p>
  <br>
</div>
<h2>How to use</h2>
<ul>
  <li><p>Open https://www.studentlitteratur.se</p></li>
  <li><p>Choose a book</p></li>
  <li><p>Choose exercise</p></li>
  <li><p>Open browser developer tools with <code>Ctrl + Shift + i</code></p></li>
  <li><p>Go to the console tab and paste the <a href="https://raw.githubusercontent.com/Nqtural/Studentlitteratur-bot/main/bot.js">script</a> from bot.js</p></li>
</ul>
<h2>Bookmarklet</h2>
<h3>Local</h3>
<p>To add a local bookmark (that will not update itself), follow these instructions:</p>
<ul>
  <li>Add a new bookmark and change the url field to <code>javascript:(()=>{INSERT SCRIPT HERE})();</code></li>
  <li>Replace `INSERT SCRIPT HERE` with the latest version of the <a href="https://raw.githubusercontent.com/Nqtural/Studentlitteratur-bot/main/bot.js">script</a>.</li>
</ul>
<h3>Remote</h3>
<p>A remote bookmarklet that loads the code from github (meaning always up to date) can be added like this:</p>
<ul>
  <li>Add a new bookmark and change the url filed to <code>javascript:(()=>{script = document.createElement("script");script.setAttribute('src','https://cdn.jsdelivr.net/gh/nqtural/studentlitteratur-bot@latest/bot.js');if(script.addEventListener){script.addEventListener("load",function(){main();},false);}else if(script.readyState){script.onreadystatechange=function(){main();};}else{script.onload=function(){main();};}document.body.appendChild(script);})();</code></li>
</ul>
<p>A remote bookmarklet requires less maintainence than a local one, however it does pose a security risk. If this repository or GitHub gets hacked, I have no contol over what code gets loaded into your browser when you use the bookmarklet.</p>
