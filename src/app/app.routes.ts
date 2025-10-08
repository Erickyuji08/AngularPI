import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { PessoaLogin } from './pages/pessoa-login/pessoa-login';
import { PessoaListagemComponent } from './pages/pessoa-listagem/pessoa-listagem';
import { PessoaForm } from './pages/pessoa-form/pessoa-form';

export const routes: Routes = [
    {path:'', component: Home},
    {path:'pessoas/login', component: PessoaLogin},

    {
     path: 'pessoas',
     component: PessoaListagemComponent,
     title: 'Lista de pessoas'
    },

    {
     path: 'pessoas/incluir',
     component: PessoaForm,
     title: 'Pessoa form'
    }
];
