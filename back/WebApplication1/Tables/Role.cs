using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Role
{
    public char Roleid { get; set; }

    public string Rolename { get; set; } = null!;

    public virtual ICollection<Admin> Admins { get; } = new List<Admin>();
}
