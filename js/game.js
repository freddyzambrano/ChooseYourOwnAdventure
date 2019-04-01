// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "bed.jpg",
    levels: {

        start: {
            message: "You Awake in the Morning Feeling Sluggish",
            choices: [
                {
                    text: "Get up and Walk About",
                    nextLevel: "Hallway",
                },

                {
                    text: "Go back to sleep",
                    nextLevel: "Dreamland",
                },
            ]
        },

        Hallway: {
            background_image: "hallway.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You Hear Voices Amongst the Walls",
            choices: [
                {
                    text: "Run Away and Sleep",
                    nextLevel: "Dreamland",
                },
                
                {
                    text: "Encounter the voice Behind the Madness",
                    nextLevel: "Satan_Room",
                },
            ]
        },
        
        Satan_Room: {
            background_image: "j.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You Encounter Satan",
            choices: [
                {
                    text: "Face Your Fears",
                    nextLevel: "Succeed",
                },
                
                {
                    text: "Give Up",
                    nextLevel: "Pawn_Room",
                },
            ]
        },
        
        Pawn_Room: {
            background_image: "pawn.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "You Become a Pawn of Satan",
            choices: [
                {
                    text: "Relapse",
                    nextLevel: "start",
                },
            ]
        },
        
        Succeed: {
            background_image: "sus.jpg",
            music: "Final-Fantasy-7-Boss-Battle.mp3",
            message: "Success",
            choices: [
                {
                    text: "You Are Freed",
                    nextLevel: "start",
                },
            ]
        },

        Dreamland: {
            background_image: "d.jpg",
            message: "As you Drift off you Begin to Dream",
            choices: [
                {
                    text: "Relapse",
                    nextLevel: "start",
                },
            ]
        },

    }
};
