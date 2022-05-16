import { IOptions, IResponse } from './../types/option';
// #ifdef  mp-weixin
export default function(options: IOptions<any>): Promise<IResponse<any>> {

  return new Promise(resolove => {
    // @ts-ignore
    wx.request({
      ...options,
      success: (res:IResponse<any>)  =>  {
        resolove(res)
      },
      fail: (res: IResponse<any>) => {
        resolove(res)
      }
    });
  })

}
// #endif
