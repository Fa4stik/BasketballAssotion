using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Actiontype
{
    public int Actiontypeid { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Matchuplog> Matchuplogs { get; } = new List<Matchuplog>();
}
