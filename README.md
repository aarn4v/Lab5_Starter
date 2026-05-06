# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

Aarnav Gujjari
A19127921

## Unit Testing Answers

### 1) Would you use a unit test to test the "message" feature of a messaging application?

**No**, you would not use a unit test for the "message" feature. The message feature involves multiple components and systems interacting together (user input, database storage, network transmission, recipient notification, etc.). This is an integration test scenario, not a unit test scenario. Unit tests are designed to test individual functions or components in isolation, whereas testing the full "message" feature requires testing how all these components work together as a system.

### 2) Would you use a unit test to test the "max message length" feature of a messaging application?

**Yes**, you would use a unit test for the "max message length" feature. This feature can be tested in isolation as a single, encapsulated unit. You can write a simple function like `isMessageValid(text)` or `validateMessageLength(text)` and test it with various inputs (messages exactly 80 characters, over 80 characters, under 80 characters) without needing to involve the database, network, or other parts of the application. This is a perfect scenario for unit testing.
