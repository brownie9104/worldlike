using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assets.Scripts.Logic.NFeature.NCharacter
{
    public class Character
    {
        public enum Direction
        {
            UP = 1,
            DOWN,
            LEFT,
            RIGHT,
            UPRIGHT,
            UPLEFT,
            DOWNRIGHT,
            DOWNLEFT,
        }

        Direction Dir { get; set; }

        double X { get; set; }
        double Y { get; set; }

        public Character()
        {
            this.Dir = Direction.DOWN;
            this.X = 0;
            this.Y = 0;
        }
    }
}
