import { Angular4MonterailPage } from './app.po';

describe('angular4-monterail App', () => {
  let page: Angular4MonterailPage;

  beforeEach(() => {
    page = new Angular4MonterailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
