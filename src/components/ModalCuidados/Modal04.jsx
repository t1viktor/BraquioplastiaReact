import { useState, useEffect } from "react";

const modalimg01 = '/img/imgCard04.png';

const tituloModal = "Uso da Malha de Compressão e Meias de Compressão";

export default function Modal04() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden"); // Bloqueia o scroll
    } else {
      document.body.classList.remove("overflow-hidden"); // Libera o scroll
    }

    return () => {
      document.body.classList.remove("overflow-hidden"); // Garante que o scroll é liberado ao desmontar
    };
  }, [isOpen]);

  return (
    <div className="flex justify-center items-center">
      {/* Botão para abrir o modal */}
      <button onClick={() => setIsOpen(true)} className="btnCardCuidados">
        Ver mais sobre
      </button>

      {/* Fundo escuro e modal */}
      {isOpen && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bgBlur" onClick={() => setIsOpen(false)}>
          <div className="modalCuidados" onClick={(e) => e.stopPropagation()}>
            <div className="border-b-[1px] w-full px-4 border-gray-700 flex justify-between flex-col-reverse items-center">
              <h2 className="modalCuidadoTittle">
                {tituloModal}
              </h2>
              <button
                onClick={() => setIsOpen(false)}
                className="modalCuidadoBtn"
              >
                Fechar
              </button>
            </div>

            <img className="imgModalCuidados" src={modalimg01} alt="" />

            <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full p-3 gap-5">

<div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
  <h2 className="text-blue-400 text-center">
  Malha de Compressão para os Braços:
  </h2>
  <ul className="list-disc px-6 text-gray-100 space-y-5">
    <li className="liCardCuidados">Geralmente indicada para uso contínuo nas primeiras 4 a 6 semanas, removendo apenas para a higiene. Essa malha ajuda a reduzir o inchaço e a melhorar a aderência da pele aos tecidos.
    </li>
    <li className="liCardCuidados">Ajuste Correto: A malha deve ficar justa, mas não apertada a ponto de causar dor ou dificuldade na circulação.</li>
  </ul>
</div>

<div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
  <h2 className="text-blue-400 text-center">
  Meias de Compressão:
  </h2>
  <ul className="list-disc px-6 text-gray-100 space-y-5">
    <li className="liCardCuidados">Duração: Se indicado pelo cirurgião, use as meias de compressão nas pernas durante as primeiras 1 a 2 semanas, especialmente se você ficar mais tempo de repouso. Elas ajudam a prevenir tromboses e melhoram a circulação sanguínea.
    </li>
    <li className="liCardCuidados">Uso: Siga as recomendações médicas sobre quando e por quanto tempo utilizar as meias.
    </li>
  </ul>
</div>

</div>
            
          </div>
        </div>
      )}
    </div>
  );
}
