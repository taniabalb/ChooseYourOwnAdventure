// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "Party? Done. So your're going home but it's pass your curfew.",
            choices: [
                {
                    text: "Take Shortcut",
                    nextLevel: "shortcut",
                },

                {
                    text: "Long Way Home",
                    nextLevel: "long",
                },
            ]
        },

        shortcut: {
            background_image: "fire.gif",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You're Walking through an alley and hear footsteps behind you.",
            choices: [
                {
                    text: "Turn Around",
                    nextLevel: "start",
                },
                
                {
                    text: "Keep Walking",
                    nextLevel: "walking",
                },
            ]
        },

        long: {
            message: "As you're walking you find a $5 bill near a white van.",
            choices: [
                {
                    text: "Grab it.",
                    nextLevel: "grab",
                },
                
                {
                    text: "Nah, I'm good. ",
                    nextLevel: "nah",
                },
            ]
        },

    }
};
