using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using WWEQ.Web.Interface;
using WWEQ.Web.Models.AddRequest;
using WWEQ.Web.Models.Domain;

namespace WWEQ.Web.Services
{
    public class TTLService : ITTLService
    {
        private IDataProvider _datapProvider;

        public TTLService(IDataProvider dataProvider)
        {
            _datapProvider = dataProvider;
        }

        public int Insert(TTLAddRequest model)
        {
            int id = 0;
            _datapProvider.ExecuteNonQuery(
                "TopTenList_Insert",
                inputParamMapper: delegate (SqlParameterCollection paramList)
                {
                    SqlParameter param = new SqlParameter();
                    param.ParameterName = "@Id";
                    param.SqlDbType = SqlDbType.Int;
                    param.Direction = ParameterDirection.Output;
                    paramList.Add(param);

                    paramList.AddWithValue("@Name", model.Name);
                    paramList.AddWithValue("@Url", model.Url);
                },
                returnParameters: delegate (SqlParameterCollection paramList)
                {
                    id = (int)paramList["@Id"].Value;
                });
            return id;
        }

        public static TTLDomainModel MapTTL(IDataReader reader, int index)
        {
            TTLDomainModel model = new TTLDomainModel();
            model.Id = reader.GetInt32(index++);
            model.Name = reader.GetString(index++);
            model.Url = reader.GetString(index++);

            return model;
        }

        public List<TTLDomainModel> SelectAll()
        {
        List<TTLDomainModel> results = new List<TTLDomainModel>();
            _datapProvider.ExecuteCmd(
                "TopTenList_SelectAll",
                inputParamMapper: null,
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    TTLDomainModel model = new TTLDomainModel();
                    int index = 0;
                    model = MapTTL(reader, index);
                    index++;
                    results.Add(model);
                });
            return results;
        }
    }
}