import { MarkupPage } from './app.po';

describe('markup App', () => {
  let page: MarkupPage;

  beforeEach(() => {
    page = new MarkupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
