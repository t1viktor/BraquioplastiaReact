import Modal01 from "./ModalCuidados/Modal01";
import Modal02 from "./ModalCuidados/Modal02";
import Modal03 from "./ModalCuidados/Modal03";
import Modal04 from "./ModalCuidados/Modal04";
import Modal05 from "./ModalCuidados/Modal05";
import Modal06 from "./ModalCuidados/Modal06";
import Modal07 from "./ModalCuidados/Modal07";
import Modal08 from "./ModalCuidados/Modal08";

const cardimg01 = '/img/imgCard01.png';
const cardimg02 = '/img/imgCard02.png';
const cardimg03 = '/img/imgCard03.png';
const cardimg04 = '/img/imgCard04.png';
const cardimg05 = '/img/imgCard05.png';
const cardimg06 = '/img/imgCard06.png';
const cardimg07 = '/img/imgCard07.png';
const cardimg08 = '/img/imgCard08.png';

// Atualizando os títulos e as descrições com base nas informações fornecidas
const tittleCard01Cuidados = "Cuidados Imediatos e Gerais";
const li01Card01Cuidados = "Repouso Relativo";
const li02Card01Cuidados = "Movimentação Suave";
const li03Card01Cuidados = "Atenção aos Sinais de Alerta";

const tittleCard02Cuidados = "Cuidados com a Alimentação";
const li01Card02Cuidados = "Proteínas Magras";
const li02Card02Cuidados = "Frutas e Vegetais";
const li03Card02Cuidados = "Fibras";

const tittleCard03Cuidados = "Higiene e Cuidados com a Ferida Operatória";
const li01Card03Cuidados = "Banhos";
const li02Card03Cuidados = "Curativos";
const li03Card03Cuidados = "Secagem Suave";

const tittleCard04Cuidados = "Uso da Malha de Compressão e Meias de Compressão";
const li01Card04Cuidados = "Duração";
const li02Card04Cuidados = "Ajuste Correto";
const li03Card04Cuidados = "Uso";

const tittleCard05Cuidados = "Posições Corporais e Movimentação";
const li01Card05Cuidados = "Ao Dormir";
const li02Card05Cuidados = "Ao Sentar e Levantar";
const li03Card05Cuidados = "Evite Esforços Precoces";

const tittleCard06Cuidados = "Fisioterapia Pós-Operatória e Drenagem Linfática";
const li01Card06Cuidados = "Drenagem Linfática Manual";
const li02Card06Cuidados = "Outras Terapias";

const tittleCard07Cuidados = "Proteção Contra o Sol";
const li01Card07Cuidados = "Evite Sol Direto";
const li02Card07Cuidados = "Protetor Solar.";

const tittleCard08Cuidados = "Recomendações Finais";
const li01Card08Cuidados = "Não Fume.";
const li02Card08Cuidados = "Siga os Retornos Médicos.";
const li03Card08Cuidados = "Paciência e Disciplina.";

export default function Cuidados() {
    return (
        <div id="cuidados" className="min-h-[200vh] bg-gradient-to-r from-zinc-800 to-zinc-900 py-30">
            <h1 className="text-5xl max-md:text-4xl py-6 text-center text-white">Cuidados Essenciais</h1>
            <div className="grid grid-cols-3 p-12 max-lg:grid-cols-1 max-lg:space-y-12 gap-4 justify-items-center">
                
                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg01} alt="Paciente descansando" />
                    <h2 className="tituloCardCuidados">{tittleCard01Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card01Cuidados}</li>
                        <li className="liCardCuidados">{li02Card01Cuidados}</li>
                        <li className="liCardCuidados">{li03Card01Cuidados}</li>
                    </ul>
                    <Modal01 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg02} alt="Comida saudável" />
                    <h2 className="tituloCardCuidados">{tittleCard02Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card02Cuidados}</li>
                        <li className="liCardCuidados">{li02Card02Cuidados}</li>
                        <li className="liCardCuidados">{li03Card02Cuidados}</li>
                    </ul>
                    <Modal02 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg03} alt="Higiene e cuidados com a ferida" />
                    <h2 className="tituloCardCuidados">{tittleCard03Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card03Cuidados}</li>
                        <li className="liCardCuidados">{li02Card03Cuidados}</li>
                        <li className="liCardCuidados">{li03Card03Cuidados}</li>
                    </ul>
                    <Modal03 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg04} alt="Malha de compressão" />
                    <h2 className="tituloCardCuidados">{tittleCard04Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card04Cuidados}</li>
                        <li className="liCardCuidados">{li02Card04Cuidados}</li>
                        <li className="liCardCuidados">{li03Card04Cuidados}</li>
                    </ul>
                    <Modal04 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg05} alt="Posições corporais" />
                    <h2 className="tituloCardCuidados">{tittleCard05Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card05Cuidados}</li>
                        <li className="liCardCuidados">{li02Card05Cuidados}</li>
                        <li className="liCardCuidados">{li03Card05Cuidados}</li>
                    </ul>
                    <Modal05 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg06} alt="Fisioterapia e drenagem linfática" />
                    <h2 className="tituloCardCuidados">{tittleCard06Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card06Cuidados}</li>
                        <li className="liCardCuidados">{li02Card06Cuidados}</li>
                        
                    </ul>
                    <Modal06 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg07} alt="Proteção contra o sol" />
                    <h2 className="tituloCardCuidados">{tittleCard07Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card07Cuidados}</li>
                        <li className="liCardCuidados">{li02Card07Cuidados}</li>
                        
                    </ul>
                    <Modal07 />
                </div>

                <div className="cardCuidados">
                    <img className="imgCardCuidados" src={cardimg08} alt="Proteção contra o sol" />
                    <h2 className="tituloCardCuidados">{tittleCard08Cuidados}</h2>
                    <ul className="ulCardCuidados">
                        <li className="liCardCuidados">{li01Card08Cuidados}</li>
                        <li className="liCardCuidados">{li02Card08Cuidados}</li>
                        <li className="liCardCuidados">{li03Card08Cuidados}</li>
                    </ul>
                    <Modal08 />
                </div>
                
            </div>
        </div>
    );
}