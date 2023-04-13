# CIViCMine Annotation Review Tool

## Contributors

- David O'Neill - Lead
- Jake Lever - Supervisor

## About

This repository holds a [Next.js](https://nextjs.org/) application which facilitates the review of cancer-gene-drug relations extracted by the machine learning tool [CIViCMine](http://bionlp.bcgsc.ca/civicmine/). The web application is part of the "human-in-the-loop" process - relations which have been predicted by CIViCMine are presented to users for review, generating new data which can be used to retrain the model.

There are two main componenents in the application:

- Upvoting/Downvoting - users have the ability to state whether a predicted sentence annotation is correct or incorrect. Correct annotations can be utilised in the future as concrete training data. Incorrect annotations can be used to filter predictions in the future.
- Manual annotation - incorrectly annotated sentences can be fed to the user for manual annotation to explain what relations actually exist in the sentence.


