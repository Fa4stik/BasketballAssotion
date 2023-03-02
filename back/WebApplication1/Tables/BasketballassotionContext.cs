using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1;

public partial class BasketballassotionContext : DbContext
{
    public BasketballassotionContext()
    {
    }

    public BasketballassotionContext(DbContextOptions<BasketballassotionContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Actiontype> Actiontypes { get; set; }

    public virtual DbSet<Admin> Admins { get; set; }

    public virtual DbSet<Conference> Conferences { get; set; }

    public virtual DbSet<Country> Countries { get; set; }

    public virtual DbSet<Division> Divisions { get; set; }

    public virtual DbSet<Matchup> Matchups { get; set; }

    public virtual DbSet<Matchupdetail> Matchupdetails { get; set; }

    public virtual DbSet<Matchuplog> Matchuplogs { get; set; }

    public virtual DbSet<Matchuptype> Matchuptypes { get; set; }

    public virtual DbSet<Picture> Pictures { get; set; }

    public virtual DbSet<Player> Players { get; set; }

    public virtual DbSet<Playerinteam> Playerinteams { get; set; }

    public virtual DbSet<Playerstatistic> Playerstatistics { get; set; }

    public virtual DbSet<Position> Positions { get; set; }

    public virtual DbSet<Postseason> Postseasons { get; set; }

    public virtual DbSet<Role> Roles { get; set; }

    public virtual DbSet<Season> Seasons { get; set; }

    public virtual DbSet<Team> Teams { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=176.124.192.232; Port = 5432; Database=basketballassotion; Username=HAILOS;Password=1X87fRyfS8b1");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.UseCollation("ru_RU.UTF-8");

        modelBuilder.Entity<Actiontype>(entity =>
        {
            entity.HasKey(e => e.Actiontypeid).HasName("actiontype_pkey");

            entity.ToTable("actiontype");

            entity.Property(e => e.Actiontypeid)
                .ValueGeneratedNever()
                .HasColumnName("actiontypeid");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Admin>(entity =>
        {
            entity.HasKey(e => e.Jobnumber).HasName("admin_pkey");

            entity.ToTable("admin");

            entity.Property(e => e.Jobnumber)
                .HasMaxLength(6)
                .HasColumnName("jobnumber");
            entity.Property(e => e.Dateofbirth).HasColumnName("dateofbirth");
            entity.Property(e => e.Email)
                .HasMaxLength(50)
                .HasColumnName("email");
            entity.Property(e => e.Gender)
                .HasMaxLength(10)
                .HasColumnName("gender");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(100)
                .HasColumnName("password");
            entity.Property(e => e.Phone)
                .HasMaxLength(20)
                .HasColumnName("phone");
            entity.Property(e => e.Roleid)
                .HasMaxLength(1)
                .HasColumnName("roleid");

            entity.HasOne(d => d.Role).WithMany(p => p.Admins)
                .HasForeignKey(d => d.Roleid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("admin_roleid_fkey");
        });

        modelBuilder.Entity<Conference>(entity =>
        {
            entity.HasKey(e => e.Conferenceid).HasName("conference_pkey");

            entity.ToTable("conference");

            entity.Property(e => e.Conferenceid)
                .ValueGeneratedNever()
                .HasColumnName("conferenceid");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Country>(entity =>
        {
            entity.HasKey(e => e.Countrycode).HasName("country_pkey");

            entity.ToTable("country");

            entity.Property(e => e.Countrycode)
                .HasMaxLength(3)
                .IsFixedLength()
                .HasColumnName("countrycode");
            entity.Property(e => e.Countryname)
                .HasMaxLength(50)
                .HasColumnName("countryname");
        });

        modelBuilder.Entity<Division>(entity =>
        {
            entity.HasKey(e => e.Divisionid).HasName("division_pkey");

            entity.ToTable("division");

            entity.Property(e => e.Divisionid)
                .ValueGeneratedNever()
                .HasColumnName("divisionid");
            entity.Property(e => e.Conferenceid).HasColumnName("conferenceid");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");

            entity.HasOne(d => d.Conference).WithMany(p => p.Divisions)
                .HasForeignKey(d => d.Conferenceid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("division_conferenceid_fkey");
        });

        modelBuilder.Entity<Matchup>(entity =>
        {
            entity.HasKey(e => e.Matchupid).HasName("matchup_pkey");

            entity.ToTable("matchup");

            entity.Property(e => e.Matchupid).HasColumnName("matchupid");
            entity.Property(e => e.Currentquarter)
                .HasMaxLength(50)
                .HasColumnName("currentquarter");
            entity.Property(e => e.Location)
                .HasMaxLength(200)
                .HasColumnName("location");
            entity.Property(e => e.Matchuptypeid).HasColumnName("matchuptypeid");
            entity.Property(e => e.Seasonid).HasColumnName("seasonid");
            entity.Property(e => e.Starttime)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("starttime");
            entity.Property(e => e.Status).HasColumnName("status");
            entity.Property(e => e.TeamAway).HasColumnName("team_away");
            entity.Property(e => e.TeamAwayScore).HasColumnName("team_away_score");
            entity.Property(e => e.TeamHome).HasColumnName("team_home");
            entity.Property(e => e.TeamHomeScore).HasColumnName("team_home_score");

            entity.HasOne(d => d.Matchuptype).WithMany(p => p.Matchups)
                .HasForeignKey(d => d.Matchuptypeid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("matchup_matchuptypeid_fkey");

            entity.HasOne(d => d.Season).WithMany(p => p.Matchups)
                .HasForeignKey(d => d.Seasonid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("matchup_seasonid_fkey");

            entity.HasOne(d => d.TeamAwayNavigation).WithMany(p => p.MatchupTeamAwayNavigations)
                .HasForeignKey(d => d.TeamAway)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("matchup_team_away_fkey");

            entity.HasOne(d => d.TeamHomeNavigation).WithMany(p => p.MatchupTeamHomeNavigations)
                .HasForeignKey(d => d.TeamHome)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("matchup_team_home_fkey");
        });

        modelBuilder.Entity<Matchupdetail>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("matchupdetail_pkey");

            entity.ToTable("matchupdetail");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Matchupid).HasColumnName("matchupid");
            entity.Property(e => e.Quarter).HasColumnName("quarter");
            entity.Property(e => e.TeamAwayScore).HasColumnName("team_away_score");
            entity.Property(e => e.TeamHomeScore).HasColumnName("team_home_score");

            entity.HasOne(d => d.Matchup).WithMany(p => p.Matchupdetails)
                .HasForeignKey(d => d.Matchupid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("matchupdetail_matchupid_fkey");
        });

        modelBuilder.Entity<Matchuplog>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("matchuplog_pkey");

            entity.ToTable("matchuplog");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Actiontypeid).HasColumnName("actiontypeid");
            entity.Property(e => e.Matchupid).HasColumnName("matchupid");
            entity.Property(e => e.Occurtime)
                .HasMaxLength(10)
                .HasColumnName("occurtime");
            entity.Property(e => e.Playerid).HasColumnName("playerid");
            entity.Property(e => e.Quarter).HasColumnName("quarter");
            entity.Property(e => e.Remark)
                .HasMaxLength(300)
                .HasColumnName("remark");
            entity.Property(e => e.Teamid).HasColumnName("teamid");

            entity.HasOne(d => d.Actiontype).WithMany(p => p.Matchuplogs)
                .HasForeignKey(d => d.Actiontypeid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("matchuplog_actiontypeid_fkey");

            entity.HasOne(d => d.Matchup).WithMany(p => p.Matchuplogs)
                .HasForeignKey(d => d.Matchupid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("matchuplog_matchupid_fkey");

            entity.HasOne(d => d.Player).WithMany(p => p.Matchuplogs)
                .HasForeignKey(d => d.Playerid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("matchuplog_playerid_fkey");

            entity.HasOne(d => d.Team).WithMany(p => p.Matchuplogs)
                .HasForeignKey(d => d.Teamid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("matchuplog_teamid_fkey");
        });

        modelBuilder.Entity<Matchuptype>(entity =>
        {
            entity.HasKey(e => e.Matchuptypeid).HasName("matchuptype_pkey");

            entity.ToTable("matchuptype");

            entity.Property(e => e.Matchuptypeid)
                .ValueGeneratedNever()
                .HasColumnName("matchuptypeid");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Picture>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("pictures_pkey");

            entity.ToTable("pictures");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Createtime)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("createtime");
            entity.Property(e => e.Description)
                .HasMaxLength(50)
                .HasColumnName("description");
            entity.Property(e => e.Img).HasColumnName("img");
            entity.Property(e => e.Numberoflike).HasColumnName("numberoflike");
        });

        modelBuilder.Entity<Player>(entity =>
        {
            entity.HasKey(e => e.Playerid).HasName("player_pkey");

            entity.ToTable("player");

            entity.Property(e => e.Playerid).HasColumnName("playerid");
            entity.Property(e => e.College)
                .HasMaxLength(50)
                .HasColumnName("college");
            entity.Property(e => e.Countrycode)
                .HasMaxLength(3)
                .IsFixedLength()
                .HasColumnName("countrycode");
            entity.Property(e => e.Dateofbirth).HasColumnName("dateofbirth");
            entity.Property(e => e.Height)
                .HasPrecision(10, 2)
                .HasColumnName("height");
            entity.Property(e => e.Img).HasColumnName("img");
            entity.Property(e => e.Isretirment).HasColumnName("isretirment");
            entity.Property(e => e.Joinyear).HasColumnName("joinyear");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
            entity.Property(e => e.Positionid).HasColumnName("positionid");
            entity.Property(e => e.Retirmenttime).HasColumnName("retirmenttime");
            entity.Property(e => e.Weight)
                .HasPrecision(10, 2)
                .HasColumnName("weight");

            entity.HasOne(d => d.CountrycodeNavigation).WithMany(p => p.Players)
                .HasForeignKey(d => d.Countrycode)
                .HasConstraintName("player_countrycode_fkey");

            entity.HasOne(d => d.Position).WithMany(p => p.Players)
                .HasForeignKey(d => d.Positionid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("player_positionid_fkey");
        });

        modelBuilder.Entity<Playerinteam>(entity =>
        {
            entity.HasKey(e => e.Playerinteamid).HasName("playerinteam_pkey");

            entity.ToTable("playerinteam");

            entity.Property(e => e.Playerinteamid).HasColumnName("playerinteamid");
            entity.Property(e => e.Playerid).HasColumnName("playerid");
            entity.Property(e => e.Salary)
                .HasPrecision(10, 2)
                .HasColumnName("salary");
            entity.Property(e => e.Seasonid).HasColumnName("seasonid");
            entity.Property(e => e.Shirtnumber)
                .HasMaxLength(10)
                .HasColumnName("shirtnumber");
            entity.Property(e => e.Starterindex).HasColumnName("starterindex");
            entity.Property(e => e.Teamid).HasColumnName("teamid");

            entity.HasOne(d => d.Player).WithMany(p => p.Playerinteams)
                .HasForeignKey(d => d.Playerid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("playerinteam_playerid_fkey");

            entity.HasOne(d => d.Season).WithMany(p => p.Playerinteams)
                .HasForeignKey(d => d.Seasonid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("playerinteam_seasonid_fkey");

            entity.HasOne(d => d.Team).WithMany(p => p.Playerinteams)
                .HasForeignKey(d => d.Teamid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("playerinteam_teamid_fkey");
        });

        modelBuilder.Entity<Playerstatistic>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("playerstatistics_pkey");

            entity.ToTable("playerstatistics");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Assist).HasColumnName("assist");
            entity.Property(e => e.Block).HasColumnName("block");
            entity.Property(e => e.Dffr).HasColumnName("dffr");
            entity.Property(e => e.Fieldgoalmade).HasColumnName("fieldgoalmade");
            entity.Property(e => e.Fieldgoalmissed).HasColumnName("fieldgoalmissed");
            entity.Property(e => e.Foul).HasColumnName("foul");
            entity.Property(e => e.Freethrowmade).HasColumnName("freethrowmade");
            entity.Property(e => e.Freethrowmissed).HasColumnName("freethrowmissed");
            entity.Property(e => e.Isstarting).HasColumnName("isstarting");
            entity.Property(e => e.Matchupid).HasColumnName("matchupid");
            entity.Property(e => e.Min)
                .HasPrecision(10, 2)
                .HasColumnName("min");
            entity.Property(e => e.Offr).HasColumnName("offr");
            entity.Property(e => e.Playerid).HasColumnName("playerid");
            entity.Property(e => e.Point).HasColumnName("point");
            entity.Property(e => e.Rebound).HasColumnName("rebound");
            entity.Property(e => e.Steal).HasColumnName("steal");
            entity.Property(e => e.Teamid).HasColumnName("teamid");
            entity.Property(e => e.Threepointfieldgoalmade).HasColumnName("threepointfieldgoalmade");
            entity.Property(e => e.Threepointfieldgoalmissed).HasColumnName("threepointfieldgoalmissed");
            entity.Property(e => e.Turnover).HasColumnName("turnover");

            entity.HasOne(d => d.Matchup).WithMany(p => p.Playerstatistics)
                .HasForeignKey(d => d.Matchupid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("playerstatistics_matchupid_fkey");

            entity.HasOne(d => d.Player).WithMany(p => p.Playerstatistics)
                .HasForeignKey(d => d.Playerid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("playerstatistics_playerid_fkey");

            entity.HasOne(d => d.Team).WithMany(p => p.Playerstatistics)
                .HasForeignKey(d => d.Teamid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("playerstatistics_teamid_fkey");
        });

        modelBuilder.Entity<Position>(entity =>
        {
            entity.HasKey(e => e.Positionid).HasName("position_pkey");

            entity.ToTable("position");

            entity.Property(e => e.Positionid)
                .ValueGeneratedNever()
                .HasColumnName("positionid");
            entity.Property(e => e.Abbr)
                .HasMaxLength(3)
                .IsFixedLength()
                .HasColumnName("abbr");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Postseason>(entity =>
        {
            entity.HasKey(e => new { e.Teamid, e.Seasonid }).HasName("postseason_pkey");

            entity.ToTable("postseason");

            entity.Property(e => e.Teamid).HasColumnName("teamid");
            entity.Property(e => e.Seasonid).HasColumnName("seasonid");
            entity.Property(e => e.Rank).HasColumnName("rank");

            entity.HasOne(d => d.Season).WithMany(p => p.Postseasons)
                .HasForeignKey(d => d.Seasonid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("postseason_seasonid_fkey");

            entity.HasOne(d => d.Team).WithMany(p => p.Postseasons)
                .HasForeignKey(d => d.Teamid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("postseason_teamid_fkey");
        });

        modelBuilder.Entity<Role>(entity =>
        {
            entity.HasKey(e => e.Roleid).HasName("role_pkey");

            entity.ToTable("role");

            entity.Property(e => e.Roleid)
                .HasMaxLength(1)
                .ValueGeneratedNever()
                .HasColumnName("roleid");
            entity.Property(e => e.Rolename)
                .HasMaxLength(50)
                .HasColumnName("rolename");
        });

        modelBuilder.Entity<Season>(entity =>
        {
            entity.HasKey(e => e.Seasonid).HasName("season_pkey");

            entity.ToTable("season");

            entity.Property(e => e.Seasonid)
                .ValueGeneratedNever()
                .HasColumnName("seasonid");
            entity.Property(e => e.Name)
                .HasMaxLength(50)
                .HasColumnName("name");
        });

        modelBuilder.Entity<Team>(entity =>
        {
            entity.HasKey(e => e.Teamid).HasName("team_pkey");

            entity.ToTable("team");

            entity.Property(e => e.Teamid)
                .ValueGeneratedNever()
                .HasColumnName("teamid");
            entity.Property(e => e.Abbr)
                .HasMaxLength(3)
                .IsFixedLength()
                .HasColumnName("abbr");
            entity.Property(e => e.Coach)
                .HasMaxLength(50)
                .HasColumnName("coach");
            entity.Property(e => e.Divisionid).HasColumnName("divisionid");
            entity.Property(e => e.Logo).HasColumnName("logo");
            entity.Property(e => e.Stadium)
                .HasMaxLength(100)
                .HasColumnName("stadium");
            entity.Property(e => e.Teamname)
                .HasMaxLength(50)
                .HasColumnName("teamname");

            entity.HasOne(d => d.Division).WithMany(p => p.Teams)
                .HasForeignKey(d => d.Divisionid)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("team_divisionid_fkey");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
