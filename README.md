# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

## Author
Aarnav Gujjari (A19127921)

## GitHub Pages Links
- **Part 1 - Expose (Party Horn)**: https://aarn4v.github.io/Lab5_Starter/expose.html
- **Part 2 - Explore (Speech Synthesis)**: https://aarn4v.github.io/Lab5_Starter/explore.html

## Unit Testing Answers

### 1) Would you use a unit test to test the "message" feature of a messaging application?

**No.** The message feature involves multiple interacting systems (user input, database, network, notifications), making it an integration test, not a unit test. Unit tests should test isolated functions.

### 2) Would you use a unit test to test the "max message length" feature of a messaging application?

**Yes.** The max message length can be tested as a single isolated function without involving other systems, making it a perfect unit test scenario.
