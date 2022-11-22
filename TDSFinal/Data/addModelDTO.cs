using System.ComponentModel.DataAnnotations;

namespace TDSFinal.Data
{
	public class addModelDTO
	{
		[Required(ErrorMessage = "Por favor indica tu nombre de destino.")]
		public string? name { get; set; }
		[Required(ErrorMessage = "Por favor sube la foto.")]
		public string? foto { get; set; }
		[Required(ErrorMessage = "Por favor indica la descripcion.")]
		public string? descripcion { get; set; }
		[Required(ErrorMessage = "Por favor indica la region.")]
		public string? region { get; set; }
	}
}
