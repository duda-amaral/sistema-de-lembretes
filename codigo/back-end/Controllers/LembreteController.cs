using Microsoft.AspNetCore.Mvc;
using SistemaDeLembretes.Models;
using Microsoft.EntityFrameworkCore;

namespace SistemaDeLembretes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LembreteController : ControllerBase {
        private readonly ContextoDB _contextoDB;

        public LembreteController(ContextoDB contextoDB) {

            _contextoDB = contextoDB;

        }

        [HttpGet]
        [Route("GetLembrete")]
        public async Task<IEnumerable<Lembrete>> GetLembretes() {

            return await _contextoDB.Lembretes.ToListAsync();
        } 

        [HttpPost]
        [Route("AddLembrete")]
        public async Task<Lembrete> AddLembrete(Lembrete objLembrete){

            _contextoDB.Lembretes.Add(objLembrete);
            await _contextoDB.SaveChangesAsync();
            return objLembrete;
        }

        [HttpDelete]
        [Route("DeleteLembrete/{id}")]
        public bool DeleteLembrete(int id) {
            bool a = false;
            var lembrete = _contextoDB.Lembretes.Find(id);
            if (lembrete != null) {
                a = true;
                _contextoDB.Entry(lembrete).State = EntityState.Deleted;
                _contextoDB.SaveChanges();
            } else {
                a = false;
            }

            return a;
        }
    }
}