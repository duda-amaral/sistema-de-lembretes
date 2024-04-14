export const ordenarLembretesPorData = (lembretes) => {
    return lembretes.sort((a, b) => new Date(a.data) - new Date(b.data));
};

export const agruparLembretesPorData = (lembretes) => {
    const lembretesAgrupados = {};
    lembretes.forEach(lembrete => {
        const data = new Date(lembrete.data).toLocaleDateString();
        if (!lembretesAgrupados[data]) {
            lembretesAgrupados[data] = [];
        }
        lembretesAgrupados[data].push(lembrete);
    });
    return lembretesAgrupados;
};

