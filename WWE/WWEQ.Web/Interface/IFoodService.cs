using System.Collections.Generic;

using WWEQ.Web.Models;
using WWEQ.Web.Models.Domain;

namespace WWEQ.Web.Interface
{
    public interface IFoodService
    {
        int Insert(FoodAddRequest model);
        void Delete(int id);
        List<FoodDomainModel> SelectAll();
        FoodDomainModel SelectById(int id);
        FoodDomainModel SelectByName(string name);
        int Update(FoodDomainModel model);
    }
}
