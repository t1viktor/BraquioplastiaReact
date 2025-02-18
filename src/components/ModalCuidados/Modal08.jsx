import { useState, useEffect } from "react";

const modalimg01 = '/img/imgCard08.png';

const tituloModal = "Recomendações Finais";

export default function Modal08() {
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


            <div className="cardAlert text-left space-y-4">
             
              <li className="marker:text-blue-400 list-disc">Não Fume: O cigarro prejudica a circulação e dificulta a cicatrização, aumentando o risco de complicações.
              </li>

              <li className="marker:text-blue-400 list-disc">Siga os Retornos Médicos: Compareça a todas as consultas de revisão para que o médico avalie a evolução da sua recuperação.
              </li>

              <li className="marker:text-blue-400 list-disc">Paciência e Disciplina: A recuperação completa leva tempo. Seguir todas as orientações médicas, ter paciência e disciplina é fundamental para alcançar o resultado desejado.
              </li>

            </div>

            
          </div>
        </div>
      )}
    </div>
  );
}
