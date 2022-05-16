
interface IProxyTable {
  [key: string]:
    | string
    | {
        develop: string;
        trial: string;
        release: string;
      };
}

export default class JHRequest {

  public proxyTable: IProxyTable;
  public baseURL: string;

  constructor(proxyTable: IProxyTable, baseURL: string) {
    this.proxyTable = proxyTable;
    this.baseURL = baseURL;
  }
}
