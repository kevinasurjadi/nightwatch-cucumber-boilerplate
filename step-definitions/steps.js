import { Given, Then } from '@cucumber/cucumber';
import { client } from 'nightwatch-api';

Given(/^I open Google search page$/, async () => {
  await client.url('https://google.com/');
});

Given(/^I open DuckDuckGo search page$/, async () => {
  await client.url('https://duckduckgo.com/');
});

Then(/^the title is "(.*?)"$/, async (text) => {
  await client.assert.title(text);
});

Then(/^the Google search form exists$/, async () => {
  await client.assert.visible('input[name="q"]');
});

Then(/^the DuckDuckGo search form exists$/, async () => {
  await client.assert.visible('#search_form_homepage');
});
