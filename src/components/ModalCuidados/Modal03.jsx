import { useState, useEffect } from "react";

const modalimg01 = '/img/imgCard03.png';


const tituloModal = "Higiene e Cuidados com a Ferida Operatória";

export default function Modal03() {
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
        <div className="fixed z-50 inset-0 flex items-center  justify-center bgBlur" onClick={() => setIsOpen(false)}>
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

            <div className="space-y-12 flex flex-col items-center">

            

            <img
              className="imgModalCuidados"
              src={modalimg01}
              alt=""
            />

            <p className="pModalCuidados">
            Manter a região limpa e protegida é essencial para evitar infecções e garantir uma boa cicatrização.
            </p>

            <ul className="cardAlert text-gray-100 list-disc liCardCuidados mx-6 text-left">
              <li>Banhos: Geralmente, banhos rápidos e mornos são liberados após 24-48 horas, mas siga sempre as orientações do cirurgião. Evite esfregar a área operada.
              </li>
              <li>Curativos: Siga as orientações médicas para troca dos curativos, e nunca mexa na área operada sem higienizar bem as mãos antes</li>
              <li>Secagem Suave: Após o banho, seque delicadamente a região com uma toalha limpa, sem friccionar. Mantenha o local arejado e protegido.</li>
            </ul>

            
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
