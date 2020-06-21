JarOfCookies = {};

alert("HI!")

window.onload = event => {
	alert(event)
	Game.NewUpgradeCookie({ name : 'name', desc : 'desc', icon : [4,4], power : 2, price : 1 })
	new Game.Upgrade("name", "desc", 1, [0, 0])
}