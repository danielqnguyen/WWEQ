using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WWEQ.Web.Models;
using WWEQ.Web.Models.Domain;

namespace WWEQ.Web.Interface
{
    public interface IFoodService
    {
        int Insert(FoodAddRequest model);
        void Delete(int id);
        List<FoodDomainModel> SelectAll();
        //List<FoodDomainModel> Pagination(int pageNumber, int rowsToDisplay);
        FoodDomainModel SelectById(int id);
        int Update(FoodDomainModel model);
    }
}
