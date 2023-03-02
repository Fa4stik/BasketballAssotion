using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Team
{
    public int Teamid { get; set; }

    public string Teamname { get; set; } = null!;

    public int Divisionid { get; set; }

    public string Coach { get; set; } = null!;

    public string Abbr { get; set; } = null!;

    public string? Stadium { get; set; }

    public byte[]? Logo { get; set; }

    public virtual Division Division { get; set; } = null!;

    public virtual ICollection<Matchup> MatchupTeamAwayNavigations { get; } = new List<Matchup>();

    public virtual ICollection<Matchup> MatchupTeamHomeNavigations { get; } = new List<Matchup>();

    public virtual ICollection<Matchuplog> Matchuplogs { get; } = new List<Matchuplog>();

    public virtual ICollection<Playerinteam> Playerinteams { get; } = new List<Playerinteam>();

    public virtual ICollection<Playerstatistic> Playerstatistics { get; } = new List<Playerstatistic>();

    public virtual ICollection<Postseason> Postseasons { get; } = new List<Postseason>();
}
