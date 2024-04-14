export const validarCampos = (nome, data) => {
    if (!nome.trim() || !data.trim()) {
        return 'Por favor, preencha todos os campos obrigatórios.';
    }

    const hoje = new Date();
    const dataSelecionada = new Date(data);

    if (dataSelecionada < hoje) {
        return 'A data deve ser maior ou igual à data atual.';
    }

    return '';
};