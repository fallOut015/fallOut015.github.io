JarOfCookies = {};

alert("Loading Jar of Cookies")

Game.Win('Third-party')

Game.customChecks.push(new Game.Upgrade("name", "desc", 1, [0, 0]))
Game.last.unlock()
Game.customChecks.push(Game.NewUpgradeCookie({ name : 'name', desc : 'desc', icon : [2, 4, "https://fallout015.github.io/icons.png"], power : 2, price : 1 }))
Game.last.unlock()