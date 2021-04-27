export default class Split {
  it(str: string): string[];
  onDelimiter(str: string, del?: string): string[];
  csv(data: string, options?: Options): string[];
}

type Options = {
  headings?: boolean;
  splitOnColumns?: boolean;
};
