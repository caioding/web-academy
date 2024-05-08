import React from "react";

const ResumoCarrinho = () => {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
        <p className="card-text fw-medium">Quantidade total: 6</p>
        <p className="card-text fw-medium">
          Valor totasl: R${(9000).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ResumoCarrinho;
