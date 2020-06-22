JarOfCookies = {};

JarOfCookies.localStorageGet = key => {
	let local = 0
	try {
		local = window.localStorage.getItem(key)
	} catch(exception) {}
	return local
}
JarOfCookies.localStorageSet = (key, str) => {
	let local = 0
	try {
		local = window.localStorage.setItem(key, str)
	} catch(exception) {}
	return local
}

JarOfCookies.SaveTo = "JarOfCookies"
JarOfCookies.LoadSave = data => {
	
}

JarOfCookies.toSave = false
JarOfCookies.WriteSave = type => {
	
}
JarOfCookies.LoadSave()
Game.customSave.push(JarOfCookies.WriteSave)
Game.customLoad.push(JarOfCookies.LoadSave)

let icons = "https://fallout015.github.io/icons.png"

alert("Loading Jar of Cookies")

Game.Win("Third-party")

var getCookiePrice=function(level){return 999999999999999999999999999999999999999*Math.pow(10,(level-1)/2);};

Game.NewUpgradeCookie({ name : "Thumbprint cookies", desc : "Also known as Hallengrotta. You've Hallen<b>gotta</b> try 'em! <br/> Get it?", icon : [2, 3, icons], power : 4, price : 99999999999999999999*5 })
Game.NewUpgradeCookie({ name : "Lava cookies", desc : "Hopefully not real lava.<br/>Right?", icon : [1, 3, icons], power : 2, price : 999999999999*5 })
Game.NewUpgradeCookie({ name : "Those Pillsbury cookies with the christmas tree", desc : "I hope I'm not the only one with a childlike fondness for these. They have a certain... texture.", icon : [3, 3, icons], power : 4, price : 999999999999999999999999999999 })
Game.NewUpgradeCookie({ name : "Donut cookies", desc : "You're not sure how to feel about these. Something about it feels wrong.<br/>On the other hand, it's two treats in one! Best of both worlds!", icon : [1, 4, icons], power : 4, price : 9999999999999999999999999999999999 })
Game.NewUpgradeCookie({ name : "Brookies", desc : "It's like a soft brownie and a delicious cookie had a baby. I can feel the calories writing this.", icon : [2, 4, icons], power : 5, price : getCookiePrice(8) })
Game.NewUpgradeCookie({ name : "Crownies", desc : "Wait, these actually exist?", icon : [3, 4, icons], power : 1, price : getCookiePrice(11) })