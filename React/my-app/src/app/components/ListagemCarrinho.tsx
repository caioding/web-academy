import React from "react";

import ItemCarrinho from "./ItemCarrinho";

const ListagemCarrinho = () => {
    return (
        <div>
            <div className="card mb-4">
                <div className="row card-body">
                    <h5 className="card-title mb-4 fw-light">
                        Produtos selecionados
                    </h5>
                    <div className="table-responsive">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th>Produto</th>
                                    <th>Valor Unitário</th>
                                    <th>Quantidade</th>
                                    <th>Valor Total</th>
                                    <th>Opções</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ItemCarrinho />
                                <ItemCarrinho />
                                <ItemCarrinho />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListagemCarrinho;