using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Country
{
    public string Countrycode { get; set; } = null!;

    public string Countryname { get; set; } = null!;

    public virtual ICollection<Player> Players { get; } = new List<Player>();
}
