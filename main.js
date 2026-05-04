const target = document.querySelector(".target");
const body = document.querySelector(".body")
const pirate = `
<p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters.</p>

<p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.</p>

<p>Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas boatswain schooner gaff booty Jack Tar transom spirits.</p>
 `

 const cat = `
 <p>Drool just going to dip my paw in your coffee and do a taste test - oh never mind i forgot i don't like coffee - you can have that back now. I is not fat, i is fluffy get scared by sudden appearance of cucumber sit in window and stare oooh, a bird, yum so chase little red dot someday it will be mine! </p>
 <p>and no, you can't close the door, i haven't decided whether or not i wanna go out that box? i can fit in that box. Ooh, are those your $250 dollar sandals? lemme use that as my litter box attack the child but pooping rainbow while flying in a toasted bread costume in space so mew mew bring your owner a dead bird blow up sofa in 3 seconds. Pee in the shoe have secret plans yet make meme, make cute face yet cry louder at reflection furball roll roll roll for stare out cat door then go back inside so to pet a cat, rub its belly, endure blood and agony, quietly weep, keep rubbing belly. Poop in litter box, scratch the walls. ð•„ð”¼ð•†ð•Ž meow meow we are 3 small kittens sleeping most of our time, we are around 15 weeks old i think, i donâ€™t know i canâ€™t count so howl on top of tall thing. Lounge in doorway need to chase tail loves cheeseburgers refuse to drink water except out of someone's glass floof tum, tickle bum, jellybean footies curly toes or give attitude carefully drink from water glass and then spill it everywhere and proceed to lick the puddle. Toy mouse squeak roll over soft kitty warm kitty little ball of furr or cats secretly make all the worlds muffins for i like to spend my days sleeping and eating fishes that my human fished for me we live on a luxurious yacht, sailing proudly under the sun, i like to walk on the deck, watching the horizon, dreaming of a good bowl of milk mark territory. Steal mom's crouton while she is in the bathroom to pet a cat, rub its belly, endure blood and agony, quietly weep, keep rubbing belly rub butt on table and loved it, hated it, loved it, hated it. Chase imaginary bugs i like cats because they are fat and fluffy so sit in box. Whatever toilet paper attack claws fluff everywhere meow miao french ciao litterbox. Scratch play time purrrrrr. Lick human with sandpaper tongue i shredded your linens for you, and take a deep sniff of sock then walk around with mouth half open my left donut is missing, as is my right.</p>
 <p>Slap the dog because cats rule. Drink from the toilet. Milk the cow take a deep sniff of sock then walk around with mouth half open or run in circles, yet wack the mini furry mouse. Stare at wall turn and meow stare at wall some more meow again continue staring demand to have some of whatever the human is cooking, then sniff the offering and walk away. A nice warm laptop for me to sit on. I rule on my back you rub my tummy i bite you hard give attitude hide at bottom of staircase to trip human destroy house in 5 seconds but naughty running cat. Hack up furballs curl into a furry donut. </p>
 <p>Caticus cuteicus. Kitty kitty pussy cat doll cat jumps and falls onto the couch purrs and wakes up in a new dimension filled with kitty litter meow meow yummy there is a bunch of cats hanging around eating catnip so cats go for world domination. 
Plan steps for world domination mewl for food at 4am or touch water with paw then recoil in horror and purr for no reason hack. Cat walks in keyboard . Paw at beetle and eat it before it gets away attack the dog then pretend like nothing happened making bread on the bathrobe. Going to catch the red dot today going to catch the red dot today. </p>
 <p>When in doubt, wash slap kitten brother with paw purr for no reason yet i see a bird i stare at it i meow at it i do a wiggle come here birdy. Lasers are tiny mice catch mouse and gave it as a present and spend six hours per day washing, but still have a crusty butthole for time to go zooooom with tail in the air. Mmmmmmmmmeeeeeeeeooooooooowwwwwwww. </p>
 <p>Jump launch to pounce upon little yarn mouse, bare fangs at toy run hide in litter box until treats are fed playing with balls of wool. Demand to have some of whatever the human is cooking, then sniff the offering and walk away. Demand to be let outside at once, and expect owner to wait for me as i think about it. Funny little cat chirrup noise shaking upright tail when standing next to you throw down all the stuff in the kitchen for love why can't i catch that stupid red dot or scamper murr i hate humans they are so annoying. Woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean lick butt now bite the neighbor's bratty kid lick butt meow. Intently sniff hand meowing non stop for food experiences short bursts of poo-phoria after going to the loo. Steal raw zucchini off kitchen counter rub my belly hiss or meow and walk away gnaw the corn cob purr while eating for whatever for cat fur is the new black . Fart in owners food put butt in owner's face so really likes hummus catch mouse and gave it as a present love fish at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window and sleep while observing the bootyful cat next door that u really like but who already has a boyfriend end up making babies with her and let her move in stare at guinea pigs. Kick up litter if human is on laptop sit on the keyboard scratch leg; meow for can opener to feed me and ignore the human until she needs to get up, then climb on her lap and sprawl but scratch the postman wake up lick paw wake up owner meow meow, but steal raw zucchini off kitchen counter who's the baby. Kitty loves pigs ears back wide eyed be superior.</p>
`
target.innerHTML = "Deploy now!";
body.innerHTML = pirate;

const steps = [
    { name: "Checkout repository", duration: 800 },
    { name: "Set up Node.js", duration: 1200 },
    { name: "Install dependencies", duration: 2000 },
    { name: "Run lint", duration: 900 },
    { name: "Run tests", duration: 1800 },
    { name: "Build", duration: 1500 },
    { name: "Deploy to production", duration: 2200 },
];

const btn = document.getElementById("run-btn");
const output = document.getElementById("workflow-output");

btn.addEventListener("click", async () => {
    btn.disabled = true;
    btn.textContent = "Running...";
    output.innerHTML = "";

    for (const step of steps) {
        const row = document.createElement("div");
        row.className = "step running";
        row.innerHTML = `<span class="step-icon">⟳</span><span>${step.name}</span>`;
        output.appendChild(row);

        await new Promise(r => setTimeout(r, step.duration));

        row.className = "step done";
        row.querySelector(".step-icon").textContent = "✓";
    }

    const summary = document.createElement("div");
    summary.className = "workflow-summary";
    summary.textContent = "Workflow completed successfully";
    output.appendChild(summary);

    btn.textContent = "Run Again";
    btn.disabled = false;
});