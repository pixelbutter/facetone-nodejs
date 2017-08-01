const deepFreeze = require('deep-freeze');

const content = {
    "sad": {
        "displayName": "Bart",
        "emotionName": "sad",
        "image": "https://i.pinimg.com/236x/db/f5/17/dbf5175cc791abf633839ac1f67ab2f1--sad-simpsons-lisa-simpson.jpg",
        "tone": {
            "sound": "ogg goes here",
            "text": "Boo hoo hoo..."
        }
    },
    "happy": {
        "displayName": "Milhouse",
        "emotionName": "happy",
        "image": "https://deadhomersociety.files.wordpress.com/2011/11/momandpopart5.png",
        "tone": {
            "sound": "ogg goes here",
            "text": "Everything's comin' up Milhouse!"
        }
    },
    "angry": {
        "displayName": "Lisa",
        "emotionName": "angry",
        "image": "http://www.aveleyman.com/Gallery/ActorsS/tve25371-19910926-696.gif",
        "tone": {
            "sound": "ogg goes here",
            "text": "Have you no moral compass?!"
        }
    }
};

const general = {
    "heardItAll": "Actually it looks like you heard it all. Thanks for listening!",
    "noInputs": [
        "I didn't hear that.",
        "If you're still there, say that again.",
        "We can stop here. See you soon."
    ],
    "suggestions": {
        "confirmation": [
            "Sure",
            "No thanks"
        ]
    },
    "wantWhat": "So what would you like to do?",
};

// Use deepFreeze to make the constant objects immutable so they are not unintentionally modified
module.exports = deepFreeze({
    content,
    general
});
