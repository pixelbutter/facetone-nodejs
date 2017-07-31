const deepFreeze = require('deep-freeze');

const gameCategories = {
    "face": {
        "game-category": "face",
        "suggestion": "Facial Expressions",
        "expressions": [
            "sad",
            "happy",
            "angry"
        ],
    },
    "tone": {
        "game-category": "tone",
        "suggestion": "Tone",
        "expressions": [
            "sad",
            "happy",
            "angry"
        ]
    }
};

const expressionContent = {
    "sad": {
        "displayName": "Lisa",
        "emotionName": "Sad",
        "image": "https://emojipedia-us.s3.amazonaws.com/thumbs/240/google/80/disappointed-face_1f61e.png",
        "tone": {
            "sound": "ogg goes here",
            "text": "Boo hoo hoo"
        }
    },
    "happy": {
        "displayName": "Bart",
        "emotionName": "Happy",
        "image": "https://emojipedia-us.s3.amazonaws.com/thumbs/240/google/80/grinning-face_1f600.png",
        "tone": {
            "sound": "ogg goes here",
            "text": "Yay so happy"
        }
    },
    "angry": {
        "displayName": "Marge",
        "emotionName": "Angry",
        "image": "https://emojipedia-us.s3.amazonaws.com/thumbs/240/google/80/pouting-face_1f621.png",
        "tone": {
            "sound": "ogg goes here",
            "text": "Grr"
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
    gameCategories,
    expressionContent,
    general
});
