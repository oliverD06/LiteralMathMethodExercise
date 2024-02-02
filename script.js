let warmHugs = "Hi, I'm Olaf and I like warm hugs."
console.log(warmHugs.toUpperCase())
warmHugs = warmHugs.replace("like", "love")
console.log(warmHugs)

beenImpaled = "Oh, look at that. I've been impaled."
console.log(beenImpaled.slice(18, 36))

dotDotDot = "..."
skullAndBones = `I don't have a skull${dotDotDot}or bones`
console.log(skullAndBones)

console.log(Math.PI)

randomNumber = Math.random() * 3
randomNumber = Math.floor(randomNumber) + 1
console.log(randomNumber)
// BONUS
let letItGo = " Let it go!"
console.log(letItGo.toUpperCase().repeat(2).trim())

reindeers = "Reindeers are better than people."
reindeers = reindeers.replace(/ /g, "_")
console.log(reindeers)

