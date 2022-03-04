import { Camera } from "three";
import { Frustum } from "three";

import {initBackground} from "./main"

export class walkRock {
  constructor(mesh) {
    // this.stopMove();
    this.startMove(mesh);
      this.changeScene(camera);
  }

  startMove(mesh) {
    var rock = mesh;
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
          document.removeEventListener("keydown", onDocumentKeyDown, false);
        }
      };
  }
 
  changeScene(camera) {
    var _frustum = new THREE.Frustum();
    var projMatrix = new THREE.Matrix4();
    projMatrix.multiply(camera.projMatrix, camera.matrixWorldInverse);
    _frustum.setFromProjectionMatrix(projMatrix);
    if (!_frustum.contains(mesh)) {
        new initBackground('src/textures/nature_background.jpg');

    }
  }

  stopMove() {
    document.removeEventListener("keydown", onDocumentKeyDown, false);
  }
}