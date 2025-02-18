import { useState, useEffect } from "react";

const modalimg01 = '/img/imgCard02.png';

const tituloModal = "Cuidados com a Alimentação";

export default function Modal02() {
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

            <h2 className="pModalCuidados">Uma alimentação equilibrada auxilia na recuperação, garantindo nutrientes essenciais para a cicatrização e redução do inchaço.
            </h2>

            <div className="grid grid-cols-2 max-lg:grid-cols-1 w-full p-3 gap-5">

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
                <h2 className="text-blue-400 text-center">
                O Que Comer:
                </h2>
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">Proteínas Magras: Frango, peixe, ovos e leguminosas são fundamentais para a regeneração dos tecidos.
                  </li>
                  <li className="liCardCuidados">Frutas e Vegetais: Ricos em vitaminas e minerais, fortalecem o organismo e auxiliam no combate à inflamação.</li>
                  <li className="liCardCuidados">Fibras: Alimentos integrais, frutas e legumes evitam constipação, um desconforto comum no pós-operatório devido à menor atividade física.
                  </li>
                </ul>
              </div>

              <div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
                <h2 className="text-blue-400 text-center">
                Evite:
                </h2>
                <ul className="list-disc px-6 text-gray-100 space-y-5">
                  <li className="liCardCuidados">Alimentos Processados e Ricos em Sódio: Eles podem aumentar a retenção de líquidos e o inchaço.
                  </li>
                  <li className="liCardCuidados">Açúcares e Frituras: Alimentam processos inflamatórios e podem atrasar a cicatrização.
                  </li>
                  <li className="liCardCuidados">Álcool e Cafeína: Podem interferir na hidratação e prejudicar a recuperação.</li>
                </ul>
              </div>

              </div>

          </div>
        </div>
      )}
    </div>
  );
}
