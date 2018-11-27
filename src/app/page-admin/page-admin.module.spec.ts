import { PageAdminModule } from './page-admin.module';

describe('PageAdminModule', () => {
  let pageAdminModule: PageAdminModule;

  beforeEach(() => {
    pageAdminModule = new PageAdminModule();
  });

  it('should create an instance', () => {
    expect(pageAdminModule).toBeTruthy();
  });
});
