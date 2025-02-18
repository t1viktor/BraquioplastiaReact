import { useState, useEffect } from "react";

const modalimg01 = '/img/imgCard01.png'; // Imagem de paciente descansando com braços apoiados

const tituloModal = "Cuidados Imediatos e Gerais";

export default function Modal01() {
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
            <div className="border-b-[1px] w-full px-4 border-gray-700 flex flex-col-reverse items-center">
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
              alt="Paciente deitado"
            />

            <p className="pModalCuidados">
            Nos primeiros dias após a cirurgia, o corpo precisa de tempo para se adaptar às mudanças e iniciar o processo de cicatrização.
            </p>

            <ul className="ulModalCuidados">
              <li className="liModalCuidados">
                <strong>Repouso relativo:</strong> Descanse nos primeiros dias, evitando esforços com os braços. Pequenas caminhadas dentro de casa são recomendadas para melhorar a circulação e prevenir tromboses.
              </li>
              <li className="liModalCuidados">
                <strong>Movimentação suave:</strong> Mantenha os braços apoiados e evite movimentos bruscos ou erguer objetos pesados. Qualquer esforço excessivo pode comprometer o resultado da cirurgia.

              </li>
              <li className="liModalCuidados">
                <strong>Atenção aos sinais de alerta:</strong> Caso perceba vermelhidão intensa, inchaço exagerado, dor fora do normal, secreção ou febre, entre em contato com seu cirurgião imediatamente.

              </li>

            </ul>
            
          </div>
        </div>
      )}
    </div>
  );
}