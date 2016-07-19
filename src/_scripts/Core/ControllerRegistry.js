const CONTROLLERS = {};

export function registerController(ControllerClass) {
  return CONTROLLERS[ControllerClass.name] = ControllerClass;
}

export function getController(controllerName) {
  return ControllerClass[controllerName];
}
