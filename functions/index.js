// Copyright 2016, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const {ApiAiApp} = require('actions-on-google');
const functions = require('firebase-functions');
const {sprintf} = require('sprintf-js');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const strings = require('./strings');

process.env.DEBUG = 'actions-on-google:*';

const Actions = {
    ASK_QUESTION: 'ask.question'
};
const Contexts = {
    FACIAL_EXPRESSIONS: 'facial_expressions',
    TONE: 'tone'
};

/**
 * @template T
 * @param {Array<T>} array The array to get a random value from
 */
const getRandomValue = array => array[Math.floor(Math.random() * array.length)];

/** @param {Array<string>} messages The messages to concat */
const concat = messages => messages.map(message => message.trim()).join(' ');

// Polyfill Object.values to get the values of the keys of an object
if (!Object.values) {
    Object.values = o => Object.keys(o).map(k => o[k]);
}

const askQuestion = app => {
    let currentExpression = strings.content.happy;

    if (app.getContext(Contexts.FACIAL_EXPRESSIONS)) {
        const carousel = app.buildCarousel();
        for (let i in strings.content) {
            let expression = strings.content[i];
            carousel.addItems(app.buildOptionItem(expression.displayName, [])
                .setTitle(expression.displayName)
                .setDescription(expression.tone.text)
                .setImage(expression.image, expression.displayName));
        }

        app.askWithCarousel(app.buildRichResponse()
            .addSimpleResponse("Who best describes the emotion " + currentExpression.emotionName + "?"),
            carousel);
    } else if (app.getContext(Contexts.TONE)) {
        app.ask(app.buildRichResponse()
            .addSimpleResponse("you picked tone of voice"));
    } else {
        app.ask("uh oh");
    }
};

const actionMap = new Map();
actionMap.set(Actions.ASK_QUESTION, askQuestion);

const faceTone = functions.https.onRequest((request, response) => {
    const app = new ApiAiApp({request, response});
    console.log(`Request headers: ${JSON.stringify(request.headers)}`);
    console.log(`Request body: ${JSON.stringify(request.body)}`);
    app.handleRequest(actionMap);
});

module.exports = {
    faceTone
};
