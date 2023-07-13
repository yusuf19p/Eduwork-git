Feature: Credit Card Payment

    As a user with invalid credit card
    I cannot checkout using credit card payment

    As a user with valid credit card
    I want to checkout using credit card payment

    Scenario: Unsuccessful credit card payment
        Given I am on the homepage
        When When I click on buy now
        And I click on checkout
        And I click on credit card payment option
        And I fill card number with "5678123409874321"
        Then I should see error message

    Scenario: Successful credit card payment
        Given I am on the homepage
        When I click on buy now
        And I click on checkout
        And I click on credit card payment option
        And I fill card number with "4811111111111114"
        And I fill expiration date with "07/25"
        And I fill cvv with "789"
        And I click on pay now
        And I fill password with "112233"
        And I click on ok
        Then I should see successfull payment message