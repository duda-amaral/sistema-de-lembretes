export const fetchLembretes = async () => {
    return fetch("http://localhost:5000/api/Lembrete", {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json());
  }
  
  export const deleteLembrete = async (id) => {
    return fetch(`http://localhost:5000/api/Lembrete/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      if (!response.ok) throw new Error('Falha ao deletar lembrete');
      return;
    });
  }

  export const addLembrete = async (novoLembrete) => {
    return fetch("http://localhost:5000/api/Lembrete", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(novoLembrete)
    }).then(response => {
      if (!response.ok) throw new Error('Erro ao criar novo lembrete');
      else window.location.reload()
      return response.json();
    });
  };
    