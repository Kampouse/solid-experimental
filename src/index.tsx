/* @refresh reload */
import '.';
import { render } from 'solid-js/web';

import App from './global/App';

render(() => <App />, document.getElementById('root') as HTMLElement);
