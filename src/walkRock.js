export class CharacterControllerDemo {
  constructor(params) {

    var rock = params;
    var xSpeed = 5;
    var ySpeed = 5;
    var rotateSpeed = 0.5;

    document.addEventListener("keydown", onDocumentKeyDown, false);
    function onDocumentKeyDown(event) {
        var keyCode = event.which;
        if (keyCode == 87) {
          rock.position.y += ySpeed;
          rock.rotation.x -= rotateSpeed;
        } else if (keyCode == 83) {
          rock.position.y -= ySpeed;
          rock.rotation.x += rotateSpeed;
        } else if (keyCode == 65) {
          rock.position.x -= xSpeed;
          rock.rotation.y -= rotateSpeed;
        } else if (keyCode == 68) {
          rock.position.x += xSpeed;
          rock.rotation.y += rotateSpeed;
        } else if (keyCode == 32) {
          rock.position.set(0, 0, 0);
        }
      };
  }
}