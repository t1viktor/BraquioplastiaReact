import { useState, useEffect } from "react";

const modalimg01 = '/img/imgCard07.png';

const tituloModal = "Proteção Contra o Sol";

export default function Modal07() {
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

            <img
              className="imgModalCuidados"
              src={modalimg01}
              alt=""
            />

            <p className="pModalCuidados p-3 text-left">
            A exposição solar deve ser evitada nos primeiros meses para não prejudicar a cicatrização e evitar o escurecimento das cicatrizes.
            </p>

            <div className="cardAlert text-left space-y-4">
             
              <li className="marker:text-blue-400 list-disc">Evite Sol Direto: Mantenha a região operada protegida do sol, utilizando roupas leves e de mangas longas, se necessário.</li>

             
              <li className="marker:text-blue-400 list-disc">Protetor Solar: Quando liberado pelo cirurgião, use protetor solar de alto FPS na área operada, reaplicando conforme indicado.</li>

            </div>

            
          </div>
        </div>
      )}
    </div>
  );
}
