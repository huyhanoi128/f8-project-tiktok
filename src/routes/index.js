import { HeaderOnly } from '~/components/Layout';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Upload from '~/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/Upload', component: Upload , layout: HeaderOnly},
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
