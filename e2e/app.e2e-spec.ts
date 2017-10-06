import { InventorPage } from './app.po';

describe('inventor App', () => {
  let page: InventorPage;

  beforeEach(() => {
    page = new InventorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
