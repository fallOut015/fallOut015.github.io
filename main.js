JarOfCookies = {};

alert("Loading Jar of Cookies")

Game.Win('Third-party')

Game.customChecks.push(new Game.Upgrade("name", "desc", 1, [0, 0]))
Game.last.unlock()
Game.customChecks.push(Game.NewUpgradeCookie({ name : 'name', desc : 'desc', icon : [4,4], power : 2, price : 1 }))
Game.last.unlock()