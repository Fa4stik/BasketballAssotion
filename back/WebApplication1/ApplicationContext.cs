using Microsoft.EntityFrameworkCore;


namespace WebApplication1
{
  public class ApplicationContext : DbContext
  {
    //Scaffold-DbContext "Host=176.124.192.232; Port = 5432; Database=basketballassotion; Username=HAILOS;Password=1X87fRyfS8b1"
    public ApplicationContext() { }

    public ApplicationContext(DbContextOptions<ApplicationContext> options) : base(options)
    {

    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      var connString = "Host=176.124.192.232; Port = 5432; Database=basketballassotion; Username=HAILOS;Password=1X87fRyfS8b1";
      if (optionsBuilder.IsConfigured)
      {
        optionsBuilder.UseNpgsql(connString);
      }
    }
  }
}
