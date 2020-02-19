using Domain;
using System;
using System.Collections.Generic;
using System.Text;

namespace Infrastructure.Interfaces
{
    public interface IJwtGenerator
    {
        string Create(AppUser user);
    }
}
