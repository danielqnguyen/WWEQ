using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

using WWEQ.Web.Interface;
using WWEQ.Web.Models;
using WWEQ.Web.Models.Domain;

namespace WWEQ.Web.Services
{
    public class FoodService : IFoodService
    {
        private IDataProvider _dataProvider;

        public FoodService(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }

        public int Insert(FoodAddRequest model)
        {
            int id = 0;
            _dataProvider.ExecuteNonQuery(
                "Food_Insert",
                inputParamMapper: delegate (SqlParameterCollection paramList)
                {
                    SqlParameter param = new SqlParameter();
                    param.ParameterName = "@Id";
                    param.SqlDbType = SqlDbType.Int;
                    param.Direction = ParameterDirection.Output;
                    paramList.Add(param);

                    paramList.AddWithValue("@Name", model.Name);
                    paramList.AddWithValue("@Categories", model.Categories);
                    paramList.AddWithValue("@Phone", model.Phone);
                    paramList.AddWithValue("@Hours", model.Hours);
                    paramList.AddWithValue("@Address1", model.Address1);
                    paramList.AddWithValue("@Address2", model.Address2);
                    paramList.AddWithValue("@City", model.City);
                    paramList.AddWithValue("@State", model.State);
                    paramList.AddWithValue("@Zip", model.Zip);
                    paramList.AddWithValue("@Range", model.Range);
                    paramList.AddWithValue("@Rating", model.Rating);
                    paramList.AddWithValue("@Delivery", model.Delivery);
                    paramList.AddWithValue("@Website", model.Website);
                },
                returnParameters: delegate (SqlParameterCollection paramList)
                {
                    id = (int)paramList["@Id"].Value;
                });
            return id;
        }

        public static FoodDomainModel MapFood(IDataReader reader, int index)
        {
            FoodDomainModel model = new FoodDomainModel();
            model.Id = reader.GetInt32(index++);
            model.Name = reader.GetString(index++);
            model.Categories = reader.GetString(index++);
            model.Phone = reader.GetString(index++);
            model.Hours = reader.GetString(index++);
            model.Address1 = reader.GetString(index++);
            model.Address2 = reader.GetString(index++);
            model.City = reader.GetString(index++);
            model.State = reader.GetString(index++);
            model.Zip = reader.GetString(index++);
            model.Range = reader.GetString(index++);
            model.Rating = reader.GetString(index++);
            model.Delivery = reader.GetString(index++);
            model.Website = reader.GetString(index++);

            return model;
        }

        public FoodDomainModel SelectById(int id)
        {
            FoodDomainModel model = new FoodDomainModel();
            _dataProvider.ExecuteCmd(
                "Food_SelectById",
                inputParamMapper: delegate (SqlParameterCollection paramList)
                {
                    paramList.AddWithValue("@Id", id);
                },
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    int index = 0;
                    model = MapFood(reader, index);
                });
            return model;
        }

        public FoodDomainModel SelectByName(string name)
        {
            FoodDomainModel model = new FoodDomainModel();
            _dataProvider.ExecuteCmd(
                "Food_SelectByName",
                inputParamMapper: delegate (SqlParameterCollection paramList)
                {
                    paramList.AddWithValue("@Name", name);
                },
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    int index = 0;
                    model = MapFood(reader, index);
                });
            return model;
        }

        public List<FoodDomainModel> SelectAll()
        {
            List<FoodDomainModel> results = new List<FoodDomainModel>();
            _dataProvider.ExecuteCmd(
                "Food_SelectAll",
                inputParamMapper: null,
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    FoodDomainModel model = new FoodDomainModel();
                    int index = 0;
                    model = MapFood(reader, index);
                    index++;
                    results.Add(model);
                });
            return results;
        }

        public int Update(FoodDomainModel model)
        {
            var Id = 0;
            _dataProvider.ExecuteNonQuery(
                "Food_Update",
                inputParamMapper: delegate (SqlParameterCollection paramList)
                {
                    paramList.AddWithValue("@Id", model.Id);
                    paramList.AddWithValue("@Name", model.Name);
                    paramList.AddWithValue("@Categories", model.Categories);
                    paramList.AddWithValue("@Phone", model.Phone);
                    paramList.AddWithValue("@Hours", model.Hours);
                    paramList.AddWithValue("@Address1", model.Address1);
                    paramList.AddWithValue("@Address2", model.Address2);
                    paramList.AddWithValue("@City", model.City);
                    paramList.AddWithValue("@State", model.State);
                    paramList.AddWithValue("@Zip", model.Zip);
                    paramList.AddWithValue("@Range", model.Range);
                    paramList.AddWithValue("@Rating", model.Rating);
                    paramList.AddWithValue("@Delivery", model.Delivery);
                    paramList.AddWithValue("@Website", model.Website);
                },
                returnParameters: delegate (SqlParameterCollection paramList)
                {
                    Id = (int)paramList["@Id"].Value;
                });
            return Id;
        }

        public void Delete(int id)
        {
            _dataProvider.ExecuteNonQuery(
                "Food_Delete",
                inputParamMapper: delegate (SqlParameterCollection paramList)
                {
                    paramList.AddWithValue("@Id", id);
                });
        }
    }
}