# playwright-course-udemy
CAVEAT:
- THIS IS A LEARNING REPO, THEREFORE, EVERYTHING SEEN HERE WAS CREATED AS A STEP-BY-STEP CODE ALONG WITH THE UDEMY COURSE (linked below).
- THE COURSE CONTENT CREATOR DEVELOPED THE WEBSITE.

COMPLETED AND MERGED:
- MY MAIN SKILLS FOCUS IS ON SECTIONS 1 & 2, FOR BASICS & BUILDING THE E2E TEST in new_user_full_journey.spec.js.
- THE REPO DOES ALSO INCLUDE THE ADVANCED SECTION 3 WHICH ADDS THE my_account.spec.js TEST. 

COMPLETED AND NOT INCLUDED:
- I HAVE VERSION CONTROL EXPERIENCE WITH GITHUB, AND BITBUCKET, SO STARTED THE COURSE BY CREATING A GITHUB REPO, THIS WAS A GOOD WAY TO CONTINUE PRACTICE WITH THIS TOOL. MOST OF SECTION 4 WAS COVERED BY DOING THIS.
- THE CI IN SECTION 4 HAS NOT BEEN INCLUDED IN THE REPO - THE REPO IS FOR LEARNING, SO PREFER TO HAVE THE FOCUS ON THE TEST STRUCTURE FOR NOW. I PLAN TO RETURN TO THE COURSE TO COVER THIS PART IN ANOTHER BRANCH.

COMMENTS:
- THE COMMENTS CONTAINED WITHIN THE CODE PAGES ARE FOR MY OWN REFERENCE WHILE LEARNING, SO NOT A REFLECTION ON A REAL LIFE SITUATION WHERE THESE WOULD BE TIDIED UP.
-------

UDEMY COURSE - Automated Web Testing with JavaScript and Playwright:
https://www.udemy.com/course/automated-web-testing/learn/lecture/35748862#questions/19203146


RESOURCES
The Shopping Store Website runs from the following file:

- shopping-store-mac-arm64

  > go to where it's been downloaded, or moved to if moved from the download folder
  > double click on it
  > OR

  - to run from the terminal (use mac terminal) for zsh (the shell I use), follow this instruction:
    "Once your script is saved, you will need to make it executable by running the command “chmod +x [scriptname]” in the terminal. To run the script, you can use the terminal command “./[scriptname]”"



  - PERSONAL mac - M3 chip:
    > chmod +x shopping-store-mac-amd64
    > ~ /Users/gerrywaterston/Learning/Playwright/Udemy-Playwright/code/udemy_awt_js_pw/./shopping-store-mac-arm64

WEBSITE URL:

- localhost:2221

NODE:

> Download latest node.js from: https://nodejs.org/en

- Choose the LTS option

VISUAL STUDIO CODE:

- Download VS code: https://code.visualstudio.com/download

Commands to run a test:

> npm run test - or - npm test
> npm run ui
(runs a browser ui mode)

Quit command:

> ctrl c

Casing standards:

- Folders > Lowercase, hyphen between each word
- page-objects folder files/classes > Pascal Case e.g. ProductPage.js
- tests folder files > Snake Case > e.g. product_page_add_item.spec.js
- methods and variables > Camel Case > e.g. productPage

UNIQUE EMAILS & PASSWORDS
To create these, add UUID generator to generate unique IDs to pass in to email addresses and passwords:

- https://www.npmjs.com/package/uuid
- Note the command as npm install uuid. In practise use:
  > npm install --save uuid
- The course uses a specific/fixed version, so adds in @9.0.0 - probs use latest on new projects.

TESTS THAT WILL RUN ON COMMAND
- new_user_full_journey.spec.js the only test set to run - indicate by test.only
- To run other tests:
  > remove or add ".only" or ".skip" to each test file as required.
