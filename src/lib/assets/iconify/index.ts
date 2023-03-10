import { DEV } from 'esm-env';
import { addCollection } from '@iconify/svelte/offline';

import bundles from './bundles.json';
bundles.forEach((bundle: any) => addCollection(bundle));

const custom: string[] = [
  // 'svelte-logo'
  // 'bars-scale-bottom',
  'blocks-scale'
  // 'blocks-wave',
  // 'dots-scale-rotate'
];
// DEV && custom.forEach(async (val) => await import(`./custom/${val}`));

// import './custom/svelte-logo';
// import './custom/bars-scale-bottom';
import './custom/blocks-scale';
// import './custom/blocks-wave';
// import './custom/dots-scale-rotate';

export default custom;

DEV && console.debug('CSR iconify');
