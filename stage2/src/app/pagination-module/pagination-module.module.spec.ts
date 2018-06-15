import { PaginationModuleModule } from './pagination-module.module';

describe('PaginationModuleModule', () => {
  let paginationModuleModule: PaginationModuleModule;

  beforeEach(() => {
    paginationModuleModule = new PaginationModuleModule();
  });

  it('should create an instance', () => {
    expect(paginationModuleModule).toBeTruthy();
  });
});
