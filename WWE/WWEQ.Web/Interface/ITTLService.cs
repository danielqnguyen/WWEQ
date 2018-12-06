using System.Collections.Generic;
using WWEQ.Web.Models.AddRequest;
using WWEQ.Web.Models.Domain;

namespace WWEQ.Web.Interface
{
    public interface ITTLService
    {
        int Insert(TTLAddRequest model);
        List<TTLDomainModel> SelectAll();
    }
}