const scenes = require('./scenes')

scenes.createScene("intro", 
`Your home is in a nice country side with a beautiful greenspace. As you are enjoying your day, you see a wildfire break out. The local authorities announce that all residents need to abandon the village. You have two choices:
`,
'/intro.jpg',
[
    { description: "Be stubborn and stay", scene: "stay"},
    { description: "Be adaptable and pack your things", scene: "leave"}
])

scenes.createScene("stay", 
`You stay in your house no matter what. When local authorities come to evacuate, you say "I was born here and I'll die here". Frustrated, the local authorities leave you there. The fire starts getting big and ends up killing you.
`,
'/fire.jpg')

scenes.createScene("leave", 
`You have decided to abandon your home. But you are optimistic. You pack up your stuff and now decide how you want to make your journey. How do you want to travel?`,
'/car_bike.webp',
[
    { description: "Car", scene: "car"},
    { description: "Bicycle", scene: "bicycle"},
    { description: "Foot", scene: "foot"},
])

scenes.createScene("car", 
`You start your car and start driving. Not long after you start driving, you noticed the gas is emptying. The nearby gas station is burned down. You have no choice but to continue on foot`, 
'/fire.jpg',
[
    { description: "Foot", scene: "foot",}
])    

scenes.createScene("foot", 
`As you continue to walk towards the nearby town, you come across a pack of wolves. They have smelled your scent. You try to hide and run, but without luck. The pack of wolves find you and kill you. `,
'/wolves.jpg')

scenes.createScene("bicycle", 
`Good choice, you start using pedaling your bike and reach quite far. Now you start getting hungry. As you continue along, you see an abandoned market. The market has some food in an old package and its way past expiry date. Add to that, the abandoned market seems to be infested by rats. You are starving and have to make a decision`,
'/old_food.jpg',
[
    { description: "Eat the expired food in abandoned market infested by rat", scene: "eat"},
    { description: "No thanks! I'd rather stay hungry", scene: "pass"},
])

scenes.createScene("eat", 
`The food is not really appetizing. But it will do when you're this hungry. With your stomach somewhat full, you continue along the journey. Not surprisingly, after some time pedaling, you start feeling a little sick. The day starts getting dark and you come across an abandoned house. It's not in the best shape and could collapse any moment. As the sun begins to set, the temperature drops and it can get really windy and cold. You have yet another important decision to make.`,
'/house.jpg',
[
    { description: "Take refuge in a structurally unstable building", scene: "house"},
    { description: "Sleep outdoors in a sub-zero temperature", scene: "outdoors"},
])

scenes.createScene("pass", 
`You say to yourself that the food in those cans were not edible and maybe there is another store along the road. As you continue your journey, you never find another store. You are not only starving, but also exhausted. It's evening so you park your bike and try to get some sleep. Next morning, you see there are some wild berries. You have been hungry for a long time.`,
'/wild_berries.jpg',
[
    { description: "I'm hungry. Let's eat those berries", scene: "eat_berries"},
    { description: "Can't trust if these wildberries are poisonous", scene: "eat_no_berries"},
])
    
scenes.createScene("eat_berries", 
`Those berries were delicious, but after about 15 minutes, you start getting stomach ache. They turned out to be poisonous. You have been food poisoned and die a painful death. `,
'/pain.jpg')

scenes.createScene("eat_no_berries", 
`Those berries looked poisonous so you pass. But, you have been hungry and tired for a long time.You eventually die of starvation and exhaustion. `,
'/pain.jpg')

scenes.createScene("outdoors", 
`The wind starts picking up and it gets colder by the hour. Despite this, you manage to survive and see another day. When you wake up, you have a fever, a headache, a terrible stomach ache. The food you ate yesterday and the cold weather must have been the cause. You don't have much energy to bike, so you continue to limp along the journey. You see an old, abandoned pharmacy store. So you decide to check out if theres any useful medication. When you enter, you see some old medications. The seal in the medicine bottle is opened, the date is past expired. You're no pharmicist and you can't even pronounce the name of the drug. The pain at this point is agonizing and you have yet another choice to make:`,
'/medicine.jpg',
[
    { description: "I can't tolerate the pain any longer. I don't care; I'll risk taking those medicine", scene: "consume_medicine"},
    { description: "Nope, I'm not taking it. I can't trust what this drug is for and it doesn't look safe. I'll try to tolerate the pain instead", scene: "no_medicine"},
])

scenes.createScene("house", 
`Despite a questionable structural stability, you decide to take this risk rather than sleeping outside in the cold. While you're sleeping, the wind picks up and becomes a big storm. Just when you think you made a better decision, the storm turned out to be the catalyst for shaking the building. A tree falls over the building and that does it. The building collapses and now you're dead. `,
'/collapse.jpg')

scenes.createScene("consume_medicine", 
`The pain was too much but you risked it anyways. The drug seemed to kill your pain for a while, but slowly you begin to lose your consciousness. You took a high dosage of the drug and have been poisoned by it. You're dead. `,
'/pain.jpg')

scenes.createScene("no_medicine", 
`You were cautious but the pain was too much to handle. You die a very painful death. `,
'/pain.jpg')

scenes.createScene("game_over", 
`Your courage is commendable. But resistance is futile`,
'/game_over.jpg',[{description: "", scene: ""}])