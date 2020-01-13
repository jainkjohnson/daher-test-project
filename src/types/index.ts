
export interface ITreeData {
  label: string;
  child: ITreeData[];
}

export interface IConfig {
  region: number,
  site: number;
  activity: number;
  workspace: number;
}