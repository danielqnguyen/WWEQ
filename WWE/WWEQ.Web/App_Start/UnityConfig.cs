using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.EntityFramework;
using System.Configuration;
using System.Web.Http;
using System.Web.Mvc;
using Unity;
using Unity.Injection;
using Unity.WebApi;
using WWEQ.Web.Controllers;
using WWEQ.Web.Interface;
using WWEQ.Web.Models;
using WWEQ.Web.Providers;
using WWEQ.Web.Services;

namespace WWEQ.Web
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = new UnityContainer();

            // register all your components with the container here
            // it is NOT necessary to register your controllers

            // e.g. container.RegisterType<ITestService, TestService>();

            container.RegisterType<IDataProvider, SqlDataProvider>(
                new InjectionConstructor(ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString));

            container.RegisterType<IWebScraping, WebScrapingService>();

            container.RegisterType<IUserStore<ApplicationUser>, UserStore<ApplicationUser>>();
            container.RegisterType<AccountController>(new InjectionConstructor());

            GlobalConfiguration.Configuration.DependencyResolver = new UnityDependencyResolver(container);

            DependencyResolver.SetResolver(new Unity.Mvc5.UnityDependencyResolver(container));
        }
    }
}