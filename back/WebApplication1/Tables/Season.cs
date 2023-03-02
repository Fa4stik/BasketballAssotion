using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Season
{
    public int Seasonid { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Matchup> Matchups { get; } = new List<Matchup>();

    public virtual ICollection<Playerinteam> Playerinteams { get; } = new List<Playerinteam>();

    public virtual ICollection<Postseason> Postseasons { get; } = new List<Postseason>();
}
