using NewsWebsite.Data;
using Microsoft.EntityFrameworkCore;
using NewsWebsite.IocConfig;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<NewsDBContext>(
      options => options.UseSqlServer("name=ConnectionStrings:SqlServer"));
builder.Services.AddMvc();
builder.Services.AddCustomServices();

var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.UseStaticFiles();
app.UseBrowserLink();
app.MapControllerRoute(
    name: "MyArea",
    pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}");

app.Run();
