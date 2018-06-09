using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assets.Scripts.NGameObject
{
	public class Construct
	{
        private List<object> _objList;

        public Construct()
        {
            this._objList.Add(NEntity.Static.Instane);
        }
	}
}
