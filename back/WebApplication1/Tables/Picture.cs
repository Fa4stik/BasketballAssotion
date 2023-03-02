using System;
using System.Collections.Generic;

namespace WebApplication1;

public partial class Picture
{
    public int Id { get; set; }

    public byte[] Img { get; set; } = null!;

    public string? Description { get; set; }

    public int Numberoflike { get; set; }

    public DateTime Createtime { get; set; }
}
