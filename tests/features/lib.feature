Feature: Loading Yahoo
  As a user of Yahoo
  I should be able to use the application

  @dev
  Scenario: User is brought to default page
    Given I visit the yahoo.com
    Then I should be brought to the yahoo.com url
    Then Title of the page should be Yahoo

  @dev
  Scenario: Visit Sports link of a page
    Given I visit the Sports page link
    Then I should be brought to the sports.yahoo.com url
    Then Title of the page should be Yahoo Sports – Sports News, Scores, Rumors, Fantasy Games, and more

  @dev
  Scenario: Visit Autos link of a page
    Given I visit the Autos page link
    Then I should be brought to the autos.yahoo.com url
    Then Title of the page should be Find New and Used Cars for Sale, Car Research and Buying Guide, Reviews, Photos - Yahoo Autos

