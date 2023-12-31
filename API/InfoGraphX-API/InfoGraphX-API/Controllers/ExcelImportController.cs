﻿using Microsoft.AspNetCore.Mvc;

namespace InfoGraphX_API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ExcelImportController : ControllerBase
    {
        private readonly ExcelDataImporter _excelDataImporter;

        public ExcelImportController(ExcelDataImporter excelDataImporter)
        {
            _excelDataImporter = excelDataImporter;
        }


        //Foreign trade value indices
        [HttpPost("[action]")]
        public IActionResult ImportFTVIExcelData()
        {
            var excelFilePath = "C:/Users/nuhay/Downloads/FTVI.xls";
            _excelDataImporter.ImportFTVIDataFromExcel(excelFilePath);

            return Ok("FTVIE Data import successful");
        }


        //Happiness level by age group
        [HttpPost("[action]")]
        public IActionResult ImportHLBAGExcelData()
        {
            var excelFilePath = "C:/Users/nuhay/Downloads/HLBAG.xls";
            _excelDataImporter.ImportHLBAGDataFromExcel(excelFilePath);

            return Ok("HLBAG Data import successful");
        }

        //TUFE level by age group
        [HttpPost("[action]")]
        public IActionResult ImportTUFEExcelData()
        {
            var excelFilePath = "C:/Users/nuhay/Downloads/TUFE.xls";
            _excelDataImporter.ImportTUFEDataFromExcel(excelFilePath);

            return Ok("TUFE Data import successful");
        }
    }
}
