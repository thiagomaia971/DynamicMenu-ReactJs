import { IAction } from "../actions/Action";
import { GET_MENUS } from "../actions/menu";
import { handleActions } from "redux-actions";

const menu = handleActions({
    [GET_MENUS]: function (state: any, action: IAction<GET_MENUS>) {

        const menuMock = [
            {
                "Id": 1,
                "ParentId": 0,
                "Nome": "Administração",
                "Descricao": "",
                "Action": "",
                "DisplayOrder": 1,
                "VisibleInMenu": true,

                "Filhos": [{
                    "Id": 2,
                    "ParentId": 1,
                    "Nome": "Perfis",
                    "Descricao": "PerfilComponent",
                    "Action": "/Administracao/Perfis/",
                    "DisplayOrder": 101,
                    "VisibleInMenu": true,
                    "Filhos": [{
                        "Id": 5,
                        "ParentId": 1,
                        "Nome": "Funcionarios",
                        "Descricao": "",
                        "Action": "/Administracao/Funcionarios/",
                        "DisplayOrder": 103,
                        "VisibleInMenu": true,
                        "Filhos": null
                    },

                    {
                        "Id": 5,
                        "ParentId": 1,
                        "Nome": "Test",
                        "Descricao": "",
                        "Action": "/Administracao/Funcionarios/",
                        "DisplayOrder": 103,
                        "VisibleInMenu": true,
                        "Filhos": [{
                            "Id": 5,
                            "ParentId": 1,
                            "Nome": "Test",
                            "Descricao": "",
                            "Action": "/Administracao/Funcionarios/",
                            "DisplayOrder": 103,
                            "VisibleInMenu": true,
                            //"Filhos": null
                        }]
                    }]
                },
                {
                    "Id": 3,
                    "ParentId": 1,
                    "Nome": "Usuarios",
                    "Descricao": "",
                    "Action": "/Administracao/Usuarios/",
                    "DisplayOrder": 102,
                    "VisibleInMenu": true,
                    "Filhos": null
                },
                {
                    "Id": 5,
                    "ParentId": 1,
                    "Nome": "Test",
                    "Descricao": "",
                    "Action": "/Administracao/Funcionarios/",
                    "DisplayOrder": 103,
                    "VisibleInMenu": true,
                    "Filhos": null
                }
                ]
            },
            {
                "Id": 6,
                "ParentId": 1,
                "Nome": "Clientes",
                "Descricao": "",
                "Action": "/Clientes/Index/",
                "DisplayOrder": 2,
                "VisibleInMenu": true,
                "Filhos": null
            }

        ]

        return (<any>Object).assign({}, state, {
            dado: menuMock
        })

    }
}, {});

export default menu;
