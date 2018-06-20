export class Application {
}
export class Container {
  args = '';
  command = '';
  // 'envFrom': Array<V1EnvFromSource>;
  image = '';
  // 'imagePullPolicy': string;
  // 'lifecycle': V1Lifecycle;
  // 'livenessProbe': V1Probe;
  name = '';
  // ports : Array<V1ContainerPort>;
  // 'readinessProbe': V1Probe;
  // 'resources': V1ResourceRequirements;
  // 'securityContext': V1SecurityContext;
  // 'stdin': boolean;
  // 'stdinOnce': boolean;
  // 'terminationMessagePath': string;
  // 'terminationMessagePolicy': string;
  // 'tty': boolean;
  // 'volumeDevices': Array<V1VolumeDevice>;
  // 'volumeMounts': Array<V1VolumeMount>;
  // 'workingDir': string;
}


export class Env {
  name = 'app';
  value = '';
}

export class Service {
  ports = '';
  type = '';
}

export class Port {
  name = '';
  port = 80;
  protocol = 'tcp';
  targetPort = 80;
}
export class Rule {
  host = '';
  // http: {paths: Path[]};
}
export class Path {
  path = '';
  servicePort = 80;
  serviceName = '';
}
