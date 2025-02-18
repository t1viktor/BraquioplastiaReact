import { useState, useEffect } from "react";

const modalimg01 = '/img/imgCard05.png';

const tituloModal = "Posições Corporais e Movimentação";

export default function Modal05() {
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
              <h2 className="pModalCuidados">A posição corporal no pós-operatório de braquioplastia é fundamental para evitar tensão na cicatriz e garantir conforto.
              </h2>

              <img className="imgModalCuidados" src={modalimg01} alt="" />

            <div className="grid grid-cols-1 max-lg:grid-cols-1 w-full p-3 gap-5">


<div className="bg-slate-700 px-2 py-4 text-left rounded-lg w-full space-y-5">
  <ul className="list-disc px-6 text-gray-100 space-y-5">
    <li className="liCardCuidados">Ao Dormir: Mantenha os braços levemente elevados sobre almofadas, evitando dobrá-los excessivamente. Dormir de costas é o mais indicado nos primeiros dias.
    </li>
    <li className="liCardCuidados">Ao Sentar e Levantar: Movimente-se com cuidado, evitando esticar os braços acima da cabeça ou para trás com força. Peça ajuda caso necessário nos primeiros dias, até se sentir seguro para movimentar-se sozinho.
    </li>
    <li className="liCardCuidados">Evite Esforços Precoces: Não retome atividades intensas ou exercícios sem a liberação do cirurgião. A pressa pode comprometer a cicatrização e o resultado final.</li>
  </ul>
</div>

</div>
            
          </div>
        </div>
      )}
    </div>
  );
}
