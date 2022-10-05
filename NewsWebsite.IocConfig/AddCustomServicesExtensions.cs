using Microsoft.Extensions.DependencyInjection;
using NewsWebsite.Data.Contracts;
using NewsWebsite.Data.UnitOfWork;

namespace NewsWebsite.IocConfig
{
    public static class AddCustomServicesExtensions
    {
        public static IServiceCollection AddCustomServices(this IServiceCollection services)
        {
            services.AddScoped<IUnitOfWork, UnitOfWork>();
            return services;
        }
    }
}
