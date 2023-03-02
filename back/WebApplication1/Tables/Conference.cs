using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Conference
{
    public int Conferenceid { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Division> Divisions { get; } = new List<Division>();
}
