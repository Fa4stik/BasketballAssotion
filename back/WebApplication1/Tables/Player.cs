using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Player
{
    public int Playerid { get; set; }

    public string Name { get; set; } = null!;

    public int Positionid { get; set; }

    public DateOnly Joinyear { get; set; }

    public decimal? Height { get; set; }

    public decimal? Weight { get; set; }

    public DateOnly Dateofbirth { get; set; }

    public string? College { get; set; }

    public string? Countrycode { get; set; }

    public byte[]? Img { get; set; }

    public bool Isretirment { get; set; }

    public DateOnly? Retirmenttime { get; set; }

    public virtual Country? CountrycodeNavigation { get; set; }

    public virtual ICollection<Matchuplog> Matchuplogs { get; } = new List<Matchuplog>();

    public virtual ICollection<Playerinteam> Playerinteams { get; } = new List<Playerinteam>();

    public virtual ICollection<Playerstatistic> Playerstatistics { get; } = new List<Playerstatistic>();

    public virtual Position Position { get; set; } = null!;
}
