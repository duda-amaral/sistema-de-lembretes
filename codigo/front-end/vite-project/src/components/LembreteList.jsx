import { TrashIcon } from "lucide-react";
import PropTypes from 'prop-types';
import { useLembretes } from '../hooks/useLembretes';
import { ordenarLembretesPorData, agruparLembretesPorData } from '../utils/DataUtils';
import '../styles/lista-de-lembrete.scss';


const LembreteList = () => {
    const { lembretes, deleteLembreteById } = useLembretes();

    const renderizarLembretes = () => {

        const lembretesOrdenados = ordenarLembretesPorData(lembretes);

        const lembretesAgrupados = agruparLembretesPorData(lembretesOrdenados);

        return Object.entries(lembretesAgrupados).map(([data, lembretes]) => (
            <div key={data} className="lembrete-list">
                <h2>{data}</h2>
                <ul>
                    {lembretes.map(lembrete => ( 
                        <li key={lembrete.id} className="lembrete-info">
                            {lembrete.nome}
                            <span onClick={() => deleteLembreteById(lembrete.id)} className="delete-icon">
                                <TrashIcon />
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        ));
    };

    return (
        <div>
            {renderizarLembretes()}
        </div>
    );
};

LembreteList.propTypes = {
    lembretes: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nome: PropTypes.string.isRequired,
            data: PropTypes.string.isRequired
        })
    ).isRequired
};

export default LembreteList;
