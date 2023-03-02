using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Admin
{
    public string Jobnumber { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Gender { get; set; } = null!;

    public DateOnly Dateofbirth { get; set; }

    public string? Phone { get; set; }

    public string? Email { get; set; }

    public char Roleid { get; set; }

    public virtual Role Role { get; set; } = null!;
}
