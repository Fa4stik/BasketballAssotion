using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Position
{
    public int Positionid { get; set; }

    public string Name { get; set; } = null!;

    public string Abbr { get; set; } = null!;

    public virtual ICollection<Player> Players { get; } = new List<Player>();
}
