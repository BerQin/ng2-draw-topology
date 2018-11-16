export interface DrawNodeOption {
  title: string;
  contentText?: string;
  type: 'rect' | 'circular';
  id: number | string;
  width: number;
  height: number;
}
