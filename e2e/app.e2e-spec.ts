import { StudymeterPage } from './app.po';

describe('studymeter App', function() {
  let page: StudymeterPage;

  beforeEach(() => {
    page = new StudymeterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
