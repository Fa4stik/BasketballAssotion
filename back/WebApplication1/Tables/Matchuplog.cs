using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Matchuplog
{
    public int Id { get; set; }

    public int Matchupid { get; set; }

    public int Quarter { get; set; }

    public string Occurtime { get; set; } = null!;

    public int Teamid { get; set; }

    public int Playerid { get; set; }

    public int Actiontypeid { get; set; }

    public string? Remark { get; set; }

    public virtual Actiontype Actiontype { get; set; } = null!;

    public virtual Matchup Matchup { get; set; } = null!;

    public virtual Player Player { get; set; } = null!;

    public virtual Team Team { get; set; } = null!;
}
