using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assets.Scripts.NGameObject.NEntity
{
	public class Entity
	{
        private Logic.NFeature.NCharacter.Character character;

        public Entity()
        {
            this.character = new Logic.NFeature.NCharacter.Character();
        }
	}
}
