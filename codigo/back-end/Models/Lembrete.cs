using System.ComponentModel.DataAnnotations;

namespace SistemaDeLembretes.Models
{
    public class Lembrete {

        [Key]
        public int Id { get; set; }

        [Required(ErrorMessage = "O nome do lembrete é obrigatório.", AllowEmptyStrings = false)]
        public string Nome { get; set; }

        [DataType(DataType.Date, ErrorMessage = "Data invalida"), Required(ErrorMessage = "A data do lembrete é obrigatória.")]
        public DateTime Data { get; set; }

    }
}