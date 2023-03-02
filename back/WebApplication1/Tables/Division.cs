using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Division
{
    public int Divisionid { get; set; }

    public string Name { get; set; } = null!;

    public int Conferenceid { get; set; }

    public virtual Conference Conference { get; set; } = null!;

    public virtual ICollection<Team> Teams { get; } = new List<Team>();
}
