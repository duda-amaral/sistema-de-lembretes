using Microsoft.AspNetCore.Mvc;
using SistemaDeLembretes.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaDeLembretes.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LembreteController : ControllerBase
    {
        private readonly ContextoDB _contextoDB;

        public LembreteController(ContextoDB contextoDB)
        {
            _contextoDB = contextoDB;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Lembrete>>> GetLembretes()
        {
            try
            {
                var lembretes = await _contextoDB.Lembretes.ToListAsync();
                return Ok(lembretes);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno do servidor: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<ActionResult<Lembrete>> AddLembrete(Lembrete objLembrete)
        {
            try
            {
                _contextoDB.Lembretes.Add(objLembrete);
                await _contextoDB.SaveChangesAsync();
                return CreatedAtAction(nameof(GetLembretes), new { id = objLembrete.Id }, objLembrete);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno do servidor: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<bool>> DeleteLembrete(int id)
        {
            try
            {
                var lembrete = await _contextoDB.Lembretes.FindAsync(id);
                if (lembrete == null)
                {
                    return NotFound();
                }

                _contextoDB.Lembretes.Remove(lembrete);
                await _contextoDB.SaveChangesAsync();
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Erro interno do servidor: {ex.Message}");
            }
        }
    }
}
