import { useEffect, useState } from 'react';
import { fetchLembretes, deleteLembrete, addLembrete } from '../services/LembreteService';

export const useLembretes = () => {
    const [lembretes, setLembretes] = useState([]);

    useEffect(() => {
        fetchLembretes()
            .then(data => {
                setLembretes(data);
            })
            .catch(error => console.error('Error fetching lembretes:', error));
    }, []);

    const deleteLembreteById = async (id) => {
        try {
            await deleteLembrete(id);
            setLembretes(lembretes.filter(lembrete => lembrete.id !== id));
            console.log('Lembrete deleted successfully');
        } catch (error) {
            console.error('Error deleting lembrete:', error);
        }
    };

    const adicionarNovoLembrete = async (novoLembrete) => {
        try {
            const lembreteAdicionado = await addLembrete(novoLembrete);
            setLembretes([...lembretes, lembreteAdicionado]);
            console.log('Lembrete adicionado com sucesso');
        } catch (error) {
            console.error('Erro ao adicionar lembrete:', error);
        }
    };

    return { lembretes, deleteLembreteById, adicionarNovoLembrete };
};
