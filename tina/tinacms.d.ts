declare module 'tinacms' {
  export interface FieldUI {
    component?: string;
    dateFormat?: string;
    validate?: (value: any, allValues?: any, meta?: any, field?: any) => string | undefined | void;
    itemProps?: (item: Record<string, any>) => { label?: string };
  }

  export interface FieldOption {
    value: string;
    label: string;
  }

  export interface TinaField {
    type: string;
    name: string;
    label?: string;
    description?: string;
    isTitle?: boolean;
    isBody?: boolean;
    required?: boolean;
    list?: boolean;
    options?: FieldOption[];
    ui?: FieldUI;
    fields?: TinaField[];
    templates?: Array<{
      name: string;
      label: string;
      fields: TinaField[];
    }>;
  }

  export interface Template {
    fields: TinaField[];
  }

  export function defineConfig<T extends Record<string, any>>(config: T): T;
}
