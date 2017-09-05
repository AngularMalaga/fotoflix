import { FotoflixPage } from './app.po';

describe('fotoflix App', () => {
  let page: FotoflixPage;

  beforeEach(() => {
    page = new FotoflixPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
