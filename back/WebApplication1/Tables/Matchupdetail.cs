using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Matchupdetail
{
    public int Id { get; set; }

    public int Matchupid { get; set; }

    public int Quarter { get; set; }

    public int TeamAwayScore { get; set; }

    public int TeamHomeScore { get; set; }

    public virtual Matchup Matchup { get; set; } = null!;
}
