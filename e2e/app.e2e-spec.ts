import { AppPage } from './app.po';

describe('minesweeper App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should navigate', () => {
    page.navigateTo();
  });
});
