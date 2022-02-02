import axios from 'axios';

declare module 'axios' {
  export interface HeadersDefaults {
    Authorization: string
  }
}
