import SubmitForm from "../../Components/SubmitForm";
import CarrinhoCompras from "../../Pages/Carrinho";
import Home from "../../Pages/Home";

const routes = [
    {
        path: '/',
        exact: true,
        component: Home
    },
    {
        path: '/carrinho',
        exact: true,
        component: CarrinhoCompras
    },
    {
        path: '/checkout',
        exact: true,
        component: SubmitForm
    }
]

export default routes;