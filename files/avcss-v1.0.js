window.onload = function() {
	const link = document.createElement("link")
	link.rel = "stylesheet"
	link.href = "/acss-v1.0.css"
	
	const head = document.querySelector("head")
	const script = document.querySelector("script")
	head.insertBefore(link, script)
	
	var attributed = document.querySelectorAll("[a]")
	
	var position = document.querySelectorAll("[position]")
	
	var fs = document.querySelectorAll("[fs]");
	
	var b = document.querySelectorAll("[b]");
	var br = document.querySelectorAll("[b]");
	
	var bc = document.querySelectorAll("[bc]");
	var tc = document.querySelectorAll("[tc]");
	
	var fontBorderWidth = document.querySelectorAll("[f-bw]")
	var fontBorderColor = document.querySelectorAll("[f-bc]")
	
	var top = document.querySelectorAll("[top]")
	var left = document.querySelectorAll("[left]")
	var bottom = document.querySelectorAll("[bottom]")
	var right = document.querySelectorAll("[right]")
	
	attributed.forEach(element => {
		element.style.width = "max-content"
		element.style.position = "absolute"
	})
	
	position.forEach(element => {
		element.style.position = element.getAttribute("position")
	})
	
	top.forEach(element => {
		element.style.top = element.getAttribute("top")
	})
	left.forEach(element => {
		element.style.left = element.getAttribute("left")
	})
	bottom.forEach(element => {
		element.style.bottom = element.getAttribute("bottom")
	})
	right.forEach(element => {
		element.style.right = element.getAttribute("right")
	})
	
	bc.forEach(element => {
		element.style.backgroundColor = element.getAttribute("bc")
	})
	tc.forEach(element => {
		element.style.color = element.getAttribute("tc")
	})
	
	fontBorderWidth.forEach(element => {
		element.style.webkitTextStrokeWidth = element.getAttribute("f-bw")
	})
	fontBorderColor.forEach(element => {
		element.style.webkitTextStrokeColor = element.getAttribute("f-bc")
	})
	fs.forEach(element => {
		element.style.fontSize = element.getAttribute("fs")
	})
	b.forEach(element => {
		element.style.border = element.getAttribute("b")
	})
	br.forEach(element => {
		element.style.borderRadius = element.getAttribute("br")
	})
}
