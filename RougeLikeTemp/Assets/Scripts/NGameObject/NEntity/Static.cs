using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assets.Scripts.NGameObject.NEntity
{
	public class Static
	{
        private static Static instance;
        public static Static Instane { get { return Static.instance; } }

        public Static()
        {
        }
	}
}
