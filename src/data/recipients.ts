import perry from '../assets/avatars/perry.png';
import adan from '../assets/avatars/adan.png';
import leo from '../assets/avatars/leo.png';
import val from '../assets/avatars/val.png';

export const recipients: {
    name: string,
    email: string,
    permission: 'view' | 'edit' | 'admin',
    avatar: string,
}[] = [
    {
        name: 'Perry Willmon',
        email: 'lexie49@bogisich.org',
        permission: 'view',
        avatar: perry,
    },
    {
        name: 'Adan Lauzon',
        email: 'ottis.kuhic@upton.com',
        permission: 'view',
        avatar: adan,
    },
    {
        name: 'Leo Stanton',
        email: 'hans.shanahan@heaney.info',
        permission: 'admin',
        avatar: leo,
    },
    {
        name: 'Val Purvis',
        email: 'cpowlowski.yahoo.com',
        permission: 'edit',
        avatar: val,
    }
]
