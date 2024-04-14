import { useState } from 'react';
import { useLembretes } from '../hooks/useLembretes';
import { useForm } from '../hooks/useForm';
import { validarCampos } from '../utils/validacao';
import '../styles/form.scss';

const LembreteForm = () => {
    const { adicionarNovoLembrete } = useLembretes();
    const { values, handleChange, resetForm } = useForm({ nome: '', data: '' });
    const [erro, setErro] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const mensagemErro = validarCampos(values.nome, values.data);
        if (mensagemErro) {
            setErro(mensagemErro);
            return;
        }

        try {
            await adicionarNovoLembrete(values);
            resetForm();
            setErro('');
        } catch (error) {
            setErro('Erro ao adicionar lembrete. Por favor, tente novamente.');
        }
    };

    return (
        <form className="lembrete-form" onSubmit={handleSubmit}>
            <h1>Criar lembrete</h1>
            {erro && <p className="erro">{erro}</p>}
            <input type="text" placeholder="Nome" name="nome" value={values.nome} onChange={handleChange} />
            <input type="date" placeholder="Data" name="data" value={values.data} onChange={handleChange} />
            <button type="submit">Salvar</button>
        </form>
    );
};

export default LembreteForm;
