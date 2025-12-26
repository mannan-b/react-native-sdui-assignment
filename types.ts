export interface ComponentStyle {
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  marginTop?: number;
  borderRadius?: number;
}

export interface Theme {
  backgroundColor: string;
  primaryColor: string;
  textColor: string;
  buttonTextColor?: string;
}

export interface UIComponent {
  type: 'text' | 'image' | 'button';
  value?: string;
  url?: string;
  text?: string;
  action?: string;
  visibleIf?: string;
  style?: Record<string, any>;
}

export interface ServerResponse {
  screen: string;
  theme: Theme; 
  components: UIComponent[];
}