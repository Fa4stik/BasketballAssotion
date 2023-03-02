using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Playerstatistic
{
    public int Id { get; set; }

    public int Matchupid { get; set; }

    public int Teamid { get; set; }

    public int Playerid { get; set; }

    public int Isstarting { get; set; }

    public decimal Min { get; set; }

    public int Point { get; set; }

    public int Assist { get; set; }

    public int Fieldgoalmade { get; set; }

    public int Fieldgoalmissed { get; set; }

    public int Threepointfieldgoalmade { get; set; }

    public int Threepointfieldgoalmissed { get; set; }

    public int Freethrowmade { get; set; }

    public int Freethrowmissed { get; set; }

    public int Rebound { get; set; }

    public int Offr { get; set; }

    public int Dffr { get; set; }

    public int Steal { get; set; }

    public int Block { get; set; }

    public int Turnover { get; set; }

    public int Foul { get; set; }

    public virtual Matchup Matchup { get; set; } = null!;

    public virtual Player Player { get; set; } = null!;

    public virtual Team Team { get; set; } = null!;
}
