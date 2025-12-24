export interface ComponentStyle {
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  width?: number | string;
  height?: number | string;
  marginTop?: number;
  borderRadius?: number;
}

export interface UIComponent {
  type: 'text' | 'image' | 'button';
  value?: string;      
  url?: string;        
  text?: string;       
  action?: string;     
  style?: ComponentStyle;
}

export interface ServerResponse {
  screen: string;
  components: UIComponent[];
}