using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using Assets.Scripts.Logic.NFeature.NCharacter;

namespace Assets.Scripts
{
    public class CharacterMove : MonoBehaviour
    {
        public float MoveSpeed = 1;
        public Character.Direction direction;
        // Update is called once per frame
        void Update()
        {
            float x = 0;
            float y = 0;

            if (Input.GetKey(KeyCode.RightArrow))
                x = MoveSpeed;
            if (Input.GetKey(KeyCode.LeftArrow))
                x = -MoveSpeed;
            if (Input.GetKey(KeyCode.UpArrow))
                y = MoveSpeed;
            if (Input.GetKey(KeyCode.DownArrow))
                y = -MoveSpeed;

            if (x != 0 && y != 0)
            {
                x *= 0.7f;
                y *= 0.7f;
            }

            if (x != 0 || y != 0)
                AddPosition(gameObject, x, y);
        }

        public void AddPosition(GameObject character, float x, float y)
        {
            character.transform.localPosition = new Vector2(character.transform.localPosition.x + x, character.transform.localPosition.y + y);
        }
    }
}
