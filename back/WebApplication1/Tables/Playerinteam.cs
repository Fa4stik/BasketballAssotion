using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Playerinteam
{
    public int Playerinteamid { get; set; }

    public int Playerid { get; set; }

    public int Teamid { get; set; }

    public int Seasonid { get; set; }

    public string Shirtnumber { get; set; } = null!;

    public decimal Salary { get; set; }

    public int Starterindex { get; set; }

    public virtual Player Player { get; set; } = null!;

    public virtual Season Season { get; set; } = null!;

    public virtual Team Team { get; set; } = null!;
}
