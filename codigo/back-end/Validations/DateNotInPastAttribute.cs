using System;
using System.ComponentModel.DataAnnotations;

namespace SistemaDeLembretes.Validations
{
public class DateNotInPastAttribute : ValidationAttribute
{
    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        if (value != null)
        {
            DateTime date = (DateTime)value;
            if (date < DateTime.Today)
            {
                return new ValidationResult("A data não pode ser anterior à data atual.");
            }
        }
        return ValidationResult.Success;
    }
}
}