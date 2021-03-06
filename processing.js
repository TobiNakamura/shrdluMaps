<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Processing.js</title>
    <link rel="stylesheet" href="/css/bootstrap.css" type="text/css" />
    <link rel="stylesheet" href="/css/syntax.css" type="text/css" />
    <link rel="stylesheet" href="/css/processing-js.css" type="text/css" />
    <script src="/js/processing.min.js" type="text/javascript"></script>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js" type="text/javascript"></script>
    <script src="/js/jquery.tweet.min.js" type="text/javascript"></script>
    <script src="/js/tabselector.js" type="text/javascript"></script>
    <script src="http://cdn.webglstats.com/stat.js" defer="defer" async="async"></script>
    <script type="text/javascript">
      // Only do tracking on the actual site
      if (document.location.host === "processingjs.org") {
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', 'UA-8565070-1']);
        _gaq.push(['_trackPageview']);
        (function() {
          var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
          ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
          var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
        }());
      }
    </script>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <a href="/"><img src="/images/header.png" width="177" height="42"></a>
      </div>
      <span class="tagline">a port of the Processing Visualization Language</span>

      <div class="navbar">
        <canvas width="940px" height="78px" data-processing-sources="/sketches/bannerSketch.pde"></canvas>
        <ul>
          <li><a href="/"><span>home</span></a></li>
          <li><a href="/download/"><span>download</span></a></li>
          <li><a href="/reference/"><span>reference</span></a></li>
          <li><a href="/exhibition/"><span>exhibition</span></a></li>
          <li><a href="/learning/"><span>learning</span></a></li>
          <li><a href="/articles/"><span>articles</span></a></li>
          <li><a href="/community/"><span>community</span></a></li>
          <li><a href="/blog/"><span>blog</span></a></li>
        </ul>
        <a class="viewsource" href="/sketches/bannerSketch.pde">view source</a>
      </div>

      <div class="page row">
        <div class="span11">

<h2>Download Processing.js v1.4.8</h2>

<p>Download the latest Processing.js, including full and minified versions, examples,
an API-only version without the Processing parser, or a complete zip file of everything.
Released 25 March 2014</p>

<ul>
  <li>Development - <a href="https://raw.github.com/processing-js/processing-js/v1.4.8/processing.js">processing.js</a> v1.4.8</li>
  <li>Production - <a href="https://raw.github.com/processing-js/processing-js/v1.4.8/processing.min.js">processing.min.js</a> v1.4.8</li
</ul>
<p>Alternatively, install through <a href="http://bower.io">Bower</a> by using <code>bower install Processing.js</code></p>


<h2>Previous releases</h2>

<p>You can download older releases from our <a href="/download/archived.html">Download Archive</a>
or our <a href="https://github.com/processing-js/processing-js/tags">GitHub repository</a></p>

        </div>
        <div class="sidebar span4">
          <h3><a href="/download/">Downloads</a></h3>
          <ul>
            <li><a href="/download/">Download the latest version of Processing.js!</a></li>
          </ul>

          <h3><a href="/articles/">Articles</a></h3>
          <ul>
            <li><a href="/articles/jsQuickStart.html">Quick Start - JavaScript Developer</a></li>
            <li><a href="/articles/p5QuickStart.html">Quick Start - Processing Developer</a></li>
            <li><a href="/articles/RenderingModes.html">Rendering Modes</a></li>
            <li><a href="/articles/PomaxGuide.html">Pomax's Guide to processing-js</a></li>
          </ul>

          <h3><a>Web IDEs</a></h3>
          <ul>
            <li><a href="http://sketchpad.cc">Sketchpad.cc</a></li>
            <li><a href="/tools/processing-helper.html">Processing.js Helper</a></li>
            <li><a href="http://www.openprocessing.org">OpenProcessing.org</a></li>
          </ul>

          <h3><a href="/community/">Community</a></h3>
          <ul>
            <li><a href="irc://irc.mozilla.org/processing.js">IRC Channel</a></li>
            <li><a href="http://processing-js.lighthouseapp.com/">Bug Tracker</a></li>
            <li><a href="http://github.com/processing-js/processing-js/">Github Repository</a></li>
            <li><a href="http://groups.google.com/group/processingjs">Google Group</a></li>
            <li><a href="http://zenit.senecac.on.ca/wiki/index.php/">Open Source @ Seneca</a></li>
          </ul>

          <h3><a href="http://twitter.com/processingjs">Twitter Feed</a></h3>
          <div class="twitter"></div>
        </div>
      </div>

      <div class="footer">
        Processing is an open visualization language developed by
        <a href="http://benfry.com/">Ben Fry</a> &amp; <a href="http://reas.com/">Casey Reas</a>,
        and originally ported to Javascript by
        <a href="http://ejohn.org/blog/processingjs/">John Resig</a>.
        Processing.js is maintained by the Processing.js team.
      </div>
    </div>
    <a href="http://github.com/processing-js/processing-js/">
      <img style="position: absolute; top: 0; right: 0; border: 0;" src="/images/forkme-right-orange.png" alt="Fork me on GitHub">
    </a>
  </body>
</html>
