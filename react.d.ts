declare module 'react' {
  export = React;
  export as namespace React;
  
  namespace React {
    interface Component<P = {}, S = {}, SS = any> {}
    interface ComponentClass<P = {}, S = {}> {}
    interface FunctionComponent<P = {}> {
      (props: P, context?: any): ReactElement<any, any> | null;
    }
    type FC<P = {}> = FunctionComponent<P>;
    interface ReactElement<P = any, T = any> {}
    interface ReactNode {}
    type ReactNode = ReactElement | string | number | boolean | null | undefined;
  }
  
  function createElement(type: any, props?: any, ...children: any[]): any;
  
  export = React;
  export as namespace React;
}

declare namespace JSX {
  interface Element extends React.ReactElement<any, any> {}
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}
