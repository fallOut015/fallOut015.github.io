JarOfCookies = {};

let icons = "https://fallout015.github.io/icons.png"

alert("Loading Jar of Cookies")

Game.Win('Third-party')

//Game.customChecks.push(new Game.Upgrade("name", "desc", 1, [0, 0]))
//Game.last.unlock()
Game.NewUpgradeCookie({ name : "Thumbprint cookies", desc : "Also known as Hallengrotta. You've Hallen<b>gotta</b> try 'em! <br/> Get it?", icon : [2, 3, icons], power : 4, price : 99999999999999999999*5 })
/*Game.customSave.push(Game.last)*/
Game.customChecks.push(Game.NewUpgradeCookie({ name : "Lava cookies", desc : "Hopefully not real lava.<br/>Right?", icon : [1, 3, icons], power : 2, price : 999999999999*5 })
/*Game.customSave.push(Game.last)*/