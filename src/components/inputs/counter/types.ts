export type CounterProps = {
  title: string;
  subtitle: string;
  value: number;
  onChange(value: number): void;
};
