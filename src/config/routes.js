import TodoPage from '../components/pages/Index' 
import LoginPage from '../components/pages/Login'
import ProfilePage from '../components/pages/Profile'
import RegisterPage from '../components/pages/Register'

const components = {
    todo: {
        url: "/todo",
        component: TodoPage 
    },
    login: {
        url: "/login",
        component: LoginPage
    },
    profile: {
        url: "/profile",
        component: ProfilePage
    },
    register: {
        url: "/register",
        component: RegisterPage
    }
};

// Roles nhai kao nha nhai dai bang
export default {
    guest: {
        allowedRoutes: [
            components.login,
            components.register
        ],
        redirectRoutes: "/login"
    },
    user: {
        allowedRoutes: [
            components.todo,
            components.profile,
            components.login
        ],
        redirectRoutes: "/profile"
    },
};