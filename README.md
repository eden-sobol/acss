# avcss
css library for easier styling

to install:
download and unzip avcss-v1.0.zip
place avcss-v1.0.zip.css and avcss-v1.0.zip.js into your root directory
in html, add &lt;script src="avcss-v1.0.js">&lt;/script> to your head

OR

run npm install avcss
in html, add &lt;script src="your project folder/node_modules/avcss/avcss-v1.0.js">&lt;/script>
for most cases: &lt;script src="./node_modules/avcss/avcss-v1.0.js">&lt;/script>


to use:
you can add attributes to elements

&lt;p a>acss&lt;/p> will give you recommended css. sets element to top left with position absolute, and sets width to max-content<br>
&lt;p t-re>red&lt;/p> will give you red text. each color is the first two letters of the name (except gray and green, use ga and ge)<br>
&lt;p b-bl>black&lt;/p> will give you black background<br>
&lt;p fs="2rem">2&lt;/p>is font size 2<br>
&lt;p f-bw="2px" f-bc="red">border&lt;/p> will give you text with a 2px red font border that wraps around the text.<br>
you can do top, left, bottom, right, border, border radius, and position: &lt;p top="20px" position="relative", b="5px solid black">down from top with border&lt;/p><br>
<br>
you can do t-c="color" or b-c="color" instead of the pre-set colors.

you can mix them, for example,
&lt;p a t-si b-bl position="relative" top="20px" left="10px" f-bw="2px" f-bc="red" fs="3rem" b="5px solid green" br="15px">mixed&lt;/p> will provide:<br>
<img src="https://i.imgur.com/Tv9sTIe.png">

<br><br>
also, there are some built in animations you can add like this by using the css animation property, and selecting:
sil (slide in left)
sir (slide in right)
sit (slide in top)
sib (slide in bottom)
sol (slide out left)
sor (slide out right)
sot (slide out top)
sob (slide out bottom)
fi (fade in)
fo (fade out)
