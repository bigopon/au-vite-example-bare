import Aurelia from 'aurelia';
import { App } from './app';

Aurelia
    .app({ component: App, host: document.body })
    .start();