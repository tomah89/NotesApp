import { AppNotes2Page } from './app.po';

describe('app-notes2 App', function() {
  let page: AppNotes2Page;

  beforeEach(() => {
    page = new AppNotes2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
