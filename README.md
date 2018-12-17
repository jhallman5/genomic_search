[![Build Status](https://travis-ci.com/jhallman5/genomic_search.svg?branch=master)](https://travis-ci.com/jhallman5/genomic_search)
[![Coverage Status](https://coveralls.io/repos/github/jhallman5/genomic_search/badge.svg?branch=master)](https://coveralls.io/github/jhallman5/genomic_search?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/jhallman5/genomic_search/badge.svg)](https://snyk.io/test/github/jhallman5/genomic_search)

## App Initialization

To install dependencies:   
* ``` npm i ```   

To run the App:   
* ``` npm start ```  

To run in dev mode:    
* Terminal 1 (server-side): ``` npm run dev ```   
* Terminal 2 (client-side): ``` npm run watch ```

Using either method the app is running on [localhost:3000](http://localhost:3000/)

#### Auto complete feature.
Right now my client-side code hold off on making any HTTP requests until the user types two letters. It then fetches all matching results for the substring from the server and stores all unique names in memory on the browser. It finally filters for substrings longer than 2 client-side. This approach allows us to keep a relatively minimum amount of gene names on the client while be able to quickly conduct more specific filters. One possible optimization would be to make the HTTP request when the user types just one letter return all unique results from that letter and store those in memory on the browser. As long as the browser can handle it, this would increase performance as less fetch requests would be made. If user input was E > EN > E > EA a single fetch request would be made as opposed to the current implementation of two.

#### Testing
* ``` npm test ```

#### Priority list
* Implement docker / deploy 
* Increase unit test coverage 
* Add Integration tests 
* TODO list

## TODO
#### Server-side
* Construct an improved JSON response model (to gracefully handle errors)   

#### Search_BAR
* Name search_bar does not always run suggestionFilter
  Example case:
    ENG(wait to load) > CAT(dont wait to load) > ENO
    setState may be the culprit
* find the best place to trim input value
* Hitting enter should blur

#### Variant Table
* Hold header and title bar in place
* Add filter to table

#### DB 
* Add indexing 

Specs
-----------------
Create a genomic variant web application that allows a user to search for genomic variants based on a gene name and display the results in a tabular view.

Features
-------------  
1) A user will enter a gene name and hit a search button which will result in a list of genomic variants for that gene being displayed.  The display of the list of genomic variants will be in a tabular view that allows the user to see the various attributes associated with each genomic variant.

2) To assist the user with entering the gene name to search for, provide a type-ahead or auto-suggest feature such that upon typing the first two or more letters of a gene name, a list of gene names that start with those characters is available for the user to choose from.

3) Provide two RESTful endpoints supporting the functionality listed in steps 1 and 2 so that it can be easily consumed by other applications such as command-line apps or reused by the genomic variant web application itself if it is implemented as a single-page app.

Implementation
----------------------
Feel free to use any application server, web framework, programming languages, database technologies, third-party libraries, etc. that you think would be appropriate to build the genomic variant web application.

Our expectation is that you will be writing some server code, client code, and applying some basic styling to display the results in a functional web application.  The application should include server-side tests and, time permitting, client tests.  The goal is to have a working app that spans the full stack instead of coming up with a design-winning UI that is beautiful but not functional.  With that said, feel free to be creative in any aspect of the application that you feel like would reveal your strengths or interests to us as your time permits.  

A more, full-featured version of a genomic variant web application that we have developed here at Invitae can be found at http://clinvitae.invitae.com.  It is NOT meant for you to copy or implement all of the features available in Clinvitae, but rather you can use it to get more clarity and as an example of how the web application should behave.  We are more interested in finding out how you would build a working prototype of this web application than to have you come up with a clone of Clinvitae.
