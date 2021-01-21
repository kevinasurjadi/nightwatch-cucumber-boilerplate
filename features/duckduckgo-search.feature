Feature: DuckDuckGo Search

Scenario: Searching DuckDuckGo

  Given I open DuckDuckGo search page
  Then the title is "DuckDuckGo — Privacy, simplified."
  And the DuckDuckGo search form exists

Scenario: Searching Google again

  Given I open DuckDuckGo search page
  Then the title is "DuckDuckGo — Privacy, simplified."
  And the DuckDuckGo search form exists
