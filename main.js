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

Game.NewUpgradeCookie({ name : "Thumbprint cookies", desc : "Also known as Hallengrotta. You've Hallen<b>gotta</b> try 'em! <br/> Get it?", icon : [2, 3, icons], power : 4, price : 99999999999999999999*5 })
Game.NewUpgradeCookie({ name : "Lava cookies", desc : "Hopefully not real lava.<br/>Right?", icon : [1, 3, icons], power : 2, price : 999999999999*5 })