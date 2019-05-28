import { IProjectLayout, IBaseModule } from './base';

export interface ILayoutModule extends IBaseModule {
  /**
   * 获取单个布局的信息
   *
   * @param layoutName 布局名
   */
  getOne(layoutName: string): Promise<IProjectLayout>;

  /**
   * 获取项目内的布局
   */
  getAll(): Promise<IProjectLayout[]>;
}
