using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Matchuptype
{
    public int Matchuptypeid { get; set; }

    public string? Name { get; set; }

    public virtual ICollection<Matchup> Matchups { get; } = new List<Matchup>();
}
