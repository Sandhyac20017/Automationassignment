# Automationassignment
This repository contains an automation script using Playwright to test the form submission functionality of the "Best Relocations" website. The script fills out the relocation request form on the website and submits the form. It then verifies that the form submission results in a confirmation message.
Test Scenario:
The script performs the following tasks on the Best Relocations website:

Navigate to the Website:
The script opens the https://www.bestrelocations.co.in/ website.

Fill Out the Form:
The script automatically fills in the form fields with predefined data:

Name: "vindhya"
Email: "vindhya@gamil.com"
Phone: "5455554544"
Shifting Date: "2025-02-15"
From Location: "mangalore"
To Location: "bangalore"
Message: "hi i want immediate shifting"
Submit the Form:
After filling in the form, the script clicks the Submit button.

Confirmation:
Once the form is submitted, the script interacts with the confirmation message by clicking on the text "Thank You Your Contact."

Tools & Frameworks Used:
Playwright: For browser automation.
JavaScript: The scripting language used for writing the test.
Git: For version control and collaboration.
