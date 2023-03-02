using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Postseason
{
    public int Teamid { get; set; }

    public int Seasonid { get; set; }

    public int Rank { get; set; }

    public virtual Season Season { get; set; } = null!;

    public virtual Team Team { get; set; } = null!;
}
