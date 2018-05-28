import Home from '../components/Home';
import CustomerSearch from '../containers/customers/CustomerSearch';
import MemberPoints from '../components/memberPoints/MemberPoints';

export const RouterConfig = {
    baseUrl: '/',
    routes: [{
        url: '/',
        component: Home
    },
    {
        url: '/customerSearch',
        component: CustomerSearch
    },
    {
        url: '/memberPoints',
        component: MemberPoints
    }]
};