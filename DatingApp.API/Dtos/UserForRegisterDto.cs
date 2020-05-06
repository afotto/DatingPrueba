using System.ComponentModel.DataAnnotations;

namespace DatingApp.API.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(10, MinimumLength=4, ErrorMessage="La password no puede ser menor de 4 y mayor de 10")]
        public string Password { get; set; }
    }
}