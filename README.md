# acss
css library for easier styling

to install:
download and unzip acss-v1.0.zip
place acss-v1.0.zip.css and acss-v1.0.zip.js into your root directory
in html, add <code><script src="acss.js"></script></code> to your head


to use:
you can add attributes to elements

<code><p a>acss</p></code>will give you recommended css. sets element to top left with position absolute, and sets width to max-content
<code><p t-re>red</p></code> will give you red text. each color is the first two letters of the name (except gray and green, use ga and ge)
<code><p b-bl>black</p></code> will give you black background
<code><p fs="2rem">2</p></code>is font size 2
<code><p f-bw="2px" f-bc="red">border</p></code> will give you text with a 2px red font border that wraps around the text.
you can also do top, left, bottom, right, border, border radius, and position: <code><p top="20px" position="relative", b="5px solid black">down from top with border</p></code>

you can mix them, for example, <pre><p a t-si b-bl position="relative" top="20px" left="10px" f-bw="2px" f-bc="red" fs="3rem" b="5px solid green" br="15px">mixed</p></pre> will provide: <img src="https://i.imgur.com/Tv9sTIe.png">
