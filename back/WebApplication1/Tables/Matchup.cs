using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Matchup
{
    public int Matchupid { get; set; }

    public int Seasonid { get; set; }

    public int Matchuptypeid { get; set; }

    public int TeamAway { get; set; }

    public int TeamHome { get; set; }

    public DateTime Starttime { get; set; }

    public int TeamAwayScore { get; set; }

    public int TeamHomeScore { get; set; }

    public string? Location { get; set; }

    public int Status { get; set; }

    public string? Currentquarter { get; set; }

    public virtual ICollection<Matchupdetail> Matchupdetails { get; } = new List<Matchupdetail>();

    public virtual ICollection<Matchuplog> Matchuplogs { get; } = new List<Matchuplog>();

    public virtual Matchuptype Matchuptype { get; set; } = null!;

    public virtual ICollection<Playerstatistic> Playerstatistics { get; } = new List<Playerstatistic>();

    public virtual Season Season { get; set; } = null!;

    public virtual Team TeamAwayNavigation { get; set; } = null!;

    public virtual Team TeamHomeNavigation { get; set; } = null!;
}
